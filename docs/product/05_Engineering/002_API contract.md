# API contract

Base: `/api/v1`

## POST /runs

Request example:

```json
{
  "start_url": "https://example.com/pricing",
  "goal": "Return every plan name and monthly price",
  "output_schema": {
    "type": "array",
    "items": {
      "type": "object",
      "required": ["name", "price"],
      "properties": {
        "name": {"type": "string"},
        "price": {"type": "string"}
      }
    }
  },
  "model_profile_id": "mp_default",
  "browser_profile_id": null,
  "max_steps": 30,
  "timeout_seconds": 180,
  "metadata": {"source": "demo"}
}
```

Response: `202 Accepted`

```json
{
  "id": "run_01...",
  "state": "queued",
  "created_at": "2026-10-07T05:00:00Z"
}
```

## GET /runs/{id}
Returns run state/result/error/artifact summary.

## POST /runs/{id}/cancel
Idempotently requests cancellation.

## POST /runs/{id}/retry
Creates new run. Optional request can override goal/limits/model but must preserve linkage.

## GET /runs
Cursor pagination with state/date/task filters.

## Profiles
- `POST /browser-profiles`
- `GET /browser-profiles`
- `DELETE /browser-profiles/{id}`

## Admin/config
Expose only documented safe configuration; never expose raw secret values.

## Idempotency
`POST /runs` supports `Idempotency-Key`. Same key + same authenticated scope returns original creation result for configured retention window.
