# ReimbursementIQ — Issue #1
### Medicare, Medicaid & Payer Policy Intelligence for Revenue Cycle Leaders
**Week of February 23–28, 2026** | reimbursementiq.com

---

## 📊 Quick Stats

| Metric | Current | Trend |
|--------|---------|-------|
| Medicare Advantage enrollment (2026) | 33.8M | +6% YoY |
| Traditional Medicare beneficiaries in ACOs | 14.3M | +4.4% YoY |
| Shared Savings Program ACOs | 511 | +35 from 2025 |
| CMBS delinquency rate (hospital sector) | 3.2% | -0.4pp QoQ |
| CY2026 PFS conversion factor | $32.35 | -2.9% from 2025 |
| National claim denial rate (commercial) | 16.8% | +1.2pp YoY |

*Sources: CMS, KFF, MGMA, Change Healthcare/Optum Revenue Cycle Analytics*

---

## 🏛️ CMS/Medicare Policy Updates

### 1. HHS Proposes 2027 Payment Notice — Major Exchange & ACA Overhaul
*Published February 9, 2026 | Comments due March 13, 2026*

CMS released the proposed **Notice of Benefit and Payment Parameters for 2027** — and it's a big one. Key provisions for revenue cycle professionals:

**What matters for providers:**
- **Non-network plan QHP certification.** CMS proposes allowing plans *without provider networks* to receive Qualified Health Plan certification by demonstrating "sufficient provider choice." This could dramatically change the payer landscape — imagine plans that function more like reference-based pricing with out-of-network reimbursement. Revenue cycle teams should model the impact now.

- **Catastrophic plan expansion.** Multi-year catastrophic plans (up to 10 years) and expanded hardship exemptions for individuals 30+ will shift more patients into high-deductible plans. Expect higher patient responsibility, more bad debt, and greater need for upfront financial counseling and payment estimation tools.

- **Essential Health Benefits changes.** CMS proposes prohibiting issuers from including routine non-pediatric dental as an EHB, and allowing low-deductible plans with higher MOOP limits. The EHB floor is becoming more flexible — which means more plan variation and more complexity for claims teams.

- **Agent/broker crackdown.** Stronger marketing standards and mandatory consent forms should reduce improper enrollments — a significant source of downstream eligibility verification failures and retroactive claim denials.

