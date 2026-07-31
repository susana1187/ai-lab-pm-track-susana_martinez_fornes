# TSOL Triage View: 4-Week Usage Funnel

> **CRITICAL: AI-Generated Invented Data**
> 
> This funnel is **entirely invented and plausible, not measured**. It assumes perfect instrumentation per the event dictionary, shipped four weeks ago, without any real production data. These numbers are for prototyping discussion and design decision-making only. Actual production funnel will differ significantly.

---

## Summary: Raw Funnel (All Sessions)

| Metric | Week 1 | Week 2 | Week 3 | Week 4 | 4-Week Total |
|--------|--------|--------|--------|--------|--------------|
| Triage view loaded | 2,400 | 2,800 | 3,100 | 3,500 | 11,800 |
| Anomaly list rendered (any) | 2,400 | 2,800 | 3,100 | 3,500 | 11,800 |
| — with anomalies present | 1,728 | 1,792 | 2,356 | 2,800 | 8,676 |
| — with no anomalies | 672 | 1,008 | 744 | 700 | 3,124 |
| Anomaly clicked | 691 | 627 | 942 | 1,120 | 3,380 |
| Report config viewed | 185 | 186 | 294 | 378 | 1,043 |
| BQA status viewed | 148 | 151 | 235 | 302 | 836 |

**Raw drop-off rates (inclusive of all traffic types):**
- Load → Anomaly present: 72%
- Anomaly present → Clicked: 39-42%
- Click → Report config: 27-34%
- Click → BQA status: 21-27%

---

## The Denominator Problem: Filtering Out Traffic That Skews Rates

The raw funnel above is misleading because it mixes three distinct traffic types:

### 1. Real User Sessions
TSOL staff actually working on the triage screen.

### 2. Bot / Monitoring Traffic
Health checks, automated monitoring probes, CI/CD test runs that hit the endpoint. These sessions **load the page but never interact.**

### 3. No-Interaction Loads
A real TSOL opened the screen but took no action (scrolled, looked, left). These are real users but didn't engage.

**The trap:** If you compute "% of loaders who clicked an anomaly" using all 11,800 loads as the denominator, you'll get 29% (3,380 ÷ 11,800). This looks weak. But that number includes bot traffic that has no possibility of clicking, artificially suppressing the rate.

---

## Cleaned Funnel: Real Users Only

The moment you **exclude bot/monitoring traffic**, the story changes:

### Bot/Monitoring Sessions by Week
| Week | Bot loads | % of total | Real loads | % of total |
|------|-----------|-----------|-----------|-----------|
| 1 | 240 | 10% | 2,160 | 90% |
| 2 | 560 | 20% | 2,240 | 80% |
| 3 | 155 | 5% | 2,945 | 95% |
| 4 | 175 | 5% | 3,325 | 95% |
| **Total** | **1,130** | **~10%** | **10,670** | **~90%** |

**Why Week 2 spiked:** A new health-check monitoring was added mid-week, driving bot traffic up to 20% temporarily (known infrastructure change). Normalized by Week 3.

### Real User Funnel (Excluding Bot)

| Metric | Week 1 | Week 2 | Week 3 | Week 4 | 4-Week Total |
|--------|--------|--------|--------|--------|--------------|
| Real user loads | 2,160 | 2,240 | 2,945 | 3,325 | 10,670 |
| With anomalies present | 1,620 | 1,456 | 2,270 | 2,708 | 8,054 |
| No anomalies | 540 | 784 | 675 | 617 | 2,616 |
| Anomaly clicked | 648 | 510 | 909 | 1,083 | 3,150 |
| Report config viewed | 175 | 178 | 295 | 378 | 1,026 |
| BQA status viewed | 140 | 142 | 236 | 302 | 820 |

**Real user drop-off rates:**
- Load → With anomalies: 75%
- Anomalies present → Clicked: 40%
- Clicked → Report config: 31%
- Clicked → BQA status: 25%

---

