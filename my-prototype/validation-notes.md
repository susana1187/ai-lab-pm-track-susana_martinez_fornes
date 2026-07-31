# Validation Notes: TSOL Triage View Telemetry Analysis

## 1. Check the read holds up (two independent agent personas, reading `src/App.jsx` cold)

**What holds up:**
- The anomaly-click → detail-panel path is real and directly traceable in code (`onClick={() => setSelectedAnomaly(a)}` → `Drawer` opens on `Boolean(selectedAnomaly)`). This is the one claim both personas independently confirmed as solid.
- The stale-data concern from `escalations.md` is consistent with the actual UI: there's no timestamp, "last refreshed" indicator, or staleness signal anywhere in the rendered screen. A cautious user genuinely has no way to judge freshness — re-verifying elsewhere is a rational response to what's on screen, not paranoia. This *strengthens* the trust-gap finding from the analysis rather than undermining it.

**What does NOT hold up — this is the real finding from this step:**
- **The Report Config / BQA "viewed" funnel steps have no mechanism in the code to produce them.** Both `RichDataTable`s render unconditionally with no click/expand/tab handler — there's no discrete action a "view" event could attach to. The telemetry's 28–43% and 23–33% "engagement" numbers describe something this screen structurally cannot measure as implemented. My analysis's ASSUMED label undersold this: it's not just uncertain, it's currently untrackable, not merely unconfirmed.
- **The customer-segment claim ("High-Velocity" vs. "Standard," 43% vs. 32% click rate) has zero basis in the code.** There is no user, login, session, or customer-segment concept anywhere in `App.jsx` — not even on the four hardcoded mock customers. This is the single least-grounded claim in the whole analysis and should have been flagged more sharply than a routine ASSUMED tag.
- **Time-to-first-click is structurally possible but not implemented.** Page-load and the anomaly-click handler are both real, discrete moments — so this metric *could* exist once instrumented — but there is no analytics/logging code anywhere in the file today. The 8.2s/14.8s medians are invented on top of a hook that doesn't exist yet.
- **Scale mismatch, confirmed by direct code inspection.** The mock data is 3 anomalies across 4 customers, no visit history, no session concept. The funnel/retention numbers (11,800 loads, ~70 unique TSOLs, week-over-week cohorts) describe an entire production system this single static screen has no analog for. This isn't wrong for a *future* production build, but it means none of the volume numbers should be read as grounded in anything this prototype currently does.

## 2. Human-in-the-loop (the part that can't be outsourced)

My own judgment, before talking to anyone: the analysis's top-line finding (the stale-data/trust gap) held up and got *stronger* under this check, since the UI genuinely offers no freshness signal. But two claims I labeled ASSUMED (Report Config/BQA engagement, customer segmentation) turned out to be more than uncertain — they're not currently measurable at all given what's built, and I should have said so instead of just tagging them ASSUMED alongside more defensible claims.

**What I'd actually go verify with a person before betting time on this:** talk to Jack Foster or an engineer about whether customer-segment data (High-Velocity vs. Standard) is even a real distinction LiveRamp tracks elsewhere for XMI customers — if it doesn't exist as a concept anywhere, that whole segment-split framing in the telemetry needs to be dropped, not just caveated, before this goes near a real instrumentation plan.

## Confidence in the top insight, after this check

**Higher than before**, on the specific trust-gap/stale-data finding — the code-level check independently corroborates it via a different route (no freshness UI) than the original data did (escalations + one quote). **Lower** on the Report Config/BQA engagement and customer-segmentation claims — both should be treated as not-yet-real placeholders for a future instrumentation plan, not as findings about current user behavior.
