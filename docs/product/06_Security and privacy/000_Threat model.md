# Threat model

## Assets

- API keys;
- LLM provider credentials;
- browser cookies/local storage/profile data;
- screenshots/downloads;
- internal web content;
- run results;
- infrastructure network access.

## Trust boundaries

Client → API → DB/queue → worker → browser → target website → model provider → artifact storage.

## Major threats

### TM-001 SSRF / internal network pivot
Untrusted goal/page redirects browser to internal metadata/admin service.

Controls: default deny private/link-local/loopback, redirect revalidation, DNS resolution checks, allowlist overrides owned by operator.

### TM-002 Prompt injection from webpage
Page text instructs agent to exfiltrate secrets or ignore goal.

Controls: tool layer never exposes raw infrastructure secrets; model prompt explicitly treats page content as untrusted; action policy restricts destinations/downloads; sensitive operations later require approval.

### TM-003 Credential exfiltration
Agent reads password/cookie then sends to attacker-controlled site.

Controls: credential application via tool/browser layer rather than model-visible plaintext where possible; domain-bound credentials; egress policy; audit.

### TM-004 Cross-run profile leakage
Context/profile state leaks between runs.

Controls: ephemeral contexts default, explicit profile IDs, cleanup tests, profile locks, no shared default context.

### TM-005 Malicious downloads
Website downloads executable/archive designed to attack worker.

Controls: never execute automatically, store as untrusted blob, quotas, optional malware scanning hook later.

### TM-006 Resource exhaustion
Pages or tasks consume CPU/RAM/disk indefinitely.

Controls: timeout, max steps, process limits, artifact limits, concurrency caps, worker watchdog.
