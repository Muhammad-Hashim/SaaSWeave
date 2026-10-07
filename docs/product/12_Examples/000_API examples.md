# API examples

## Start run

```bash
curl -X POST http://localhost:8080/api/v1/runs \
  -H "Authorization: Bearer $BROWSER_AGENT_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: pricing-2026-10-07" \
  -d '{
    "start_url":"https://example.com/pricing",
    "goal":"Return plan names and monthly prices as JSON",
    "model_profile_id":"mp_default",
    "timeout_seconds":180,
    "max_steps":30
  }'
```

## Inspect

```bash
curl -H "Authorization: Bearer $BROWSER_AGENT_API_KEY" \
  http://localhost:8080/api/v1/runs/run_123
```

## Cancel

```bash
curl -X POST \
  -H "Authorization: Bearer $BROWSER_AGENT_API_KEY" \
  http://localhost:8080/api/v1/runs/run_123/cancel
```
