First, a quick safety check: if this folder has no `src/` screen, no
`product_context/`, and no `PLAN.md`, then there is no Session 2 prototype here to
work from. Do NOT invent one. Stop and tell me exactly this: "I can't find a
prototype in this folder. Did you build one in Session 2? If not, open
~/ai-enablement-labs-pm/session-3-engineering-readiness/reference/what-good-looks-like.md and
follow along with the worked example instead."
Otherwise, continue.

We are deciding whether this prototype is worth an engineer's time, before anyone
builds the real thing. Help me design a cheap way to check the idea. Do NOT run
anything and do NOT build anything yet.

Read the brief in `product_context/` and `PLAN.md`. Then write a VALIDATION PLAN
and save it as `validation-plan.md`. Use this shape:

- **Hypothesis**: the belief this screen is betting on, in one sentence. Shape:
  "we believe <these users> will <do this> because <reason>".
- **What we'd compare**: today's experience (A) versus this prototype (B). Name
  one small, specific thing B changes.
- **The one metric that decides it**: a single measure that would move if the
  hypothesis is right (e.g. "time to approve a request", "% of requests actioned
  without help").
- **Threshold**: the number or direction that counts as a pass.
- **How to get the signal cheaply**: the lowest-cost way to put B in front of
  people without building it for real (a clickable demo in a user call, a small
  internal group, a moderated walkthrough). Note: LiveRamp does not yet have a
  shared place to publish prototypes, so keep this to something the PM can run
  themselves.
- **The build decision**: does this earn an engineer's time, build it, or not yet.
  In LiveRamp terms, "build it" means it clears the bar to aim at the first launch
  stage, Invite Only (the launch stages are Invite Only, then Limited Release, then
  GA). "Not yet" stops it here and saves a build cycle. If you know the exit criteria
  for Invite Only (from LiveRamp's Product Release Definitions), check the plan
  against them.

Keep it to one page, in plain English. When it's written, stop and ask me to
review it. After I review, I may ask you to build a "variant B" of the screen so
the comparison is concrete.
