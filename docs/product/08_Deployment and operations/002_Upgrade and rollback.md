# Upgrade and rollback

## Versioning

Semantic product releases; database schema migration version stored in DB.

## Upgrade

1. read release notes;
2. take backup;
3. drain/pause workers if migration requires it;
4. run migration job once;
5. deploy API/web/worker images from same release;
6. health/smoke tests;
7. resume queue.

## Rollback

Application rollback is allowed only when DB migration is backward-compatible or documented down migration exists. Never imply “docker image rollback” is enough after irreversible schema/data migration.