**Action item:** Review the proposed rule at [federalregister.gov/d/2026-02769](https://www.federalregister.gov/d/2026-02769). Submit comments by March 13 if any provisions would impact your organization.

### 2. ACO Participation Hits Record Levels in 2026

CMS announced that **14.3 million Medicare beneficiaries** are now receiving care coordinated through ACOs — up from 13.7M in 2025. Key numbers:

- **511 Shared Savings Program ACOs** (up from 476 in 2025) with 700,000+ participating providers
- **82.8% of SSP ACOs** are now in performance-based risk tracks (Level E BASIC or ENHANCED) — the highest ever
- Shared Savings Program ACOs earned **$4.1 billion in shared savings** and saved Medicare **$2.5 billion** in Performance Year 2024
- The new **LEAD Model** (Long-term Enhanced ACO Design) launches in 2027, replacing ACO REACH

**Revenue cycle implications:**
- If you're billing for providers in an ACO, know your ACO's risk track. Two-sided risk ACOs have stronger incentives to scrutinize utilization — expect more prior auth requirements and utilization review.
- The LEAD Model's focus on "high-needs patients" (dual-eligibles, homebound) will create new care coordination billing opportunities under chronic care management (CCM) and principal care management (PCM) codes.

### 3. CY2026 Physician Fee Schedule — The Conversion Factor Cut Is Real

The 2.9% conversion factor reduction (from $33.29 to $32.35) took effect January 1, 2026. Congress did not pass a fix. Early data shows:

- Average Medicare payment per E/M visit: down ~$2.80
- Total estimated impact: ~$3.1B reduction in physician payments
- Most affected specialties: family medicine (-4.1%), internal medicine (-3.8%), cardiology (-2.6%)

The AMA and MGMA are lobbying aggressively for a retroactive fix in the next spending bill. **Probability of partial restoration: moderate (40–50%).** Don't bank on it for budgeting purposes.

---

## 🔢 Code Changes & Updates

### New/Revised CPT Codes (Effective January 2026)

| Code | Description | Impact |
|------|-------------|--------|
| **99291–99292** | Critical care (revised documentation requirements) | Time thresholds unchanged, but CMS now requires explicit documentation of medical decision-making *in addition to* time. Expect increased denials if MDM isn't clearly documented. |
| **99458** | Remote therapeutic monitoring treatment management, additional 20 min | New add-on code for RTM — reimbursement: ~$48/unit. Requires interactive communication with patient. |
| **81443** | Genetic sequencing panel (15+ genes, solid organ neoplasm) | Expanded coverage under the molecular diagnostic LCD. Prior auth required for most MAOs. |
| **96160–96161** | Health risk assessment (revised) | Updated scoring methodology for SDOH screening tools. Now separately billable from E/M when performed by qualified health professionals. |

### ICD-10-CM Updates (April 2026 Effective Date — Prepare Now)

CMS has released the preliminary list of **248 new ICD-10-CM codes** effective April 1, 2026. Notable additions:

- **Z13.85** — Encounter for screening for vascular disease risk using inflammatory biomarkers (captures CRP, IL-6 screening)
- **T50.B15A–D** — Adverse effects of GLP-1 receptor agonists (semaglutide, tirzepatide) — finally getting their own codes rather than being lumped into T50.995
- **F14.98** — Stimulant use disorder, remission with medication-assisted treatment (xylazine-class)

**Action item:** Update charge masters and coding references by March 15 to ensure clean claims from April 1.

---

## 📉 Denial Trend Data

### National Claim Denial Rates (Q4 2025)

| Payer Type | Initial Denial Rate | Top Denial Reason | Δ YoY |
|------------|--------------------|--------------------|-------|
| **Medicare FFS** | 9.1% | Medical necessity (CO-50) | +0.6pp |
| **Medicare Advantage** | 18.4% | Prior authorization (CO-197) | +2.1pp |
| **Commercial** | 16.8% | Eligibility/coverage (CO-27) | +1.2pp |
| **Medicaid (managed)** | 14.2% | Incomplete/invalid claim (CO-16) | +0.8pp |

**The MA denial crisis continues to worsen.** Medicare Advantage plans denied 18.4% of claims in Q4 2025 — the highest on record and nearly double the Traditional Medicare rate. Prior authorization remains the #1 weapon:

- Average PA turnaround time (MA plans): 8.3 business days
- PA denial overturn rate on appeal: 74%
- Average cost to appeal a PA denial: $68 per case

**Translation:** MA plans are using PA as a revenue management tool, counting on the fact that most providers won't appeal. The 74% overturn rate proves these denials are largely inappropriate — but the appeals process is expensive enough to be a deterrent.

**Action item:** If your MA denial appeal rate is below 50%, you're leaving money on the table. Every MA prior auth denial should be automatically queued for peer-to-peer review.

---

## 🔍 Payer Policy Deep-Dive: UnitedHealthcare's New Prior Auth AI System

**What happened:** UnitedHealthcare (UHC) quietly rolled out an AI-assisted prior authorization system in January 2026 for its commercial and Medicare Advantage plans. The system, which UHC calls "ClinicalEdge," uses natural language processing to review clinical documentation submitted with PA requests and issues automated determinations.

**What we're seeing so far:**

- **Faster approvals for straightforward cases.** PA turnaround for routine imaging (X-ray, standard MRI) dropped from 3–5 business days to <24 hours. This is genuinely positive.

- **Higher denial rates for complex cases.** PA denial rates for advanced imaging (PET/CT, cardiac MRI), specialty medications, and outpatient surgical procedures increased 12–15% in the first 6 weeks vs. the same period in 2025.

- **Documentation sensitivity is extreme.** The AI system appears to be flagging PA requests that lack specific keywords or phrases. Providers report that nearly identical clinical scenarios receive different outcomes based on word choice in the clinical narrative.

- **Peer-to-peer access is harder.** Multiple provider organizations report that UHC is routing peer-to-peer review requests through a secondary AI triage before connecting with a physician reviewer, adding 2–3 business days to the process.

**The legal landscape:** This rollout comes as state legislatures across the country are introducing bills to regulate AI in utilization management. California (SB 1120, effective Jan 2026) now requires that any AI-assisted coverage determination be reviewed by a licensed physician before a denial is issued. New York, Illinois, and Massachusetts have similar bills pending.

**Practical guidance for revenue cycle teams:**

1. **Optimize clinical documentation for AI parsing.** Use specific diagnostic criteria, cite clinical guidelines by name (e.g., "ACC/AHA 2023 guidelines indicate..."), and include quantitative data (lab values, measurements) rather than subjective language.

2. **Track your UHC PA denial rate separately.** If you see a spike correlating with the January 2026 rollout, document it — this data will be valuable for regulatory complaints and potential litigation.

3. **Appeal everything.** The system is new and likely to be calibrated based on appeal outcomes. High appeal rates and overturn rates will force UHC to adjust the algorithm.

4. **Know your state law.** If you're in California, every AI-generated denial must have physician sign-off. If it doesn't, that's a regulatory violation worth reporting.

---

## 📅 Key Dates

| Date | Event |
|------|-------|
| **March 1** | CY2026 OPPS/ASC final rule — new APC rates effective |
| **March 13** | Comment deadline: 2027 Payment Notice proposed rule |
| **March 15** | Recommended deadline: Update charge masters for April ICD-10 codes |
| **April 1** | 248 new ICD-10-CM codes effective |
| **April 1** | CY2026 IPPS proposed rule expected |
| **April 15** | Medicare Advantage plan benefit lock-in deadline |

---

*ReimbursementIQ is published weekly by SignalStack Media. Data sourced from CMS, Federal Register, AMA, MGMA, KFF, and Change Healthcare/Optum analytics.*

*[Subscribe](https://reimbursementiq.com) | [Share with a colleague](https://reimbursementiq.com)*
