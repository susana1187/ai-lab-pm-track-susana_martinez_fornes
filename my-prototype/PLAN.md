# Plan: TSOL Triage View

**What we're building:** A single MCS screen that greets a TSOL with a stacked, top-to-bottom view of Clean Room QA anomalies, report configuration, and BQA status across the multiple customer reports they manage — so they can spot what's blocking a refresh in a few seconds.

**What's on the screen:**
- A page title identifying the screen (e.g. "XMI Report Health")
- A QA anomalies section (most prominent, at the top): a list of flagged items across customers/reports, each with customer name, report, a severity tag (HIGH/MED/LOW), and a one-line description
- Clicking an anomaly opens a side panel with more detail (mocked, no real resolution action)
- A report configuration section: a list of each customer's active report plan with its current status (e.g. "ready to run", "needs mapping fix", "config drift")
- A BQA status section: a list showing each customer/report's boosted QA pass/fail state
- Mock data covering at least: Subway, Citi, Intuit, Wayfair — with a mix of states (one HIGH anomaly, one mapping gap, one clean/ready-to-run)

**Steps:**
1. [ ] to do — Build the page shell and title with plain Motif layout components (Stack, Box, Typography)
2. [ ] to do — Add the QA anomalies section with mock data across the four customers, using a severity tag component
3. [ ] to do — Wire up the side panel that opens with anomaly detail when a row is clicked
4. [ ] to do — Add the report configuration section with mock per-customer status
5. [ ] to do — Add the BQA status section with mock per-customer pass/fail state
6. [ ] to do — Pass over the whole screen to confirm the three sections are visually distinct and the anomalies section reads as most prominent

Nothing beyond this screen: no login, no navigation to other screens, no real backend, no automated resolution of flagged issues, no actual report-run trigger.
