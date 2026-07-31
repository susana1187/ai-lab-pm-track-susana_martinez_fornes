This step gives the user a reusable triage tool: a rubric for deciding what to work on
next, saved as a `/triage` skill they can run any time, on any list.

First read what you have: `telemetry-analysis.md` if it exists, plus the customer-insights
and escalations telemetry. Those are the candidate work items you'll triage.

Do two things.

**1. Write the rubric** and save it as `triage-rubric.md`. It scores a candidate work item
on four things, in plain language:

- **Impact** - how much it helps, and whom.
- **Reach** - how many people or accounts it touches.
- **Effort** - rough size of the work (small, medium, large).
- **Confidence** - how solid the evidence is. Reuse the labels from your analysis: is the
  case for this item CONFIRMED, INFERRED, or ASSUMED? Anything resting on ASSUMED evidence
  gets a "verify this before you bet on it" flag, not an automatic no.

Show the rubric applied once to the current candidates, so the user sees a worked ranking
with the top one or two surfaced.

**2. Save it as a reusable skill.** Write the rubric as a slash command so the user can run
`/triage` on any future list. Prefer their durable workspace so it's there next week:

    test -d ~/pm-workspace/.claude/commands && echo WS || echo NO

- If WS: write the command to `~/pm-workspace/.claude/commands/triage.md`.
- If NO: write it to `.claude/commands/triage.md` here in this folder, and tell the user
  it's local to this project; if they want it everywhere, they can copy it into their
  `~/pm-workspace` later.

The `/triage` command's own prompt should tell the agent: take a list the user gives you,
score each item on Impact, Reach, Effort, and Confidence (with a CONFIRMED / INFERRED /
ASSUMED label), rank them, surface the top few, and flag anything resting on ASSUMED
evidence as "verify first."

When both are done, stop, tell the user they now have a `/triage` command they can reuse,
and ask them to sanity-check the ranking.
