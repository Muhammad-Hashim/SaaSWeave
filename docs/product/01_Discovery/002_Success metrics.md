# Success metrics

## V1 product metrics

- V1-M-001: ≥90% completion on the maintained internal “golden task” suite where target sites are under test control.
- V1-M-002: ≥80% completion across the selected public benchmark subset after excluding CAPTCHA/paywall/account-blocking tasks.
- V1-M-003: second operator can deploy with Docker Compose in <30 minutes without maintainer intervention.
- V1-M-004: every terminal run has a final status, machine-readable reason code and enough artifacts to diagnose the failure.
- V1-M-005: cancellation of a non-side-effecting task terminates browser resources within 10 seconds under normal conditions.
- V1-M-006: queue redelivery does not create duplicate run records or duplicate terminal webhooks.

## V2 metrics

- scheduled-run success/error trends visible by workspace;
- credential/profile access fully auditable;
- worker crash recovery demonstrated without database corruption;
- documented backup restore drill succeeds.

## Guardrail metrics

Track browser minutes, model tokens/cost, task duration, worker memory, retry count, policy blocks and unsafe-action approvals.
