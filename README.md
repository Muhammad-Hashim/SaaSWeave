# AgentSurf

**AgentSurf** is an open-source, self-hosted execution platform for AI web agents.

Give AgentSurf a starting URL and a goal. The platform runs the task through a controlled browser worker, records what happened, and returns structured output, screenshots, artifacts, logs, and a durable run history.

> Current status: **V1 implementation in progress**. See [PROGRESS.md](PROGRESS.md) and the complete [product documentation](docs/product/README.md).

## V1 direction

AgentSurf is not trying to rebuild a browser cloud from zero. V1 focuses on the production control and execution layer:

- goal + URL → bounded browser-agent run;
- local Chromium/Playwright first;
- provider-neutral model contracts;
- structured JSON output and schema validation;
- durable run states, retry, cancellation, timeout, and recovery semantics;
- screenshots, downloads, traces, and auditable action history;
- explicit persistent browser profiles;
- private-network/domain policy;
- Docker-first self-hosting;
- API, dashboard, webhooks, and TypeScript SDK.

## Architecture

```text
Client / Dashboard
        |
        v
Hono + oRPC control plane
        |
        +------> PostgreSQL (durable state)
        |
        v
Redis / BullMQ
        |
        v
AgentSurf worker
   |            |
   v            v
Browser        Model
Playwright     provider
Chromium       adapter
   |
   v
Target website
   |
   +------> local / S3-compatible artifacts
```

The repository inherits a mature SaaS foundation: authentication, workspaces, API keys, PostgreSQL/Drizzle, Redis/BullMQ, storage, webhooks, audit logging, observability, admin tooling, Docker/Coolify, and CI. AgentSurf extends those systems rather than duplicating them.

## New V1 packages

```text
packages/execution   run states, limits, error and event contracts
packages/browser     provider-neutral browser/session/action contracts
packages/ai          provider-neutral model contracts
packages/agent       agent runtime and decision contracts
```

The existing internal `@saasweave/*` workspace scope is a legacy implementation detail. It will be renamed to `@agentsurf/*` as one atomic migration so the repository is never left with broken mixed imports.

## Product documentation

The complete product definition is under `docs/product/`:

- discovery and validation;
- competitor/open-source research;
- V1/V2/V3 roadmap;
- PRD and user stories;
- FR/NFR/business requirements;
- state machine and end-to-end flows;
- architecture, API, database, queue, browser, model, storage, and observability designs;
- threat model, authorization, secrets, browser isolation;
- QA, acceptance tests, load/reliability;
- deployment, backup, upgrade, rollback;
- agent task contract, V1 task backlog, and release checklists.

Start with:

1. [docs/product/README.md](docs/product/README.md)
2. [docs/product/V1_V2_V3_SUMMARY.md](docs/product/V1_V2_V3_SUMMARY.md)
3. [docs/product/03_Product/002_Functional requirements.md](docs/product/03_Product/002_Functional%20requirements.md)
4. [docs/product/03_Product/003_Non-functional requirements.md](docs/product/03_Product/003_Non-functional%20requirements.md)
5. [docs/product/10_Agent implementation/006_V1 task breakdown.md](docs/product/10_Agent%20implementation/006_V1%20task%20breakdown.md)
6. [PROGRESS.md](PROGRESS.md)

## Stack

| Area | Technology |
|---|---|
| Web | React 19, TanStack Start/Router/Query, Tailwind CSS |
| API | Hono, oRPC, OpenAPI |
| Auth | Better Auth, organizations, 2FA, SSO/OAuth |
| Data | PostgreSQL, Drizzle ORM |
| Async | Redis, BullMQ |
| Storage | S3-compatible/MinIO + local fallback |
| Browser | Playwright/Chromium (V1 target) |
| Tooling | pnpm workspaces, Vite Plus, Vitest, Playwright |
| Deployment | Docker Compose, Coolify |

## Development

```bash
corepack enable
pnpm install --frozen-lockfile
cp packages/env/.env.example packages/env/.env
pnpm run auth:secret
pnpm run db:dev:start
pnpm run db:migrate
pnpm run dev
```

Useful checks:

```bash
pnpm run fix
pnpm run build
pnpm run test:unit:run
pnpm run test:e2e:run
pnpm run coverage:gate
```

## Docker

```bash
cp .env.docker.example .env.docker
pnpm run auth:secret
pnpm run docker:up:build
```

The current production baseline already contains hardened Compose patterns, health checks, migrations, PostgreSQL, Redis, MinIO, worker readiness, metrics, and backup verification. V1 will extend it with the browser-worker runtime.

## Security

Browser pages, downloads, model output, redirects, and persisted profiles are treated as untrusted/sensitive inputs. V1 explicitly requires private-network blocking, redirect revalidation, secret redaction, bounded execution, explicit profile persistence, and no automatic execution of downloaded files.

See [the AgentSurf threat model](docs/product/06_Security%20and%20privacy/000_Threat%20model.md) and [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).

## Foundation

AgentSurf is being built from the existing SaaSWeave codebase, which itself builds on ideas and foundation from [tsu-moe/tsu-stack](https://github.com/tsu-moe/tsu-stack).
