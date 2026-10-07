# Product requirements document

## 1. Overview

Product: AgentSurf  
Status: Draft for V1 implementation  
Owner: Maintainer  
Release plan: V1 → V2 → V3

## 2. Problem statement

Developers need agents to operate websites that do not offer adequate APIs. Running browser automation reliably requires browser lifecycle management, queueing, retries, state, artifacts, credentials, model integration and observability. Hosted browser products simplify this but are not acceptable for every privacy, infrastructure-control or cost model.

## 3. Objectives

- O-001: deploy a useful system with Docker Compose on one machine;
- O-002: expose one stable API for browser tasks;
- O-003: return validated structured output and inspectable artifacts;
- O-004: isolate runs and bound resource consumption;
- O-005: support multiple model providers including OpenAI-compatible local endpoints;
- O-006: make failures diagnosable and retries explicit.

## 4. Non-goals for V1

Residential proxy network, automatic CAPTCHA solving, enterprise SSO, billing, multi-region cluster, arbitrary custom code execution, full workflow DAGs, custom browser engine, mobile browser emulation guarantees.

## 5. Personas

- P-001 AI application developer
- P-002 automation engineer
- P-003 privacy/security-conscious company
- P-004 self-host operator

## 6. Assumptions

- Chromium covers the first target workflows.
- Users can provide at least one LLM endpoint for agentic mode.
- Some tasks remain unsuitable due to CAPTCHAs, anti-bot controls, destructive side effects or legal/site-policy restrictions.

## 7. V1 scope

Create task/run, queue it, execute browser, use deterministic + model actions, produce artifacts and structured output, retry/cancel, inspect history, send webhook, self-host with Docker.

## 8. Major journeys

- J-001 first deployment;
- J-002 create ephemeral run;
- J-003 run with JSON schema;
- J-004 inspect failure;
- J-005 retry run;
- J-006 use persisted profile;
- J-007 receive webhook;
- J-008 upgrade/restore.

## 9. Data lifecycle

Task definition → Run queued → executing → terminal result → retained artifacts → retention expiry → purge. Profiles/secrets follow separate lifecycle and are never automatically copied into run output.

## 10. Permission model

V1: administrator/user API keys on one instance. V2 introduces workspace-scoped RBAC/service accounts. All secret/profile access is server-side and referenced by ID.

## 11. Error and recovery

Every failed run has a stable error code, human-readable message, last successful action, last URL, retryability classification and retained diagnostic artifacts subject to policy.

## 12. Release gates

- all V1 acceptance tests pass;
- Docker restore drill passes;
- SSRF/private-network tests pass;
- no plaintext secret/profile material in normal logs;
- worker crash/restart recovery verified;
- documented resource limits exist;
- API schemas generated and versioned.
