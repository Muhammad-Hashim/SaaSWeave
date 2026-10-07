# Edge case catalog

| ID | Scenario | Required behavior |
|---|---|---|
| EC-001 | URL redirects to `127.0.0.1` | Block and fail `POLICY_PRIVATE_NETWORK`. |
| EC-002 | DNS changes between validation and connection | Revalidate at connection boundary where feasible; fail closed. |
| EC-003 | Worker dies after website side effect but before DB checkpoint | Mark run recovery-ambiguous; never blindly replay unsafe step. |
| EC-004 | JSON output nearly matches schema | Attempt bounded repair; otherwise fail `OUTPUT_SCHEMA_INVALID`. |
| EC-005 | User cancels during navigation | Close context, checkpoint cancellation, cleanup artifacts. |
| EC-006 | User cancels while submitting form | Record cancellation requested + uncertain side-effect status. |
| EC-007 | Persistent profile used concurrently | Serialize/lock or clone according to policy; V1 default serialize. |
| EC-008 | Download exceeds size limit | Abort download and fail/continue according to task policy. |
| EC-009 | Model provider timeout | Retry model call within run budget; do not restart browser blindly. |
| EC-010 | Website opens popup/new tab | Associate page with same run/context and record page transition. |
| EC-011 | CAPTCHA appears | Detect/bail with classified reason unless configured external provider exists in later version. |
| EC-012 | Browser crashes | Retry only if side-effect policy permits; else fail ambiguous. |
| EC-013 | Webhook endpoint down | Persist delivery and retry without changing run result. |
| EC-014 | Artifact store unavailable | Preserve metadata/error, avoid claiming complete success when required artifact cannot be stored. |
| EC-015 | Redis lost temporarily | API remains readable where possible; new execution may pause; DB remains source of truth. |
