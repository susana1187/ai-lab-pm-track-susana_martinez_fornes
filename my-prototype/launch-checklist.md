# Launch-Prep Checklist: TSOL Triage View (XMI Refresh Agent)

Tailored to this feature: an internal MCS screen used by LiveRamp TSOLs (not customer-facing), aggregating Clean Room QA, report configuration, and BQA status across customer XMI reports.

## Quality & readiness
- [ ] No high-severity bugs against `evals.md`'s 8 checks (empty state, cross-customer data bleed, severity contrast, no real actions wired)
- [ ] Logging/alerting for the three upstream integrations (Clean Room QA, report config source, BQA) so a silent pipeline failure doesn't just show a stale or blank triage view
- [ ] Critical workflow tested end to end: TSOL logs in → sees anomalies → clicks through to detail — with real (not mock) data from all three sources
- [ ] Confirm the Datalinx SLA dependency is resolved or explicitly descoped before this ships as claiming a "5-day SLA" — otherwise the feature could ship functional but not deliver the stated value

## Security & Data Ethics
- [ ] **Security review** (always required) — this screen surfaces customer report data (Subway, Citi, Intuit, Wayfair, etc.) to internal TSOLs; confirm access is scoped so a TSOL only sees customers they're authorized to manage, not all customers
- [ ] **Data Ethics approval** — customer data is involved (QA anomalies and report data tied to named customers); needs a Data Ethics check even though this is an internal tool, not customer-facing
- [ ] Confirm no PII/sensitive customer data is exposed in the anomaly detail panel beyond what's operationally necessary

## Naming & legal
- [ ] **CAKE review** (always required) — full review or checkpoint, TBD with Ops
- [ ] Product Naming sign-off — "XMI Refresh Agent" / "TSOL Triage View" naming isn't yet confirmed as final product naming
- [ ] Standard Contract Language with Legal — likely n/a, this is an internal ops tool with no customer-facing contract terms, but confirm with Legal given the Datalinx third-party dependency
- [ ] AI-CAKE review — n/a today (this screen is display-only, no AI decision-making); revisit if a future phase adds the agent's automation/reasoning layer (Session 1's open questions)

## Pricing & packaging
- [ ] Does this change what we sell? — Likely no directly; it's an internal efficiency tool. But the PRFAQ notes token-based customers may pay a premium for higher-frequency reporting this tool enables — flag to Jack Foster whether that's priced separately
- [ ] SKU needed? — Probably n/a for this internal screen itself; possible SKU implication for the faster-cadence reporting it unlocks (open question, not this feature directly)

## Go-to-market & enablement, pre-sales
- [ ] Who needs to know before it goes out: TSOP leadership (per PRFAQ, they adopt this for production next quarter), CSE team (shadow-client pilot users)
- [ ] PMM brief — likely n/a, this is an internal tool with no external launch; confirm with Jack
- [ ] Sales enablement/training — n/a for this internal tool directly; may inform sales conversations about faster-cadence reporting capability, worth a one-line mention to sales enablement if that becomes a sellable claim

## Go-to-market & enablement, post-sales
- [ ] CSM enablement — n/a directly (TSOLs, not CSMs, use this); confirm whether CSMs need awareness that reporting turnaround is expected to improve
- [ ] Support readiness — internal support path for TSOLs if the triage view itself breaks or shows stale data (who do they page?)
- [ ] Onboarding — a short walkthrough/training for TSOLs and TSOPs before rollout, since this changes their existing manual process

## Availability & launch stage
- [ ] Global Product Availability — n/a, internal tool, no customer-facing availability gate
- [ ] Launch stage: aiming at **Invite Only** first, per the PRFAQ's own rollout plan (CSE team shadow-client pilot this quarter, TSOPs production adoption next quarter) — matches Invite Only's intent as a small, controlled first group

## Measurement
- [ ] Track average services hours per standard XMI report delivery (the PRFAQ's own headline KPI) before and after rollout
- [ ] Track time-to-identify-blocker for TSOLs using the screen (the metric from `validation-plan.md`) as an early signal, not just the eventual SLA outcome
- [ ] This becomes Session 4 territory once live: instrumenting real usage to see if the "single glance" trust bet actually held up in production, not just in the moderated walkthrough

## Notes for the parking-lot workshop
- Who signs off on "Not yet" vs. "build it" build decisions like the one in `validation-plan.md` isn't a settled process today — noted, not resolved here.
- Where TSOL-facing internal tools like this get their own lightweight launch process (vs. the full customer-facing gate list above) is an open question; several items above are marked n/a somewhat provisionally and would benefit from an Ops-defined "internal tool" launch template.
