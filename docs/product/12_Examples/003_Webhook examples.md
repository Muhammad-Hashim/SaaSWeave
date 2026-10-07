# Webhook examples

## Event

```json
{
  "id": "evt_01...",
  "type": "run.succeeded",
  "created_at": "2026-10-07T05:03:02Z",
  "data": {
    "run_id": "run_01...",
    "state": "succeeded"
  }
}
```

Headers:

```text
X-Agent-Event-Id: evt_01...
X-Agent-Timestamp: 1791349382
X-Agent-Signature: v1=<hmac>
```

Consumers should deduplicate by event ID. Delivery retry does not create a new semantic event.
