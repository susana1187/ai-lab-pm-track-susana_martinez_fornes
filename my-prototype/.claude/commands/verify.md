Run the drift checker on the prototype and help me read it.

1. Run `./verify.sh src/` in the terminal.
2. The script prints any spots where the prototype drifted off Motif, each marked
   HIGH, MED, or LOW with a one-line fix.
3. Explain the results to me in plain English. We are aiming for roughly 80% Motif,
   not perfection: fix the **HIGH** flags, look at the **MED** ones with me, and
   ignore **LOW** false positives (like a hex code that's actually an id, not a color).
4. For each HIGH flag, make the fix (swap the plain element for the Motif
   component the fix suggests, looking it up via the MCP), then run `./verify.sh src/`
   again so we can see the count go down.

Don't chase zero. Stop when the HIGH flags are gone and tell me where we landed.
