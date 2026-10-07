# AgentSurf — Product documentation

Status: product definition / implementation-ready planning  
Research snapshot: 2026-10-07  
Product: **AgentSurf**

## One-sentence definition

AgentSurf is a self-hosted platform that accepts a browser task such as “log in, navigate, extract, fill, download, or verify,” executes it inside an isolated Chromium session, and returns structured results, artifacts, logs, and an auditable run history without requiring the browser workload to be hosted by a third-party SaaS.

## Why this package exists

This documentation turns AgentSurf into an ordered source of truth suitable for a human engineer or coding agent. AgentSurf is implemented on top of the existing SaaSWeave production foundation rather than an empty repository. It follows the structure of `Muhammad-Hashim/docment-template`: discovery → research → product → flows → engineering → security → QA → deployment → roadmap → agent implementation → checklists → examples.

## Core product thesis

Do **not** build another generic Chromium hosting layer first. Existing products already cover major parts of that problem. The initial differentiation should be the self-hosted **agent execution + control plane**:

- natural-language goal → browser actions → structured result;
- local/private deployment;
- model-provider choice, including local models;
- reliable retries, cancellation, timeouts and resumability;
- persistent sessions when explicitly enabled;
- task history, screenshots, traces and audit events;
- pluggable browser backends: local Playwright first, optional remote/CDP backend later;
- Docker-first operations.

## Reading order

1. `AGENTS.md`
2. `00_Start here/`
3. `01_Discovery/`
4. `02_Research/`
5. `03_Product/`
6. `04_Design and flows/`
7. `05_Engineering/`
8. `06_Security and privacy/`
9. `07_Quality assurance/`
10. `08_Deployment and operations/`
11. `09_Roadmap and decisions/`
12. `10_Agent implementation/`
13. `11_Checklists/`
14. `12_Examples/`

## Version summary

| Release | Product state | Main outcome |
|---|---|---|
| V1 | Developer/self-host MVP | One operator can deploy it and reliably run browser tasks through API/UI. |
| V2 | Team/operations product | Teams get workspaces, credentials, schedules, approvals, profiles, quotas and stronger operations. |
| V3 | Distributed/enterprise platform | Multiple workers/regions, policy controls, enterprise identity, advanced routing, evaluations and workflow orchestration. |

See `09_Roadmap and decisions/000_V1 V2 V3 roadmap.md` for the complete scope.
