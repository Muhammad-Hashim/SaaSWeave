# Run state machine

```text
created
  |
  v
queued -----> cancelled
  |
  v
starting ---> failed
  |
  v
running ----> cancelling ----> cancelled
  |  \            |
  |   \           +----> failed (cleanup failure recorded)
  |    \
  |     +----> policy_blocked
  |     +----> timed_out
  |     +----> failed
  v
finalizing
  |   \
  |    +----> failed
  v
succeeded
```

## Invariants

- terminal state cannot transition back to running;
- only current lease owner may checkpoint execution state;
- `succeeded` requires output validation and required artifact finalization;
- cancellation request is distinct from terminal `cancelled`;
- retry creates a new state machine instance.
