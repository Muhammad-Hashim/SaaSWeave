export type BrowserAction =
  | { type: "navigate"; url: string }
  | { type: "click"; selector: string }
  | { type: "type"; selector: string; text: string; clear?: boolean }
  | { type: "select"; selector: string; value: string }
  | { type: "wait"; milliseconds: number }
  | { type: "scroll"; x?: number; y: number }
  | { type: "extract"; selector?: string; mode?: "text" | "html" | "accessibility" }
  | { type: "screenshot"; fullPage?: boolean };

export interface BrowserObservation {
  url: string;
  title?: string;
  text?: string;
  accessibilityTree?: unknown;
  screenshotArtifactId?: string;
}

export interface BrowserActionResult {
  ok: boolean;
  observation?: BrowserObservation;
  value?: unknown;
  error?: {
    code: string;
    message: string;
  };
}

export interface BrowserSessionOptions {
  runId: string;
  profileId?: string | null;
  locale?: string;
  timezoneId?: string;
  userAgent?: string;
}

export interface BrowserSession {
  readonly id: string;
  observe(): Promise<BrowserObservation>;
  act(action: BrowserAction): Promise<BrowserActionResult>;
  close(): Promise<void>;
}

export interface BrowserBackendHealth {
  ok: boolean;
  message?: string;
}

export interface BrowserBackend {
  readonly kind: string;
  createSession(options: BrowserSessionOptions): Promise<BrowserSession>;
  healthcheck(): Promise<BrowserBackendHealth>;
}
