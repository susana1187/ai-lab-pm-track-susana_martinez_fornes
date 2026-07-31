# Prototype Starter

A ready-to-run React + Motif app. You don't build this; the agent does. Your job
is to run it and look at it in the browser.

## Run it

From a terminal, inside this folder:

```bash
npm install     # one time, downloads the pieces (needs LiveRamp VPN; takes a few minutes)
npm run dev      # starts the local preview
```

`npm install` takes a few minutes the first time, that's normal, not stuck.
`npm run dev` then prints a link like `http://localhost:5173`. Open it in your
browser. You should see a page that says "Your prototype starts here" with a
**green** LiveRamp-style button. That means it works.

Leave `npm run dev` running while you work. Every time the agent changes the
code, the browser updates on its own.

To stop it, click the terminal and press `Ctrl + C`.

## What's in here

- `src/`: the prototype's code. `src/App.jsx` is the screen. The agent edits this.
- `product_context/`: where you put your PRFAQ and your brief (read the README there).
- `reference_designs/`: optional: a picture of a design to match.
- `verify.sh`: a checker that flags anything that drifted off Motif. The lab runs it.
- `.claude/commands/` and `.cursor/commands/`: the agent shortcuts (`/explore`,
  `/create-plan`, `/build`, `/verify`, `/agent-test`) the lab walks you through.
- `.cursor/mcp.json`: the Motif connection for Cursor, already set up so you don't
  have to edit it.

## If `npm install` fails

The Motif pieces come from LiveRamp's internal package registry, which needs the
**LiveRamp VPN**. Connect to the VPN and run `npm install` again. If it still
fails, ask in **#motif** on Slack.
