First, a quick safety check: find the telemetry to analyze. It lives in a `telemetry/`
folder here (the sample set the lab copied in), or the user may have dropped their own
exports in this folder. If you find NO telemetry at all (nothing about a funnel,
retention, customer and user insights, or escalations), do NOT invent numbers. Stop and tell the
user: "I can't find any telemetry to analyze. The lab copies a sample set into a
`telemetry/` folder; if it's missing, run `/setup-session-4` again, or drop your own
export in here." Otherwise, continue.

Read every telemetry file you can find. Also read the feature brief so you know what the
feature is supposed to do: `product_context/` if it exists, otherwise the sample brief at
`telemetry/feature-brief.md`.

Now write a THREE-LAYER analysis and save it as `telemetry-analysis.md`. The three layers
are the whole technique. Do them in order and keep them separate:

1. **Observation** - what the data literally says, and nothing more. No meaning yet, just
   the facts and the numbers.
2. **Interpretation** - what those observations most likely mean.
3. **Implication** - what a PM should actually do about it.

At every point, in all three layers, tag the claim with one of these labels, and never
blur them:

- **CONFIRMED** - it comes straight from a source and you can point to it.
- **INFERRED** - you worked it out from the data; it's reasonable, but not certain.
- **ASSUMED** - you're taking it on faith; nobody has checked it.

Two rules matter more than the rest:

- Never state an INFERRED or ASSUMED thing in the voice of a CONFIRMED one. If leadership
  would act on it, they deserve to know how solid the ground is.
- **Before you read any funnel drop as "users are confused," get two things right.**
  First, separate agent traffic from human traffic: automated services and bots load
  product screens too, so check the session metadata for bot user-agents or
  no-interaction sessions and set them aside. Second, and easy to miss: of the humans who
  are left, how many ever had something to act on? A session that never hit a failure is
  not confused, it just had nothing to do, so it does not belong in the denominator of a
  "did people retry" rate. Get the denominator right before you judge the drop, and say in
  the analysis what you did.

Put a two or three line **"So what"** at the very top: the one or two things worth a
leader's attention, each carrying its label. A busy VP should get the point from those
lines alone, then read down for how you got there.

When it's written, stop and ask the user to review it. Tell them the review is the real
work: check that every CONFIRMED really is confirmed, and downgrade anything that is
actually a guess.
