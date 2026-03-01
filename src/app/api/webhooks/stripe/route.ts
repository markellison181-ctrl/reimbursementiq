import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import sgMail from '@sendgrid/mail';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vsbwqlkbcgvmphuqfgqb.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const SITE_NAME = 'ReimbursementIQ';
const SITE_DOMAIN = 'reimbursementiq.io';

async function upsertSubscriber(data: {
  email: string;
  name?: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  tier?: string;
  status?: string;
}) {
  const { error } = await supabase
    .from('subscribers')
    .upsert(
      {
        email: data.email,
        name: data.name || null,
        site: SITE_DOMAIN,
        stripe_customer_id: data.stripe_customer_id || null,
        stripe_subscription_id: data.stripe_subscription_id || null,
        tier: data.tier || 'pro',
        status: data.status || 'active',
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'email,site' }
    );

  if (error) {
    console.error('Supabase upsert error:', error);
    throw error;
  }
}

async function updateSubscriberStatus(stripeCustomerId: string, status: string) {
  const { error } = await supabase
    .from('subscribers')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('stripe_customer_id', stripeCustomerId)
    .eq('site', SITE_DOMAIN);

  if (error) {
    console.error('Supabase update error:', error);
  }
}

async function sendConfirmationEmail(email: string, name?: string) {
  try {
    await sgMail.send({
      to: email,
      from: {
        email: 'noreply@signalstackmedia.com',
        name: SITE_NAME,
      },
      subject: `Welcome to ${SITE_NAME} Pro!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a1a;">Welcome to ${SITE_NAME} Pro!</h1>
          <p>Hi ${name || 'there'},</p>
          <p>Thank you for subscribing to <strong>${SITE_NAME} Pro</strong>. Your subscription is now active.</p>
          <p>You now have full access to:</p>
          <ul>
            <li>Premium intelligence reports</li>
            <li>Early access to breaking analysis</li>
            <li>Exclusive data and insights</li>
          </ul>
          <p>If you have any questions, just reply to this email.</p>
          <p>— The ${SITE_NAME} Team</p>
        </div>
      `,
    });
    console.log(`✅ Confirmation email sent to ${email}`);
  } catch (err) {
    console.error('SendGrid error:', err);
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const email = session.customer_email || session.customer_details?.email || '';
        const name = session.customer_details?.name || '';
        const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id || '';
        const subscriptionId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id || '';
        const tier = session.metadata?.tier || 'pro';

        console.log(`✅ Checkout completed: ${email} (${tier})`);

        await upsertSubscriber({
          email,
          name,
          stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId,
          tier,
          status: 'active',
        });

        await sendConfirmationEmail(email, name);
        break;
      }

      case 'customer.subscription.created': {
        const sub = event.data.object as Stripe.Subscription;
        const customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer?.id || '';
        console.log(`🎉 Subscription created: ${sub.id} for customer ${customerId}`);
        break;
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer?.id || '';
        const status = sub.status === 'active' ? 'active' : sub.status === 'past_due' ? 'past_due' : 'active';
        console.log(`📝 Subscription updated: ${sub.id} → ${sub.status}`);
        await updateSubscriberStatus(customerId, status);
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        const customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer?.id || '';
        console.log(`❌ Subscription cancelled: ${sub.id}`);
        await updateSubscriberStatus(customerId, 'cancelled');
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = typeof invoice.customer === 'string' ? invoice.customer : invoice.customer?.id || '';
        console.log(`💳 Payment failed: ${invoice.id}`);
        await updateSubscriberStatus(customerId, 'past_due');
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (err) {
    console.error('Error processing webhook:', err);
    return NextResponse.json({ error: 'Processing error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
