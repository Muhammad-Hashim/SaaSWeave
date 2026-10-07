# Data privacy

## Sensitive data classes

1. credentials/secrets;
2. browser profile/session state;
3. screenshots/recordings/HTML snapshots;
4. downloaded files;
5. run result and page text;
6. logs/metrics.

## Defaults

- no external telemetry by default;
- ephemeral browser state by default;
- screenshots captured at meaningful checkpoints, configurable off;
- HTML snapshot off by default;
- raw model prompts/responses retention minimized/configurable;
- cookie/header values redacted from logs;
- retention documented per artifact class.

## External model privacy

When configured with cloud LLMs, page-derived content may be sent to that provider. UI/config documentation must state this plainly. Local/OpenAI-compatible endpoints allow fully self-hosted model routing when the operator provides a capable local model server.
