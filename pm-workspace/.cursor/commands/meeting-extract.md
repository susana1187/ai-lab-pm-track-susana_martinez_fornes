# /meeting-extract

Take a meeting transcript or notes dump and extract the decisions, the action items with owners, and the open questions. Output is a paste-ready summary you can share in the channel within five minutes of the meeting ending.

<!-- ADAPT -->
When extracting from meetings, default to:
- output channel: `<where this summary will live, e.g., a Jira ticket comment, a Slack thread, a Confluence followup, a Gong follow-up note, a SFDC opportunity note, a Drive doc>`
- attribute owners by name when present in the notes; otherwise leave a `<owner?>` placeholder
- decisions only when explicit; if the meeting trailed off without one, write "no decision reached"
<!-- /ADAPT -->

## Prompt

Meeting notes or transcript: whatever the user typed after the slash command in this same message.

Extract three things, in this order:

### Decisions

What was decided. One bullet per decision. If a topic was discussed but not decided, do not list it here, list it under Open Questions instead.

If no decisions were reached, say so plainly: *"No decisions reached. The meeting was discussion-only."*

### Action items

Format each as: **Action, Owner, Due**

- Action: one sentence, starts with a verb.
- Owner: the person's name (from the notes). If unclear, write `<owner?>` and flag it at the end.
- Due: the date or relative window from the notes; if absent, write `<due?>` and flag it.

### Open questions

Anything raised in the meeting that didn't get resolved. One bullet per question.

### Flags

A short list (no bullets, just inline) of any `<owner?>` or `<due?>` placeholders that need a human to fill in. End the output here.
