import type { Metadata } from "next";
import SubscribeForm from '@/components/SubscribeForm';

export const metadata: Metadata = {
  title: "ReimbursementIQ — Healthcare Reimbursement Intelligence",
  description: "Weekly intelligence on CMS policy changes, CPT/ICD updates, Medicare/Medicaid rate changes, payer policy shifts, and denial trends for healthcare revenue cycle leaders.",
};

const features = [
  {
    title: 'CMS Policy Tracking',
    desc: 'Real-time monitoring of CMS proposed and final rules affecting reimbursement rates and coverage policies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'CPT/ICD Code Updates',
    desc: 'Stay ahead of annual code changes, new additions, and revised guidelines that impact billing accuracy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Rate Change Alerts',
    desc: 'Medicare and Medicaid fee schedule updates, conversion factor changes, and RVU adjustments.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Payer Policy Shifts',
    desc: 'Commercial payer policy changes, prior auth updates, and coverage determination shifts.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Denial Trend Analysis',
    desc: 'Data-driven insights on denial patterns, root causes, and actionable recovery strategies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Revenue Impact Scores',
    desc: 'Every update scored by potential revenue impact so you can prioritize what matters most.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '$1.2T', label: 'US Healthcare Revenue at Stake' },
  { value: '200+', label: 'Policy Changes Tracked Monthly' },
  { value: '15%', label: 'Avg Denial Rate Reduction' },
  { value: '5 min', label: 'Weekly Read Time' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm text-teal mb-6">
              <span className="w-2 h-2 rounded-full bg-teal pulse-dot" />
              Trusted by 500+ revenue cycle leaders
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Healthcare Reimbursement<br />
              <span className="gradient-text">Intelligence, Delivered</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-light max-w-2xl mx-auto mb-10">
              CMS policy changes, code updates, rate shifts, and denial trends — distilled into a 5-minute weekly brief for revenue cycle professionals.
            </p>
            <div id="subscribe">
              <SubscribeForm />
            </div>
            <p className="text-gray-light/60 text-sm mt-4">Free weekly edition. No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal mb-1">{s.value}</div>
                <div className="text-gray-light text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">What You Get Every Week</h2>
          <p className="text-gray-light text-center mb-12 max-w-xl mx-auto">Actionable reimbursement intelligence designed for healthcare finance and revenue cycle teams.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass rounded-xl p-6 hover:glow transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample */}
      <section className="py-20 bg-navy-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Sample Intelligence Brief</h2>
          <p className="text-gray-light text-center mb-10">Here&apos;s what a typical ReimbursementIQ edition looks like.</p>
          <div className="glass-strong rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-teal/10 pb-4">
              <span className="text-teal font-mono text-sm">Vol. 47 — Feb 24, 2026</span>
              <span className="px-2 py-1 rounded bg-teal/10 text-teal text-xs font-semibold">HIGH IMPACT</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-xs font-semibold">ALERT</span>
                <h3 className="text-xl font-bold text-white">CMS Finalizes 2026 OPPS Rule: +2.9% Payment Update</h3>
              </div>
              <p className="text-gray-light">CMS published the final CY2026 Outpatient Prospective Payment System rule with a 2.9% payment increase. Key changes include revised packaging thresholds for clinic visit codes and new separately payable status for 12 drug administration codes.</p>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs">Revenue Impact: +$3.2B industry-wide</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 text-xs font-semibold">TREND</span>
                <h3 className="text-xl font-bold text-white">Q4 Denial Trends: Prior Auth Denials Up 18%</h3>
              </div>
              <p className="text-gray-light">Analysis of 2.1M claims shows prior authorization denials surged 18% in Q4 2025, driven primarily by commercial payers tightening imaging and specialty drug criteria.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs font-semibold">UPDATE</span>
                <h3 className="text-xl font-bold text-white">New CPT Codes for Remote Monitoring (Effective July 2026)</h3>
              </div>
              <p className="text-gray-light">AMA approved 8 new CPT codes for remote therapeutic monitoring of musculoskeletal and respiratory conditions. Medicare has signaled coverage intent with proposed national rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Don&apos;t Miss a Rate Change</h2>
          <p className="text-gray-light mb-8">Join healthcare finance leaders who rely on ReimbursementIQ to stay ahead of reimbursement shifts.</p>
          <SubscribeForm />
        </div>
      </section>
    </>
  );
}
