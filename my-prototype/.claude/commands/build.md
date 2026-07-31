Build the screen described in `PLAN.md` and the brief in `product_context/`,
working inside `src/`. Build only what the plan and brief describe; do not invent
extra screens or features.

How to build, in this order:

1. **Simple version first.** Build the screen with plain, simple components so we
   can see the structure and flow working. Use mock or hardcoded data; no real
   backend or logins. Get it rendering so I can react to a running screen.
2. Tell me, in one or two plain sentences, what you built and how to look at it
   (it updates live in the browser where `npm run dev` is running).

Only move on to making it look like Motif when I ask. When I do ask, replace the
plain components with real Motif components: look up the right component and its
exact props from the Motif MCP (the `search_motif_components`, `search_motif_icons`,
`search_data_table`, and `search_motif_api` tools) instead of guessing. Use Motif
layout components (`Stack`, `Box`) instead of raw HTML, Motif's color tokens
instead of hardcoded colors, and the Motif table (look it up with `search_data_table`)
instead of a plain `<table>`.

After each pass, keep the change small and explain it plainly. Don't refactor
things I didn't ask about.
