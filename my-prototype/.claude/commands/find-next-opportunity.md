This step turns the analysis into the next bet and hands it to a future Session 1 PRFAQ.
It closes the loop: you measured what shipped, now you point the same engine at what to
build next.

Read `telemetry-analysis.md` if it exists, plus the customer-insights and escalations
telemetry, and the triage output if you made one.

Write `next-opportunity.md` with a single, specific opportunity, the most promising one
the data points to. Include:

- **The opportunity**, in a short paragraph a PM could pitch: what's underserved or
  broken, for whom, and what "better" would look like.
- **The evidence**, each point with its label. Lean on the things multiple sources agree
  on. A signal that shows up in the funnel AND the customer-insights AND the escalations
  is worth more than one loud quote. Be honest about what is still ASSUMED.
- **Why now**: what in the data makes this the next thing, not a someday thing.
- **What a PRFAQ would need**: the two or three questions someone would have to answer to
  write the working-backwards doc from Session 1. This is the hand-off to the next loop.

> **Optional, if you have a minute.** Ask the agent to look at how one or two competitors
> handle the same problem, as extra input. Treat whatever it finds as ASSUMED until you
> verify it; a scraped competitor page is not a fact.

**Close the loop, if you want to.** You don't have to stop at a written opportunity. Take
the top recommendation and push it straight back into the prototype: ask the agent to build
the next version of your screen that acts on this insight. That's the whole system of work
turning over, measurement feeds the next iteration, which you'll measure again. You can
leave that machine running, generating the next version each time, and the skill is knowing
when to pause it and go test with real users before you keep going. That pause is your
judgment call. That's the part that's yours.

When it's written, stop and ask the user to review it, and point out that this is exactly
where the next Session 1 starts.
