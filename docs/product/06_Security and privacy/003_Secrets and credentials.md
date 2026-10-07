# Secrets and credentials

## V1

- environment or Docker secret references for infrastructure/model provider keys;
- API keys stored hashed;
- browser profile blobs encrypted with instance master key;
- no UI that reveals stored secret plaintext after save;
- secret values excluded from logs/debug bundles.

## V2

Introduce encrypted credential records with domain binding and typed fields. Agent references credentials by logical ID; browser/tool layer performs fill where possible.

## V3

External secret managers: HashiCorp Vault, cloud KMS/Secrets Manager adapters, automatic rotation hooks and tenant-specific encryption keys.

## Key rotation

Persist encryption version/key ID with each encrypted blob so data can be lazily or explicitly re-encrypted.
