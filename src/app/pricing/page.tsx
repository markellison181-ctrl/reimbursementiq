'use client';
import Link from "next/link";

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: 'Essential weekly intelligence',
    features: [
      'Weekly newsletter every Monday',
      'CMS policy change summaries',
      'Quarterly code update digests',
      'Revenue impact scoring',
      'Newsletter archive access',
    ],
    cta: 'Subscribe Free',
    href: '/#subscribe',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    desc: 'Daily alerts for revenue cycle teams',
    features: [
      'Everything in Free, plus:',
      'Daily reimbursement alerts',
      'Real-time CMS rule tracking',
      'Payer policy change database',
      'Denial trend dashboards',
      'CPT/ICD code impact analysis',
      'Priority email support',
    ],
    cta: 'Start Pro',
    plan: 'pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    desc: 'Full intelligence platform for organizations',
    features: [
      'Everything in Pro, plus:',
      'Custom payer mix analysis',
      'Revenue impact modeling',
      'Multi-user team access (up to 10)',
      'API access for EHR integration',
      'Quarterly strategy calls',
      'Dedicated account manager',
    ],
    cta: 'Start Enterprise',
    plan: 'enterprise',
    highlight: false,
  },
];

export default function PricingPage() {
  const handleCheckout = async (plan: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">Choose the intelligence level that matches your organization&apos;s needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-xl p-8 flex flex-col ${p.highlight ? 'glass-strong glow-strong ring-2 ring-teal' : 'glass'}`}>
              {p.highlight && <span className="text-xs font-semibold text-teal uppercase tracking-wider mb-2">Most Popular</span>}
              <h3 className="text-2xl font-bold text-white">{p.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-gray-light">{p.period}</span>
              </div>
              <p className="text-gray-light text-sm mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-lighter text-sm">
                    <span className="text-teal mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              {p.plan ? (
                <button onClick={() => handleCheckout(p.plan!)} className={`w-full py-3 rounded-lg font-semibold transition-colors ${p.highlight ? 'bg-teal hover:bg-teal-dark text-white' : 'bg-navy-lighter hover:bg-navy-light text-white border border-teal/20'}`}>
                  {p.cta}
                </button>
              ) : (
                <a href={p.href} className="block w-full py-3 rounded-lg font-semibold text-center bg-navy-lighter hover:bg-navy-light text-white border border-teal/20 transition-colors">
                  {p.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sample Analysis */}
      <div className="max-w-4xl mx-auto mt-16 mb-8">
        <h3 className="text-xl font-semibold text-center mb-6">See sample analysis from our team</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/blog/cms-2026-opps-rule-impact" className="block p-4 rounded-lg border border-teal/20 hover:border-teal/40 transition-all text-center">
            <span className="text-teal text-sm font-medium">CMS 2026 OPPS Final Rule: Impact on Hospital Revenue</span>
            <span className="block text-gray-400 text-xs mt-1">Read analysis →</span>
          </Link>
          <Link href="/blog/reduce-prior-auth-denials-2026" className="block p-4 rounded-lg border border-teal/20 hover:border-teal/40 transition-all text-center">
            <span className="text-teal text-sm font-medium">5 Strategies to Reduce Prior Authorization Denials in 2026</span>
            <span className="block text-gray-400 text-xs mt-1">Read analysis →</span>
          </Link>
          <Link href="/blog/cpt-code-changes-july-2026" className="block p-4 rounded-lg border border-teal/20 hover:border-teal/40 transition-all text-center">
            <span className="text-teal text-sm font-medium">New CPT Codes for Remote Monitoring: July 2026 Guide</span>
            <span className="block text-gray-400 text-xs mt-1">Read analysis →</span>
          </Link>
        </div>
      </div>

      
    </section>
  );
}
