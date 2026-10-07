# Non-functional requirements

## Security
- **NFR-SEC-001** Private/link-local/loopback targets blocked by default for untrusted task URLs.
- **NFR-SEC-002** Secrets never appear in normal structured logs.
- **NFR-SEC-003** Persisted profile material encrypted at rest.
- **NFR-SEC-004** Browser process/container runs without unnecessary host privileges.
- **NFR-SEC-005** Admin APIs require authenticated authorization, not UI gating.

## Reliability
- **NFR-REL-001** State transitions are durable before external terminal webhooks.
- **NFR-REL-002** Queue redelivery cannot mutate one run into two simultaneous owners without detection.
- **NFR-REL-003** Worker restart leaves run in recoverable state.
- **NFR-REL-004** Cleanup operations are retry-safe.

## Performance
- **NFR-PERF-001** API metadata endpoints should have p95 <300 ms on recommended single-node hardware excluding DB saturation.
- **NFR-PERF-002** Browser startup target p95 <5 seconds locally on supported hardware; measure rather than promise across all hosts.
- **NFR-PERF-003** Artifact upload must stream; no full-file buffering requirement.

## Maintainability
- **NFR-MNT-001** Browser/model/storage providers use explicit interfaces.
- **NFR-MNT-002** Database migrations are forward-versioned and tested.
- **NFR-MNT-003** Public API has machine-readable OpenAPI schema.

## Privacy
- **NFR-PRIV-001** screenshots/traces configurable because they may contain sensitive data.
- **NFR-PRIV-002** telemetry to external services is opt-in, except explicitly configured model/browser providers.

## Compatibility
- **NFR-COMP-001** server deployment targets Linux containers first.
- **NFR-COMP-002** developer tooling supports Windows/macOS/Linux where dependencies permit.
