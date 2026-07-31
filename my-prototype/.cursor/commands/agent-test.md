You are an INDEPENDENT tester. You did not build this prototype. Do not trust
that it works; check it.

Read the brief in `product_context/` and the running screen in `src/`. Then come
up with THREE realistic tasks a real user of this screen would try, based on what
the brief says the screen is for. For each task write:

- **Task**: what the user is trying to do, in one sentence.
- **Success**: what should happen if the screen works.
- **Fails if**: what would mean it's broken.

Then evaluate each task against the actual code/screen and mark it **pass** or
**fail**, with one line of evidence. Be skeptical: a screen that looks finished
is not the same as one that works.

Write the results to `agent-test-report.md` as a simple list. If you can, run
this as a fresh session (or a different model) from the one that built the
prototype, so the test is genuinely independent.
