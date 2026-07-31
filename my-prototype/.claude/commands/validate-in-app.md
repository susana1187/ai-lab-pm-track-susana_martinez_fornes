This step is where you pressure-test what you've found. The obvious move would be a live
A/B test, but at LiveRamp that's often the wrong tool: our traffic is low enough that an
A/B test can take a very long time to reach a result you can trust. So instead of waiting on
traffic, you validate two faster ways, with agents, and with your own judgment.

Read `telemetry-analysis.md` (or the raw `telemetry/` files if you skipped the analysis).

**1. Check the read holds up.** Do whichever of these matches what you have in this folder:

- **You have the prototype screen here (a `src/` folder).** Have an agent read that screen
  and reason through the path your telemetry implies a user takes: filter to failed, open a
  run, hit retry, whatever the data claims. The question it answers: could a real person
  actually do this, in this order, in this app? If the agent has to invent a step that
  isn't in the screen, the data (or your read of it) is off, and that's a finding. To be
  clear about the mechanics: by default the agent reads the code and reasons about the click
  path, it does not need the app running. If you do have the app running in a preview, it
  can drive that live, but that's a bonus, not a requirement.
- **No screen here (you're on the sample feature, or your real feature is a shipped product
  that doesn't live in this folder).** You can't click through a screen that isn't here, so
  validate the read against the data itself instead. Check that the top insight is actually
  supported across the files, not resting on a single number: does more than one source
  point the same way? For the sample, that's "do the escalations AND the customer quotes
  really back the match-rate-distrust claim, or is it one loud voice repeated?" Same goal,
  confirm the story is real, no screen needed. (For your own live feature, this is also
  where you'd note that a full check means pointing browser automation at your staging URL,
  which is beyond today.)

You can run a few of these checks at once, each as a different **persona** (a cautious user,
a power user), to cover more ground. Depending on your tool, the agent may spin these up in
parallel or just work through them quickly one after another; the point is they're
independent checks, not a visible parallel show. Personas come from real user research; here
you sketch a couple, or ask the agent to propose them from the telemetry.

Save a short `validation-notes.md`: what held up, what didn't (and what that means), and how
confident you now are in the top insight.

**2. Human-in-the-loop. This is the part you cannot outsource.** Look at the top insight and
the recommended next move and ask, as a person with taste: is this actually right? Then go
talk to someone closer to the truth, a customer, a user, a support teammate, a stakeholder,
and verify before you bet real time on it. This is how you avoid the trap where the AI hands
you something that looks legit and you make a confident wrong call. Your judgment and a real
conversation are part of the cycle, not a nice-to-have. And note the shape of it: the
machine can keep working while you do the human part. Your taste steers it between runs, it
doesn't stop it.

When you're done, stop and ask the user which findings they'd trust enough to act on now,
and which need a real human check first.
