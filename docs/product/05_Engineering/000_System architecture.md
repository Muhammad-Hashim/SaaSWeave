# System architecture

## V1 topology

```text
                 +----------------------+
                 |  Web dashboard       |
                 +----------+-----------+
                            |
                            v
+---------+        +--------+---------+        +--------------+
| SDK/CLI |------->| REST API/control |------->| PostgreSQL   |
+---------+        | plane            |        +--------------+
                   +--------+---------+
                            |
                            v
                       +----+----+
                       | Redis / |
                       | BullMQ  |
                       +----+----+
                            |
                            v
                  +---------+----------+
                  | Browser worker     |
                  | agent orchestrator |
                  +---+---------+------+
                      |         |
             +--------+         +----------+
             v                              v
      Playwright/Chromium               LLM provider
             |
             v
        target website
             |
             +-----------------------> local/S3 artifacts
```

## Runtime components

### Web
Operator console only. No privileged decision should depend solely on browser-side checks.

### API/control plane
Auth, validation, policy precheck, run/task/profile metadata, idempotency, webhooks configuration, admin settings.

### Worker
Owns run lease, browser lifecycle, agent loop, action execution, artifact capture and checkpoints.

### PostgreSQL
Source of truth for durable state, configuration metadata, audit indexes and run history.

### Redis/BullMQ
Dispatch, delayed retry, worker coordination. Not authoritative business state.

### Artifact storage
Screenshots, downloads, traces and optional recordings. Local filesystem for simplest install; S3-compatible adapter for production.

## Key architecture rule

Browser backend and agent strategy are separate interfaces. A run should be able to use local Playwright, then later Steel/remote CDP, without rewriting run state or model orchestration.


## Existing foundation: SaaSWeave

AgentSurf starts from the existing SaaSWeave TypeScript monorepo. Authentication, workspaces, API keys, PostgreSQL/Drizzle, Redis/BullMQ, storage, webhooks, audit logging, observability, Docker/Coolify, admin and CI are inherited and adapted. V1 work must extend these packages instead of creating duplicate infrastructure.
