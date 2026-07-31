# /peer-review

Critical peer review of a document I'm about to share. Plays the role of a smart, skeptical reader who wants the doc to succeed but won't let weak arguments through.

<!-- ADAPT -->
When reviewing, default to:
- the reader I'm worried about: Martín Vargas-Vega (Principal Engineer) reading as a skeptical eng lead who will ask "how does this actually get built and where does it break" — since the biggest named risk in `XMI Refresh Agent.md` is engineering integration across internal systems
- the kinds of weakness to surface first: unstated assumptions about what the agent automates vs. asks for approval on, vague UX flow for surfacing agent reasoning/trust, missing detail on the Datalinx mapping-time dependency, fuzzy acceptance criteria for the CSE shadow-client milestone
- the tone I want: direct, no padding, no hedging language
<!-- /ADAPT -->

## Prompt

Document to review: $ARGUMENTS

Read the document and review it as if you were the reader profile in the ADAPT block above. Your job is to surface what's weak so I can fix it before sharing.

Structure your review:

1. **Strongest argument.** One sentence, the single most persuasive thing in the doc as it stands.
2. **Weakest argument.** One sentence, the single weakest claim, and exactly why a skeptical reader would push back.
3. **Three concrete issues.** Each one a specific problem with a specific fix, ordered by importance.
4. **What's missing.** Name up to three things the doc would need to address that it currently doesn't, even if briefly.
5. **The one-line verdict.** "Ship as-is" / "Ship with the fixes above" / "Don't ship until..."

Don't praise things that don't deserve praise. Don't soften critiques. If the doc is genuinely good, say so in one sentence and move on. If it's not, say so plainly.
