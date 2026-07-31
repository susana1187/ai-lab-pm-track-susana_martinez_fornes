# PRFAQ: Should we build the XMI Refresh Agent as a central orchestrator inside MCS for high-frequency report refreshes?

## Press Release

### LiveRamp Launches the XMI Refresh Agent, Cutting Cross-Media Intelligence Reporting From 18 Days to 5

*A copilot built into MCS that gives XMI TSOLs one place to catch upstream data issues, fix mapping gaps, and re-run reports — without leaving the platform.*

SAN FRANCISCO — October 1, 2026 — LiveRamp today announced general availability of the XMI Refresh Agent, a copilot embedded directly in the MCS UI that helps XMI TSOLs produce Cross-Media Intelligence (XMI) reports on a 5-day SLA, down from the current 18-day standard.

Today, TSOLs performing managed service operations for XMI customers piece together report status by logging into the MCS UI and the LiveRamp clean room separately, manually checking for QA anomalies, mapping gaps, and configuration drift before they can safely re-run a report. Each high-frequency customer (weekly or more often) multiplies this manual checking. Customers running short-cadence campaigns — Subway, Citi, Intuit, and Wayfair among them — have told LiveRamp their competitors already produce daily or weekly reporting, and asked why a fresh XMI cut takes over two weeks.

The XMI Refresh Agent solves this by pulling Clean Room QA, report configuration, and boosted QA (BQA) into a single conversational surface inside MCS. When a TSOL logs in, the agent proactively surfaces anomalies from the last 7 days, scoped to that customer's actual reporting cadence. From there, the TSOL can clone and adjust the prior report plan, kick off input summaries, resolve any publisher mapping gaps the agent finds (with a direct link into the Value Mapping App), run BQA, and — once approved — kick off the report itself, with results landing in Habu Intelligence.

"We built this because our TSOLs were spending more time hunting for the reason a report was late than actually producing it," said Jack Foster, Sr. Principal Product Manager for XMI. "The agent doesn't replace their judgment — it just makes sure they're never digging through three systems to find the one broken map that's holding up a delivery."

"Since we started running our monthly XMI refresh through the agent, catching a busted mapping went from a half-day hunt to something the agent flags for me before I've even opened the report," said a hypothetical TSOL on the CSE shadow-client pilot.

The XMI Refresh Agent requires no setup — it's part of the MCS platform. TSOLs encounter it automatically as a chat window on login.

## Internal FAQ

### What are the per-unit economics?
No new direct cost to customers today; there's commercial upside for token-based customers willing to pay a premium for higher-frequency results. On the value side, the target KPI is average services hours per standard XMI report delivery — the agent should materially cut this by collapsing manual cross-system QA hunting into one flow. Revenue/bookings impact isn't separately modeled yet beyond the token-based upsell; that's a gap (see Hand-off check).

### What does this depend on (technical, organizational, regulatory)?
- **Technical:** integrating the agent into all internal systems TSOLs currently touch by hand (clean room QA, report config, BQA, Value Mapping App, Habu Intel) — the doc names this as the main engineering challenge.
- **Third-party:** Datalinx is a required vendor dependency for the mapping-gap-resolution step; bringing them into our core process is needed to cut mapping SLA from 4–6 days to 1 day. Without that integration, the 5-day report SLA doesn't hold together, since mapping alone could eat most of the budget.
- **Organizational:** CSE team needs to run this end-to-end on a live shadow-client deliverable before TSOPs adopts it for production next quarter. No regulatory dependency identified (the doc notes this operates solely within our own platform).

### What assumptions must be true for this to succeed?
1. TSOLs will trust agent-surfaced QA anomalies and mapping gaps enough to act on them without re-verifying manually.
2. The Datalinx integration can actually bring mapping turnaround from 4–6 days to 1 day within the timeline needed to hit the 5-day report SLA.
3. Consolidating QA, config, and run-triggering into one conversational surface is enough to change TSOL behavior — that the bottleneck is information-scatter, not the underlying system speed or headcount.

### What class of software is this?
**Supported internal product.** It's built into the MCS platform for internal TSOLs (and eventually TSOPs) performing managed service operations — not a personal tool, not yet customer-facing. The acceptance bar should be production-reliability for an internal ops workflow, not a beta-quality experiment, given TSOPs is expected to run production deliveries on it next quarter.

