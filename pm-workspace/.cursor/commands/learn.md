# /learn

Self-improving prompt. Run this at the start of any new task in a familiar domain so Claude reuses what it has already learned about your way of working, and updates that knowledge as new feedback comes in.

<!-- ADAPT -->
When learning, default to:
- store rules under: `notes/rules-<domain>.md` (or another file you point at)
- format rules with status: CONFIRMED (validated by feedback at least twice), HYPOTHESIS (one piece of evidence), REJECTED (tried and didn't work)
- ask before promoting a HYPOTHESIS to CONFIRMED
<!-- /ADAPT -->

## Prompt

Domain or task type: whatever the user typed after the slash command in this same message.

Before starting work on the task above:

1. **Review** the existing rules file for this domain. If none exists, propose one and confirm with me before creating it.
2. **Apply** all CONFIRMED rules by default in your response. Tell me which ones you applied.
3. **Surface** any HYPOTHESIS rules that are relevant; check with me before applying them.
4. **Suggest** new rules (with status HYPOTHESIS) based on patterns you notice in the current task, my CLAUDE.md, and the recent conversation.

After I give feedback on your output:

5. Update the rules file: promote a HYPOTHESIS to CONFIRMED if my feedback validated it, demote to REJECTED if not, or add new rules with the appropriate status.

This prompt is the compounding move at the PM level. The first run is slow because the rules file is empty. By the fifth run on the same domain, every later task in that domain starts pre-configured.

*(Pattern from Huryn, via Aakash Gupta, "Complete Course: Claude for PMs," 2026.)*
