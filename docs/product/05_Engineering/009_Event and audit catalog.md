# Event and audit catalog

## Run events

`run.created`, `run.queued`, `run.started`, `run.action`, `run.cancel_requested`, `run.succeeded`, `run.failed`, `run.cancelled`, `run.timed_out`, `run.policy_blocked`.

## Security/admin events

`api_key.created`, `api_key.revoked`, `profile.created`, `profile.used`, `profile.deleted`, `model_profile.changed`, `network_policy.changed`, `retention.changed`, `backup.restore_started`, `backup.restore_completed`.

## Audit fields

Actor, action, resource type/id, timestamp, source IP where applicable, request ID, outcome, reason code and non-secret metadata.

Verbose page/agent actions are stored as run telemetry, not all duplicated into the security audit table.
