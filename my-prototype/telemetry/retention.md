# TSOL Triage View: Early Retention & Time-to-Action (Month 1)

> **⚠️ IMPORTANT: This is AI-generated synthetic data, not a real measurement.** These numbers are invented based on the prototype feature design and plausible internal ops team behavior. They are **ASSUMED, NOT CONFIRMED** by any actual LiveRamp system. Use as a realistic scenario for roadmap planning or hypothesis testing only.

## Cohort Retention Table

First-time users by weekly cohort. Retention = % of week N cohort who returned to triage view at least once in weeks N+1, N+2, N+3.

| Cohort | W1 Size | W2 Return | W3 Return | W4 Return | Trend |
|--------|---------|-----------|-----------|-----------|-------|
| **Week 1** | 25 | 60% (15) | 40% (10) | 28% (7) | Steep drop; high abandonment after first day |
| **Week 2** | 20 | 65% (13) | 42% (8) | — | Slightly better engagement; possible UI tweak on day 3 |
| **Week 3** | 14 | 57% (8) | — | — | Stabilizing |
| **Week 4** | 11 | — | — | — | Too recent to measure |

**Interpretation:**  
- **Week 1 to Week 2 improvement**: The 5-point jump (60% → 65% at W2) and steeper tail retention (28% vs 42% baseline) suggests a product change between cohorts improved stickiness—likely the QA filtering or anomaly detail panel UX tightened based on early feedback.
- **Stabilization by W3/W4**: Retention plateaus ~28–30% by week 4 across first two cohorts, indicating a natural floor: the core ~30% of TSOLs for whom this screen solves a real workflow problem, with the rest reverting to legacy tools.
- **Total unique first-time users in month 1**: ~70 TSOLs (out of ~120 eligible in the ops team), suggesting moderate initial awareness and adoption.

## Time to First Anomaly Click (seconds)

For sessions where HIGH or MED anomalies were present, time from "Triage view loaded" to first anomaly clicked. (n=287 qualifying sessions across the month)

| User Type | Median | p90 | p95 | Sample | Notes |
|-----------|--------|-----|-----|--------|-------|
| **Experienced** (≥3 prior visits) | 8.2s | 22s | 31s | 89 | Quick scans; pattern recognition evident |
| **New** (first visit) | 14.8s | 45s | 67s | 128 | Exploration; reading section headers |
| **Returning** (2 prior visits) | 11.5s | 35s | 48s | 70 | Intermediate; building confidence |

### Key Distributions

**Experienced users** cluster tight (median 8s) → suggests they knew exactly what to look for and how to navigate the layout by their return visit.  
**New users** show wide tail (p90 45s) → consistent with first-time exploration, reading text, finding the anomaly list.

---

## Genuine Insight: The Paradox of Speed vs. Validation

**Observation:**  
Both experienced and new user cohorts **exceed the 30-second validation threshold** from the PRFAQ. Median times are 8–15s (well under), but p90 times are 22–45s. This is paradoxical: 

1. **If anomalies are truly self-evident**, we'd expect sub-5s clicks (e.g., a screaming red banner). The fact that 10% of experienced users take 20+ seconds suggests either:
   - Users are verifying the anomaly is real before clicking (healthy skepticism per assumption #1 red-team), or
   - The visual hierarchy or anomaly prominence is weaker than intended.

2. **Experienced users are 1.8x faster than new users** at median, but the p90 gap widens to **2x** (22s vs 45s). This suggests the interface has a real learning curve—possibly around:
   - Where to look first (section scanning)
   - Trusting that a HIGH badge means "actual blocker" vs "false positive"

**Next Step:**  
Screen recordings of the p90 cohort (45+ second new-user sessions) would clarify whether the delay is caution (good) or confusion (bad). If it's confusion, a one-line summary above the anomaly list ("HIGH = blocks handoff") would likely shift the median down.

---

## Cohort Behavior Snapshot (Week 1 vs Week 2)

A secondary insight: **Week 2 cohort retention is materially higher**, pointing to a mid-week intervention.

| Week | First Click Rate | Median Time | Return Rate (W+1) |
|------|------------------|-------------|-------------------|
| W1 | 78% of sessions (72/92 visits) | 12.5s | 60% |
| W2 | 81% of sessions (64/79 visits) | 11.8s | 65% |

The +3% first-click rate and -0.7s speed are marginal, but the cohort retention jump (+5%) is meaningful for an internal tool. Likely cause: the team shared a quick "how to use this" Slack post or ad-hoc training on day 3 of week 1, which the week 2 cohort internalized faster.

---

## Recommended Follow-Up Metrics

Once actual data collection begins (pending backend integration):

1. **Anomaly re-verification rate** (event #7 in dictionary): % of anomaly clicks followed by a manual MCS/clean-room check within 5 minutes. Target: <20% (indicates trust). Actual baseline: unknown, but critical for the PRFAQ's core bet.
2. **Mapping gap resolution time** (event #8): Days from anomaly surfaced here to marked resolved in Value Mapping App. Baseline (before this screen): ~18 days (per PRFAQ). Target: <12 days.
3. **Section engagement parity**: % of sessions that interact with Report Config or BQA sections. If <10%, deprioritize those sections in next iteration.

---

**Data collection window:** July 1–31, 2026  
**Tool:** Internal LiveRamp ops event log (prototype backend)  
**Disclaimer:** This report is a synthetic forecast. Real production data may differ significantly, especially once the feature reaches a broader XMI ops cohort.
