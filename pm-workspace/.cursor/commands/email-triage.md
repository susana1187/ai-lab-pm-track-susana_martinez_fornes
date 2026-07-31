# /email-triage

First-pass triage on a batch of unread emails. Output is a short, actionable list anchored to the threads I actually owe a reply on, not a generic summary.

> **LiveRamp note:** in Claude Code, the built-in Gmail connector (LR-approved) gives Claude read access to your threads, invoke `/email-triage` and let Claude fetch. In Cursor, the Gmail connector isn't approved at LR today, so paste subject lines, senders, and a one-line preview per email after the slash command instead. Either way, sending stays out-of-policy; the draft replies are for you to review and send yourself.

<!-- ADAPT -->
When triaging email, default to:
- my reply rules: `<e.g., "I reply same-day to my eng leads and design lead; everyone else next-day is fine">`
- threads to deprioritize: `<e.g., newsletters, broad FYIs, mailing-list digests>`
- output length: at most 8 bullets total
- always end with: "the first email to reply to right now"
<!-- /ADAPT -->

## Prompt

Email batch (paste the subject lines, senders, and a one-line preview per email, or paste the full text): whatever the user typed after the slash command in this same message.

Triage the batch above. Apply my reply rules from the ADAPT block. Output:

### Owed-reply queue (max 5)

Threads I owe a reply on, ordered by urgency-and-importance. For each: who sent it, the one-line ask, and a 1-sentence draft reply I could send as-is.

### Park (max 3)

Threads that look important but can wait. For each: a one-line "what it's about" and when I should circle back (today / this week / this month).

### Ignore

A count of threads safely deferred or auto-filed (don't list them individually).

### First action

The single email I should reply to right now, and the reply text.
