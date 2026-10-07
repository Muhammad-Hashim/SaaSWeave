# Problem validation

## Problem hypotheses

### H-001 — Agent developers repeatedly rebuild browser plumbing
Expected evidence: applications contain custom Chromium startup, retry, screenshot, profile and queue logic unrelated to their core product.

### H-002 — Cloud browser providers are unacceptable for some workloads
Expected evidence: teams cite credentials, client data, data residency, internal portals or compliance constraints.

### H-003 — Pure Playwright scripts are brittle for unknown/changing pages
Expected evidence: teams spend substantial time updating selectors and navigation logic.

### H-004 — Pure autonomous agents are hard to operate in production
Expected evidence: lack of bounded execution, deterministic fallbacks, action audit, retry semantics and structured outputs causes operational failures.

## Validation experiments

1. Implement one deterministic Playwright flow and one agentic equivalent against three changing pages.
2. Measure completion rate, actions, duration, tokens and operator intervention.
3. Run ten concurrent Chromium sessions on target deployment hardware and record CPU/RAM.
4. Give Docker instructions to a second operator with no verbal assistance.
5. Implement one authenticated portal flow using a persisted profile and verify logout/expiry/recovery behavior.

## Kill criteria

Stop or narrow the product if:
- the agentic path cannot exceed a useful reliability threshold on selected target workflows;
- maintaining existing open-source components is clearly cheaper than a new control plane;
- the product offers no meaningful value beyond a thin UI around an existing project;
- security boundaries cannot be made understandable and enforceable for self-host users.
