# V1 task breakdown

Status values: `reused`, `complete`, `in-progress`, `planned`, `blocked`.

## Foundation inherited from SaaSWeave

These capabilities already exist and are reused rather than rebuilt:

- **BASE-001** monorepo + pnpm workspace — `reused`
- **BASE-002** CI/format/lint/type/build/test gates — `reused`
- **BASE-003** PostgreSQL + Drizzle migrations — `reused`
- **BASE-004** Redis + BullMQ workers/schedules — `reused`
- **BASE-005** Better Auth + workspaces/roles/API keys — `reused`
- **BASE-006** webhooks/audit logs/usage/admin — `reused`
- **BASE-007** S3/MinIO + local storage — `reused`
- **BASE-008** structured logging/metrics/health — `reused`
- **BASE-009** Docker Compose + Coolify deployment — `reused`
- **BASE-010** backup/restore and security CI baseline — `reused`

## V1.0 Product foundation

- **V1-000** Rebrand SaaSWeave product identity to AgentSurf — `in-progress`
- **V1-001** Import full AgentSurf product documentation — `in-progress`
- **V1-002** Define stable FR/NFR/BR IDs and traceability — `in-progress`
- **V1-003** Create `PROGRESS.md` task ledger — `in-progress`
- **V1-004** Define execution-domain contracts — `planned`
- **V1-005** Define browser/model/agent package boundaries — `planned`

## V1.1 Data and control plane

- **V1-010** AgentSurf run/task schema + migration — `planned`
- **V1-011** Run state transition service — `planned`
- **V1-012** Run API contracts and OpenAPI/oRPC surface — `planned`
- **V1-013** Run create/get/list/cancel/retry procedures — `planned`
- **V1-014** BullMQ run dispatch + lease/idempotency protocol — `planned`
- **V1-015** Agent worker readiness + capacity reporting — `planned`

## V1.2 Browser runtime

- **V1-020** `BrowserBackend` interface — `planned`
- **V1-021** local Playwright/Chromium backend — `planned`
- **V1-022** typed navigate/click/type/select/wait/scroll actions — `planned`
- **V1-023** observation/snapshot contract — `planned`
- **V1-024** upload/download handling — `planned`
- **V1-025** screenshot/artifact capture — `planned`
- **V1-026** cancellation/browser cleanup — `planned`
- **V1-027** deterministic browser fixture E2E suite — `planned`

## V1.3 Agent and model runtime

- **V1-030** agent step protocol — `planned`
- **V1-031** `ModelProvider` interface — `planned`
- **V1-032** OpenAI adapter — `planned`
- **V1-033** Anthropic adapter — `planned`
- **V1-034** Gemini adapter — `planned`
- **V1-035** OpenAI-compatible/Ollama adapter — `planned`
- **V1-036** bounded agent loop — `planned`
- **V1-037** structured-output validator/repair — `planned`
- **V1-038** error classification — `planned`
- **V1-039** golden agent task suite — `planned`

## V1.4 Profiles, policy and storage

- **V1-040** browser-profile schema/encryption — `planned`
- **V1-041** profile lease/load/save — `planned`
- **V1-042** AgentSurf artifact driver over existing storage package — `planned`
- **V1-043** run artifact retention/cleanup — `planned`
- **V1-044** URL/private-network/redirect policy — `planned`
- **V1-045** secret/log redaction for browser runs — `planned`

## V1.5 Product surfaces

- **V1-050** dashboard run list/detail — `planned`
- **V1-051** new-run screen — `planned`
- **V1-052** model/provider settings — `planned`
- **V1-053** browser-profile settings — `planned`
- **V1-054** terminal run webhook events using existing webhook system — `planned`
- **V1-055** TypeScript SDK — `planned`
- **V1-056** examples/recipes — `planned`

## V1.6 Hardening/release

- **V1-060** crash/lease recovery — `planned`
- **V1-061** concurrency/resource limits — `planned`
- **V1-062** SSRF/private-network security tests — `planned`
- **V1-063** acceptance/load/reliability suites — `planned`
- **V1-064** Chromium-enabled Docker production profile — `planned`
- **V1-065** backup/restore verification for new run/profile tables — `planned`
- **V1-066** install/upgrade/release docs — `planned`
- **V1-067** V1 release candidate gate — `planned`

## Execution order

`V1-000 → 001 → 002 → 003 → 004 → 005 → 010 → 011 → 012 → 013 → 014 → 020 → 021 → 023 → 022 → 025 → 026 → 031 → 032 → 035 → 030 → 036 → 037 → 038 → 027 → 039 → 040 → 041 → 042 → 043 → 044 → 045 → 015 → 050 → 051 → 052 → 053 → 054 → 055 → 056 → 060 → 061 → 062 → 063 → 064 → 065 → 066 → 067`
