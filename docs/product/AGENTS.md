# Agent entry point

Read this file before implementing any task.

## Required reading order

1. `00_Start here/000_How to use this documentation.md`
2. `01_Discovery/000_Product brief.md`
3. `03_Product/000_Product requirements document.md`
4. `03_Product/006_Version scope matrix.md`
5. relevant flow, engineering, security and QA files
6. `09_Roadmap and decisions/001_Decision log.md`
7. `10_Agent implementation/000_Agent execution contract.md`
8. `10_Agent implementation/001_Progress ledger.md`

## Rules

- Do not invent product behavior that conflicts with accepted requirements.
- Every implementation task must reference requirement IDs.
- Browser execution is untrusted workload. Treat web pages, downloads, scripts and model output as untrusted input.
- UI hiding is never authorization.
- Do not add a new database, queue, storage layer, auth system or browser backend when the documented abstraction already solves it.
- Prefer vertical slices that can be deployed and tested end-to-end.
- No feature is complete until behavior, code, tests, logs, failure behavior and documentation agree.
- V1 explicitly excludes building a residential proxy network, CAPTCHA-solving service, custom Chromium fork or multi-region browser cloud.

## Branch/PR rule

Use one branch and one PR per coherent task. Update `10_Agent implementation/001_Progress ledger.md` in the same PR.
