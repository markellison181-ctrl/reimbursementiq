import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled — ReimbursementIQ",
  description: "Your checkout was cancelled. Return anytime to subscribe to ReimbursementIQ Pro.",
};

export default function CancelPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Checkout Cancelled</h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">No worries! Your checkout was cancelled and no payment was processed.</p>
      </div>

      <div className="glass rounded-xl p-8 mb-8 text-left">
        <h2 className="text-xl font-bold mb-6 text-center">Not quite ready? Here&apos;s what you&apos;re missing:</h2>
        <div className="space-y-4">
          {[
            { title: 'Weekly CMS Policy Intelligence', desc: 'Get the latest CMS proposed rules, final rules, and policy changes that directly impact your reimbursement rates.' },
            { title: 'CPT/ICD Code Updates', desc: 'Stay ahead of coding changes with timely alerts on new, revised, and deleted codes affecting your specialties.' },
            { title: 'Denial Trend Analysis', desc: 'Track payer-specific denial patterns, appeal success rates, and emerging compliance issues across major insurers.' },
            { title: '14-Day Free Trial', desc: 'Try everything risk-free. No commitment required — cancel anytime during your trial period.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-2 h-2 bg-teal rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass rounded-xl p-6 mb-8">
        <p className="text-gray-300 italic mb-4">
          &ldquo;ReimbursementIQ has become essential for our revenue cycle team. The denial trend analysis alone saved us $200K in the first quarter by catching payer policy changes early.&rdquo;
        </p>
        <div className="text-sm text-gray-400">
          <strong className="text-white">Dr. Patricia Nguyen</strong> — Revenue Cycle Director, Metro Health System
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-teal mb-2">🎯 Limited Time: Extended Trial</h3>
        <p className="text-gray-300 mb-4">
          Still on the fence? Use code <strong className="text-white bg-navy-light px-2 py-1 rounded">EXTRA7</strong> for a 21-day free trial instead of 14 days.
        </p>
        <p className="text-xs text-gray-500">Offer expires in 24 hours. Valid for new subscriptions only.</p>
      </div>

      <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center mb-8">
        <Link href="/pricing" className="block sm:inline-block bg-teal text-navy px-8 py-3 rounded font-semibold hover:bg-teal-light transition-colors">Try 14-Day Free Trial</Link>
        <Link href="/#subscribe" className="block sm:inline-block border border-teal text-teal px-8 py-3 rounded font-semibold hover:bg-teal hover:text-navy transition-colors">Start with Free Plan</Link>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p className="mb-2">Questions about pricing or features?</p>
        <div className="space-x-4">
          <a href="mailto:support@reimbursementiq.com" className="text-teal hover:underline">Email Support</a>
          <span>•</span>
          <Link href="/" className="text-teal hover:underline">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
