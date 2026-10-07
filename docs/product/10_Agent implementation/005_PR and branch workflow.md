# PR and branch workflow

## Naming

`feat/v1-001-monorepo-bootstrap`  
`fix/v1-0xx-run-lease-race`  
`docs/v1-0xx-profile-threat-model`

## PR body

- task ID and roadmap phase;
- linked US/FR/NFR IDs;
- behavior summary;
- security/failure impact;
- migrations;
- tests run/results;
- screenshots/API examples if relevant;
- rollback notes;
- docs updated.

## Merge gate

No merge with undocumented behavior change, failing focused tests, unresolved migration ambiguity or known secret leakage.
