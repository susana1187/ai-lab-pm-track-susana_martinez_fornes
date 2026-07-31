# Workspace Template

The starter folder that PMs, designers, researchers, and tech writers copy into `~/pm-workspace/` (or `~/work-workspace/`, the path name doesn't matter) at the start of Session 1.

## Layout

```
workspace-template/
├── README.md                   # this file
├── CLAUDE.md                   # audience-aware context-file template
├── notes/
│   └── README.md               # where /learn writes rules-<domain>.md
├── .cursor/
│   ├── commands/               # slash-command prompts for Cursor (mirror of .claude/commands/)
│   │   ├── explore.md
│   │   ├── create-plan.md
│   │   ├── peer-review.md
│   │   ├── create-prfaq.md
│   │   ├── red-team-prd.md
│   │   ├── learn.md
│   │   ├── email-triage.md
│   │   ├── status-update.md
│   │   └── meeting-extract.md
│   └── rules/
│       └── router.mdc          # alwaysApply rule that @-references CLAUDE.md (Cursor's editor doesn't auto-read CLAUDE.md)
└── .claude/
    └── commands/               # same 9 prompts for Claude Code
        ├── explore.md
        ├── create-plan.md
        ├── peer-review.md
        ├── create-prfaq.md
        ├── red-team-prd.md
        ├── learn.md
        ├── email-triage.md
        ├── status-update.md
        └── meeting-extract.md
```

The `.cursor/commands/` and `.claude/commands/` directories are intentionally identical mirrors, with one difference: the Cursor copies have `$ARGUMENTS` removed from prompt bodies (Cursor doesn't substitute it; Claude Code does). Each editor reads its own namespace; we ship both so participants in either track get the same `/explore` / `/create-prfaq` / `/red-team-prd` slash commands without conversion. The `.cursor/rules/router.mdc` file is what makes Cursor's editor load `CLAUDE.md` (see "How it's used" below).

## How it's used

In Session 1, you copy this whole folder to `~/pm-workspace/`, then:

1. Open `CLAUDE.md` and fill in **only the role block that fits you** (Foundation PM / Solution PM / Designer-Researcher-TechWriter). Delete the others. Fill in real beliefs, people, open questions, and artifact URLs.
2. Edit the `<!-- ADAPT -->` block in each prompt to taste. In either editor, the prompt files live at the same relative path under whichever commands directory you use.
3. In **Claude Code** (running from `~/pm-workspace/`), invoke prompts with the slash-command shortcut: `/explore`, `/create-prfaq`, `/red-team-prd`, etc. Claude Code reads `.claude/commands/`.
4. In **Cursor** (with `~/pm-workspace/` open as the folder), open Composer (Cmd+I / Ctrl+I) and type `/` to surface the same 9 commands from `.cursor/commands/`. Cursor's editor does **not** auto-read `CLAUDE.md` on its own (only the Cursor CLI does); the `.cursor/rules/router.mdc` rule in the template handles that by `@`-referencing `CLAUDE.md` with `alwaysApply: true`. If you'd rather drop the shim, rename `CLAUDE.md` to `AGENTS.md` (Cursor's documented project-root file). We keep the `CLAUDE.md` name for parity with Claude Code participants.

If you edit a prompt in only one of the two directories, the other goes stale. That's fine if you only use one editor. If you use both, copy your edit across.

## How to update this template

When you find a prompt is consistently useful across PMs and worth shipping, edit the file in both `.cursor/commands/` and `.claude/commands/`, then ship via a PR. Keep the `<!-- ADAPT -->` block, that's where each person personalizes.

Avoid stuffing project-specific content into this template. Project-specific content belongs in your own `CLAUDE.md`. Shared structure and reusable prompts belong here.

## On the prompt set

The 6 core prompts (`explore`, `create-plan`, `peer-review`, `create-prfaq`, `red-team-prd`, `learn`) plus the 3 side-quest prompts (`email-triage`, `status-update`, `meeting-extract`) total 9. The set is adapted from the LiveRamp Prototype-in-a-Box (the internal collection of reusable Claude prompts maintained by the AI Enablement team), with two prompts (`create-prfaq` and `red-team-prd`) added specifically for the PRFAQ workflow that anchors Session 1's Block 2.
