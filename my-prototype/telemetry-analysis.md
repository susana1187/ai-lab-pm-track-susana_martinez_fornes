# Telemetry Analysis: TSOL Triage View — Month 1

> **Meta-caveat, applies to the whole document:** every number below comes from `telemetry/`, which is entirely AI-generated invented data (per `/generate-telemetry`), not real measurement. Within that constraint, labels below (CONFIRMED / INFERRED / ASSUMED) describe how solidly a claim is grounded *in this synthetic dataset* — not whether it's true in the real world. The first thing to do with real data is re-run this exact analysis and see what changes.

## So what

1. **CONFIRMED** (in the synthetic data): real-user anomaly click-through holds at a flat 40% once bot traffic and "no anomalies present" sessions are correctly excluded from the denominator — the core "consolidation gets used" bet is working at the surface-engagement level.
2. **INFERRED**: the deeper bet — that TSOLs *trust* the consolidated view enough to stop re-verifying elsewhere — is not yet earned. One direct skeptic quote (re-verifies in Clean Room ~70% of the time) is corroborated by 3 of 8 escalations tracing to the same stale-data root cause. This is the single most important open risk, and it's the same one flagged unresolved back in the Session 1 PRFAQ red-team.
3. **ASSUMED**: Report Config and BQA sections are lower-value to users than the anomaly section, based on lower click-through past the anomaly click — plausible, but only one month of (synthetic) data and no direct user statement confirms this is a stable pattern, not a rollout-timing artifact.

## Layer 1: Observation (what the data literally says)

- **CONFIRMED** — `funnel.md`: 11,800 total triage-view loads across 4 weeks; ~10% classified as bot/monitoring traffic (spiking to 20% in Week 2 due to a monitoring change).
- **CONFIRMED** — `funnel.md`: after excluding bot traffic and restricting to sessions where at least one anomaly was present, real-user anomaly click-through is flat at 40% in Weeks 1, 3, and 4, and also 40% in Week 2 once the denominator is corrected (Week 2's raw 35% was driven by a higher proportion of anomaly-free sessions that week, not lower engagement).
- **CONFIRMED** — `funnel.md`: High-Velocity customer segment (60% of traffic) has a 43% anomaly click rate vs. 32% for Standard customers (40% of traffic) — an 11-point gap.
- **CONFIRMED** — `funnel.md`: of users who click an anomaly, only 28–43% go on to view Report Configuration, and fewer still view BQA Status (23–33%).
- **CONFIRMED** — `retention.md`: ~70 unique TSOLs used the feature in month 1, out of ~120 eligible ops staff; week-over-week retention for the Week 1 cohort declines from 60% (W2) to 28% (W4), stabilizing around 28–30% by week 4.
- **CONFIRMED** — `retention.md`: time from page-load to first anomaly click, for sessions with a HIGH/MED anomaly present — experienced users (≥3 visits): median 8.2s, p90 22s; new users: median 14.8s, p90 45s.
- **CONFIRMED** — `customer-insights.md`: 3 of 7 quotes describe the same recurring theme (fewer system logins/context switches); 1 quote (a TSOP operations manager) states they still manually re-verify in the Clean Room "about 70% of the time."
- **CONFIRMED** — `escalations.md`: 3 of 8 escalation tickets (#847, #863, #892) trace to the same root cause — a 24-hour data refresh window causing the triage view to show stale/resolved anomalies as still active; 2 of 8 (#851, #878) trace to ambiguous status label text.

## Layer 2: Interpretation (what this most likely means)

- **INFERRED**: the 40% flat click-through, once correctly denominated, suggests the core mechanic (surfacing anomalies prominently enough that people notice and act) is working as designed — this is a genuine positive signal, not an artifact of the denominator mistake the raw Week 2 numbers would have implied.
- **INFERRED**: the 11-point click-rate gap between High-Velocity and Standard customers likely reflects real anomaly density differences (High-Velocity accounts generate more genuine, actionable anomalies) rather than a UX difference, since both segments see the same screen — worth confirming with real data before concluding anything about the UI itself.
- **INFERRED**: the combination of the skeptic's direct quote and the 3 stale-data escalations is the strongest signal in this dataset that Assumption 1 from the Session 1 PRFAQ red-team (TSOLs will trust the view without re-verifying) has NOT yet been earned — at least for some segment of users. A single quote alone would be weak evidence (one loud voice); paired with a distinct, repeated escalation pattern with the same root cause, it's a real pattern, not just an outlier opinion.
- **ASSUMED**: the low Report Config / BQA Status engagement (28–43%, 23–33%) means those sections are lower priority for users. This is plausible but not certain — it could equally mean the sections work fine passively (users glance at status without needing to formally "view" in whatever way the event fires), or that one month isn't enough time to see steady-state behavior for a new tool.
- **INFERRED**: the new-vs-experienced user gap in time-to-first-click (14.8s vs. 8.2s median, widening to 45s vs. 22s at p90) reflects a real learning curve in the interface, not just individual variance — the direction and consistency of the gap across percentiles supports this.

## Layer 3: Implication (what a PM should do)

- **Priority 1**: Investigate and likely fix the 24-hour stale-data refresh gap before investing further in trust-building UX. This is the most concrete, actionable finding — it's a specific, fixable engineering root cause (not a vague "improve trust" ask) that directly explains both the skeptic's quote and 3 real escalations. Fixing it is a cheap, high-leverage move compared to redesigning for "more trust."
- **Priority 2**: Do not treat the single skeptic quote in isolation as proof of a widespread trust problem, but do not dismiss it either — it's corroborated by escalation data, which is exactly the kind of "more than one source" check this session's technique calls for. Follow up with a few more TSOLs directly (this is what Step 6, `/validate-in-app`, and ultimately a real conversation with a human, are for).
- **Priority 3**: Hold off on cutting or deprioritizing Report Config / BQA sections based on this month's data alone. The ASSUMED label here means: worth watching for another month before making a design investment decision, not enough to act on yet.
- **Priority 4**: Consider a lightweight onboarding affordance (e.g., a one-line explainer on first visit) to close the new-user time-to-click gap — cheap to test, and the data consistently supports a real (not noisy) learning curve.
- **Note for validation**: none of the above should be treated as settled — this whole analysis rests on invented data. The very next step should be running this same three-layer read against real telemetry once the feature actually ships, and seeing what holds up.
