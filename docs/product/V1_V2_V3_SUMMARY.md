# V1 / V2 / V3 summary

## V1 — Self-hosted developer MVP

**Goal:** prove that a single operator can deploy AgentSurf and run reliable browser tasks without cloud browser infrastructure.

### Must have
- Docker Compose install.
- Web dashboard + public REST API.
- API key authentication.
- Create, inspect, cancel and retry runs.
- Input: start URL, natural-language goal, optional JSON output schema, max duration, model profile.
- Local Chromium via Playwright.
- Isolated browser context per ephemeral run.
- Basic persistent browser profile as an explicit opt-in capability.
- Agent loop with bounded steps and token/cost limits.
- OpenAI, Anthropic, Gemini and OpenAI-compatible endpoint adapters; local OpenAI-compatible servers supported.
- Actions: navigate, click, type, select, wait, scroll, upload, download, screenshot, extract.
- Structured JSON result with schema validation.
- PostgreSQL metadata.
- Redis/BullMQ job queue.
- Local filesystem or S3-compatible artifact storage.
- Screenshots, action log, console/network summary, final URL and error reason.
- Retry/backoff for infrastructure failures, not blind replay of unsafe side effects.
- Webhook on terminal run state.
- Domain allow/deny policy, private-network blocking by default, download limits and task timeouts.
- Health endpoints, structured logs, basic metrics.
- TypeScript SDK or generated API client.

### V1 non-goals
- residential proxies;
- automatic CAPTCHA solving;
- enterprise SSO;
- multi-region execution;
- full workflow DAGs;
- billing;
- managed SaaS control plane;
- extension marketplace;
- arbitrary untrusted third-party code execution;
- full TinyFish/Browserbase parity.

## V2 — Team and operations

**Goal:** make the system useful for an engineering/operations team, not only one developer.

Add workspaces/RBAC, encrypted credentials, schedules, approvals, task templates, live view/replay, proxy and remote-browser adapters, quotas, richer webhooks, OpenTelemetry, Kubernetes/Helm and limited workflow chaining.

## V3 — Distributed platform

**Goal:** support enterprise and large distributed browser workloads.

Add distributed workers, region-aware routing, policy engine, enterprise identity, external KMS/Vault, hard isolation, workflow DAGs, model/browser routing, evals, version management, Search/Fetch fast path, replay search and advanced retention controls.

## Planning range

- V1: 4–6 focused weeks from an empty platform, shorter because SaaSWeave foundation is reused.
- V2: +6–10 weeks.
- V3 foundation: +3–6 months.
