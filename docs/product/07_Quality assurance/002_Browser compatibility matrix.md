# Browser/runtime compatibility matrix

## V1 supported server runtime

| Item | Support |
|---|---|
| Linux x86_64 container | required |
| Linux arm64 | best effort until CI added |
| Chromium version | pinned through Playwright |
| Firefox/WebKit execution | not V1 |
| Windows server container | not V1 |
| Local developer Windows/macOS/Linux | supported where Playwright prerequisites install |

## Website capability matrix

Test fixtures must include:
- SPA navigation;
- server-rendered pages;
- iframes;
- popup/new tab;
- file upload/download;
- shadow DOM where chosen agent adapter supports it;
- cookie auth;
- expired session;
- infinite scroll;
- dynamic text/layout;
- redirect chains.
