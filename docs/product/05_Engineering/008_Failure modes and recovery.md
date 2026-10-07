# Failure modes and recovery

| Failure | Detection | Recovery |
|---|---|---|
| API process crash | health/restart | DB durable state; restart stateless API. |
| Redis restart | queue unavailable | API returns degraded status; reconcile queued DB runs. |
| Worker crash | lease expiry | classify safe/ambiguous recovery before redispatch. |
| Chromium crash | browser event | safe retry or terminal `BROWSER_CRASH`. |
| Model timeout | provider timeout | bounded provider retry; preserve browser state if alive. |
| DB unavailable | connection health | pause new mutations; worker avoids claiming success until commit. |
| S3 unavailable | adapter error | retry artifact; if required artifact unavailable, fail finalization. |
| Webhook down | delivery error | independent retries. |
| Profile corruption | load validation | quarantine profile; require re-auth/import. |
| Disk full | filesystem errors/metrics | stop accepting artifact-heavy work; mark degraded. |

## Recovery principle

Never trade correctness for an automatic retry when the external website may already have accepted a side effect.
