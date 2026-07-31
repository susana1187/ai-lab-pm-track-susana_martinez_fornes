# L1 acceptance-criteria template

The trust ladder is how much you check an AI-generated artifact before you rely on it.

- **L1: verify every time.** You check the artifact against an explicit list before you
  trust it or pass it on. Use L1 for anything a leader will act on, anything
  customer-facing, and every workflow you've just built. This is where everything starts.
- **L2: spot-check.** Once an L1 artifact has been right many times, you sample it instead
  of checking all of it.
- **L3: trust with monitoring.** A proven, stable process you let run, watching for drift.
  (Your Session 3 Langfuse evals are an L3 habit.)

The template below is the L1 list. It's the concrete tool: attach it to any AI artifact,
tick each line, and don't pass the artifact on until every line holds. It's the same idea
as the "base requirements for testing" you wrote as evals in Session 3, aimed now at what
the AI hands *you*.

## The template (attach to any AI-generated artifact)

- [ ] **Sourced.** Every factual claim points to where it came from. I can follow it back.
- [ ] **Labelled.** Every claim is marked CONFIRMED, INFERRED, or ASSUMED, and none of the
      guesses are dressed up as facts.
- [ ] **In scope.** It answers the question I asked and doesn't quietly wander past it.
- [ ] **Reconciles.** The numbers match the underlying data; nothing was rounded into a
      different story.
- [ ] **Load-bearing assumptions flagged.** Anything the conclusion depends on that is only
      ASSUMED is called out as "verify before betting on this."
- [ ] **Conclusion follows.** The "so what" is supported by the evidence above it, not
      reaching beyond it.

## The same list, filled in for a telemetry analysis

Use this as the acceptance criteria for the `telemetry-analysis.md` you produce in Step 4
(and grade in Step 5).

- [ ] Every number traces back to a named file (funnel, retention, customer insights, escalations).
- [ ] Every observation, interpretation, and implication carries a label.
- [ ] **Agent traffic was separated before any funnel drop was called "user confusion."**
- [ ] The reported counts match the sample files; nothing was invented to round out a story.
- [ ] Anything resting on ASSUMED evidence (a heuristic, six quotes, a single cohort) is
      flagged, not stated as settled.
- [ ] The "So what" at the top would survive a skeptical VP reading only those three lines.

If a line fails, that's not a failure of the exercise. That's the review doing its job.
Send it back to the agent, name the line, and have it fix that one thing.
