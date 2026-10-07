# Test strategy

## Layers

### Unit
State transitions, URL policy, schema validation, redaction, provider normalization, retry classification.

### Integration
PostgreSQL repositories, Redis lease/queue semantics, S3/local storage, webhook delivery, model adapters with stubs.

### Browser E2E
Controlled fixture websites covering forms, popups, downloads, redirects, dynamic DOM, authentication expiration and network failures.

### Golden agent tasks
Versioned task suite with expected terminal classification and structured outputs. Record model/browser versions for reproducibility.

### Security
SSRF/private network, redirect bypass, malicious filenames, oversized downloads, secret redaction, authorization, profile cross-run leakage.

### Chaos/recovery
Kill worker/browser/Redis/S3 during known phases and verify recovery semantics.

## CI policy

PR: unit + integration + deterministic browser fixtures.  
Nightly: model-backed golden suite + load/chaos subsets.  
Release: full acceptance, security and restore drill.
