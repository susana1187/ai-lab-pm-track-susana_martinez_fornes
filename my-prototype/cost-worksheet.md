# Cost-of-Development Worksheet: TSOL Triage View

**Build effort**: **L** — not because the UI is complex (it's one screen), but because the prototype only fakes the hard part: live aggregation across Clean Room QA, report config, and BQA from multiple internal systems, plus the still-unresolved Datalinx mapping-turnaround dependency called out in the PRFAQ's own red-team.

**What's actually involved** (what the prototype fakes today):
- Real-time or near-real-time pull of Clean Room QA anomalies (currently hardcoded mock data)
- Live report configuration status per customer, sourced from wherever report plans actually live today
- Live BQA pass/fail state, wired to the existing BQA system the PRFAQ says is "already built" (the warnings-system format it references)
- The Datalinx integration for mapping-gap resolution links — today the screen shows mock "needs mapping fix" text with no real link out
- Auth/permissions: scoping which TSOL sees which customers' data (today everyone sees all four mock customers)
- Error handling for partial data (e.g. what renders if Clean Room QA is down but BQA data is available)

**Dependencies**:
- Datalinx (third-party vendor) — the PRFAQ names this as required to bring mapping turnaround from 4–6 days to 1 day; per the red-team, there's no confirmed SLA commitment from them yet
- Clean Room QA system (internal) — source of the anomaly data
- BQA system (internal) — the PRFAQ references an existing "warnings system" this should reuse, not rebuild
- Value Mapping App (internal) — the PRFAQ's workflow links out to it for mapping-gap resolution
- Report configuration / report-plan source system — not yet named in the PRFAQ; a question for engineering

**Unknowns and risks**:
- Whether the Datalinx SLA commitment exists at all (flagged unresolved in both the PRFAQ red-team and this session's validation plan) — if it doesn't, the whole "5-day SLA" premise this screen supports may not hold regardless of UI quality
- Whether Clean Room QA and BQA data can be pulled with enough freshness/latency to make "last 7 days" and "on login" claims true in production, not just in a mock
- The automate-vs-approve boundary (Session 1's flagged open question) isn't resolved yet — if engineering builds ahead of that decision, parts of the UI could need rework
- Whether real data volume (all TSOL-managed customers, not 4 mock ones) changes the "single glance" design goal — this needs checking with data scale in mind

**Ongoing cost**: Assuming this stays a display-only aggregation layer (no AI/agent logic making decisions), ongoing cost is mainly: maintaining integrations to 3+ upstream systems as those systems change, and monitoring for data staleness/pipeline failures feeding the triage view. If a future phase adds the agent's automation or reasoning-surfacing (Session 1 Open Questions 1 and 4), that would add real ongoing AI infrastructure cost not estimated here.

**Value vs cost**: The value case is strong on paper (18-day → 5-day SLA, named customers like Subway/Citi/Intuit/Wayfair already asking for faster cadence), but the cost driver isn't the screen — it's the Datalinx dependency and multi-system integration behind it. Worth funding the validation plan's cheap TSOL walkthrough first; if TSOLs don't trust/act on a consolidated view even with perfect data, the L-sized integration work isn't worth committing before that's known.
