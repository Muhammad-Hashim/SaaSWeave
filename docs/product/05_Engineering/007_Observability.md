# Observability

## Structured logs

Required fields: timestamp, service, instance, run_id, worker_id, step, event, duration_ms, error_code. Redact authorization/cookies/secrets.

## Metrics

- run counts by terminal state;
- queue depth/age;
- active browsers;
- browser startup duration;
- run duration;
- steps per run;
- model call count/latency/tokens where available;
- artifact bytes;
- webhook success/failure;
- policy blocks;
- worker memory/CPU.

## Tracing

V1 trace IDs across API → queue → worker → model/browser/artifact calls. V2 standardizes OpenTelemetry export.

## Operator diagnostics

A debug bundle may include configuration *shape* and versions but must exclude secret values and raw cookies by default.
