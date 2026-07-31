# /status-update

Turn a dump of raw weekly notes into a three-line stakeholder update with the right tone for the right audience.

<!-- ADAPT -->
When writing status updates, default to:
- audience: `<e.g., my director + her peers>`
- tone: `<e.g., factual, no hedging, no buzzwords, no "we're aligned">`
- structure: three lines, each labelled (Shipped / In flight / Blocked or asking for help)
- length cap: under 80 words total
<!-- /ADAPT -->

## Prompt

Raw weekly notes (paste whatever's in your head, including private thoughts; they won't leave your machine): whatever the user typed after the slash command in this same message.

Turn the notes above into a three-line stakeholder update.

Format:

```
**Shipped:** <one sentence: the most important thing finished this week>
**In flight:** <one sentence: the most important thing in progress, with an honest ETA>
**Blocked / asking for help:** <one sentence: what you need from your audience this week, or "nothing" if truly nothing>
```

Rules:

- Under 80 words total.
- Concrete: name the feature, the customer, the date, the number.
- No hedging language ("hoping to," "trying to," "should be"). Use plain commitments or plain admissions of uncertainty.
- If the "Blocked" line would be "nothing" but actually you're stuck, surface what you're stuck on instead.
- If any of the three lines doesn't have something real to put in it, say so plainly. Don't pad.
