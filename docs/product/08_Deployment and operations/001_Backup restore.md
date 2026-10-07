# Backup and restore

## Backup set

1. PostgreSQL logical/physical backup;
2. artifact/object store according to retention needs;
3. persisted browser profiles;
4. instance configuration excluding replaceable runtime cache;
5. encryption keys/secrets via operator secret-management process.

## Restore sequence

1. stop workers or block new runs;
2. restore database;
3. restore object/profile storage;
4. restore matching encryption keys;
5. start API in maintenance/read-only check mode;
6. run consistency validator;
7. start workers;
8. reconcile queued/running states;
9. execute smoke test.

## RPO/RTO

V1 does not promise universal RPO/RTO. Documentation provides operator-controlled backup frequency and a tested restore procedure.
