# Browser runtime

## Interface

```ts
interface BrowserBackend {
  createSession(input: BrowserSessionInput): Promise<BrowserSession>;
  closeSession(sessionId: string): Promise<void>;
  health(): Promise<BrowserBackendHealth>;
}
```

A session exposes an internal action executor for navigate/click/type/select/scroll/wait/upload/download/screenshot/extract.

## V1 backend — local Playwright

- Chromium pinned to tested Playwright version;
- ephemeral context by default;
- context-level permissions controlled explicitly;
- downloads redirected to per-run directory;
- service workers/background behavior considered in test plan;
- browser instance may be reused across safe ephemeral contexts for efficiency, but crash/resource policies may recycle it.

## Security boundary

Playwright BrowserContext provides state isolation, not a complete malicious-tenant sandbox. V1 is self-host/single-trust-domain oriented. V2 adds stronger process/container isolation modes. V3 supports hardened multi-tenant worker profiles.

## Later backends

- remote CDP;
- Steel/self-hosted Steel;
- Browserbase/TinyFish-like provider adapter if users explicitly choose hosted execution.

The control plane must not depend on provider-specific session IDs beyond adapter metadata.
