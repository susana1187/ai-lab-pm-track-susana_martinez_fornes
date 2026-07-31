# Handoff: TSOL Triage View (XMI Refresh Agent)

## What this is

XMI TSOLs (managed-service operators for XMI customers) currently piece together report status by hand — logging into MCS and the LiveRamp clean room separately to check for QA anomalies, mapping gaps, and configuration drift before they can safely refresh a report. This adds real time to a reporting cycle LiveRamp is trying to shrink from 18 days to 5. The bet: consolidating Clean Room QA, report configuration, and BQA status into one screen, surfaced the moment a TSOL logs in, lets them identify what's blocking their next refresh in seconds instead of hunting across systems.

## What the prototype does

A single screen, stacked top to bottom:
1. **QA Anomalies** (most prominent, top) — a severity-tagged (HIGH/MED/LOW) list of anomalies across the TSOL's managed customers/reports from the last 7 days. Clicking an anomaly opens a side panel with fuller detail.
2. **Report Configuration** — a per-customer table of active report plans and their status (e.g. "Ready to run," "Needs mapping fix," "Config drift").
3. **Boosted QA (BQA) Status** — a per-customer table of BQA pass/fail/pending state.

Mock data covers four customers (Subway, Citi, Intuit, Wayfair) with a deliberate mix of states, not an all-clear screen. Built in React with real `@liveramp/motif` and `@liveramp/rich-data-table` components (verified clean via `verify.sh`, 0 drift flags).

## Scope

**In scope**: the one triage screen described above, with mock/hardcoded data only.

**Must NOT build** (carried from the original brief, still binding for the real build):
- No other screens, navigation, or routes — this is one screen
- No report-plan cloning/editing flow, no Value Mapping App hand-off, no actual "kick off run" execution, no Habu Intel output display, no login/auth, no settings/admin
- No automated resolution of flagged issues — the agent surfaces problems, it does not yet solve them (this is an explicit, named limitation in the source PRFAQ, not an oversight)
- No automate-vs-approve decision logic — that's still an open product question (see below); the real build should keep displaying statuses and let the user take manual next actions until that's resolved

## How we'll know it works

Full detail in `evals.md` (8 checks). Headline checks an engineer should build against:
- A HIGH-severity anomaly is visually unmissable without scrolling or clicking, and the anomalies section is the most prominent part of the screen
- Clicking an anomaly opens detail with no side effects (no real action triggered)
- Report Configuration and BQA Status stay in separate, correctly-attributed sections — no cross-customer data bleed
- An empty state (zero anomalies) is handled explicitly, not rendered blank
- Severity tags stay legible (contrast) at every severity level
- No control anywhere triggers a real backend action

## Did we validate it

**Not yet — this is the single most important line in this document.** Per `validation-plan.md`, the prototype hasn't been shown to a real TSOL. The build decision is explicitly **"Not yet"**: the core hypothesis (that TSOLs will trust and act on a consolidated view without re-verifying elsewhere) is unproven, and it's the assumption every other design decision in this screen depends on. The recommended cheap test — a moderated walkthrough with 2–3 TSOLs, watching whether they re-verify outside the screen, targeting under 30 seconds to correctly name the blocker — should run before this earns engineering time toward Invite Only.

## What it would cost

Per `cost-worksheet.md`: **T-shirt size L.** Not because the UI is complex — because the prototype fakes the hard part: live aggregation across Clean Room QA, report config, and BQA from multiple internal systems, plus a still-unconfirmed Datalinx SLA dependency (the vendor integration the PRFAQ says is needed to bring mapping turnaround from 4–6 days to 1 day). The screen itself is the cheap part of this bet; the integrations behind it are not.

## Known gaps and risks

- **Datalinx SLA is unconfirmed.** The PRFAQ's "5-day report SLA" claim depends on Datalinx cutting mapping turnaround to 1 day, and neither the original PRFAQ's red-team nor this session's validation plan found a committed timeline for that. Flagged in both `pm-workspace`'s red-teamed PRFAQ and here — do not treat the 5-day SLA as locked until this is confirmed.
- **Trust is unvalidated**, not just unmeasured — no TSOL has seen this screen yet.
- **The agent-reasoning / automate-vs-approve UX** (Session 1's Open Questions 1 and 4) is unresolved. Building ahead of that decision risks rework.
- **Scale**: the prototype shows 4 mock customers; whether the "single glance" design goal holds at a TSOL's real customer count is untested.
- This build only covers report-refresh triage — the PRFAQ explicitly scopes out Results QA (post-campaign reporting) and new-measurement-plan creation as future work, not this build.

## Open questions for engineering

1. Is there a confirmed timeline/SLA commitment from Datalinx for 1-day mapping turnaround? (Currently unconfirmed — see Cost Worksheet and Known Gaps.)
2. What's the actual source system for "report configuration" status — this wasn't named in the original PRFAQ and needs an owner.
3. Given the BQA system already exists (per the PRFAQ, in a "warnings system format we have already built"), can this screen reuse that system's API directly, or does it need a new aggregation layer?
4. What's the realistic data freshness/latency for Clean Room QA if this needs to feel like "on login" information, not stale?

## Where the prototype lives

Local only for now — not yet pushed to a GitHub repo. `git log` shows one local commit (`1b7d360`, "Session 2: TSOL Triage View prototype, Motif-styled, verified and agent-tested") in this folder. Push to a private repo before sharing with an engineer so they can clone and run it themselves.
