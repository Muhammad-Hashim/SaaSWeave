# Decision log

## DEC-001 — Build control plane; reuse browser infrastructure
Accepted. See research.

## DEC-002 — TypeScript-first V1
Accepted. One language across API, worker, browser automation and SDK reduces operational surface. Python integrations may be separate adapters later.

## DEC-003 — PostgreSQL is source of truth; Redis is dispatch
Accepted. Prevents queue loss from becoming business-state loss.

## DEC-004 — Ephemeral browser state is default
Accepted. Persistence is explicit because profiles contain sensitive data and create locking/lifecycle complexity.

## DEC-005 — BrowserBackend abstraction
Accepted. Local Playwright V1; remote/Steel/CDP later.

## DEC-006 — Typed actions, not arbitrary model-generated code in V1
Accepted. Easier policy, audit and testing. Arbitrary code/sandbox execution can be reconsidered only with strong isolation.

## DEC-007 — REST/OpenAPI public API
Accepted. Keeps integration language-neutral. UI uses same contracts.

## DEC-008 — No proxy/CAPTCHA network in V1
Accepted. Adapter points only.

## DEC-009 — Brand name deferred
Accepted. Product behavior takes priority; working title remains descriptive.
