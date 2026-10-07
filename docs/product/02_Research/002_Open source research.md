# Open-source research and reuse plan

## Reuse by default

### Playwright
Use as the V1 browser-control baseline. Browser contexts provide isolated cookie/storage environments and are inexpensive compared with launching one full browser per simple run. For hostile multi-tenant workloads, contexts alone are not treated as a hard security sandbox.

### Stagehand
Evaluate as an optional higher-level interaction adapter for agentic actions/extraction. Keep behind an interface so the product can replace or bypass it.

### Steel
Evaluate as an optional remote/self-hosted browser backend from V2 onward. Do not fork or embed deeply in V1 unless a real requirement cannot be met with local Playwright.

### Browser Use
Use as implementation/reference research and benchmark comparison. A TypeScript-first V1 should avoid making a Python runtime mandatory unless the reliability gain justifies the operational cost.

## Build ourselves

- run lifecycle/control plane;
- domain objects and permissions;
- queue semantics and idempotency;
- model-provider abstraction;
- structured output validation;
- task policy engine (basic in V1, advanced later);
- audit/action log normalization;
- dashboard/operator UX;
- deployment/backup/upgrade experience;
- backend adapters.

## Explicitly do not build in V1

- Chromium fork;
- residential proxy network;
- CAPTCHA solving network;
- custom LLM;
- custom object database;
- custom queue engine.
