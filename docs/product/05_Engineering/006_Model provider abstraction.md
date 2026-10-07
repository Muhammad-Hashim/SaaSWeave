# Model provider abstraction

## Goal

Agent logic must not be hard-coded to one vendor.

## Provider interface

```ts
interface ModelProvider {
  invoke(req: AgentModelRequest): Promise<AgentModelResponse>;
  capabilities(): ModelCapabilities;
}
```

## V1 providers

- OpenAI;
- Anthropic;
- Gemini;
- OpenAI-compatible custom endpoint for local gateways/models.

## Model profile

Stores model ID, provider, base URL, secret reference, max output, temperature where supported, vision capability, cost metadata (optional), default timeouts.

## Agent output contract

Model returns typed next-action intent, not arbitrary executable code in V1. Example action union: `navigate | click | type | select | scroll | wait | extract | finish | fail`.

## Safety

Never pass infrastructure secrets into model context. Browser credentials are applied by browser/tool layer. Screenshots/DOM content may be sensitive; model routing is therefore a privacy decision visible in configuration.
