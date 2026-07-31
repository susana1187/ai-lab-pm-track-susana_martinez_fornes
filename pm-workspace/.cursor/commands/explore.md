# /explore

Exploration prompt. Use when you have a topic and want to find everything in your workspace and linked artifacts that relates to it, ranked by relevance.

<!-- ADAPT -->
When exploring, default to:
- product area: `<your-area>`
- exclude: `<topics or tickets that are already decided>`
- output style: 5–8 bullets ranked by surprise (what's new to me), not by completeness
- always end with: "what am I missing"
<!-- /ADAPT -->

## Prompt

Topic: whatever the user typed after the slash command in this same message.

Explore everything in this workspace's `CLAUDE.md` and the linked artifacts that relates to the topic above. Read the active artifacts before answering. Then:

1. Surface the 5–8 most relevant items, each as one bullet with the source link.
2. Rank by relevance to my current open questions, not by recency.
3. For each item, mark whether it's CONFIRMED (in writing somewhere I link), INFERRED (you reasoned from the linked material), or ASSUMED (you filled in a gap).
4. End with a one-line "what am I missing": name a kind of source or person I haven't yet consulted on this topic.

Don't speculate beyond what's in the workspace. If you can't find anything, say so plainly and suggest the one artifact I should add to fix that.
