# End-to-end flows

## Flow E2E-001 — Extract pricing as JSON

1. User creates run with pricing URL, goal and schema.
2. Agent navigates and extracts plan names/prices.
3. Output validator validates array shape.
4. Run succeeds with JSON result + screenshot.

## Flow E2E-002 — Logged-in portal

1. Operator creates/imports browser profile.
2. User starts run referencing profile.
3. Worker locks profile and restores state.
4. If site redirects to login, run fails `AUTH_REQUIRED` unless task explicitly permits interactive/manual login mode (V2).
5. On success, profile state may be persisted according to profile policy.

## Flow E2E-003 — Failure diagnosis

1. Run fails on selector/agent action.
2. Run detail shows last URL, screenshot, action, model response ID/summary, console errors and normalized error.
3. User retries with edited goal or deterministic hint.
4. Retry is linked to original for comparison.

## Flow E2E-004 — Policy block

1. Task starts at public URL.
2. Page redirects to internal IP.
3. network policy blocks before navigation.
4. run terminates `policy_blocked`, stores no sensitive response body.
