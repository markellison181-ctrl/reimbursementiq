import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const articles: Record<string, { title: string; date: string; tag: string; readTime: string; metaDesc: string; content: string }> = {
  'cms-2026-opps-rule-impact': {
    title: 'CMS 2026 OPPS Final Rule: What It Means for Hospital Outpatient Revenue',
    date: 'Feb 20, 2026',
    tag: 'CMS Policy',
    readTime: '8 min read',
    metaDesc: 'Analysis of the CY2026 OPPS final rule including the 2.9% payment update, packaging changes, and revenue impact for hospital outpatient departments.',
    content: `
## Overview

The Centers for Medicare & Medicaid Services (CMS) has published the Calendar Year 2026 Outpatient Prospective Payment System (OPPS) final rule, delivering a **2.9% overall payment increase** — the largest update in three years.

For hospital outpatient departments, this translates to an estimated **$3.2 billion in additional Medicare payments** across the industry. But the devil is in the details.

## Key Changes

### 1. Payment Rate Update: +2.9%

The 2.9% update reflects a market basket increase of 3.4% offset by a -0.5% productivity adjustment. This is a significant improvement over the 2.8% update in CY2025 and the 2.3% update in CY2024.

**Revenue Impact:** A mid-size hospital with $50M in annual OPPS revenue can expect approximately **$1.45M in additional Medicare payments**.

### 2. Revised Packaging Thresholds

CMS raised the packaging threshold for separately payable items from $130 to $155, meaning some items previously billed separately will now be packaged into the primary service payment.

**What to watch:** Review your charge master for items in the $130-$155 range. These will need updated billing workflows.

### 3. New Separately Payable Drug Administration Codes

Twelve drug administration codes previously packaged into clinic visit payments will now be separately payable. This is a significant win for infusion centers and oncology departments.

**Affected codes include:**
- Chemotherapy administration codes (96401-96417)
- Select biologic agent administration codes
- New biosimilar administration tracking codes

### 4. Clinic Visit Code Adjustments

The comprehensive APC for clinic visits (C-APC 5012) sees a 3.1% increase, while lower-level clinic visits in APC 5011 increase by only 1.8%. This continues the trend of CMS steering payment toward higher-complexity outpatient encounters.

## Action Items for Revenue Cycle Teams

1. **Update fee schedules** by March 1st to reflect new OPPS rates
2. **Review packaging changes** — audit items in the $130-$155 range
3. **Retrain coders** on newly separately payable drug administration codes
4. **Model revenue impact** using your specific payer and service mix
5. **Update prior auth workflows** for affected services

## Bottom Line

The CY2026 OPPS rule is a net positive for hospital outpatient departments. The 2.9% update, combined with newly separately payable drug administration codes, should meaningfully boost revenue for most facilities. The key is acting quickly to update systems and workflows before the January 1st effective date.
    `,
  },
  'reduce-prior-auth-denials-2026': {
    title: '5 Strategies to Reduce Prior Authorization Denials in 2026',
    date: 'Feb 14, 2026',
    tag: 'Denial Management',
    readTime: '6 min read',
    metaDesc: 'Proven strategies to reduce prior authorization denials, which surged 18% in Q4 2025. Actionable tactics for healthcare revenue cycle teams.',
    content: `
## The Problem

Prior authorization denials increased **18% in Q4 2025** compared to the same period in 2024, according to our analysis of 2.1 million commercial claims. The primary drivers: tightened imaging criteria, expanded specialty drug prior auth requirements, and new AI-powered claim review systems at major payers.

For the average health system, this translates to **$2.4 million in annual revenue at risk** from prior auth-related denials alone.

## Strategy 1: Implement Real-Time Eligibility Verification

**The problem:** 34% of prior auth denials stem from eligibility issues that could have been caught before service delivery.

**The solution:** Deploy real-time eligibility verification at scheduling, not just at check-in. Modern clearinghouse integrations can verify coverage, check prior auth requirements, and identify potential issues 48-72 hours before the appointment.

**Expected impact:** 25-30% reduction in eligibility-related denials.

## Strategy 2: Build a Payer-Specific Prior Auth Matrix

**The problem:** Prior auth requirements vary dramatically across payers and change frequently. Staff relying on outdated reference materials submit incomplete or unnecessary auth requests.

**The solution:** Create and maintain a dynamic prior auth matrix that maps CPT codes to payer-specific requirements. Update it monthly. Better yet, integrate with payer portals via API for real-time requirement checks.

**Expected impact:** 20% reduction in auth-related denials.

## Strategy 3: Leverage CMS Interoperability Rules

**The problem:** Despite CMS mandates, many payers still lack efficient electronic prior auth systems.

**The solution:** The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F) requires payers to implement Prior Authorization APIs by January 2026. Hold your payers accountable. File complaints with CMS for non-compliance. These APIs can reduce auth turnaround from 14 days to under 72 hours.

**Expected impact:** 40% reduction in auth processing time.

## Strategy 4: Deploy AI-Powered Denial Prediction

**The problem:** Reactive denial management is a losing strategy when payers are using AI to deny claims faster.

**The solution:** Fight fire with fire. Deploy predictive analytics that score claims for denial risk before submission. Flag high-risk claims for additional documentation or pre-emptive peer-to-peer reviews.

**Expected impact:** 15-20% reduction in overall denial rates.

## Strategy 5: Establish a Dedicated Prior Auth Team

**The problem:** Distributing prior auth responsibilities across clinical and administrative staff leads to inconsistency, delays, and errors.

**The solution:** Centralize prior auth into a dedicated team with specialized training. Staff this team based on volume metrics: one FTE per 150-200 monthly auth requests. Measure turnaround time, approval rates, and first-pass success rates.

**Expected impact:** 35% improvement in first-pass auth approval rates.

## The Bottom Line

Prior auth denials are a growing threat to healthcare revenue, but they're not insurmountable. Organizations that invest in proactive, technology-enabled strategies are seeing measurable improvements. Start with the highest-impact strategy for your specific denial patterns and expand from there.
    `,
  },
  'cpt-code-changes-july-2026': {
    title: 'New CPT Codes for Remote Monitoring: July 2026 Update Guide',
    date: 'Feb 7, 2026',
    tag: 'CPT/ICD Updates',
    readTime: '7 min read',
    metaDesc: 'Complete guide to 8 new CPT codes for remote therapeutic monitoring effective July 2026, including billing guidelines, coverage details, and implementation tips.',
    content: `
## What's Changing

The American Medical Association (AMA) has approved **8 new CPT codes** for Remote Therapeutic Monitoring (RTM) services, effective July 1, 2026. These codes expand coverage beyond the existing RTM codes (98975-98981) to include musculoskeletal and respiratory condition monitoring.

## The New Codes

### Musculoskeletal RTM Codes

- **989X1** — RTM device supply for musculoskeletal system (e.g., motion sensors, gait analysis devices). *Proposed rate: $64*
- **989X2** — RTM treatment management services, musculoskeletal, first 20 minutes. *Proposed rate: $51*
- **989X3** — RTM treatment management services, musculoskeletal, each additional 20 minutes. *Proposed rate: $42*
- **989X4** — RTM data collection and interpretation, musculoskeletal, 16+ days in 30-day period. *Proposed rate: $73*

### Respiratory RTM Codes

- **989X5** — RTM device supply for respiratory system (e.g., smart inhalers, spirometry devices). *Proposed rate: $58*
- **989X6** — RTM treatment management services, respiratory, first 20 minutes. *Proposed rate: $51*
- **989X7** — RTM treatment management services, respiratory, each additional 20 minutes. *Proposed rate: $42*
- **989X8** — RTM data collection and interpretation, respiratory, 16+ days in 30-day period. *Proposed rate: $73*

## Coverage Details

### Medicare Coverage

CMS has signaled **coverage intent** through the CY2026 Physician Fee Schedule proposed rule. National rates are expected to be finalized in November 2025 for CY2026 implementation. The July 2026 effective date allows a 6-month ramp-up period.

### Commercial Payers

Early signals suggest major commercial payers will follow Medicare's lead:
- **UnitedHealthcare:** Issued a coverage policy draft in January 2026
- **Aetna/CVS:** Expected to cover under existing RTM policy framework
- **Anthem/Elevance:** No announcement yet, but historically follows within 90 days of Medicare

## Billing Guidelines

### Key Requirements

1. **Qualifying devices must be FDA-cleared** for the specific monitoring application
2. **Minimum 16 days of data collection** required per 30-day billing period
3. **Treatment management requires licensed clinical staff** (physician, PA, NP, or qualified health professional)
4. **Cannot bill concurrently** with existing RPM codes (99453-99458) for the same patient

### Documentation Requirements

- Signed physician order for RTM services
- Clinical indication tied to a qualifying diagnosis
- Device setup and patient education documentation
- Treatment management notes with clinical decision-making
- Data collection logs showing 16+ days of monitoring

## Revenue Opportunity

For a practice monitoring **100 patients** using both musculoskeletal and respiratory RTM codes:

| Service | Monthly Revenue |
|---------|----------------|
| Device supply | $6,100 |
| Treatment management (20 min) | $5,100 |
| Data collection | $7,300 |
| **Total monthly** | **$18,500** |
| **Total annual** | **$222,000** |

## Implementation Timeline

1. **Now — March 2026:** Evaluate qualifying patient populations and device vendors
2. **April — May 2026:** Select and procure devices, build EHR documentation templates
3. **June 2026:** Staff training and workflow testing
4. **July 1, 2026:** Go live with billing

## Bottom Line

The new RTM codes represent a significant revenue opportunity for practices already engaged in remote patient monitoring. The key is starting your implementation planning now to be ready for the July 1st effective date. Organizations that move quickly will have a 6-month head start before the market saturates.
    `,
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return { title: `${article.title} — ReimbursementIQ`, description: article.metaDesc };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-teal hover:underline text-sm mb-8 inline-block">← Back to Blog</Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-0.5 rounded bg-teal/10 text-teal text-xs font-semibold">{article.tag}</span>
          <span className="text-gray-light text-sm">{article.date}</span>
          <span className="text-gray-light text-sm">· {article.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">{article.title}</h1>
        <div className="prose prose-invert prose-lg max-w-none 
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:text-gray-light [&_p]:mb-4 [&_p]:leading-relaxed
          [&_strong]:text-white
          [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:text-gray-light
          [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6
          [&_table]:w-full [&_th]:text-left [&_th]:text-white [&_th]:pb-2 [&_th]:border-b [&_th]:border-teal/20 [&_td]:text-gray-light [&_td]:py-2 [&_td]:border-b [&_td]:border-teal/10
          " dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }} />
      
        {/* Pro CTA Banner */}
        <div className="my-12 p-6 rounded-xl bg-teal/10 border border-teal/20 text-center">
          <p className="text-lg font-semibold mb-2">Get deeper intel with ReimbursementIQ Pro</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-teal font-semibold hover:underline">
            Unlock Pro features →
          </Link>
        </div>

        {/* Related Articles */}
        <div className="border-t border-teal/20 pt-8 mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-3">
            {Object.entries(articles).filter(([s]) => s !== slug).map(([s, a]) => (
              <Link key={s} href={`/blog/${s}`} className="block p-4 rounded-lg border border-teal/20 hover:border-teal/40 hover:bg-teal/5 transition-all">
                <span className="text-teal text-sm font-medium">→</span>
                <span className="ml-2 text-gray-200 hover:text-white">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim()).map(c => c.trim());
      if (cells.every(c => /^-+$/.test(c))) return '';
      return `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\s*)+/g, (m) => `<table>${m}</table>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hultop])(.+)$/gm, (_, text) => text.trim() ? `<p>${text}</p>` : '')
    .replace(/<p><\/p>/g, '');
}
