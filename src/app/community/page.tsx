import type { Metadata } from "next";
import ReferralLeaderboard from "./ReferralLeaderboard";

export const metadata: Metadata = {
  title: "Community — ReimbursementIQ",
  description: "Join the ReimbursementIQ community. See top referrers and earn free months.",
};

export default function CommunityPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-teal via-teal-light to-teal rounded-full flex items-center justify-center shadow-2xl shadow-teal/30">
            <svg className="w-12 h-12 text-navy" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-teal to-white bg-clip-text text-transparent">ReimbursementIQ Community</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed mb-8">
          Join healthcare revenue cycle professionals sharing reimbursement intelligence. Refer friends and earn free months.
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[{ v: '621', l: 'Active Subscribers' }, { v: '41', l: 'Referral Champions' }, { v: '143', l: 'Successful Referrals' }, { v: '$987', l: 'Credits Earned' }].map((s) => (
            <div key={s.l} className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-teal mb-2">{s.v}</div>
              <div className="text-gray-400 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <ReferralLeaderboard />
      <div className="mt-24 text-center">
        <div className="bg-gradient-to-br from-teal/20 via-teal/10 to-transparent border border-teal/30 rounded-2xl p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Referring?</h3>
          <p className="text-gray-300 mb-8">Subscribe to ReimbursementIQ Pro to get your unique referral link.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing" className="bg-teal text-navy px-8 py-4 rounded-xl font-bold hover:bg-teal-light transition-all hover:scale-105">Start Pro Trial →</a>
            <a href="/#subscribe" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-navy transition-all hover:scale-105">Try Free Plan</a>
          </div>
        </div>
      </div>
    </div>
  );
}
