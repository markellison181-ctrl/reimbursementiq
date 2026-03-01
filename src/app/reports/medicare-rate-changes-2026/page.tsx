"use client";

import { useState } from "react";
import Link from "next/link";

const SUPABASE_URL = "https://vsbwqlkbcgvmphuqfgqb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTgyMjYsImV4cCI6MjA4NjM5NDIyNn0.wGbB-LZl3UfnE1iNz9pR9dyGuc-bFoP8cxZ90toxSHg";

const changes = [
  { rank: 1, category: "Physician Fee Schedule (PFS)", change: "+3.37%", effectiveDate: "Jan 1, 2026", impact: "High", note: "Conversion factor increased to $33.89. Reversal of the scheduled 2.93% cut — Congress passed the Medicare Provider Payment Stability Act. E/M codes see largest gains." },
  { rank: 2, category: "Hospital Outpatient (OPPS)", change: "+2.9%", effectiveDate: "Jan 1, 2026", impact: "High", note: "Overall payment rate increase. New technology add-on payments expanded. Site-neutral payment policy expanding to more services — shifts revenue from hospitals to ASCs." },
  { rank: 3, category: "Ambulatory Surgical Centers (ASC)", change: "+3.1%", effectiveDate: "Jan 1, 2026", impact: "High", note: "Largest ASC increase in 5 years. CMS added 7 new procedures to ASC-covered list including total knee arthroplasty. Major win for outpatient surgery centers." },
  { rank: 4, category: "Home Health (HH)", change: "-1.7%", effectiveDate: "Jan 1, 2026", impact: "High", note: "Continued PDGM behavioral adjustment cuts. CMS clawing back alleged overpayments from PDGM transition. Home health agencies face margin pressure — watch for M&A acceleration." },
  { rank: 5, category: "Skilled Nursing Facilities (SNF)", change: "+4.0%", effectiveDate: "Oct 1, 2025", impact: "Medium-High", note: "Market basket increase of 4.0% net of productivity adjustment. Staffing minimums (3.48 HPRD) phasing in — adds $4B+ industry cost." },
  { rank: 6, category: "Inpatient Psychiatric Facilities (IPF)", change: "+2.8%", effectiveDate: "Oct 1, 2025", impact: "Medium", note: "Market basket update. Behavioral health integration pushing more referrals. Telehealth provisions for psychiatric services made permanent." },
  { rank: 7, category: "Inpatient Rehabilitation (IRF)", change: "+3.3%", effectiveDate: "Oct 1, 2025", impact: "Medium", note: "Favorable market basket update. 60% rule compliance threshold maintained. Post-acute care bundling pilots expanding — watch CJR 2.0." },
  { rank: 8, category: "Clinical Laboratory (CLFS)", change: "+0.0%", effectiveDate: "Jan 1, 2026", impact: "Medium", note: "No change — PAMA reporting period extended again. Next data collection cycle delayed to 2027. Labs get temporary reprieve from anticipated cuts." },
  { rank: 9, category: "Durable Medical Equipment (DME)", change: "+2.1%", effectiveDate: "Jan 1, 2026", impact: "Medium", note: "Fee schedule update based on CPI-U. Competitive bidding program reform continuing — single payment amounts replacing auctions in more categories." },
  { rank: 10, category: "Hospice", change: "+2.6%", effectiveDate: "Oct 1, 2025", impact: "Medium", note: "Market basket increase. New hospice special focus program (SFP) targets poor-performing hospices. Cap amount increased to $34,591.72 per beneficiary." },
  { rank: 11, category: "Telehealth Services", change: "Expanded", effectiveDate: "Jan 1, 2026", impact: "High", note: "Geographic and originating site restrictions permanently removed for 85+ service codes. Audio-only visits permanently covered for behavioral health. FQHCs/RHCs can serve as distant sites." },
  { rank: 12, category: "MIPS/QPP Quality Reporting", change: "Updated thresholds", effectiveDate: "Jan 1, 2026", impact: "High", note: "Performance threshold increased to 82 points. MIPS Value Pathways (MVPs) now mandatory for 50%+ of eligible clinicians. Penalty up to -9% for non-reporters." },
  { rank: 13, category: "Part B Drug Reimbursement", change: "ASP+3% (from ASP+6%)", effectiveDate: "Jan 1, 2026", impact: "High", note: "IRA drug negotiation program expanding. First 10 negotiated drugs see 25-79% price reductions. ASP add-on reduced from 6% to 3% for negotiated drugs." },
  { rank: 14, category: "Rural Health Clinics (RHC)", change: "+$5.23 per visit cap", effectiveDate: "Jan 1, 2026", impact: "Medium", note: "Per-visit cap increased to $117.40. RHC telehealth flexibilities extended. Essential access RHCs see higher cap of $190.56." },
  { rank: 15, category: "Federally Qualified Health Centers", change: "+PPS rate update", effectiveDate: "Jan 1, 2026", impact: "Medium", note: "Prospective payment rate updated with Medicare Economic Index. New FQHC service codes for chronic care management — additional reimbursement opportunity." },
  { rank: 16, category: "Anesthesia Services", change: "+2.4%", effectiveDate: "Jan 1, 2026", impact: "Medium", note: "Conversion factor increase. CRNA supervision requirements relaxed in more states — opt-out provision expanding. Office-based anesthesia codes updated." },
  { rank: 17, category: "Radiation Oncology", change: "+1.8%", effectiveDate: "Jan 1, 2026", impact: "Low-Medium", note: "RO Model mandatory participation delayed again. Fee-for-service rates updated. Proton therapy bundled payment pilot launched in 3 MACs." },
  { rank: 18, category: "Dialysis (ESRD)", change: "+2.1%", effectiveDate: "Jan 1, 2026", impact: "Medium", note: "Market basket increase. Home dialysis training add-on payment extended. Transitional drug add-on payment (TDAPA) streamlined." },
  { rank: 19, category: "Medicare Advantage (Part C)", change: "+3.7% benchmark", effectiveDate: "Jan 1, 2026", impact: "Very High", note: "Final rate notice: 3.7% effective increase. V28 risk model phase-in continues — plans losing ~2-3% from HCC recalibration. Star ratings more impactful than ever." },
  { rank: 20, category: "Prior Authorization Reform", change: "New rules effective", effectiveDate: "Mar 1, 2026", impact: "High", note: "CMS interoperability rule: MA plans must process standard PAs in 7 days (urgent: 72 hrs). FHIR API for PA status tracking. Denial rates must be publicly reported." },
];

