This command creates realistic telemetry for YOUR own feature, so you analyze data
connected to the thing you actually built instead of the generic sample. Use it when you
don't have real telemetry to hand. It works from the event dictionary you defined, so run
`/define-events` first if you haven't; if there's no `event-dictionary.md` here, tell the
user that and offer to define one now.

Read `event-dictionary.md` and whatever describes the feature (the brief in
`product_context/` or the sample brief `telemetry/feature-brief.md`, the screen in `src/`). You're going to invent four weeks of plausible
telemetry, as if the feature shipped a month ago and you instrumented exactly the events in
that dictionary.

**Generate one file per source, and treat each as an independent piece of work.** Where the
tooling supports it, spawn a separate agent per file so they run in parallel; if it doesn't,
just write them in quick succession. Either way keep them independent, that fan-out shape is
the point, and it's what makes this kind of work fast at scale. Use a cheap, fast model (this
is all invented data, so a small model like Haiku is fine and much
cheaper). Create these in a `telemetry/` folder (make it if needed):

- `funnel.md` - a usage funnel built from the core-journey events in your dictionary: how
  many reach each step, where they drop off. Include session metadata with some agent/bot
  traffic and some no-interaction sessions (so the denominator lesson still applies), and a
  segment split.
- `retention.md` - a cohort retention table, and a time-based signal from your dictionary
  (time to first real action, the "time to live" shape), ideally split by user type.
- `customer-insights.md` - a handful of realistic customer and user quotes (from calls,
  research, support), with one recurring theme and one that's just a single loud voice.
- `escalations.md` - a short list of support escalations tagged to the feature, with at
  least one repeated root cause.

Make the numbers plausible for THIS feature and its users, not copied from the sample. Give
it a findable insight or two, and at least one honest trap: a drop that isn't what
it first looks like.

**Then validate what you generated.** Before you hand it back, do a quick pass over the
files together: do the numbers reconcile across them (the same users, the same weeks add
up)? Does every row map to a real event from the dictionary? Is there a story a person could
actually act on? Fix anything that's internally inconsistent or nonsensical. Say in one line
what you checked.

Two rules:

- **Be honest that this is invented.** At the top of each file, say plainly it's
  AI-generated data based on the prototype, not real measurement. In this session's language
  the whole dataset is ASSUMED until real data replaces it. That's the point, not a flaw:
  you're practicing the technique, and the first thing you'd do with real numbers is confirm
  what this made up.
- **Don't destroy anything real.** If `telemetry/` already holds real exports, don't
  overwrite them; ask first. If it holds only the generic sample, tell the user you're
  replacing it with data tailored to their feature, and go ahead.

When the files are written and validated, stop and tell the user their telemetry folder now
describes their own feature, and the next step is `/analyze-telemetry`.
