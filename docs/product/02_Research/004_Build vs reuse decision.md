# Build vs reuse decision

## Decision DEC-001

**Decision:** Build a new control plane and agent runtime, reuse standard browser infrastructure.

### Build
- API and UI;
- run/task state machine;
- queues and retry policy;
- model abstraction;
- artifact/audit pipeline;
- policies/permissions;
- self-host deployment UX.

### Reuse
- Playwright/Chromium for V1 local browser execution;
- PostgreSQL;
- Redis/BullMQ;
- S3-compatible storage;
- OpenTelemetry conventions;
- optional Stagehand/Steel integrations behind adapters.

### Rationale

A browser API by itself is already a crowded/open-source capability. The valuable product surface is orchestration, safety, observability and self-hosted agent execution.