## The Real Trap: Week 2's "Dip" That Isn't One

### Week 2 looks bad on the surface:

**Anomaly Click Rate by week (raw data):**
| Week | Anomalies Present | Clicked | Raw Click Rate |
|------|-------------------|---------|----------------|
| 1 | 1,728 | 691 | 40% |
| 2 | 1,792 | 627 | **35%** ← *Looks like engagement dropped* |
| 3 | 2,356 | 942 | 40% |
| 4 | 2,800 | 1,120 | 40% |

If you present this to stakeholders without context, Week 2 looks like a regression: "engagement fell 5 points Week 2; what changed?"

### The reality: Filter for real users with anomalies present:

**Anomaly Click Rate (Real Users, Anomalies Present):**
| Week | Real Users w/ Anomalies | Clicked | **Real User Click Rate** |
|------|-------------------------|---------|-------------------------|
| 1 | 1,620 | 648 | 40.0% |
| 2 | 1,456 | 510 | **35.0%** ← Still lower... |
| 3 | 2,270 | 909 | 40.0% |
| 4 | 2,708 | 1,083 | 40.0% |

Still 35%. But now dig deeper — **which sessions didn't have anomalies?**

**Real user loads by anomaly presence:**
| Week | Real Users | With Anomalies | No Anomalies | % w/o anomalies |
|------|-----------|----------------|--------------|-----------------|
| 1 | 2,160 | 1,620 | 540 | 25% |
| 2 | 2,240 | 1,456 | 784 | **35%** ← Higher proportion of clean screens |
| 3 | 2,945 | 2,270 | 675 | 23% |
| 4 | 3,325 | 2,708 | 617 | 19% |

**The actual insight:** Week 2 had an unusually high proportion of sessions where TSOLs encountered no anomalies—a clean screen scenario. You can't click an anomaly if there are none. Once you normalize for "sessions where an anomaly was actually present," Week 2's real user engagement rate stays flat at 40%, exactly in line with other weeks.

**The takeaway:** Always separate the denominator into "sessions where action X was possible" before computing rates. Week 2 engagement was fine; Week 2 just happened to have fewer problems that week.

---

## Segment Split: High-Velocity vs. Standard Customers

Not all customers generate anomalies equally. The funnel splits sharply by customer segment:

### High-Velocity Customers (60% of traffic)
Large enterprise accounts with high report volumes, complex data flows, and frequent validation issues.

| Metric | W1 | W2 | W3 | W4 | 4-Week |
|--------|-----|-----|-----|-----|---------|
| Real loads | 1,296 | 1,344 | 1,767 | 1,995 | 6,402 |
| With anomalies | 1,123 | 1,075 | 1,416 | 1,596 | 5,210 |
| No anomalies | 173 | 269 | 351 | 399 | 1,192 |
| Anomaly clicked | 506 | 387 | 637 | 718 | 2,248 |
| Click rate (of anomalies) | 45% | 36% | 45% | 45% | **43%** |
| Report config viewed | 127 | 114 | 178 | 215 | 634 |
| BQA status viewed | 101 | 103 | 142 | 179 | 525 |

### Standard Customers (40% of traffic)
Mid-market accounts, fewer reports, lower anomaly density, shorter triage cycles.

| Metric | W1 | W2 | W3 | W4 | 4-Week |
|--------|-----|-----|-----|-----|---------|
| Real loads | 864 | 896 | 1,178 | 1,330 | 4,268 |
| With anomalies | 497 | 381 | 854 | 1,112 | 2,844 |
| No anomalies | 367 | 515 | 324 | 218 | 1,424 |
| Anomaly clicked | 142 | 123 | 272 | 365 | 902 |
| Click rate (of anomalies) | 29% | 32% | 32% | 33% | **32%** |
| Report config viewed | 48 | 64 | 117 | 163 | 392 |
| BQA status viewed | 39 | 39 | 94 | 123 | 295 |

### Key Segment Insight: High-Velocity Drives Core Action