export default function MedicareRateChangesReport() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email,
          newsletter: "reimbursementiq",
          source: "lead-magnet-medicare-rate-changes-2026",
          status: "active",
        }),
      });
      if (res.ok || res.status === 409) {
        setUnlocked(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-block">
          ← Back to ReimbursementIQ
        </Link>

        <div className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          FREE CHEAT SHEET — 2026 RATES
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          2026 Medicare Reimbursement
          <span className="text-cyan-400"> Rate Changes Cheat Sheet</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Every major Medicare payment change for 2026 in one place. Rate updates, new policies,
          and what they mean for your revenue cycle — from PFS to Part C.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>
            20 categories covered
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            Rate changes + impact ratings
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" /></svg>
            CY/FY 2026 final rules
          </span>
        </div>

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Preview: Top 5 Changes</h2>
          <div className="space-y-4">
            {changes.slice(0, 5).map((c) => (
              <div key={c.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-0.5 rounded">#{c.rank}</span>
                      <span className="font-semibold text-white">{c.category}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${c.impact === 'Very High' || c.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>Impact: {c.impact}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{c.note}</p>
                    <div className="flex gap-3 mt-2 text-xs">
                      <span className="text-cyan-300">Effective: {c.effectiveDate}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-lg font-bold ${c.change.startsWith('+') ? 'text-green-400' : c.change.startsWith('-') ? 'text-red-400' : 'text-cyan-400'}`}>{c.change}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!unlocked ? (
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-700 rounded-xl p-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-10 pointer-events-none" />
              <div className="opacity-30 blur-sm space-y-3">
                {changes.slice(5, 10).map((c) => (
                  <div key={c.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-left">
                    <span className="font-semibold">{c.category}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Get the Full Cheat Sheet — Free</h3>
            <p className="text-gray-400 mb-6">
              Enter your email to unlock all 20 rate changes, effective dates, impact ratings,
              and our analysis of what each change means for healthcare providers.
            </p>

            <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Unlocking..." : "Unlock Cheat Sheet"}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

            <p className="text-xs text-gray-500 mt-4">
              You&apos;ll also get ReimbursementIQ — our free weekly healthcare reimbursement intelligence newsletter.
              Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8 text-center">
              <p className="text-green-400 font-semibold">✓ Cheat sheet unlocked! You&apos;re now subscribed to ReimbursementIQ.</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Full Cheat Sheet: 2026 Medicare Rate Changes</h2>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">2026 Big Picture</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400 shrink-0">→</span>
                  <span><strong className="text-white">Physicians get a raise — finally:</strong> The +3.37% PFS increase is the first meaningful positive update in years. Congress intervened to prevent the scheduled 2.93% cut. Don&apos;t count on this happening every year.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 shrink-0">→</span>
                  <span><strong className="text-white">Site-neutral is accelerating:</strong> CMS is aggressively expanding site-neutral payments. This benefits ASCs and physician offices while pressuring hospital outpatient departments. Plan accordingly.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 shrink-0">→</span>
                  <span><strong className="text-white">IRA drug pricing impact is real:</strong> The first 10 negotiated drugs see 25-79% price reductions. Practices heavily dependent on Part B drug margins need to diversify revenue streams now.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400 shrink-0">→</span>
                  <span><strong className="text-white">Telehealth is permanent:</strong> No more temporary extensions. 85+ service codes permanently covered without geographic restrictions. Build your telehealth program for the long term.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              {changes.map((c) => (
                <div key={c.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-0.5 rounded">#{c.rank}</span>
                        <span className="font-semibold text-white">{c.category}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${c.impact === 'Very High' || c.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>Impact: {c.impact}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{c.note}</p>
                      <div className="flex gap-3 mt-2 text-xs">
                        <span className="text-cyan-300">Effective: {c.effectiveDate}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className={`text-lg font-bold ${c.change.startsWith('+') ? 'text-green-400' : c.change.startsWith('-') ? 'text-red-400' : 'text-cyan-400'}`}>{c.change}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-cyan-600/10 border border-cyan-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Want Reimbursement Intel Every Week?</h3>
              <p className="text-gray-400 mb-6">
                ReimbursementIQ delivers healthcare reimbursement intelligence to your inbox — rate changes,
                policy updates, and revenue cycle optimization strategies.
              </p>
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition"
              >
                See Plans →
              </Link>
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
              Data compiled from CMS Final Rules (CY2026 PFS, OPPS, ASC; FY2026 IPPS, SNF, IRF, IPF, Hospice).
              Analysis by ReimbursementIQ, a SignalStack Media LLC publication.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
