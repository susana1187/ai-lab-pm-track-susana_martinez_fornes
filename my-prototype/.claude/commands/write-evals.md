First, a quick safety check: if this folder has no `src/` screen, no
`product_context/`, and no `PLAN.md`, then there is no Session 2 prototype here to
work from. Do NOT invent one. Stop and tell me exactly this: "I can't find a
prototype in this folder. Did you build one in Session 2? If not, open
~/ai-enablement-labs-pm/session-3-engineering-readiness/reference/what-good-looks-like.md and
follow along with the worked example instead."
Otherwise, continue.

Read the brief in `product_context/`, `PLAN.md`, and `agent-test-report.md` if
they exist, plus the screen in `src/`.

Write an EVAL SET for this screen: the checks that decide whether it does what it
should. These are the "base requirements for testing" an engineer would build
against. Base them on what the brief says the screen is for, and reuse the
pass/fail tasks already in `agent-test-report.md` where they fit.

Save it as `evals.md`. Write 5 to 8 checks. Use this shape, one block per check:

- **Check**: the behavior being verified, in one plain sentence.
- **Pass when**: what a correct screen does.
- **Fails if**: what would mean it's wrong.

Cover the screen's main job AND its obvious failure modes: the empty state, an
action taken on the wrong row, a filter that shows nothing, a required field left
blank. Keep every check something a non-technical person could read and agree
with. Do not fill in a result; this is the criteria, not the test run.

When it's written, stop and ask me to review it.
