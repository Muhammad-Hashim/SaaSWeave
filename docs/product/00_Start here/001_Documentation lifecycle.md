# Documentation lifecycle

## States

Draft → Reviewed → Accepted → Implemented → Verified → Deprecated.

## Ownership

- Product requirements: product owner/maintainer.
- Architecture/security: technical maintainer.
- API contracts: owning engineer.
- Test acceptance: maintainer + reviewer.
- Progress ledger: implementation agent/engineer.

## Update rule

Code that changes externally observable behavior must update the matching requirement and acceptance tests in the same PR. A later “docs cleanup” is not sufficient because it leaves two competing sources of truth.
