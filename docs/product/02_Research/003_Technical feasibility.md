# Technical feasibility

## Feasible V1 vertical slice

```text
REST API / Web UI
        |
        v
PostgreSQL <-> Redis queue
                  |
                  v
             Browser worker
             Playwright/Chromium
                  |
                  +--> LLM provider
                  +--> artifact storage
                  +--> target website
```

## Feasibility risks

### RISK-T-001 — Agent reliability
Mitigation: bounded steps, typed action schema, deterministic fallback actions, maintained eval suite, explicit unsupported-site classification.

### RISK-T-002 — Browser resource consumption
Mitigation: worker concurrency limits, per-run memory/time caps, browser recycling policy and load tests.

### RISK-T-003 — Authenticated state
Mitigation: explicit profile lifecycle; encryption at rest for persisted state; never persist by default.

### RISK-T-004 — Side effects
Mitigation: classify actions; support approval checkpoints in V2; V1 API includes `side_effect_policy` and task documentation must declare expected mutations.

### RISK-T-005 — SSRF/internal network exposure
Mitigation: URL validation, DNS/IP resolution checks, private-range blocking by default, redirect revalidation and configurable allowlists.

### RISK-T-006 — Downloads/untrusted files
Mitigation: limits, isolated artifact directory, no automatic execution, MIME sniffing and storage quarantine metadata.

## Technical recommendation

Proceed with V1. None of the required primitives require novel infrastructure. The hard part is operational correctness and security, not basic technical possibility.
