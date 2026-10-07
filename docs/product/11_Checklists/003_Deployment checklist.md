# Deployment checklist

- [ ] TLS/reverse proxy configured.
- [ ] strong master encryption key stored outside repository.
- [ ] database/Redis credentials rotated from defaults.
- [ ] artifact storage permissions scoped.
- [ ] worker concurrency sized to host.
- [ ] private network policy reviewed.
- [ ] retention configured.
- [ ] backups scheduled and restore tested.
- [ ] monitoring/alerts for disk, DB, queue age and worker failures.
- [ ] container restart policies configured.
- [ ] debug endpoints not publicly exposed.
