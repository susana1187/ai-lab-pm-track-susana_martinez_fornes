# /create-plan

Take a question, decision, or initiative and turn it into a step-by-step plan with sub-tasks, owners (where I tell you), and the first concrete next action.

<!-- ADAPT -->
When creating plans, default to:
- output a numbered list with sub-bullets, not prose
- mark each step as either "I do this" (UX/design work) or "someone else does this" (Jack Foster for product decisions, Martín Vargas-Vega / Mohana Bammidi for backend, Jayakumar Reddy Attur for frontend, Max Handler for data science/QA)
- include a one-line "definition of done" per major step
- flag any step that touches the agent's automate-vs-surface-for-review boundary, since that's still an open question
- always end with "the first 30-minute action"
<!-- /ADAPT -->

## Prompt

Question, decision, or initiative: $ARGUMENTS

Build a step-by-step plan to make progress on the above. Read this workspace's `CLAUDE.md` for context (my hypotheses, people, open questions, and active artifacts) and use them.

Structure:
1. Three to seven numbered steps, each one clearly the next thing that needs to happen.
2. For each step: who does it (me or named other), what the output is, and how I'll know it's done.
3. If any step depends on input from a specific person in my `CLAUDE.md`'s "People" list, name them.
4. End with "the first 30-minute action": the smallest concrete thing I can do today to start step 1.

Don't pad the plan. If three steps cover it, three steps is right.
