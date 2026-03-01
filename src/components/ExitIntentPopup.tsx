"use client";

import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem('exit-intent-shown');
    if (hasBeenShown) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 50) { setIsVisible(true); sessionStorage.setItem('exit-intent-shown', 'true'); }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, source: "exit-intent" }) });
      const data = await res.json();
      if (res.ok) { setStatus("success"); setMessage("Perfect! Check your inbox for this week's reimbursement intel."); setTimeout(() => setIsVisible(false), 3000); }
      else { setStatus("error"); setMessage(data.error || "Something went wrong."); }
    } catch { setStatus("error"); setMessage("Network error."); }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsVisible(false)}>
      <div className="bg-navy border-2 border-teal/30 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsVisible(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full border-2 border-teal/30 mb-4">
            <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Wait — get this week&apos;s top reimbursement changes free</h2>
          <p className="text-gray-300 text-sm">Before you go, grab the CMS policy intelligence that could protect your revenue.</p>
        </div>

        {status !== "success" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email for instant access" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:border-teal focus:bg-white/20 transition-all" />
            <button type="submit" disabled={status === "loading"} className="w-full bg-teal text-navy px-6 py-3 rounded-lg font-semibold text-sm hover:bg-teal-light transition-all disabled:opacity-50">
              {status === "loading" ? "Subscribing..." : "Send Me This Week's Policy Updates"}
            </button>
            {message && status === "error" && <p className="text-red-400 text-sm text-center">{message}</p>}
            <p className="text-gray-400 text-xs text-center">Free weekly digest. No spam. Unsubscribe anytime.</p>
          </form>
        ) : (
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full border-2 border-green-500/30 mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <p className="text-green-400 font-medium">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
