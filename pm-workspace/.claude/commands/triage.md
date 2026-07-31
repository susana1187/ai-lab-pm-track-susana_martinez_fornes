# /triage

Rank a list of candidate work items (a backlog, escalations, feature requests, anything) using a consistent four-column rubric, so priority calls are explicit instead of vibes-based.

## Prompt

List to triage: $ARGUMENTS

For each item in the list, score it on:

- **Impact** — how much it helps, and whom (Low / Med / High, one line of why).
- **Reach** — how many people/accounts/customers it touches (Low / Med / High).
- **Effort** — rough size of the work (S / M / L).
- **Confidence** — how solid the evidence for doing this is. Label it CONFIRMED (verified in writing/data), INFERRED (reasoned from evidence, not certain), or ASSUMED (taken on faith, unverified). Anything ASSUMED gets a "verify first" flag — that is not an automatic no, just a required check before committing real effort.

Then:
1. Rank the items and surface the top 2–3.
2. Explicitly call out anything ranked highly that rests on ASSUMED evidence — flag it as "verify before you bet on this," don't silently treat it as settled.
3. Don't let a big Impact score alone override a shaky Confidence score — a high-impact idea resting on an assumption is a "go verify this," not a "go build this."

Keep the output as a table plus a short "top pick" line. Don't pad with items that don't matter; if the list is short, a short table is correct.
