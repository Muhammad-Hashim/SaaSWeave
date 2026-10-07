# Recommended repository structure

```text
apps/
  web/                 # dashboard
  api/                 # REST control plane
  worker/              # browser execution workers
packages/
  contracts/           # zod/json-schema/OpenAPI models
  db/                  # schema, migrations, repositories
  queue/               # BullMQ wrappers and lease semantics
  browser/             # BrowserBackend interface + Playwright backend
  agent/               # bounded agent loop and action protocol
  models/              # provider adapters
  storage/             # local/S3 artifact adapters
  auth/                # API keys/session auth
  policy/              # URL/network/action policy
  observability/       # logging/metrics/tracing
  sdk-ts/              # public client
  config/              # typed configuration
tests/
  integration/
  e2e/
  fixtures/
docs/
  # generated/copy of accepted product docs if product repo differs
```

## Tooling recommendation

- pnpm workspace;
- TypeScript strict mode;
- one formatting/lint/test command at repository root;
- generated OpenAPI checked for drift;
- migration check in CI;
- Docker images built from same commit.


## Existing foundation: SaaSWeave

AgentSurf starts from the existing SaaSWeave TypeScript monorepo. Authentication, workspaces, API keys, PostgreSQL/Drizzle, Redis/BullMQ, storage, webhooks, audit logging, observability, Docker/Coolify, admin and CI are inherited and adapted. V1 work must extend these packages instead of creating duplicate infrastructure.
