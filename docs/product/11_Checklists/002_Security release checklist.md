# Security release checklist

- [ ] Public→private redirect blocked.
- [ ] Loopback/link-local/private CIDRs blocked by default.
- [ ] Auth enforced on admin/resource endpoints.
- [ ] Artifact authorization enforced.
- [ ] API keys hashed.
- [ ] Profile blobs encrypted.
- [ ] Secret redaction tests pass.
- [ ] Browser containers/processes use least privilege available.
- [ ] Download size/type policy enforced.
- [ ] No public CDP/debug port in default deployment.
- [ ] Webhook signatures use modern HMAC and replay-resistant timestamp/event ID guidance.
- [ ] Dependency/security scan reviewed.
