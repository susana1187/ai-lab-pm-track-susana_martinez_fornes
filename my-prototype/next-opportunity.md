# Next Opportunity: Close the Trust Gap in the TSOL Triage View

## The opportunity

TSOLs using the consolidated triage view still don't fully trust it as a source of truth — and the screen itself gives them no reason to. Right now there's no way to tell how fresh the data is: no timestamp, no "last refreshed" indicator, no visual cue distinguishing a live anomaly from one that's already been resolved elsewhere. The fix isn't "convince people to trust it" — it's giving the screen an honest signal of its own freshness, paired with actually closing the data-refresh gap that's causing real staleness. Better looks like: a TSOL glances at the screen, sees when it was last updated, and stops needing to manually re-check the Clean Room to feel confident the screen isn't lying to them.

## The evidence

- **INFERRED, corroborated three independent ways** — this is the strongest-supported finding in the whole exercise, because it shows up across three separate sources that don't reference each other:
  1. A direct user quote (one TSOP: "I still navigate back to the Clean Room to verify about 70% of the time") — `telemetry/customer-insights.md`
  2. A repeated escalation root cause: 3 of 8 support tickets trace to the same 24-hour stale-data refresh gap — `telemetry/escalations.md`
  3. An independent code-level check (not from the telemetry at all): two agent personas reading the actual `src/App.jsx` confirmed there is genuinely no freshness indicator anywhere in the UI — `validation-notes.md`
- **CONFIRMED** — this is the same open risk flagged, unprompted, all the way back in the Session 1 PRFAQ's own red-team (Assumption 1: "TSOLs will trust agent-surfaced QA anomalies... without re-verifying manually"). Four separate points in this project, across two sessions, converge on the same unresolved question.
- **ASSUMED** — that a visible freshness indicator alone (without also fixing the underlying refresh-interval gap) would meaningfully move trust. It might just make the staleness more visible without fixing it, which could make things worse, not better. This needs testing, not just building.

## Why now

This isn't a someday problem — it's the single assumption the entire XMI Refresh Agent bet depends on, named as the top unresolved risk in Session 1, still unresolved after Session 2's build and Session 3's validation plan, and now independently confirmed a third and fourth way by real (synthetic) usage patterns and a direct code check. Every other feature decision on this screen (what to consolidate, how to lay it out, whether to add automation) is downstream of whether TSOLs will actually trust what's shown. Fixing this is also cheap relative to its leverage: a freshness indicator is small (S-effort per the triage rubric), and the refresh-interval fix is medium, not a rewrite.

## What a PRFAQ would need

1. **What's technically required to close the refresh gap** — is moving from a 24-hour to a near-real-time (or event-driven) sync with Clean Room QA feasible, and what's the actual cost/timeline? (This needs an engineering conversation, likely with Martín Vargas-Vega, before a PRFAQ can commit to a number.)
2. **What "trust" actually looks like as a measurable outcome** — the re-verification behavior can't be measured today (no instrumentation exists per `validation-notes.md`); a PRFAQ for this needs to define what data would prove trust improved, not just assume a freshness indicator will fix it.
3. **Whether the customer-segmentation framing (High-Velocity vs. Standard) is real** — this surfaced in the synthetic telemetry with no basis in any actual system; before a PRFAQ leans on it (e.g., to argue for prioritizing "High-Velocity" customers), confirm whether LiveRamp tracks this distinction anywhere for real, or drop it.
