# Document completeness rubric

Score each feature 0–2:

| Area | 0 | 1 | 2 |
|---|---|---|---|
| User/problem | missing | implied | explicit actor/problem/outcome |
| Behavior | missing | happy path | happy + alternatives/failures |
| Permissions | missing | partial | actor/resource/action explicit |
| Data | missing | fields | lifecycle/retention/migration |
| Failure | missing | generic | typed errors/retry/timeout/cancel |
| Security | missing | generic | threat/control/tests |
| Observability | missing | logs | events/metrics/diagnostics |
| Tests | missing | examples | executable acceptance criteria |
| Operations | missing | deploy note | backup/upgrade/rollback |
| Traceability | missing | partial | story→req→flow→test |

Implementation should not start for a high-risk feature with material 0 scores.
