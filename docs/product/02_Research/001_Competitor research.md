# Competitor research

## TinyFish

**Observed positioning:** managed web stack for agents, including Browser and higher-level agent capabilities. Browser exposes native Chromium/CDP; infrastructure handles access/proxy concerns.

**Lesson:** keep browser session management and agent execution as separate product modules.

## Browserbase

**Observed positioning:** browser infrastructure plus Search/Fetch; Stagehand provides agent-oriented automation primitives.

**Lesson:** not every URL needs a browser. V3 should consider a cheap Fetch/Search fast path before spinning up Chromium.

## Steel

**Observed positioning:** open-source browser API for AI agents/apps, Docker deployable, REST/OpenAPI, sessions, browser tools, proxy support and multiple SDKs.

**Lesson:** Steel is both competitor and potential backend. V1 differentiation cannot be “self-hosted browser API.”

## Browser Use

**Observed positioning:** open-source browser agent library plus hosted cloud. The library can run locally and use different model providers.

**Lesson:** agent logic can be portable across browser runtimes; model choice is a user expectation.

## Stagehand

**Observed positioning:** agent SDK close to Playwright, using higher-level actions/extraction/observation while preserving browser control.

**Lesson:** the product should support deterministic Playwright actions and AI-assisted actions in the same run, rather than force “all scripted” or “all agentic.”

## Differentiation target

1. Self-hosted control plane with no mandatory cloud browser.
2. Reliable run lifecycle + structured output + audit artifacts.
3. Provider-neutral browser and model adapters.
4. Operational safety: idempotency, policy, approvals, cancellation semantics, resource limits.
5. Excellent Docker-first developer experience.
6. Clear upgrade path from local single-node V1 to distributed V3.
