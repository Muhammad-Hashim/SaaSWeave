# Product brief

## Definition

A AgentSurf execution platform for developers and teams that need AI to interact with live websites while keeping browser sessions, credentials, artifacts and execution history under their control.

## Primary users

### P-001 — AI application developer
Needs a stable API to give an application browser capabilities without running Chromium lifecycle logic inside the app.

### P-002 — Internal automation engineer
Automates vendor portals, dashboards, form-heavy sites and workflows without reliable APIs.

### P-003 — Privacy/security-conscious company
Needs browser sessions and credentials to stay in its infrastructure.

### P-004 — Self-host operator
Needs Docker, backups, upgrades, logs, health checks, storage configuration and predictable failure modes.

## Core jobs to be done

- “Given a goal and starting URL, complete the browser task and return structured output.”
- “Reuse a signed-in browser profile without exposing credentials to every caller.”
- “See exactly what the agent did and why a run failed.”
- “Run the same automation repeatedly without babysitting browser infrastructure.”
- “Choose my own model provider or local model endpoint.”

## Constraints

- self-host-first;
- browser-first, not generic desktop automation;
- API-first with usable web console;
- TypeScript-first implementation;
- PostgreSQL + Redis + S3-compatible storage;
- no mandatory managed cloud dependency;
- no requirement to build proxy/CAPTCHA infrastructure in V1;
- auditable execution is a core requirement, not an add-on.

## Why this could fail

- existing open-source browser APIs already solve enough of the problem;
- browser agents remain unreliable on high-variance websites;
- maintenance burden from browser/website changes becomes too high;
- security expectations for credentialed automation exceed a small project's capacity;
- users prefer hosted convenience;
- local models may be too weak for reliable UI reasoning.

## Validation gate

Before V2, at least three real workflows should run repeatedly with acceptable success and recovery behavior, and at least two external users/operators should deploy the system without author intervention.
