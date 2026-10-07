# Authorization matrix

## V1 roles

| Resource/action | Admin | API key user |
|---|:---:|:---:|
| create/read own/instance runs | ✅ | ✅ |
| cancel/retry runs | ✅ | ✅ |
| create/revoke API keys | ✅ | — |
| configure model profiles | ✅ | — |
| configure storage/network policy | ✅ | — |
| manage browser profiles | ✅ | configurable |
| view sensitive artifacts | ✅ | configurable |
| restore backup | ✅ | — |

V2 replaces instance-wide user semantics with workspace-scoped RBAC and service accounts.

## Rule

Authorization is checked server-side at every resource boundary, including artifact download URLs and profile references.
