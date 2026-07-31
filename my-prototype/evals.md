# Eval Set: TSOL Triage View

Base requirements for testing this screen. 5–8 checks, covering the main job and its obvious failure modes.

## Check 1: HIGH-severity anomaly is spotted at a glance
- **Pass when**: The QA Anomalies section renders first (most prominent), and any HIGH-severity anomaly is visually distinguishable (e.g. a red severity tag) without scrolling or clicking.
- **Fails if**: Severity isn't visually distinguishable, or the anomalies section isn't the first/most prominent thing on the screen.

## Check 2: Anomaly detail opens without side effects
- **Pass when**: Clicking any anomaly row opens a detail view (side panel) showing the fuller description, and closing it returns to the same triage view unchanged.
- **Fails if**: Clicking does nothing, navigates away from the screen, or triggers any action beyond displaying detail (e.g. an automatic "resolve" or "run" action).

## Check 3: Config and BQA status stay in separate, correctly attributed sections
- **Pass when**: Report Configuration and BQA Status render as two distinct sections, and a given customer's row in one table shows the correct status/result matching that customer (not a different customer's data).
- **Fails if**: The two data types are merged into one table/feed, or a customer's status appears against the wrong customer's row.

## Check 4: Empty state — no anomalies
- **Pass when**: If there are zero QA anomalies in the last 7 days, the QA Anomalies section clearly states there are none (e.g. "No anomalies in the last 7 days"), rather than rendering an empty or broken-looking section.
- **Fails if**: The section renders blank with no explanation, or looks like a loading/error state.

## Check 5: Multiple customers/reports don't bleed into each other
- **Pass when**: With 4+ customers in the mock data (Subway, Citi, Intuit, Wayfair), each customer's anomalies, config, and BQA rows are distinct and correctly labeled by customer and report name.
- **Fails if**: Two customers' data is merged, duplicated, or mislabeled under the wrong customer name.

## Check 6: Severity is unambiguous, including for edge colors
- **Pass when**: HIGH, MED, and LOW severities are each visually distinct (color and label), and text stays legible against its background color at every severity level (including the red HIGH tag, which needs light text for contrast).
- **Fails if**: Any severity tag has low-contrast or hard-to-read text, or two different severities look visually identical.

## Check 7: No real actions are wired up
- **Pass when**: No control on the screen triggers a real backend call, a report run, or an automated resolution — every action is either informational (opens detail) or explicitly mocked.
- **Fails if**: Any button/click appears to kick off a real report run, call the Value Mapping App, or resolve an anomaly automatically (per the brief's explicit "must not build" boundary).

## Check 8: Screen stays within its one-screen scope
- **Pass when**: The screen has no navigation to other screens, no login flow, and no controls for report-plan cloning, Datalinx mapping, or Habu Intel output.
- **Fails if**: Any of the above appear, even as placeholders or disabled controls.
