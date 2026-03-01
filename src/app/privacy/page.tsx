import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — ReimbursementIQ',
  description: 'ReimbursementIQ privacy policy. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-light mb-10">Last updated: February 28, 2026</p>
        <div className="space-y-8 text-gray-light leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>ReimbursementIQ, a publication of SignalStack Media LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and subscribe to our newsletter.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p><strong className="text-white">Personal Information:</strong> When you subscribe to our newsletter or purchase a subscription, we collect your email address, name, and payment information (processed securely via Stripe).</p>
            <p className="mt-2"><strong className="text-white">Usage Data:</strong> We automatically collect information about your device, browser type, IP address, pages visited, and time spent on our site using analytics tools.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use your information to: deliver our newsletter and intelligence products; process subscription payments; improve our content and user experience; send administrative communications; and comply with legal obligations.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>We use the following third-party services: SendGrid (email delivery), Stripe (payment processing), and Vercel (website hosting). Each service has its own privacy policy governing the use of your information.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting us.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>You have the right to: access, correct, or delete your personal information; unsubscribe from our newsletter at any time; opt out of marketing communications; and request a copy of your data.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at: <a href="mailto:privacy@signalstackmedia.com" className="text-teal hover:underline">privacy@signalstackmedia.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
