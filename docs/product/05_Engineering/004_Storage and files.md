# Storage and files

## Artifact kinds

`screenshot`, `download`, `trace`, `recording`, `html_snapshot` (disabled by default for privacy), `debug_bundle`.

## Storage adapter

```text
put(stream, metadata) -> ArtifactRef
get(ref) -> stream
head(ref) -> metadata
delete(ref)
presign?(ref, ttl)
```

V1 implementations:
1. local filesystem;
2. S3-compatible (AWS S3/MinIO/R2-compatible endpoint where supported).

## Security

- generated server-side keys, not user filenames;
- path traversal impossible by construction;
- size limit before and during streaming;
- SHA-256 recorded;
- no automatic execution/opening on server;
- sensitive artifact flag affects UI and retention.

## Backups

DB backup is not enough if artifacts/profiles matter. Backup procedure documents both metadata and object storage consistency expectations.
