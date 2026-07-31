# /create-prfaq

Generate a PRFAQ, the Amazon working-backwards artifact, from a one-line product question. Output is a future-dated press release plus an internal FAQ. The 4-field red-team on the top three assumptions is a separate pass; see [`/red-team-prd`](red-team-prd.md).

<!-- ADAPT -->
When generating PRFAQs, default to:
- customer language: `<who you're writing for, e.g., "enterprise marketers running multi-channel campaigns">`
- launch date placeholder: roughly six months from today
- house tone: short sentences, concrete numbers, no marketing fluff
- always include: per-unit economics, dependencies, assumptions, software-class call
<!-- /ADAPT -->

## Prompt

Product question: whatever the user typed after the slash command in this same message.

Use the Amazon PRFAQ method (Bryar & Carr, *Working Backwards*) to turn the question above into a future-dated PRFAQ.

Before generating, ask me each question below **one at a time**. Wait for my answer to each before asking the next. Do not batch the questions. *(Iterative clarifying questions produce a noticeably tighter brief than batched ones.)*

1. **Who is the customer?** (one specific persona, not "users")
2. **What is the headline?** (one sentence the press would run with)
3. **When does it launch?** (a future date, even a rough one)
4. **What class of software is this?** (personal tool / team beta / supported internal product / customer-facing; each class needs a different acceptance bar)

Then produce, in this order:

### Press release

About one page. Format:

```
SEATTLE, <launch date>. LiveRamp today announced <headline>.

<one-paragraph problem statement from the customer's POV>

<one-paragraph solution description, named feature/product>

<customer quote, invent a realistic one>

<one-paragraph call to action, how the customer gets started>
```

Write in past tense as if the launch already happened. No adjectives that aren't earned by a concrete claim.

### Internal FAQ

Four mandatory questions, in this order:

1. **What are the per-unit economics?** (revenue or cost saved per use; rough numbers are fine)
2. **What does this depend on (technical, organizational, regulatory)?**
3. **What assumptions must be true for this to succeed?** (list the load-bearing ones; do not yet test them, the next pass is `/red-team-prd`)
4. **What class of software is this?** (personal tool / team beta / supported internal product / customer-facing, name one and own the bar it implies)

After producing both sections, point out the single weakest claim in the press release and ask if I want to address it before I share. Then suggest running `/red-team-prd` on the top three assumptions from the internal FAQ.

## Sources

- PRFAQ method: Bryar & Carr, *Working Backwards* (Amazon).
- Software-class question: Nate B Jones, *Cheap software made your PM job harder* (May 2026). The full production-class ladder is Session 4 material; for now we just name the bar your PRFAQ implicitly assumes.
- Iterative-clarifying-questions discipline: Addy Osmani, *My LLM Coding Workflow Going Into 2026*.
