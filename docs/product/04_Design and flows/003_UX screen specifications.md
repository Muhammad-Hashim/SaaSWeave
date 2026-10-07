# UX screen specifications

## Screen S-001 — Runs

Shows state, task/goal summary, start URL host, duration, model profile, browser profile, attempts/retry link, created time and terminal reason.

Primary actions: New Run, filter, open run, cancel running run, retry terminal run.

## Screen S-002 — New Run

Fields:
- goal (required);
- start URL (required);
- output schema editor (optional);
- model profile;
- browser profile (default ephemeral);
- timeout;
- max steps;
- screenshot policy;
- metadata key/value;
- advanced policy settings collapsed by default.

Before submit show warning when task description appears to request destructive/financial action.

## Screen S-003 — Run detail

Sections:
- status header;
- result/error;
- timeline of actions;
- screenshots/artifacts;
- browser/model/runtime metadata;
- webhook deliveries;
- raw JSON tab;
- retry button.

## Screen S-004 — Settings

V1: API keys, model profiles, storage, concurrency, allowed domains/network policy, retention, webhook signing secret.

## UX principle

The console is an operator/debugging surface. Do not hide failure complexity behind “Something went wrong.” Stable error codes must be visible.
