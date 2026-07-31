# Context Brief: `<name your screen>`

> The agent reads this file before it builds. A vague brief gives a vague
> prototype. Think of it as a short brief: who the screen is for, what it should
> do, and what it must NOT do. The "must not do" part is the most important and
> the one people skip; without it, the agent invents extra screens and features.
>
> Fill in every `<placeholder>`. You don't need to know how to code to write
> this. Write it the way you'd brief a junior teammate.

## What this screen is

`<2-3 plain sentences. Who is the user, where did they come from, what are they
here to do. Not the marketing line; the functional description.>`

Example: *"This is the review screen for a contributor's data-governance lead.
They land here from the home menu, see a list of incoming requests, and approve
or deny each one."*

## What good looks like

A few things this screen should achieve, in the user's terms.

- `<e.g. the user can approve or deny a request in under a minute>`
- `<e.g. the most important action is obvious within a few seconds>`

## Must always be true

- Every button, field, and control is a real Motif component (not a plain HTML
  element). This is also what lets the Step 7 test agent actually use the screen.
- Sample/mock data only. No real logins, no real API calls, nothing that writes
  to a real system.
- `<add anything specific to your screen>`

## Must NOT build (your boundary)

The most important part of this brief. Name what's out of scope so the agent
doesn't go past the one screen you're testing.

- This is ONE screen: `<the screen>`. Do not build other screens, navigation, or routes to them.
- Do not invent features beyond this brief. Out of scope: `<settings, billing, admin, onboarding, ...>`.
- No real backend or live data. Mock or hardcode anything the screen displays.
- `<add the specific things this screen must not do>`

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
- `<other components your screen needs, e.g. a dropdown, a search field, a status tag>`

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
