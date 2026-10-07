# Agent execution contract

## Work unit

One task = one coherent independently reviewable change.

Before coding record:

```text
TASK-ID:
Roadmap phase:
Goal:
Stories:
FR/NFR/BR:
Use cases:
Expected packages/files:
Schema migration:
Security impact:
Failure/retry impact:
Tests:
Docs to update:
Definition of done:
```

After coding:
1. run focused tests;
2. run lint/typecheck for affected workspace;
3. update docs and progress ledger;
4. commit with task ID;
5. push branch and create/update PR.

## Stop conditions

Stop implementation and record ambiguity when accepted docs conflict, a required security invariant cannot be preserved, or a migration/retry behavior is unclear.
