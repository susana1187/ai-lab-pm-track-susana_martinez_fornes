# Glossary

Terms you'll meet in this session. If a word isn't here, ask the agent.

- **The three layers**: the shape of the whole technique. **Observation** (what the data
  literally says), **Interpretation** (what it most likely means), **Implication** (what
  to do about it). Kept separate so meaning never sneaks into the facts.
- **CONFIRMED / INFERRED / ASSUMED**: the label you put on every claim. CONFIRMED comes
  straight from a source; INFERRED you worked out and it's reasonable but not certain;
  ASSUMED you're taking on faith. The labels stop a guess from traveling as a fact.
- **Trust ladder (L1 / L2 / L3)**: how much you check an AI-generated artifact before you
  trust it. **L1**: verify every time against explicit criteria. **L2**: spot-check, once
  it's earned it. **L3**: trust with monitoring. New workflows start at L1.
- **L1 acceptance criteria**: the short checklist you attach to an AI artifact to grade it
  at L1. The same muscle as the "base requirements for testing" from your Session 3 evals.
- **Event dictionary / instrumentation**: the short list of events and signals you decide
  to track for a feature, defined before you have any data. Deciding what to measure, and
  wiring it up, is instrumentation: putting a speedometer and a fuel gauge in your product
  instead of driving by feel.
- **Funnel**: the steps a user takes in order (viewed, filtered, opened a failure,
  retried), and how many make it to each step. Where people drop off is the signal.
- **Cohort retention**: group users by the week they first used the feature, then watch
  how many come back each week after. Tells you whether it sticks.
- **Time to live (and time to value)**: how long from a customer starting to their first
  real action in the product (time to live), and to their first real value from it (time to
  value). A speed-of-onboarding signal, not the caching "TTL". LiveRamp treats the two as
  separate metrics.
- **Denominator**: the bottom number in a rate, the group you measure against. Getting a
  rate right usually means getting the denominator right. A "did people retry" rate should
  only count sessions that could have retried: not bots, and not people who never hit a
  failure in the first place.
- **Match rate**: for an activation, the share of records that matched at the destination.
  It's the Activation Run Monitor's headline number, and the one users in the sample data
  trust least, because it can disagree with the destination's own count when the two are
  measured at different moments. (Note this is *activation* match rate, records reaching a
  destination. It's a different number from the *identity-graph* match rate you'll see
  quoted across LiveRamp, which measures records matched into the graph.)
- **Agent traffic**: sessions from bots and automated services, not humans. It loads
  screens but doesn't behave like a person. If you don't separate it out, it can make a
  healthy funnel look broken.
- **Customer & user insights**: what customers and users actually say, from user research,
  Gong transcripts, support tickets, and the like. Signals to confirm, not counts to trust.
- **Guardrail metric**: the thing that must not get worse while you chase a win somewhere
  else. Stops a "success" that's hiding a loss.
- **A/B test**: show version A to some users and version B to others, change one thing, and
  see which moves the metric. It needs a lot of traffic to reach a trustworthy result,
  which LiveRamp's low-traffic products often don't have, so this session validates a faster
  way instead (agents playing through the app, plus your own judgment).
- **Fan-out (parallel agents)**: running several agents at once on independent pieces of a
  job (one per telemetry file, one per persona), then pulling the results back together.
  Faster than one-after-another, and a lot of how AI work scales.
- **Agent-as-user validation**: pointing an agent at your prototype to play through it as a
  user, to confirm your telemetry describes something a person could actually do in the app,
  not a fiction the model generated.
- **Persona**: a stand-in user with a particular behavior (cautious, power user). Running
  agents as different personas covers more paths quickly. Real personas come from user
  research; here you sketch a couple.
- **Overnight run**: point the same prompt chain at a large batch (fifty features, fifty
  escalations) and let it work unattended, then read the implications in the morning.
- **FullStory / Gong**: LiveRamp's tools for, respectively, product-usage sessions and
  recorded customer calls. Real ones sit behind Okta; the lab gives you a mock stand-in.
- **PRFAQ**: the Session 1 working-backwards document, a short Press Release plus an FAQ
  that describes a product idea before it's built. Session 4's "next opportunity" is the
  raw material for the next one.
- **Loop-back**: instead of stopping at a written next opportunity, pushing it straight back
  into the prototype, asking the agent to build the next version of the screen that acts on
  it. The insight becomes the next iteration, which you'd measure again.
- **Dynamic workflow (full-auto)**: wiring the separate commands (define, generate, analyze,
  validate, triage, next bet) into one run that goes start to finish on its own, fanning out
  where it can. The most experimental piece; a look at where this is heading, not a required
  step.
- **`product_context/`**: a folder convention from Session 2 that holds your feature's brief
  and notes. Session 4's commands read it for context if it's there; on the sample path you
  don't have one, and the sample feature brief stands in for it.
- **Product Intelligence / Jira Product Discovery Insights Bank**: LiveRamp's internal
  sources for, respectively, product-usage metrics and captured customer/product insights.
  The sample data stands in for both; you'd point at the real ones if you have access.
