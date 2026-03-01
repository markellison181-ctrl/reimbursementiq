'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReferralCard from "./ReferralCard";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showConfetti, setShowConfetti] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    setShowConfetti(true);
    if (sessionId) setUserEmail('user@example.com');
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [sessionId]);

  const shareText = "Just subscribed to @ReimbursementIQ — finally, real intel on healthcare reimbursement. 🏥";
  const shareUrl = "https://reimbursementiq.com";

  return (
    <>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti-animation">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: Math.random() > 0.5 ? '#0ea5e9' : '#0f172a',
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }} />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="relative mx-auto mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-teal via-teal-light to-teal rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-teal/50 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-16 h-16 text-navy">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="absolute inset-0 w-32 h-32 border-4 border-teal/30 rounded-full animate-ping mx-auto"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-teal via-teal-light to-teal bg-clip-text text-transparent">
              🎉 You&apos;re In!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Welcome to ReimbursementIQ Pro</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Your subscription is active and your 14-day free trial has begun. 
              Get ready for weekly reimbursement intelligence, CMS policy tracking, and denial trend analysis.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium">Subscription Active</span>
              </div>
              <div className="flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-4 py-2">
                <span className="text-teal font-medium">14-Day Free Trial</span>
              </div>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-10 mb-16 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-teal to-white bg-clip-text text-transparent">What happens next?</h2>
            <p className="text-gray-300 mb-10">Your ReimbursementIQ Pro journey begins now</p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { num: 1, title: 'Weekly Intelligence Starts Monday', desc: 'Your first weekly digest covers CMS policy changes, coding updates, and rate adjustments affecting your revenue.' },
                { num: 2, title: 'Policy Database Unlocked', desc: 'Search our complete CMS policy database, track payer-specific changes, and export reports for your team.' },
                { num: 3, title: 'Premium Features Activated', desc: 'Denial trend analytics, code change alerts, payer scorecards, and priority email support are now live.' },
              ].map((step) => (
                <div key={step.num} className="group text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-navy font-bold text-xl">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Help spread the word</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#1DA1F2] text-white px-6 py-3 rounded font-semibold hover:bg-[#1a8cd8] transition-colors">Share on X</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#0077B5] text-white px-6 py-3 rounded font-semibold hover:bg-[#005885] transition-colors">Share on LinkedIn</a>
            <button onClick={() => { navigator.clipboard.writeText(shareUrl); alert('Link copied!'); }} className="flex items-center justify-center gap-3 border border-teal text-teal px-6 py-3 rounded font-semibold hover:bg-teal hover:text-navy transition-colors">Copy Link</button>
          </div>
        </div>

        <ReferralCard userEmail={userEmail} />

        <div className="text-center">
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center">
            <Link href="/archive" className="block sm:inline-block bg-teal text-navy px-8 py-3 rounded font-semibold hover:bg-teal-light transition-colors">Browse Archive</Link>
            <Link href="/" className="block sm:inline-block border border-teal text-teal px-8 py-3 rounded font-semibold hover:bg-teal hover:text-navy transition-colors">Return Home</Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">Questions? Email us at <a href="mailto:support@reimbursementiq.com" className="text-teal hover:underline">support@reimbursementiq.com</a></p>
        </div>
      </div>

      <style jsx>{`
        .confetti-animation { position: absolute; width: 100%; height: 100%; overflow: hidden; }
        .confetti-piece { position: absolute; width: 8px; height: 8px; animation: confetti-fall 3s linear forwards; }
        @keyframes confetti-fall { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
      `}</style>
    </>
  );
}
