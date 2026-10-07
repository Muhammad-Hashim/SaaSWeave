# Business rules

- **BR-001** A run has exactly one terminal state: `succeeded`, `failed`, `cancelled`, `timed_out` or `policy_blocked`.
- **BR-002** Retry is a new run; history is immutable.
- **BR-003** Persisted profile usage must be explicit; ephemeral is default.
- **BR-004** A run cannot access a profile/secret outside its authorization scope.
- **BR-005** Terminal webhook is emitted only after durable terminal state commit.
- **BR-006** Unsafe/private-network destination policy applies after redirects and DNS resolution, not only to original URL text.
- **BR-007** Cancellation is best effort once a remote website side effect has occurred; the system must not claim rollback unless it performed one.
- **BR-008** “Succeeded” means declared success criteria/output validation passed, not merely that the browser process exited cleanly.
- **BR-009** Destructive or financial workflows are unsupported by default templates until explicit human approval mechanisms exist.
- **BR-010** Browser/profile artifacts are not analytics data and follow stricter retention rules.
