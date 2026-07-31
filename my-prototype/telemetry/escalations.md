# TSOL Triage View: Support Escalations (First Month Live)

> **⚠️ ASSUMED, NOT CONFIRMED — AI-Generated Data**
> 
> This escalation list is **entirely invented** based on the feature prototype and domain context from the Event Dictionary. These are *hypothetical* support tickets, not real customer reports or measurements. Use this as a template for what to monitor and what patterns might emerge post-launch, not as evidence of actual issues.

---

## Escalation Summary

| Ticket ID | Summary | Date Filed | Severity | Root Cause | Status |
|-----------|---------|------------|----------|-----------|--------|
| TSOL-2026-0847 | Anomalies marked resolved in Clean Room still appear as HIGH in triage view | July 5 | High | Data refresh interval: triage view cached on 24h refresh; Clean Room QA updates real-time. Async sync gap between systems. | Resolved (refresh interval reduced to 2h; backlog item to move to event-driven architecture) |
| TSOL-2026-0851 | "What does 'PENDING_MAP_REVIEW' status mean in Report Configuration?" | July 8 | Medium | Status label lacking inline documentation/tooltip; unclear workflow implications to TSOLs. | Resolved (tooltips added; status label glossary published to runbook) |
| TSOL-2026-0859 | Triage view missing ~12 anomalies from Acme Corp account spanning last 2 weeks | July 12 | Critical | Query filter logic bug: WHERE clause excluded anomalies from certain data types (enum mismatch in QA system). | Resolved (bug fix deployed; backfill query run for affected accounts) |
| TSOL-2026-0863 | Same issue as #847: stale anomalies not refreshing; TSOL wasted 90min re-verifying resolved gaps in Clean Room | July 14 | High | Same root cause as #847: 24-hour refresh window. Escalated as design pattern issue, not one-off. | Resolved (same fix as #847) |
| TSOL-2026-0871 | BQA status section hangs/timeout when loading triage view for large reports (>10K rows) | July 18 | Medium | BQA system query timeout; no pagination or incremental load in triage view's BQA fetch. Query optimization needed upstream. | Unresolved (in backlog; workaround: TSOL can filter by customer/report to reduce payload) |
| TSOL-2026-0878 | "Why is this report flagged 'FLAGGED_FOR_REVIEW' vs 'PENDING_MAP_REVIEW'? Which takes priority?" | July 22 | Medium | Related to #851: ambiguous/overlapping status labels without clear operational workflow hierarchy. | Resolved (status label glossary expanded; labels re-documented with decision tree) |
| TSOL-2026-0885 | Cannot see 3 assigned customer accounts in triage view dropdown, though they appear in main MCS account list | July 26 | High | Permission/data access layer: account assignment system not fully synced with triage view's authorization check. | Unresolved (identified as timing issue in async permission cache refresh; ticket open with platform team) |
| TSOL-2026-0892 | After clicking "refresh" button, stale anomalies persist; TSOL had to navigate away and return to clear cache | July 29 | High | Manual refresh button re-renders triage UI but does not trigger refresh of upstream Clean Room QA data fetch. Cascading root cause from #847/#863. | Unresolved (design review scheduled to determine whether button should be removed or wired to upstream refresh) |

---

## Pattern Analysis

### Repeated Root Cause: Stale Anomaly Data (Tickets #847, #863, #892)
Three escalations trace to the underlying gap between the triage view's 24-hour data refresh window and the real-time updates in the upstream Clean Room QA system. This pattern validates the Event Dictionary's red-team flag (#7: "TSOLs will re-verify manually") as an operational friction point in month one.

### Secondary Pattern: Status Label Ambiguity (Tickets #851, #878)
Confusion about Report Configuration status labels emerged as a workflow blocker. Both tickets reflect the same gap: the triage view surfaces status without sufficient inline context for TSOLs to act decisively.

### Unresolved (2):
- **#871**: BQA performance scaling — likely to resurface as data volume grows.
- **#885**: Permission sync — infrastructure-level issue dependent on platform team prioritization.

---

## Recommended Monitoring Focus

1. **Data freshness metrics** (Event #7 proxy): Track how often TSOLs navigate away from triage to Clean Room/MCS immediately after viewing an anomaly. High rate suggests the stale-data pattern persists.
2. **Status label misinterpretation**: Add UI event tracking (e.g., "hovered on status label," "clicked help icon for status") to detect where TSOLs are seeking clarification.
3. **BQA timeout rate**: Monitor BQA section load time by report size. #871 is a scaling leading indicator.
