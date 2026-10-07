# How to use this documentation

## Purpose

The documentation is the product contract. Implementation may improve internals, but accepted external behavior should not drift silently.

## Evidence labels

Use these labels in research and decisions:
- **Fact** — directly verified from a primary source or implementation.
- **Observation** — visible behavior or market pattern.
- **Recommendation** — proposed direction.
- **Assumption** — believed true but not yet validated.
- **Decision** — accepted project direction.
- **Unknown** — unresolved and capable of changing scope.

## Change sequence

1. Update problem/requirement if behavior changes.
2. Update decision record if architecture/scope changes.
3. Update implementation task.
4. Implement code/migration/tests.
5. Update progress ledger.

## Definition of implementation-ready

A feature is implementation-ready when its actor, permissions, states, request/response shape, success behavior, failures, retries, timeouts, storage impact, audit events and acceptance tests are documented.
