# Background jobs

## Queues

### `runs.execute`
Payload contains only run ID/version. Worker fetches authoritative configuration from DB.

### `webhooks.deliver`
Independent retries from run execution.

### `artifacts.cleanup`
Retention deletion.

### `profiles.cleanup`
Remove revoked/expired profile blobs.

## Lease model

Worker writes `lease_owner` + `lease_expires_at`. Heartbeat extends lease. A new worker may recover only after expiry and recovery classification.

## Retry classes

- infrastructure transient: retry allowed;
- model transient: retry within same run budget where safe;
- website deterministic error: do not infinite-retry;
- policy/security block: never automatic retry;
- ambiguous side effect: fail and require operator decision;
- webhook delivery: independent exponential backoff.

## Dead-letter handling

A job that repeatedly fails infrastructure handling goes to dead-letter state with operator-visible reason; it must not disappear from run history.
