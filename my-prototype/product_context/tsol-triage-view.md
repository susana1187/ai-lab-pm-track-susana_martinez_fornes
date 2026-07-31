# Context Brief: TSOL Triage View (XMI Refresh Agent)

> The agent reads this file before it builds. A vague brief gives a vague
> prototype. Think of it as a short brief: who the screen is for, what it should
> do, and what it must NOT do. The "must not do" part is the most important and
> the one people skip; without it, the agent invents extra screens and features.
>
> Fill in every `<placeholder>`. You don't need to know how to code to write
> this. Write it the way you'd brief a junior teammate.

## What this screen is

This is the landing screen a TSOL (managed-service operator for XMI customers) sees inside MCS when the XMI Refresh Agent opens. They land here right after login, and the screen proactively shows them any Clean Room QA anomalies and mapping gaps from the last 7 days, scoped to their active reports' cadence, plus the current report configuration and boosted QA (BQA) status — all in one place so they can quickly tell whether anything is blocking their next report refresh.

## What good looks like

A few things this screen should achieve, in the user's terms.

- A TSOL can tell within a few seconds of landing whether anything is blocking their next report refresh (an anomaly, a mapping gap, or a config issue).
- Each flagged item is clear about which report/customer it affects and its severity, so the TSOL knows what to look at first.
- The screen shows, without extra clicks: recent Clean Room QA anomalies, current report configuration summary, and BQA status.
- From this screen, the TSOL has a clear next action available (e.g. "resolve mapping gap" or "review anomaly"), even if that action just opens a mocked follow-up state on this same screen.

## Must always be true

- Every button, field, and control is a real Motif component (not a plain HTML
  element). This is also what lets the Step 7 test agent actually use the screen.
- Sample/mock data only. No real logins, no real API calls, nothing that writes
  to a real system.
- Mock data should include at least one HIGH-severity Clean Room QA anomaly, one mapping gap, and one report config that's ready to run — so the screen shows a realistic mix of states, not all-clear.
- The screen must clearly separate three information types: QA anomalies, report configuration, and BQA status — per the PRFAQ's core idea of consolidating them, not just listing everything in one flat feed.

## Must NOT build (your boundary)

The most important part of this brief. Name what's out of scope so the agent
doesn't go past the one screen you're testing.

- This is ONE screen: the TSOL Triage View. Do not build other screens, navigation, or routes to them.
- Do not invent features beyond this brief. Out of scope: the report-plan cloning/editing flow, the Value Mapping App hand-off, the actual "kick off run" execution, Habu Intel output display, login/auth, settings, or any admin screens.
- No real backend or live data. Mock or hardcode anything the screen displays.
- Do NOT build the step where the agent resolves problems for the user (per the PRFAQ's known limitation, the agent surfaces issues but doesn't yet guide resolution) — clicking an item can open a mocked detail state, but don't build an automated fix workflow.
- Do NOT build the automate-vs-approve decision logic itself — that's still an open product question; just display statuses and let the user take a manual next action.

## House rules (optional)

> Optional. In Step 3 of the lab you can ask the agent to pull Motif's frontend
> standards from the MCP and summarize them here in plain bullets. Leave blank if
> you skip that.

- `<bullet>`
- `<bullet>`

## Components to prefer

Motif components you expect this screen to use. The agent looks up the exact
names and props from the MCP; you just say what you expect to see.

- `Button` for actions
- `Typography` for headings and text
- `Stack` and `Box` for layout (not raw HTML `<div>`s)
- For a table of data, the agent should look up the Motif table via the MCP's
  `search_data_table` tool, not build one from a plain `<table>`.
- A status/severity tag or chip component (for HIGH / MED / LOW QA anomaly severity)
- A card or panel component to separate the three sections (QA anomalies, report config, BQA status)
- A badge or count indicator for "X anomalies in the last 7 days"

**A good example (the shape to copy):**

```jsx
import { Stack, Typography } from '@liveramp/motif'

<Stack spacing={2}>
  <Typography variant="h4">Section title</Typography>
  <Typography variant="body1">Body copy in Motif type.</Typography>
</Stack>
```

## Do NOT use (drift patterns the verifier catches)

- No plain HTML for interactive things: no `<button>` (use `Button`), no
  `<input>` (use a Motif input), no `<a>` for navigation (use the Motif link).
- No layout with raw `<div>`s; use `Stack` and `Box`.
- No inline `style={...}` blocks.
- No hardcoded hex colors (e.g. `#0f172a`); use Motif's color tokens.
- No imported CSS files.
- `<add your screen-specific bans>`
