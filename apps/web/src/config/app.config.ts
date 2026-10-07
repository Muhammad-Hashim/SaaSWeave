import { ENV_WEB_ISOMORPHIC } from "@saasweave/env/web/env.isomorphic";
import { baseLocale, locales } from "@saasweave/i18n/runtime";

const emailSupport = `support@${new URL(ENV_WEB_ISOMORPHIC.VITE_WEB_URL).host}`;

// We load it in vite.config.ts because they are originally from ENV_WEB_SERVER variables
declare const __BUILD_SOURCE_COMMIT__: string;

export const appConfig = Object.freeze({
  i18n: {
    baseLocale,
    cookieName: "LOCALE",
    locales
  },
  site: {
    author: "AgentSurf",
    basePath: new URL(ENV_WEB_ISOMORPHIC.VITE_WEB_URL).pathname,
    baseUrl: new URL(ENV_WEB_ISOMORPHIC.VITE_WEB_URL).origin,
    description:
      "AgentSurf is the self-hosted execution platform for production AI web agents: run browser tasks, inspect every step, and keep sessions and data under your control.",
    emailSupport,
    jurisdictionCountry: "Denmark",
    longName: "AgentSurf — Self-hosted execution platform for AI web agents",
    serverLocation: "the EU (Frankfurt)",
    shortName: "AgentSurf",
    tagline: "Give your agents a browser you control.",
    url: ENV_WEB_ISOMORPHIC.VITE_WEB_URL,
    version: __BUILD_SOURCE_COMMIT__
  }
});