## Red-team: top 3 assumptions

### Assumption 1: TSOLs will trust and act on agent-surfaced QA anomalies and mapping gaps without re-verifying manually
- **Claim:** Consolidating Clean Room QA, report config, and BQA into one agent view is sufficient for TSOLs to act directly on what it surfaces, without falling back to manually checking the clean room or MCS UI separately.
- **Fails if:** During the CSE shadow-client pilot, TSOLs are observed independently re-checking the clean room or config screens after the agent has already surfaced the same information — meaning the agent isn't yet trusted as the source of truth.
- **Evidence this week:** Sit with one CSE resource during a live shadow-client run and time-stamp every moment they leave the agent's chat surface to verify something elsewhere. Ask them directly afterward: "what made you double-check that?"
- **Cheapest test:** A single shadowed session with the CSE pilot user, this week, before broader rollout — cheaper than waiting for TSOP adoption data next quarter to find out trust wasn't there.

### Assumption 2: The Datalinx integration can cut mapping turnaround from 4–6 days to 1 day fast enough to hit the 5-day report SLA
- **Claim:** Integrating Datalinx into our core mapping-resolution process will bring mapping SLA down to 1 day.
- **Fails if:** The Datalinx integration timeline slips past the CSE-to-TSOP handoff (end of this quarter into next), or the 1-day figure turns out to be an aspirational estimate rather than one Datalinx has committed to contractually or technically.
- **Evidence this week:** Get a written timeline and SLA commitment from Datalinx (or confirm one doesn't yet exist) via Martín Vargas-Vega, who owns backend architecture and integration partners.
- **Cheapest test:** One ask to Martín this week: "do we have a signed or verbal SLA commitment from Datalinx for 1-day mapping turnaround, and by when?" If the answer is no, the 5-day report SLA claim in this PRFAQ is not yet substantiated.

### Assumption 3: The bottleneck TSOLs face is information-scatter across systems, not underlying system speed or headcount
- **Claim:** Centralizing information (not making any individual system faster, or adding headcount) is the fix that gets reporting from 18 days to 5.
- **Fails if:** Even with all information consolidated in the agent, individual steps (e.g., waiting on Clean Room QA to run daily, waiting on report generation itself) still take long enough that 5 days isn't achievable regardless of how well-organized the information is.
- **Evidence this week:** Ask Max Handler (data science/QA) for a rough time breakdown of the current 18-day cycle: how much is manual searching/coordination vs. system processing time that the agent can't speed up.
- **Cheapest test:** A 30-minute conversation with Max this week to sanity-check whether the 18-day-to-5-day math is plausible from consolidation alone, or whether it also requires processing-time improvements not yet scoped in this PRFAQ.

**Devil's advocate — a fourth assumption worth naming:** The doc explicitly flags that the agent "does not guide the user to solve the problems that arise when anomalies are detected." That means the PRFAQ's core value claim (TSOLs "quickly identify issues") stops at identification, not resolution. If resolution still takes the same amount of time as today once an issue is found, the 5-day SLA claim could hold for clean runs but fail exactly on the messy runs where the SLA matters most.

## Hand-off check

**Could an engineer (or design lead, or GM) build from this without another meeting? Mostly not yet.**

What's missing:
- **No committed timeline or contract detail with Datalinx** — Assumption 2's red-team surfaced that the 4–6-day-to-1-day mapping SLA is currently just a stated goal, not a confirmed dependency. Engineering can't scope this integration without that.
- **No UX spec for the automate-vs-approve boundary** — the workflow describes explicit approval gates (BQA approval, run-kickoff prompt) but doesn't define which of the six workflow steps could or should run without a user prompt. This is exactly this week's design focus per `CLAUDE.md`.
- **No plan for the named limitation** — the doc explicitly scopes out "guiding the user to solve problems," but doesn't say whether that's a fast-follow or permanently out of scope. A GM funding this bet would ask that first.

What an engineer *could* start on today: the six-step workflow order (QA surfacing → report plan cloning → input summaries → mapping-gap flagging → BQA → run) is specific enough to scaffold the agent's state machine, even before the Datalinx SLA and UX-automation questions are resolved.
