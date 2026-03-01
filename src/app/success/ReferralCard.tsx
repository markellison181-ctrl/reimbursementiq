'use client';

import { useState, useEffect } from 'react';

export default function ReferralCard({ userEmail }: { userEmail: string }) {
  const [referralCode, setReferralCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (userEmail) setReferralCode(btoa(userEmail).substring(0, 8).toUpperCase());
  }, [userEmail]);

  const referralUrl = referralCode ? `https://reimbursementiq.com?ref=${referralCode}` : '';
  const copyLink = async () => { await navigator.clipboard.writeText(referralUrl); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  if (!referralCode) return null;

  return (
    <div className="bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/50 rounded-xl p-8 mb-12">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-navy">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">🎁 Earn Free Months</h2>
        <p className="text-gray-300">Refer 3 friends to ReimbursementIQ and get 1 month free.</p>
      </div>

      <div className="glass rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <label className="block text-sm text-gray-400 mb-1">Your referral link</label>
            <div className="text-white font-mono text-sm break-all">{referralUrl}</div>
          </div>
          <button onClick={copyLink} className="flex items-center gap-2 bg-teal text-navy px-4 py-2 rounded font-semibold hover:bg-teal-light transition-colors shrink-0">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 text-center">
        <div className="glass rounded-lg p-4"><div className="text-2xl font-bold text-teal mb-1">0</div><div className="text-sm text-gray-400">Successful Referrals</div></div>
        <div className="glass rounded-lg p-4"><div className="text-2xl font-bold text-teal mb-1">3</div><div className="text-sm text-gray-400">Referrals Needed</div></div>
        <div className="glass rounded-lg p-4"><div className="text-2xl font-bold text-teal mb-1">$29</div><div className="text-sm text-gray-400">Value Earned</div></div>
      </div>
    </div>
  );
}
