# Prototype note: TSOL Triage View (Session 2–3)

Built in `~/Desktop/AI Lab PM-DESIGN. Susana/my-prototype/`. One screen: consolidates Clean Room QA anomalies, report config, and BQA status for XMI TSOLs, per `prfaq-xmi-refresh-agent.md`.

## Build decision: Not yet
Validation plan (`validation-plan.md`) concluded "Not yet" — the prototype hasn't been shown to a real TSOL, and the core hypothesis (TSOLs will trust a consolidated view without re-verifying elsewhere) is unproven. Also unresolved: the Datalinx SLA commitment (4–6 days → 1 day mapping turnaround) that the whole "5-day report SLA" claim depends on. Don't treat this as ready for engineering until both are checked — see [[rules-cross-media-intelligence]].

## Open question: automate-vs-approve boundary
Surfaced independently in Session 1's `CLAUDE.md` open questions and again in Session 3's handoff doc as the biggest blocker to a build-ready spec. Every downstream UX decision (what the agent surfaces vs. acts on, how it earns trust) depends on this being resolved first. Next time this domain comes up, check whether this got answered before re-deriving it from scratch.

## Lesson: verify Motif components against the real package, not memory or a disconnected MCP
Session 2's Motif MCP was connected in a separate terminal session, not the one doing the building — first pass guessed component names from memory and shipped a blank page (Motif's `Table` turned out to be a bare re-export of MUI's `Table`, with no `TableHead`/`TableBody`/etc.). The fix wasn't guessing harder, it was reading `node_modules/@liveramp/motif/build/index.js` directly to get the real export list, and `node_modules/@liveramp/rich-data-table`'s actual `.d.ts` for its real props. `verify.sh`'s allowlist also caught the wrong turn (flagged the `@mui/material` import as HIGH) before it shipped further. Worth remembering as a general pattern: when MCP-based lookup isn't actually live, check the installed package source before writing Motif code, don't guess and hope `/verify` catches it after the fact.
