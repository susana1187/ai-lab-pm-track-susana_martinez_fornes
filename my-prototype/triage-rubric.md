# Triage Rubric

Scores any candidate work item on four things:

- **Impact** — how much it helps, and whom (Low / Med / High, one line of why).
- **Reach** — how many people/accounts it touches (Low / Med / High).
- **Effort** — rough size of the work (S / M / L).
- **Confidence** — how solid the evidence for doing this is, reusing the CONFIRMED / INFERRED / ASSUMED labels from the telemetry analysis. Anything ASSUMED gets a "verify first" flag, not an automatic no.

## Applied to this month's candidates

Pulled from `telemetry-analysis.md`, `validation-notes.md`, and `telemetry/escalations.md`.

| # | Item | Impact | Reach | Effort | Confidence | Rank |
|---|------|--------|-------|--------|------------|------|
| 1 | Fix the 24-hour stale-data refresh gap (root cause of 3/8 escalations + the skeptic's 70%-re-verify quote) | **High** — directly undermines the feature's core trust bet | High — affects every user, every session | M — a refresh-interval/architecture fix, not a rewrite | **INFERRED**, corroborated two independent ways (escalations + validation-notes code check found no freshness UI at all) | **1** |
| 2 | Add a "last refreshed" / data-freshness indicator to the UI | High — directly addresses why cautious users re-verify elsewhere, per validation-notes | High — every session | S — a UI addition, no new backend logic needed | **CONFIRMED** (validation-notes directly traced this gap in the actual code) | **2** |
| 3 | Add tooltips/glossary for ambiguous status labels (2/8 escalations: #851, #878) | Med — real but narrower friction than stale data | Med — affects users who hit those specific statuses | S — copy + tooltip, cheap | CONFIRMED (2 real escalations) | 3 |
| 4 | Fix BQA section timeout for large reports (>10K rows) | Med — blocks a subset of large-report customers | Low-Med — only large-report accounts | M — needs pagination/incremental load | CONFIRMED (1 escalation, #871), flagged as a scaling risk | 4 |
| 5 | Fix account-permission sync gap (assigned accounts missing from dropdown) | Med — blocks specific TSOLs from seeing their own accounts | Low — affects only mis-synced accounts | M — platform-team dependency, not fully in this team's control | CONFIRMED (1 escalation, #885) | 5 |
| 6 | Instrument real event tracking (time-to-click, section views) before trusting any usage metric again | High — nothing else on this list can be measured for real without it | High — foundational, affects every future analysis | M | **CONFIRMED as a gap** (validation-notes: no analytics code exists in `src/App.jsx` at all) | **2 (tie)** |
| 7 | Validate or drop the customer-segmentation framing (High-Velocity vs. Standard) | Low until verified — currently has zero basis in code or any real system per validation-notes | Unknown | S to check, could be M+ to build if it turns out to be real | **ASSUMED — verify first.** Two independent persona checks found no segment concept anywhere in the code or mock data. | 6, but flagged do-not-build-on until checked |
| 8 | Add first-visit onboarding affordance to close the new-vs-experienced time-to-click gap | Med — real, consistent pattern across percentiles per the analysis | Med — mainly benefits new/infrequent users | S | INFERRED (pattern holds across median and p90, but based on synthetic data) | 7 |
| 9 | Deprioritize further design investment in Report Config / BQA sections | Low-risk to defer, not itself a build item | N/A | N/A (a decision, not a build) | **ASSUMED**, and validation-notes found the "engagement" metric behind this isn't even measurable as currently built — do not act on this until instrumentation (#6) exists | Hold — re-evaluate after #6 |

## Top pick

**#1 (fix stale-data refresh gap) and #2 (add a freshness indicator)** are the clear top two — both trace to the same root risk (the unproven trust assumption from Session 1's PRFAQ), both are CONFIRMED-or-close, and #2 is genuinely cheap (S effort) for a high-impact, high-reach fix. **#6 (real instrumentation)** ties for priority not because it's exciting, but because half the other items on this list (7, 9, and really the whole telemetry-analysis exercise) can't be trusted or re-run for real without it.

**Do not act on #7 or #9 yet** — both rest on ASSUMED evidence that a code-level check already showed doesn't currently exist. That's the rubric doing its job: ASSUMED isn't an automatic no, but it is an automatic "verify before you spend effort here."
