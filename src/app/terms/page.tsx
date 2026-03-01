import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — ReimbursementIQ',
  description: 'ReimbursementIQ terms of service for newsletter and subscription products.',
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-light mb-10">Last updated: February 28, 2026</p>
        <div className="space-y-8 text-gray-light leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using ReimbursementIQ (&quot;the Service&quot;), operated by SignalStack Media LLC, you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>ReimbursementIQ provides healthcare reimbursement intelligence through free and paid newsletter subscriptions. Content includes analysis of CMS policy changes, CPT/ICD code updates, rate changes, payer policy shifts, and denial trends.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Subscriptions and Payments</h2>
            <p>Paid subscriptions (Pro and Enterprise) are billed monthly via Stripe. You may cancel at any time; cancellation takes effect at the end of the current billing period. No refunds are provided for partial months.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>All content, analysis, and data provided through ReimbursementIQ is proprietary to SignalStack Media LLC. You may not redistribute, resell, or republish our content without written permission. Reasonable quoting with attribution is permitted.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Disclaimer</h2>
            <p>ReimbursementIQ content is for informational purposes only and does not constitute legal, financial, or medical advice. While we strive for accuracy, we make no warranties about the completeness, reliability, or accuracy of our content. Always consult qualified professionals for specific reimbursement decisions.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>SignalStack Media LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use the Service. Our total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Modifications</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify subscribers of material changes via email. Continued use of the Service after changes constitutes acceptance of the modified Terms.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>SignalStack Media LLC<br />1209 Orange St, Wilmington, DE 19801<br />Email: <a href="mailto:legal@signalstackmedia.com" className="text-teal hover:underline">legal@signalstackmedia.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
