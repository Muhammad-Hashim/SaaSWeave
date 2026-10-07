# Browser isolation

## V1 threat assumption

One trusted organization/self-host operator. Browser tasks can be untrusted, but tenants are not mutually hostile.

Controls:
- separate BrowserContext per ephemeral run;
- dedicated download/artifact directory;
- no host filesystem mounts beyond required paths;
- non-root container user where supported;
- restricted Linux capabilities;
- resource limits;
- network policy enforcement outside model logic.

## V2

Optional one-browser-process or one-container-per-sensitive-run mode; seccomp/AppArmor guidance; isolated worker pools for credentialed runs.

## V3

Hardened multi-tenant sandbox/fleet, per-tenant network policy and stronger isolation guarantees. BrowserContext alone must never be marketed as a hostile tenant security boundary.
