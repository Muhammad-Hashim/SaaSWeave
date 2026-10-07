# Traceability matrix

| Story | Requirements | Flow | Architecture | Acceptance |
|---|---|---|---|---|
| US-001 submit run | FR-001,2,10 | UC-001 | API, DB, queue, worker | AT-002 |
| US-002 schema output | FR-014,15 | E2E-001 | agent/model | AT-002,12 |
| US-005 inspect failure | FR-020,21,22 | E2E-003 | artifact/observability | AT-005,6 |
| US-006 cancel | FR-004 | UC-003 | worker lease/action loop | AT-011 |
| US-008 webhook | FR-023 | UC-001 | webhook queue | AT-013 |
| US-011 profile | FR-030..33 | UC-004 | profile storage/browser | AT-009,10 |
| US-012 network policy | FR-017 | E2E-004 | policy/browser | AT-007 |
| US-013 backup | — | — | deployment/storage | AT-014 |
