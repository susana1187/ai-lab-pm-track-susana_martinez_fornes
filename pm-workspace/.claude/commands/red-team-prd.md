# /red-team-prd

Run the 4-field red-team on the load-bearing assumptions in a PRFAQ (or any product doc). Forces each assumption into a falsifiable shape with a test you could actually run this week.

<!-- ADAPT -->
When red-teaming, default to:
- number of assumptions to extract: top 3 (the ones whose failure would kill the bet)
- evidence horizon: 5 business days (the working week)
- tone: skeptical, not destructive. The point is to find what would actually go wrong, not to win an argument.
<!-- /ADAPT -->

## Prompt

Target document: $ARGUMENTS

Invoke with the file as an argument, e.g. `/red-team-prd @prfaq-connector-store.md`. If no file is given, ask which PRFAQ to read before proceeding, do not guess.

Read the document, then:

1. Extract the **top three load-bearing assumptions** from the document. Load-bearing means: if this assumption is wrong, the bet fails. Skip nice-to-have or obvious assumptions; focus on the ones the author would not want to be wrong about.

2. For each assumption, produce the 4-field red-team:

   - **Claim:** restate the assumption as a one-sentence belief.
   - **Fails if:** the specific, measurable condition that would prove the claim false. Not "if customers don't like it", that's not measurable. Closer to "if fewer than 30% of activated customers return in 7 days."
   - **Evidence this week:** what data could be collected in the next 5 business days that would update the belief. Name the data source (specific Jira filter, specific Gong calls, specific FullStory funnel, specific 3 customer interviews). If "Evidence this week" comes out vague, the assumption isn't yet testable, go back and rephrase the assumption until it is.
   - **Cheapest test:** the smallest experiment that would change the decision. Measured in hours, not weeks. If the cheapest test takes more than a week, the assumption is probably composite, split it.

3. After producing the three red-teams, name the **strongest fourth assumption I missed**. The one you would attack if you wanted to kill this bet. One line plus its own 4-field schema.

4. End with a one-line verdict: "this PRFAQ is ready to share" / "this PRFAQ has one fixable weakness above" / "this PRFAQ has a load-bearing assumption that needs work before sharing."

## Why this format

The 4-field schema turns each assumption from a hope into a contract. The Evidence-This-Week column is the one that does most of the work, it forces the assumption to be checkable on your actual calendar, not in some hypothetical future quarter. If you cannot fill all four fields for an assumption, you do not yet understand it.

The point of running this on a Tuesday is to kill a bad bet privately, instead of having it killed publicly in front of leadership a quarter later.

## Sources

- 4-field schema and the "kill a bet on a Tuesday" framing: Pawel Huryn, *PM Skills 2.0: Red-Team Your Roadmap, Then Check the Code Before You Ship* (Product Compass, 2026). The original ships as a Claude skill in `phuryn/pm-skills`; this file is a lightweight in-repo version PMs can use without installing the marketplace.
- The pre-mortem-vs-red-team distinction (pre-mortem imagines failure; red-team attacks live assumptions): same source.
