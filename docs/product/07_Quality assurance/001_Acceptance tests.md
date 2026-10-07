# V1 acceptance tests

- **AT-001** Docker Compose starts API/web/worker/Postgres/Redis/storage and health becomes ready.
- **AT-002** Run navigates controlled site and returns schema-valid JSON.
- **AT-003** Run can click/type/submit controlled form and verify postcondition.
- **AT-004** Run download appears as artifact with hash/size/MIME.
- **AT-005** 30-second model outage produces bounded retries then stable error.
- **AT-006** Worker killed mid-navigation eventually yields recoverable/terminal classified run, not stuck forever.
- **AT-007** Private IP URL and public→private redirect are blocked.
- **AT-008** Two ephemeral runs cannot see each other's cookies/local storage.
- **AT-009** Persistent profile survives worker restart when storage is healthy.
- **AT-010** Concurrent access to same mutable profile is serialized.
- **AT-011** Cancellation closes browser resources within target under non-side-effecting task.
- **AT-012** Output schema mismatch does not report success.
- **AT-013** Webhook signature verifies and duplicate delivery preserves same event ID.
- **AT-014** Backup/restore recreates run metadata and required profile/artifact references.
- **AT-015** normal logs contain no configured model secret/API key/cookie values.
