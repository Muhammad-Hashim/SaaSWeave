# AgentSurf progress

Updated: 2026-10-07
Branch: `feat/agentsurf-v1-foundation`
Release target: V1

## Current

- **V1-000** Rebrand SaaSWeave → AgentSurf — **in progress**
- **V1-001** Import complete product documentation — **in progress**
- **V1-002** Stable FR/NFR/BR requirement set — **in progress**
- **V1-003** Progress/task tracking system — **in progress**

## Reused foundation

`BASE-001` through `BASE-010`: monorepo, CI, PostgreSQL/Drizzle, Redis/BullMQ, Better Auth/workspaces/API keys, webhooks/audit/admin, storage, observability, Docker/Coolify and backup/security baseline.

## Done

- Product thesis and V1/V2/V3 scope defined.
- Competitor/open-source research documented.
- Build-vs-reuse decision: build AgentSurf control/agent plane; reuse standard browser/runtime infrastructure.

## Next

1. Finish `V1-000..003`.
2. **V1-004** execution-domain contracts.
3. **V1-005** browser/model/agent package boundaries.
4. **V1-010** run/task database schema.

## Rules

Every PR updates this file. A task moves to `complete` only after tests/acceptance evidence pass. Requirement IDs must be referenced from code tests or PR description.
