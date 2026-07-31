First, a quick safety check: if this folder has no `src/` screen, no
`product_context/`, and no `PLAN.md`, then there is no Session 2 prototype here to
work from. Do NOT invent one. Stop and tell me exactly this: "I can't find a
prototype in this folder. Did you build one in Session 2? If not, open
~/ai-enablement-labs-pm/session-3-engineering-readiness/reference/what-good-looks-like.md and
follow along with the worked example instead."
Otherwise, continue.

Assemble the engineering-handoff document for this prototype: the single doc an
engineer (or an AI coding agent) could pick up and build the real version from.

Read everything we've produced: the brief in `product_context/`, `PLAN.md`,
`agent-test-report.md`, `evals.md`, `validation-plan.md`, `cost-worksheet.md`, and
the screen in `src/`. Pull them together into one document. Do not just paste them
end to end: resolve contradictions, remove repetition, and flag anything missing.

Save it as `handoff.md`. Use this shape:

- **What this is**: the problem and the hypothesis, in a short paragraph.
- **What the prototype does**: the screen and its main behaviors, in plain terms.
- **Scope**: what's in, and a clear "must NOT build" boundary (from the brief).
- **How we'll know it works**: the eval set / acceptance criteria (from `evals.md`).
- **Did we validate it**: the validation plan and the build decision.
- **What it would cost**: the headline from the cost worksheet.
- **Known gaps and risks**: what's faked, what's unfinished, what worried the test.
- **Open questions for engineering**: the decisions a PM cannot make alone.
- **Where the prototype lives**: the GitHub repo link (ask me if you don't have it).

Write it so someone who has never seen the prototype understands it. When it's
written, stop and ask me to review it.
