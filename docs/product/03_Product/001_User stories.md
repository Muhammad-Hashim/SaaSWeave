# User stories

## V1

- **US-001** As a developer, I can submit a URL + goal so that the platform executes it asynchronously.
- **US-002** As a developer, I can provide a JSON schema so that output is machine-validated.
- **US-003** As a developer, I can choose a configured model profile without exposing provider credentials to the caller.
- **US-004** As an operator, I can see queued/running/succeeded/failed/cancelled runs.
- **US-005** As an operator, I can inspect screenshots and action logs for a failed run.
- **US-006** As a developer, I can cancel a run and receive a terminal state.
- **US-007** As a developer, I can retry a run as a new run linked to the original.
- **US-008** As a developer, I can receive a signed webhook when a run finishes.
- **US-009** As an operator, I can configure local or S3-compatible artifact storage.
- **US-010** As an operator, I can set concurrency and resource limits.
- **US-011** As a developer, I can opt into a persisted browser profile for authentication state.
- **US-012** As an operator, I can block private-network targets and define domain policy.
- **US-013** As an operator, I can back up and restore authoritative state.

## V2

- **US-101** workspace membership/RBAC;
- **US-102** encrypted credentials;
- **US-103** scheduled jobs;
- **US-104** approval before high-risk action;
- **US-105** reusable templates/variables;
- **US-106** live view/session replay;
- **US-107** proxy/remote browser backend;
- **US-108** quotas/priorities;
- **US-109** retention policies;
- **US-110** service accounts.

## V3

- **US-201** distributed regional workers;
- **US-202** workflow DAGs;
- **US-203** enterprise SSO/SCIM;
- **US-204** central policy engine;
- **US-205** model/browser routing;
- **US-206** evaluation suites;
- **US-207** hardened tenant isolation;
- **US-208** fleet autoscaling.
