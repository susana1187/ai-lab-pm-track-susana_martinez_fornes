This command helps you define your event data dictionary: the short list of events and
signals you'd instrument to actually see how your feature performs. It's the speedometer
and the gas gauge for your product. You do it before you have any telemetry, because you
can't measure what you never decided to track. Skipping this is how teams end up guessing,
fixing whatever the last customer complained about, hoping it helped.

First, find what describes your feature. Look in this order and read whatever you find:

- your own prototype and docs, if you have them: the screen in `src/`, the brief in
  `product_context/`, and any earlier-session documents (a PRFAQ, `PLAN.md`, `evals.md`, a
  handoff);
- otherwise the sample feature brief: `telemetry/feature-brief.md`, which the lab copies in;
- failing that, the telemetry files in `telemetry/` themselves, which describe the feature.

Only if there is genuinely nothing here, no prototype, no brief, and no `telemetry/` folder,
stop and tell the user: "I can't find anything describing a feature. Run `/setup-session-4`
to drop the sample in, or bring your own prototype." Otherwise continue.

Write an EVENT DICTIONARY and save it as `event-dictionary.md`. This is the same kind of
artifact a data team keeps: a real one lists each event with what fires it, what it links
to, and whether it's captured yet. List the vital few events worth tracking for this
feature, not everything you could log. For each one:

- a short, plain event name (like "signed up", "first dataset assigned", "first successful
  run");
- what triggers it (the action or moment in the product that fires it);
- what it's about, the thing it links to (a user, an account, a run, an object), so events
  can be joined into a path;
- why it matters (what decision it would inform).

Group them so the path is visible, the order a user moves through, so a drop-off between
two steps would jump out (this is the pathway analysis that let the Clean Room team see
where users were getting stuck, almost half went dead right after one step). Make sure the
set includes:

- the key steps of the core journey, start to the main "success" action, so you can see
  where people fall out;
- a time-based signal or two, like time from first arrival to first real action (the same
  shape as a "time to live" metric);
- at least one health signal (an error, a failure, a repeated retry).

One honest column matters most: for each event, mark whether you could **capture it today**
or whether it would **need engineering to instrument**. That gap, the things you wish you
could see but can't yet, is often the most useful output of this whole step.

When it's written, stop and ask the user to review it: are these the events that would
actually tell you whether the feature is working? What's missing, and what's just noise
you'd never look at?
