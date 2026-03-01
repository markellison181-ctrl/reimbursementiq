import SubscribeForm from '@/components/SubscribeForm';

const features = [
  { icon: '📋', title: 'CMS Policy Tracking', desc: 'Real-time monitoring of CMS proposed and final rules affecting reimbursement rates and coverage policies.' },
  { icon: '🔢', title: 'CPT/ICD Code Updates', desc: 'Stay ahead of annual code changes, new additions, and revised guidelines that impact billing accuracy.' },
  { icon: '💰', title: 'Rate Change Alerts', desc: 'Medicare and Medicaid fee schedule updates, conversion factor changes, and RVU adjustments.' },
  { icon: '🏥', title: 'Payer Policy Shifts', desc: 'Commercial payer policy changes, prior auth updates, and coverage determination shifts.' },
  { icon: '📊', title: 'Denial Trend Analysis', desc: 'Data-driven insights on denial patterns, root causes, and actionable recovery strategies.' },
  { icon: '⚡', title: 'Revenue Impact Scores', desc: 'Every update scored by potential revenue impact so you can prioritize what matters most.' },
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
                <div className="text-3xl mb-4">{f.icon}</div>
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
              <h3 className="text-xl font-bold text-white mb-2">🚨 CMS Finalizes 2026 OPPS Rule: +2.9% Payment Update</h3>
              <p className="text-gray-light">CMS published the final CY2026 Outpatient Prospective Payment System rule with a 2.9% payment increase. Key changes include revised packaging thresholds for clinic visit codes and new separately payable status for 12 drug administration codes.</p>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs">Revenue Impact: +$3.2B industry-wide</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">📊 Q4 Denial Trends: Prior Auth Denials Up 18%</h3>
              <p className="text-gray-light">Analysis of 2.1M claims shows prior authorization denials surged 18% in Q4 2025, driven primarily by commercial payers tightening imaging and specialty drug criteria.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">🔢 New CPT Codes for Remote Monitoring (Effective July 2026)</h3>
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
