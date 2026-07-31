# Workspace, Susana Martinez Fornes

> Update weekly. Specifics give useful answers; abstract bullets give abstract answers.

## Role and scope

I'm a Lead UX Designer at LiveRamp. I work across the XMI (Cross-Media Intelligence) Refresh Agent surface, embedded in the MCS UI. My partners are Jack Foster (PM), Martín Vargas-Vega, Mohana Bammidi, and Jayakumar Reddy Attur (engineering), and Max Handler (data science / QA).

## Current beliefs

- An AI XMI agent will be the central orchestrator pulling together the information and actions users need for high-frequency XMI report refreshes.
- Users will have a great experience if the system pulls Clean Room QA information, report configurations, and boosted QA output into one central place, so internal LiveRamp employees (TSOLs) can quickly identify issues.
- The system should let users update report configurations and kick off runs, with Report QA outputs surfaced as part of that process.

## People I'm actively talking to

- Jack Foster (Sr. Principal PM): overall product direction and roadmap for XMI
- Martín Vargas-Vega (Principal Engineer): backend architecture and orchestration
- Mohana Bammidi (Senior SDE): backend implementation
- Jayakumar Reddy Attur (Staff Full Stack Tech Lead): frontend + full-stack integration
- Max Handler (Staff TLM, SDE): data science / QA pipeline

## Open questions

1. What should the AI agent automate outright vs. surface for human review/approval before acting (e.g., kicking off a report run)?
2. What does the UI need to show for a TSOL to quickly diagnose an issue — Clean Room QA status, report config, boosted QA output all at once, or a drill-down flow?
3. What's the right interaction model for editing report configuration and triggering runs from within this central view — inline editing, a side panel, a guided flow?
4. How does the agent surface its own reasoning/actions (what it pulled together, why) so users trust it enough to act on its recommendations?

## Active artifacts

- Doc: `XMI Refresh Agent.md` (this workspace), draft PRFAQ with full workflow, target personas (XMI TSOLs), problem statements, and known limitations
- Figma: `<unknown yet>`
- Jira: `<unknown yet>`

## This week's focus

> Updated by the Session 1 sanity check and weekly thereafter.

Nail the automate-vs-approve UX boundary with Martín (Open Q1) — it gates every other design decision. Sketch a single-glance TSOL triage view combining CR QA, config, and boosted QA (Open Q2), and flag the "agent doesn't guide problem-solving" gap with Jack before it becomes a scope surprise.

## House rules

This file's job is to **route**, not to **store**. Detailed how-tos live in `.claude/commands/`. Domain knowledge lives in `notes/*.md`. CLAUDE.md describes what this project is, where things live, and what to do with new knowledge. Keep it under one screen.

When I ask a question, answer with what's in this file plus the linked artifacts first; tell me when you need to go beyond.

Default to specifics over generalities. If you'd write "we should consider X," write "we should X because Y" instead.

Flag confidence levels (CONFIRMED / INFERRED / ASSUMED) when you make a claim.

When you make a non-obvious recommendation, surface (a) the hardest judgment call you made, (b) one alternative you rejected and why, (c) what you're least confident about.

For long-running or looped workflows, name the cost before running.

## Self-improving knowledge

Before starting a new task in a familiar domain, review existing rules and hypotheses for that domain in `notes/rules-<domain>.md`. Apply rules by default. After my feedback, update the knowledge: add new rules, promote or demote hypotheses, add rejected patterns so I don't waste time retesting them next quarter.

Three knowledge types:
- **Rules:** facts I've confirmed; apply by default.
- **Hypotheses:** things I currently believe but haven't proven; track with the evidence I've collected; can be promoted to rules or demoted to rejected.
- **Rejected patterns:** things I've tried and ruled out; kept so I don't retest them.

The `/learn` command runs this pattern explicitly for a given domain.