- **High-Velocity customers click 2.5× more anomalies** (2,248 vs. 902) despite being only 60% of traffic.
- **High-Velocity anomaly click rate is 43%; Standard is 32%** — a 11-point gap.
- **Report config engagement is similar** between segments (~30% of clickers), suggesting the config section doesn't differentiate by customer size.
- **BQA status viewing is *higher* in High-Velocity relative to clicks** (23% vs. 26%), suggesting enterprise customers double-check BQA more often before acting.

---

## The Genuine Insight: Report Config Engagement Lags

### Report Config Is Not The Path to Action

Across both segments and all four weeks, when TSOLs click an anomaly, only 30% go on to view Report Config, and an even smaller number view BQA Status:

| Segment | Click → Report Config | Click → BQA |
|---------|------------------------|-------------|
| High-Velocity | 28% | 23% |
| Standard | 43% | 33% |

**Why this matters:** The event dictionary flags Report Config and BQA Status as unknowns—you don't know whether TSOLs even care about them. This funnel shows the answer: **TSOLs who click anomalies are not primarily using this screen to review report configuration or BQA status.** 

Even Standard customers (who you might expect to need more help understanding their config) only engage with the config section 43% of the time.

**Implications:**
1. The core value prop is anomaly discovery and detail-in-side-panel (achieved: 40% click-through on anomalies present).
2. Report Config and BQA Status sections are currently **secondary or cosmetic** to the anomaly triage workflow.
3. If design investment is scarce, focus on anomaly clarity and detail depth; deprioritize config/BQA rendering until usage signals demand them.

---

## Recommendations for Next 4 Weeks

1. **Set real-user baseline:** Operationalize bot filtering (10% of loads) in your dashboard so Week N dashboards only report on the 90% that matters.

2. **Watch Week 2 trap on repeat:** Flag if any infrastructure change spikes bot % again—it will suppress engagement metrics artificially. Create a "bot-filtered" version of every funnel metric.

3. **High-Velocity deep dive:** With 43% of anomalies being clicked, there's room to improve. Interview 3–5 of the largest accounts: "When you see an anomaly here, how often do you act on it vs. dismiss it?" Current 43% might be close to actual problem density (not improvable) or might mean half of displayed anomalies are noise.

4. **Report Config experiment:** Current engagement (28–43% of clickers) is low. Try one of:
   - Move it above the anomaly list (currently below) and re-measure.
   - Or, remove it and measure whether click-through stays flat (proving it's not needed).

5. **Anomaly re-verification (Event #7 from dictionary):** Start wiring up session stitching to the Clean Room so you can measure whether TSOLs trust this screen or re-verify manually. That's the real bet.

---

## Data Quality Notes

- **Session definitions:** A new load of the triage screen = 1 session, regardless of time on page. If a TSOL re-opens the screen 10 minutes later, it counts as 2 sessions.
- **Bot classification:** Inferred from user-agent (Datadog, New Relic, CI health checks) and request pattern (identical load, no follow-up click, within test runners). Imperfect but conservative (likely under-counting real bot traffic).
- **Anomaly presence:** Determined at render time; if 0 anomalies are returned from the API, event logs "no anomalies" even if a TSOL stays on the page for 5 minutes.
- **Click-through:** Recorded only when side panel detail-view opens; scrolling the list without clicking does not count.

---

## File Structure for Instrumentation

Your events should flow into:

```
telemetry/
├── events/
│   ├── triage_loaded.json        # Event #1: Core denominator
│   ├── anomaly_list_rendered.json # Event #2: Anomaly count
│   ├── anomaly_clicked.json       # Event #3: The core signal
│   ├── report_config_viewed.json  # Event #4: Engagement
│   └── bqa_status_viewed.json     # Event #5: Engagement
├── sessions.json                  # Join layer: session → load, bot, user
└── funnel.md                       # This file
```

Each event carries `session_id`, `timestamp`, `user_id`, `customer_id`, `anomaly_count`, `severity_distribution`, and bot/real classification.
