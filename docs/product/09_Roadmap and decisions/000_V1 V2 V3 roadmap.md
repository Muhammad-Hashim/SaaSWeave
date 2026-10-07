# V1 / V2 / V3 implementation roadmap

## V1 — Reliable self-hosted vertical slice

**Objective:** An external developer can deploy one node, submit a browser goal through API/UI, receive a validated result, and diagnose failures.

### Phase V1.0 — Technical spikes
- Playwright worker proof;
- structured action protocol;
- one cloud model + one OpenAI-compatible local endpoint;
- artifact upload;
- browser resource benchmark;
- public→private redirect block proof.

**Exit:** architecture decisions verified by runnable spikes.

### Phase V1.1 — Control-plane foundation
- repo/workspace tooling;
- config validation;
- PostgreSQL schema/migrations;
- API keys;
- REST/OpenAPI;
- runs table/state machine;
- Redis/BullMQ dispatch;
- health checks.

**Exit:** dummy worker can execute durable queued run end-to-end.

### Phase V1.2 — Browser runtime
- Playwright Chromium backend;
- ephemeral contexts;
- typed actions;
- screenshots/downloads;
- browser lifecycle cleanup;
- cancellation.

**Exit:** deterministic fixture tasks pass.

### Phase V1.3 — Agent runtime
- observe/act loop;
- model adapters;
- max steps/time/budget;
- structured output/schema validation;
- action log;
- classified failures.

**Exit:** golden agent task suite meets initial quality gate.

### Phase V1.4 — Profiles and artifacts
- explicit persistent browser profile;
- encryption;
- profile lease;
- local/S3 artifacts;
- retention cleanup.

**Exit:** authenticated fixture workflow survives worker restart.

### Phase V1.5 — Dashboard and developer experience
- run list/detail/new run;
- model/storage settings;
- TypeScript SDK;
- webhooks;
- examples.

**Exit:** second developer can integrate without reading source.

### Phase V1.6 — Security/reliability/self-host hardening
- SSRF/private-network policy;
- redaction;
- resource limits;
- crash recovery;
- backup/restore;
- Compose;
- release docs.

**V1 Definition of Done:** all V1 acceptance tests + restore drill + second-operator deployment pass.

---

## V2 — Team and operations product

**Objective:** A small team can safely share the platform for recurring authenticated automations.

### V2.1 Identity/workspaces
Organizations, memberships, roles, service accounts, scoped API keys.

### V2.2 Credential/profile management
Encrypted credential vault, domain binding, profile import/export controls, expiry/re-auth flow, sensitive artifact permissions.

### V2.3 Scheduling/templates
Cron/interval schedules, reusable task templates, variables, versioned template revisions, run lineage.

### V2.4 Human-in-the-loop
Approval checkpoints, manual resume, dangerous-action classification, notification hooks.

### V2.5 Browser backends/networking
Remote CDP/Steel adapter, proxy-provider adapter, browser recording/live view, dedicated worker pools.

### V2.6 Operations
Quotas, priorities, concurrency pools, OpenTelemetry, Prometheus, admin dashboards, retention policies, Helm chart.

### V2.7 Limited workflows
Sequential workflow steps with outputs passed as typed inputs. No arbitrary DAG scheduler yet.

**V2 Definition of Done:** two teams can operate scheduled authenticated workflows with RBAC, audit, backup and measurable reliability.

---

## V3 — Distributed enterprise platform

**Objective:** Separate control plane from distributed execution fleet and support stronger enterprise/security requirements.

### V3.1 Fleet scheduler
Worker registration, capabilities, region, health, draining, autoscaling signals, session locality.

### V3.2 Policy engine
Domain/network/action rules, tenant policies, approval requirements, per-profile restrictions, policy simulation.

### V3.3 Enterprise identity/secrets
OIDC/SAML SSO, SCIM, external KMS/Vault, tenant encryption keys.

### V3.4 Workflow orchestration
Durable DAGs, checkpoints, compensation steps, long-running waits, human events.

### V3.5 Intelligent routing
Model selection by capability/cost/reliability, browser backend selection, region/proxy policy, fallback strategies.

### V3.6 Evals and replay
Dataset/eval management, run comparison, regression gates, searchable session replay.

### V3.7 Fast-path web services
Search/Fetch/Markdown extraction endpoints that avoid Chromium when interaction is unnecessary.

### V3.8 Hardened multi-tenancy
Container/VM sandbox profiles, network isolation, per-tenant quotas, audit export, legal/retention controls.

**V3 Definition of Done:** control plane can safely coordinate independent worker pools across failure domains with enterprise policy and measurable regression/eval controls.

---

## Explicit deferrals beyond V3 core

- proprietary anti-bot arms race;
- residential proxy network ownership;
- in-house CAPTCHA-solving marketplace;
- custom foundation model training;
- consumer browser extension as a primary product;
- generic RPA desktop automation.


## Existing foundation: SaaSWeave

AgentSurf starts from the existing SaaSWeave TypeScript monorepo. Authentication, workspaces, API keys, PostgreSQL/Drizzle, Redis/BullMQ, storage, webhooks, audit logging, observability, Docker/Coolify, admin and CI are inherited and adapted. V1 work must extend these packages instead of creating duplicate infrastructure.
