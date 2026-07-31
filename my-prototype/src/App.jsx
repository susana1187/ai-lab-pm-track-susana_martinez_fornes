import { useState } from 'react'
import {
  Motif,
  Box,
  Stack,
  Typography,
  Chip,
  Paper,
  Divider,
  Drawer,
  IconButton,
} from '@liveramp/motif'
import { RichDataTable } from '@liveramp/rich-data-table'

// NOTE: the /verify run flagged the earlier @mui/material Table sub-component
// import as HIGH drift (non-allowlisted). The brief calls for the real Motif
// data table (@liveramp/rich-data-table, which IS allowlisted) instead of a
// hand-built table, so both tables below use RichDataTable with columns/rows.

// Mock data — TSOL Triage View
const anomalies = [
  {
    id: 'a1',
    customer: 'Subway',
    report: 'Weekly XMI Refresh',
    severity: 'HIGH',
    summary: 'Publisher mapping gap detected in upstream impression feed.',
    detail:
      'The last daily Clean Room QA run found 3 unmapped publisher IDs in the impression feed for the Subway weekly refresh. This will block input summaries until resolved in the Value Mapping App.',
  },
  {
    id: 'a2',
    customer: 'Citi',
    report: 'Monthly XMI Refresh',
    severity: 'MED',
    summary: 'Minor volume drop (8%) vs. prior period in one data asset.',
    detail:
      'One upstream data asset came in 8% below the prior monthly period. Not blocking, but worth a quick sanity check before running BQA.',
  },
  {
    id: 'a3',
    customer: 'Intuit',
    report: 'Weekly XMI Refresh',
    severity: 'LOW',
    summary: 'Report plan config unchanged since last successful run.',
    detail:
      'No anomalies found. Config matches the last successful run; this report plan is ready to clone and refresh.',
  },
]

const reportConfigs = [
  { customer: 'Subway', plan: 'Weekly XMI Refresh', status: 'Needs mapping fix' },
  { customer: 'Citi', plan: 'Monthly XMI Refresh', status: 'Config drift' },
  { customer: 'Intuit', plan: 'Weekly XMI Refresh', status: 'Ready to run' },
  { customer: 'Wayfair', plan: 'Weekly XMI Refresh', status: 'Ready to run' },
]

const bqaStatus = [
  { customer: 'Subway', report: 'Weekly XMI Refresh', result: 'Blocked' },
  { customer: 'Citi', report: 'Monthly XMI Refresh', result: 'Pending' },
  { customer: 'Intuit', report: 'Weekly XMI Refresh', result: 'Passed' },
  { customer: 'Wayfair', report: 'Weekly XMI Refresh', result: 'Passed' },
]

const severityChipColor = {
  HIGH: 'error',
  MED: 'warning',
  LOW: 'success',
}

// Motif theme tokens, not hardcoded hex, per the brief's "no hardcoded hex colors" rule.
const severityChipTextColor = {
  HIGH: 'common.white',
  MED: 'text.primary',
  LOW: 'text.primary',
}

export default function App() {
  const [selectedAnomaly, setSelectedAnomaly] = useState(null)

  return (
    <Motif>
      <Box sx={{ maxWidth: 900, mx: 'auto', p: 4 }}>
        <Stack spacing={1}>
          <Typography variant="h1">XMI Report Health</Typography>
          <Typography variant="body1" color="text.secondary">
            A single view of QA anomalies, report configuration, and BQA status across your active XMI reports.
          </Typography>
        </Stack>

        {/* QA Anomalies — most prominent section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            QA Anomalies (last 7 days)
          </Typography>
          <Stack spacing={1}>
            {anomalies.map((a) => (
              <Paper
                key={a.id}
                variant="outlined"
                onClick={() => setSelectedAnomaly(a)}
                sx={{ p: 2, cursor: 'pointer' }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1">
                    {a.customer} — {a.report}
                  </Typography>
                  <Chip
                    label={a.severity}
                    color={severityChipColor[a.severity]}
                    variant="filled"
                    size="small"
                    sx={{
                      color: severityChipTextColor[a.severity],
                      '& .MuiChip-label': { color: severityChipTextColor[a.severity] },
                    }}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {a.summary}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Report configuration */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Report Configuration
          </Typography>
          <RichDataTable
            columns={[
              { field: 'customer', headerName: 'Customer', flex: 1 },
              { field: 'plan', headerName: 'Report Plan', flex: 1 },
              { field: 'status', headerName: 'Status', flex: 1 },
            ]}
            rows={reportConfigs.map((r, i) => ({ id: i, ...r }))}
            height={220}
            hideSettingsMenu
            hideSelectAllCheckbox
            disableRowSelectionOnClick
          />
        </Box>

        {/* BQA status */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Boosted QA (BQA) Status
          </Typography>
          <RichDataTable
            columns={[
              { field: 'customer', headerName: 'Customer', flex: 1 },
              { field: 'report', headerName: 'Report', flex: 1 },
              { field: 'result', headerName: 'Result', flex: 1 },
            ]}
            rows={bqaStatus.map((b, i) => ({ id: i, ...b }))}
            height={220}
            hideSettingsMenu
            hideSelectAllCheckbox
            disableRowSelectionOnClick
          />
        </Box>

        {/* Side panel for anomaly detail */}
        <Drawer anchor="right" open={Boolean(selectedAnomaly)} onClose={() => setSelectedAnomaly(null)}>
          <Box sx={{ width: 360, p: 3 }}>
            {selectedAnomaly && (
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">
                    {selectedAnomaly.customer} — {selectedAnomaly.report}
                  </Typography>
                  <IconButton onClick={() => setSelectedAnomaly(null)} aria-label="Close">
                    ✕
                  </IconButton>
                </Stack>
                <Chip
                  label={selectedAnomaly.severity}
                  color={severityChipColor[selectedAnomaly.severity]}
                  variant="filled"
                  size="small"
                  sx={{
                    width: 'fit-content',
                    color: severityChipTextColor[selectedAnomaly.severity],
                    '& .MuiChip-label': { color: severityChipTextColor[selectedAnomaly.severity] },
                  }}
                />
                <Divider />
                <Typography variant="body2">{selectedAnomaly.detail}</Typography>
              </Stack>
            )}
          </Box>
        </Drawer>
      </Box>
    </Motif>
  )
}
