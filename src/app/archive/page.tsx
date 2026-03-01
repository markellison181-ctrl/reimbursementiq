import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter Archive — ReimbursementIQ',
  description: 'Browse past editions of the ReimbursementIQ healthcare reimbursement intelligence newsletter.',
};

const editions = [
  { vol: 47, date: 'Feb 24, 2026', headline: 'CMS Finalizes 2026 OPPS Rule: +2.9% Payment Update', tag: 'HIGH IMPACT' },
  { vol: 46, date: 'Feb 17, 2026', headline: 'UnitedHealthcare Expands Prior Auth Requirements for Imaging', tag: 'PAYER ALERT' },
  { vol: 45, date: 'Feb 10, 2026', headline: 'New RTM Codes Approved for July 2026 — Revenue Opportunity', tag: 'CPT UPDATE' },
  { vol: 44, date: 'Feb 3, 2026', headline: 'Medicare Advantage Denial Rates Hit Record High in Q4 2025', tag: 'DENIAL TREND' },
  { vol: 43, date: 'Jan 27, 2026', headline: 'CMS Proposes Changes to E/M Documentation Requirements', tag: 'CMS POLICY' },
  { vol: 42, date: 'Jan 20, 2026', headline: 'Medicaid Unwinding Update: 12.5M Disenrolled, Revenue Impact', tag: 'MEDICAID' },
  { vol: 41, date: 'Jan 13, 2026', headline: '2026 Physician Fee Schedule: Winners and Losers by Specialty', tag: 'RATE CHANGE' },
  { vol: 40, date: 'Jan 6, 2026', headline: 'Year in Review: Top 10 Reimbursement Changes of 2025', tag: 'ANNUAL' },
];

export default function ArchivePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Newsletter Archive</h1>
          <p className="text-gray-light text-lg">Browse past editions of ReimbursementIQ. <Link href="/#subscribe" className="text-teal hover:underline">Subscribe</Link> to get future editions in your inbox.</p>
        </div>
        <div className="space-y-4">
          {editions.map((ed) => (
            <div key={ed.vol} className="glass rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:glow transition-shadow duration-300">
              <div className="flex items-center gap-3 sm:w-48 shrink-0">
                <span className="text-teal font-mono text-sm">Vol. {ed.vol}</span>
                <span className="text-gray-light text-sm">{ed.date}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">{ed.headline}</h3>
              </div>
              <span className="px-2 py-0.5 rounded bg-teal/10 text-teal text-xs font-semibold whitespace-nowrap self-start sm:self-center">{ed.tag}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-light mb-4">Want the full archive? Pro members get access to all 40+ past editions.</p>
          <Link href="/pricing" className="inline-block bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">View Pro Plans</Link>
        </div>
      </div>
    </section>
  );
}
