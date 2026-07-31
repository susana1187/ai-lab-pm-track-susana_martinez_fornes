# Rules: cross-media-intelligence

Seeded by the Session 1 `/learn` run, from the XMI Refresh Agent PRFAQ (`prfaq-xmi-refresh-agent.md`). First run — mostly HYPOTHESIS, nothing CONFIRMED yet.

## Rules

- **HYPOTHESIS:** Claims involving a specific SLA or turnaround number (e.g. the Datalinx 4–6 day → 1 day mapping claim) need a named source or commitment before they can anchor a PRFAQ's headline metric — treat "aspirational goal" and "confirmed dependency" as distinct until verified. — *Evidence: red-team on Assumption 2 found the 1-day Datalinx figure had no named confirmation.*
- **HYPOTHESIS:** For agent/copilot features aimed at internal ops users (TSOLs), the automate-vs-approve boundary is the first design question to resolve — UI, trust, and scope decisions all cascade from it. — *Evidence: this surfaced independently in both the CLAUDE.md open questions and the PRFAQ hand-off check as the single biggest blocker to a build-ready spec.*
- **HYPOTHESIS:** When a requirements doc names an explicit "known limitation" (here: the agent doesn't guide problem-solving after detecting an anomaly), treat it as a red-team-worthy assumption, not just a footnote — it tends to be where the core value claim is weakest. — *Evidence: this became the strongest devil's-advocate finding in the red-team step.*

## Rejected patterns

*(none yet)*
