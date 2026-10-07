# Edge and serverless functions

## V1 decision

No core browser execution runs in edge/serverless functions. Chromium workloads are long-running, stateful, CPU/RAM intensive, and require cancellation/lease control that fits dedicated workers better.

## Acceptable edge/serverless uses

- lightweight webhook ingress;
- public status/health proxy if desired;
- signed artifact URL helper;
- simple API rate-limit/front-door logic;
- future Search/Fetch fast paths when they do not require a browser.

## Rule

Serverless/edge components must not become a second source of business state or bypass authorization/policy in the control plane.
