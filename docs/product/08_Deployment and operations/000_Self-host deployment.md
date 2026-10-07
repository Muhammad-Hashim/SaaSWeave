# Self-host deployment

## V1 Docker Compose services

- `web`
- `api`
- `worker`
- `postgres`
- `redis`
- `minio` (optional profile; local filesystem may be default for smallest install)

## Quick-start target

```bash
cp .env.example .env
docker compose up -d
./scripts/healthcheck.sh
```

## Required configuration

- instance URL;
- database URL;
- Redis URL;
- master encryption key;
- model profile credentials;
- artifact backend;
- allowed target-network policy;
- worker concurrency;
- retention.

## Production guidance

Use external managed/self-hosted PostgreSQL/Redis/S3 if desired; run multiple workers only after shared storage and lease semantics are verified. Terminate TLS at trusted reverse proxy. Do not expose Chromium debug ports publicly.
