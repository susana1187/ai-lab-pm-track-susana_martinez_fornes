# What good looks like

A worked example of the documents you produce this session, using the sample telemetry
for the Activation Run Monitor. Yours will differ; this shows the shape and the bar. It's
deliberately condensed. Your real files will be longer; the point here is the moves.

(This example centers on the analysis, triage, and next opportunity. The two newer steps,
defining your event dictionary first and validating with agents-as-users instead of a slow
A/B test, follow the same "honest, labelled, checked by a human" bar shown here.)

---

## 1. The telemetry analysis (`telemetry-analysis.md`)

**So what**

- The Activation Run Monitor works for Solutions PMs and is mostly irrelevant to Customer
  Success reps. *(CONFIRMED by retention and the segment split.)*
- Its whole promise, spot a failure and fix it without leaving the screen, is half
  landing: PMs spot the failure but don't trust the match-rate number, so they leave the
  screen to double-check anyway. *(INFERRED from customer insights plus escalations.)*
- The scary "11% of sessions ever retry" is mostly bots and sessions with no failure to
  act on, not a broken feature. *(CONFIRMED once agent traffic is separated.)*

**Observation** (what the data says)

- 1,240 sessions in four weeks. 296 are our own `LR-ActivationBot`, 84 have no human
  interaction. *(CONFIRMED, FullStory.)*
- That leaves roughly 860 human sessions. *(INFERRED; assumes those two rows are the only
  non-human traffic, which nobody has fully checked.)*
- Only 402 sessions ever had a failed run in their list to act on. *(CONFIRMED.)*
- Among people who saw a failure to act on: Solutions PMs retried 118 of 250; CS reps
  retried 23 of 152. *(CONFIRMED, segment split.)*
- Retention by week 3: Solutions PMs 69%, CS reps 19%. *(CONFIRMED, cohort table.)*
- Two Solutions PMs, unprompted, say they don't trust the match rate and still check the
  destination by hand. *(CONFIRMED as quotes. That they speak for the whole base is
  ASSUMED, six people is not a survey.)*
- Two of five escalations are the same cause: the match rate and the destination's own
  count are measured at different moments, so they disagree. *(CONFIRMED, escalations.)*

**Interpretation** (what it most likely means)

- The "11%" headline is misleading. Strip out the ~380 non-human sessions and the sessions
  that never had a failure, and retry among Solutions PMs who actually
  had a failure to act on is about 47% (118 of 250). That's a healthy number, not a broken
  feature. *(INFERRED, arithmetic on confirmed counts.)*
- The feature has found its user. It stuck for Solutions PMs and they act on it.
  *(INFERRED, well supported.)*
- The core promise is being blocked by one thing: distrust of the match rate. They still
  leave the screen, so the "saved click" never lands. *(INFERRED, from the quotes plus the
  behavior.)*
- CS reps are not the audience yet: too few failures in their accounts to build a habit.
  *(INFERRED from one quote and the retention split.)*

**Implication** (what to do)

- Highest-value move: make the match rate a number PMs trust, by showing where it comes
  from and when it was measured. It's the one problem three independent sources agree on,
  and it blocks the feature's whole reason to exist. *(INFERRED, but strongly supported.)*
- Cheaper follow-on: show a failure reason and a retry confirmation; two escalations are
  wasted or duplicate retries with no feedback. *(CONFIRMED cause, INFERRED fix.)*
- Do not invest in CS onboarding yet; the case for it is ASSUMED.
- Before betting real engineering time: pull the real match-rate discrepancy rate (not the
  mock), and confirm the "still double-check" behavior is common, not just two loud PMs.
  *(Names the ASSUMED thing to go verify.)*

Notice the one move that turns a wrong answer into a right one: separating agent traffic
before reading the funnel. Without it, this analysis says "the feature is failing." With
it, the feature is fine and the real problem is trust in one number.

---

## 2. The validated read (`validation-notes.md`)

A live A/B test would be the classic move, but the Activation Run Monitor's traffic is low
enough that a clean result would take too long. So the read is validated two faster ways:

- **The read holds up across sources.** On the sample there's no screen to click through,
  so the check is triangulation: does the top insight (match-rate distrust blocks the
  feature) rest on more than one source, or one loud voice repeated? It holds, the funnel
  behavior (they leave to double-check), two independent PM quotes, and two of five
  escalations all point the same way. *(If you were validating your own prototype instead of
  the sample, this is where an agent would play through the actual screen, filter to Failed,
  open a run, hit Retry, and confirm a real person could do what the data implies, same goal
  with a screen to drive.)*
- **Human check (the part you can't outsource).** The one thing still ASSUMED is that two
  loud PM quotes speak for the base. Before betting engineering time, the note flags: sit
  with three or four Solutions PMs and watch whether they actually leave the screen to
  double-check the number. That is a real conversation, not another agent run.
- **Verdict**: act on "match-rate trust is the blocker" now (reproduced + triangulated);
  hold "CS reps need onboarding" until a human checks it.

---

## 3. The triage rubric, saved as `/triage`

Scored the candidates the analysis surfaced:

| Candidate | Impact | Reach | Effort | Confidence | 
|---|---|---|---|---|
| Make match rate trustworthy | High | High (all PMs) | Medium | CONFIRMED x3 sources |
| Failure reason on failed runs | High | Medium | Small | CONFIRMED cause |
| Retry confirmation / no dupes | Medium | Medium | Small | CONFIRMED cause |
| Onboard CS reps | Low now | Low | Medium | ASSUMED, verify first |

Top of the list: match-rate trust, then the two cheap Retry fixes. CS onboarding is parked
with a "verify first" flag, not a no. The same rubric is now saved as a `/triage` command
in your workspace, so next week you can run `/triage` on any list, escalations, feature
requests, a backlog, and get the same honest ranking.

---

## 4. The next opportunity (`next-opportunity.md`)

**The opportunity.** Solutions PMs rely on the Activation Run Monitor but don't trust its
most important number, the match rate, so they still open the destination to check it by
hand. Making that number trustworthy, showing its source and timing, would deliver the
feature's original promise: catch a failure and act without leaving the screen.

**The evidence.** Match-rate distrust shows up in the funnel behavior (they leave to
double-check), in two independent PM quotes, and in two of five escalations, same root
cause. *(CONFIRMED across three sources.)* That it's the single biggest blocker is
INFERRED. Whether fixing it changes behavior is still ASSUMED, which is what the validated
read above, and a real conversation with a few PMs, are for.

**Why now.** The feature already has committed users; this is the thing standing between
"nice to have" and "saves me a step every day."

**What a PRFAQ would need.** Where does the match-rate number actually come from, and why
does it disagree with the destination? What would "trustworthy" look like to a PM, a
source, a timestamp, a confidence range? Is it worth engineering time versus the two
cheaper Retry fixes? Answer those three and you have the start of a Session 1 PRFAQ. That
is the loop closing: this session's last artifact is the next session's first input.

---

The bar isn't a perfect analysis. It's that nothing is stated as more certain than it is,
the agent traffic didn't fool you, and a leader could act on the "So what" without being
misled. That's what the L1 acceptance-criteria template checks.
