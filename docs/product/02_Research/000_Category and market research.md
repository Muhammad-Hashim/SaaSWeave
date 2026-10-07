# Category and market research

## Category

The product sits between:
1. browser infrastructure (remote Chromium/CDP sessions),
2. browser automation SDKs (Playwright/Puppeteer),
3. AI browser-agent SDKs,
4. agent execution/control planes.

## Market observation

The browser layer is increasingly modular. A developer can use a local browser, a self-hosted browser server, or a managed remote browser while keeping higher-level agent logic separate. This suggests the product should expose an internal `BrowserBackend` interface rather than couple the agent to one runtime.

## Primary-source observations

- TinyFish Browser exposes managed Chromium via CDP and supports Playwright/Puppeteer, while its higher-level Web Agent handles natural-language goals. This validates separating **browser runtime** from **agent runtime**.
- Browserbase similarly exposes Search, Fetch and full browser sessions; the browser session can be controlled over Playwright/CDP.
- Steel is an open-source browser API that can be run locally with Docker and provides session management, proxy support and SDKs. This is direct evidence that a new project should not spend V1 recreating generic remote-browser infrastructure.
- Browser Use can run its open-source agent library on local/self-hosted browsers and supports multiple model providers, showing demand for model/runtime independence.
- Stagehand provides higher-level agent-oriented browser operations while remaining close to Playwright/CDP.

## Product opportunity

The opportunity is not “host Chromium.” It is a cohesive self-hosted system combining:
- execution API;
- run lifecycle;
- agent/model abstraction;
- artifact and audit capture;
- policy/security controls;
- persistent profiles/credentials;
- queueing and operations;
- reusable workflows;
- optional browser backends.

## Research sources

- https://www.tinyfish.ai/browser
- https://www.browserbase.com/
- https://github.com/steel-dev/steel-browser
- https://github.com/browser-use/browser-use
- https://github.com/browserbase/stagehand
- https://playwright.dev/docs/browser-contexts
