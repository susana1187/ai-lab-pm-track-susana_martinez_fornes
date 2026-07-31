# Event Dictionary: TSOL Triage View

The vital few events for this feature, grouped in the order a TSOL moves through the screen, so a drop-off between two steps would jump out. "Capture today" means the current prototype could technically log it as-is (once wired to a real backend); "needs engineering" means it depends on a dependency this prototype doesn't yet have (e.g. real Clean Room QA/BQA integration, Datalinx).

## Core journey: login → triage → action

1. **Triage view loaded**
   - Triggers: TSOL lands on the screen (post-login, per the PRFAQ's "greeted with a pop-up chat window" flow)
   - Linked to: TSOL user, session
   - Why it matters: the denominator for every other rate on this screen — without this, you can't tell "% who did X" from "X people did it out of how many visits"
   - Capture today? **Yes** — a page-load event

2. **Anomaly list rendered with N items**
   - Triggers: the QA Anomalies section renders, with a count of HIGH/MED/LOW items
   - Linked to: session, customer/report set shown
   - Why it matters: distinguishes "TSOL saw a clean screen" from "TSOL saw a screen with real problems" — these are different user experiences that shouldn't be measured together
   - Capture today? **Yes**

3. **Anomaly clicked (detail opened)**
   - Triggers: TSOL clicks an anomaly row, opening the side panel
   - Linked to: session, specific anomaly (customer, report, severity)
   - Why it matters: the core "did the consolidation actually get used" signal — this is the PRFAQ's central bet
   - Capture today? **Yes**

4. **Report configuration viewed**
   - Triggers: TSOL scrolls to or interacts with the Report Configuration section
   - Linked to: session, customer/report
   - Why it matters: tells you whether TSOLs engage with config status here, or only care about anomalies (would reshape which section deserves the most design investment)
   - Capture today? **Yes**, if scroll-depth or section-visibility tracking is added; not present in the current click-only prototype

5. **BQA status viewed**
   - Triggers: same as above, for the BQA Status section
   - Linked to: session, customer/report
   - Why it matters: same as #4, for BQA specifically
   - Capture today? **Yes** (same caveat as #4)

## Time-based signal

6. **Time to first anomaly click**
   - Triggers: time elapsed between "Triage view loaded" and "Anomaly clicked," for sessions where at least one HIGH/MED anomaly was present
   - Linked to: session
   - Why it matters: this is the real-world version of the validation plan's "under 30 seconds to identify the blocker" threshold — once live, this metric either confirms or kills that assumption with real users instead of a moderated walkthrough
   - Capture today? **Yes**, derived from events #1 and #3 — no new instrumentation needed beyond those two

## Health signal

7. **Anomaly re-verified elsewhere (proxy: session returns to MCS/clean room directly within N minutes of viewing triage)**
   - Triggers: TSOL navigates away from the triage view to the clean room or another MCS screen shortly after viewing an anomaly, suggesting they didn't trust the consolidated view
   - Linked to: session, TSOL
   - Why it matters: this is the direct, measurable version of Assumption 1 from the PRFAQ's red-team ("TSOLs will trust agent-surfaced anomalies without re-verifying manually") — the single most important thing to watch once live
   - Capture today? **Needs engineering** — requires cross-screen/cross-system session stitching, not something this prototype or a single-screen event log can show; flagged explicitly in the PRFAQ's own red-team as the hardest thing to verify

8. **Mapping gap resolved via Value Mapping App link (downstream, out of this screen's scope)**
   - Triggers: TSOL clicks through from an anomaly to the Value Mapping App (per the PRFAQ's workflow) and the gap is later marked resolved
   - Linked to: anomaly, customer/report
   - Why it matters: closes the loop on whether surfacing the anomaly here actually led to faster resolution — the real test of whether this screen shortens the 18-day cycle
   - Capture today? **Needs engineering** — this screen doesn't build the Value Mapping App hand-off (explicitly out of scope per the brief); would need instrumentation in that separate app plus a way to join it back to the originating anomaly

## What's missing today (the honest gap)

Events #7 and #8 are the two that would most directly test this feature's actual value proposition (trust without re-verifying, faster resolution), and neither can be captured without engineering work beyond this screen. That gap is worth surfacing to Jack Foster and engineering explicitly — measuring "did people click things on this screen" is easy; measuring "did this screen actually save time" requires instrumentation this prototype doesn't have yet.
