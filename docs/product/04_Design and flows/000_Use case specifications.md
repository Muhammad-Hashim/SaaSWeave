# Use case specifications

## UC-001 — Run a browser task

**Actor:** authenticated developer  
**Preconditions:** model profile exists; start URL allowed; worker capacity available eventually.

**Normal flow**
1. Client submits goal/start URL/schema/options.
2. API validates auth, policy and request.
3. API creates `run` transactionally as `queued`.
4. Queue job references run ID.
5. Worker leases run and marks `starting`.
6. Browser backend creates session/context.
7. Agent loop observes page, chooses typed action, executes, records event.
8. Loop ends when success condition/output is produced.
9. Output schema validates.
10. Required artifacts persist.
11. Run becomes `succeeded`.
12. Webhook delivery is enqueued.

**Failures:** policy block, browser startup, model error, page error, max steps, timeout, schema failure, artifact failure.

## UC-002 — Retry failed run

Retry copies safe configuration into a new run. It does not overwrite old state. Secrets/profile references are re-authorized at retry time.

## UC-003 — Cancel run

Cancellation sets a durable request flag. Worker checks before/after each action and during long waits where possible. Terminal cancellation does not imply external side effects were undone.

## UC-004 — Use persisted profile

Run acquires profile lease, restores browser state, executes, persists changed state only if configured and run reached an allowed terminal checkpoint, then releases lease.
