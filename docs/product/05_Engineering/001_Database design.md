# Database design

## Core tables

### users / api_keys
V1 instance-level auth. API key stores hash/prefix/last_used, never plaintext after creation.

### model_profiles
`id`, provider, model, base_url, secret_ref, limits, enabled.

### browser_profiles
`id`, name, storage_ref, encryption_version, state, created_at, updated_at, last_used_at, lease fields.

### runs
`id`, goal, start_url, state, error_code, result_json, output_schema_json, model_profile_id, browser_profile_id, max_steps, timeout_ms, metadata_json, cancel_requested_at, lease_owner, lease_expires_at, retry_of_run_id, timestamps.

### run_actions
Append-oriented normalized events: step, action type, target summary, URL before/after, duration, result summary, error code, screenshot ref.

### artifacts
`id`, run_id, kind, storage_key, size, sha256, mime, retention_until, sensitive flag.

### webhook_endpoints / webhook_deliveries
Endpoint config and durable delivery attempts.

### audit_events
Security/operator events separate from verbose browser action stream.

## Indexes

- runs `(state, created_at)`;
- runs `(created_at desc)`;
- actions `(run_id, step)` unique;
- artifacts `(run_id)`;
- webhook deliveries `(state, next_attempt_at)`;
- profiles `(state, last_used_at)`.

## Data ownership

PostgreSQL owns metadata and lifecycle. Redis never owns the only copy of a run state. Object storage owns binary artifacts referenced by DB metadata.
