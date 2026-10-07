# Functional requirements

## Run API

- **FR-001** Create run accepts goal, start URL, optional schema, model profile, browser profile reference, timeout and metadata.
- **FR-002** Create run returns immutable run ID and initial state.
- **FR-003** Get run returns state, timestamps, result/error and artifact references allowed to caller.
- **FR-004** Cancel run is idempotent.
- **FR-005** Retry creates a new run linked via `retry_of_run_id`.
- **FR-006** List runs supports time/state/task filtering and pagination.

## Execution

- **FR-010** Worker leases queued work with duplicate-execution protection.
- **FR-011** Worker creates a fresh browser context unless a profile is explicitly requested.
- **FR-012** Agent loop enforces `max_steps`, `max_duration` and model budget configuration.
- **FR-013** Every browser action is normalized into a typed action event.
- **FR-014** Structured output is validated against requested schema before success.
- **FR-015** Unknown/unrecoverable schema mismatch fails with `OUTPUT_SCHEMA_INVALID` rather than silently returning arbitrary JSON.
- **FR-016** Downloads are stored as artifacts and never automatically executed.
- **FR-017** Redirects are re-evaluated against URL/network policy.

## Artifacts/observability

- **FR-020** Run can store screenshots according to capture policy.
- **FR-021** Run stores final action summary, final URL and browser metadata.
- **FR-022** Logs redact configured secrets and known sensitive headers.
- **FR-023** Terminal state can trigger signed webhook delivery.

## Profiles

- **FR-030** Profile creation is explicit.
- **FR-031** Profile data is encrypted at rest when persisted.
- **FR-032** One run may lock a mutable profile to avoid concurrent state corruption.
- **FR-033** Profile can be revoked/deleted separately from run history.

## Operations

- **FR-040** Health endpoint distinguishes API readiness from worker readiness.
- **FR-041** Concurrency is configurable per worker.
- **FR-042** Orphaned leases become recoverable after bounded lease expiry.
- **FR-043** Artifact retention cleanup is idempotent.
