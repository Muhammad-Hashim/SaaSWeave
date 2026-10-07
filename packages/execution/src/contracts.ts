import { z } from "zod";

export const RUN_STATUSES = [
  "created",
  "queued",
  "starting",
  "running",
  "cancelling",
  "finalizing",
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "policy_blocked"
] as const;

export const RunStatusSchema = z.enum(RUN_STATUSES);
export type RunStatus = z.infer<typeof RunStatusSchema>;

export const TERMINAL_RUN_STATUSES = [
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "policy_blocked"
] as const satisfies readonly RunStatus[];

const TERMINAL_RUN_STATUS_SET = new Set<RunStatus>(TERMINAL_RUN_STATUSES);

export function isTerminalRunStatus(status: RunStatus): boolean {
  return TERMINAL_RUN_STATUS_SET.has(status);
}

export const RUN_ERROR_CODES = [
  "BROWSER_START_FAILED",
  "BROWSER_CRASHED",
  "MODEL_ERROR",
  "MODEL_BUDGET_EXCEEDED",
  "MAX_STEPS_EXCEEDED",
  "RUN_TIMEOUT",
  "OUTPUT_SCHEMA_INVALID",
  "POLICY_PRIVATE_NETWORK",
  "POLICY_DOMAIN_BLOCKED",
  "DOWNLOAD_LIMIT_EXCEEDED",
  "ARTIFACT_STORE_FAILED",
  "CANCELLED_BY_USER",
  "UNKNOWN"
] as const;

export const RunErrorCodeSchema = z.enum(RUN_ERROR_CODES);
export type RunErrorCode = z.infer<typeof RunErrorCodeSchema>;

export const SideEffectPolicySchema = z.enum(["read_only", "declared", "unrestricted"]);
export type SideEffectPolicy = z.infer<typeof SideEffectPolicySchema>;

export const ArtifactCapturePolicySchema = z.enum(["none", "failures", "steps", "all"]);
export type ArtifactCapturePolicy = z.infer<typeof ArtifactCapturePolicySchema>;

export const RunLimitsSchema = z.object({
  maxSteps: z.number().int().positive().max(500).default(50),
  maxDurationMs: z.number().int().positive().max(3_600_000).default(300_000),
  maxModelCostUsd: z.number().nonnegative().optional(),
  maxDownloadBytes: z.number().int().positive().max(2_000_000_000).default(100_000_000)
});

export type RunLimits = z.infer<typeof RunLimitsSchema>;

export const CreateRunInputSchema = z.object({
  goal: z.string().trim().min(1).max(20_000),
  startUrl: z.url(),
  outputSchema: z.record(z.string(), z.unknown()).optional(),
  modelProfileId: z.string().min(1),
  browserProfileId: z.string().min(1).nullable().optional(),
  sideEffectPolicy: SideEffectPolicySchema.default("read_only"),
  artifactCapture: ArtifactCapturePolicySchema.default("failures"),
  limits: RunLimitsSchema.partial().optional(),
  metadata: z.record(z.string(), z.string()).default({})
});

export type CreateRunInput = z.infer<typeof CreateRunInputSchema>;

export const RunFailureSchema = z.object({
  code: RunErrorCodeSchema,
  message: z.string().min(1),
  retryable: z.boolean(),
  ambiguousSideEffect: z.boolean().default(false),
  details: z.record(z.string(), z.unknown()).optional()
});

export type RunFailure = z.infer<typeof RunFailureSchema>;

export const RunResultSchema = z.object({
  output: z.unknown().optional(),
  finalUrl: z.url().optional(),
  stepCount: z.number().int().nonnegative(),
  completedAt: z.iso.datetime()
});

export type RunResult = z.infer<typeof RunResultSchema>;

export const BrowserActionEventSchema = z.object({
  runId: z.string().min(1),
  step: z.number().int().nonnegative(),
  action: z.string().min(1),
  startedAt: z.iso.datetime(),
  completedAt: z.iso.datetime().optional(),
  urlBefore: z.url().optional(),
  urlAfter: z.url().optional(),
  artifactIds: z.array(z.string()).default([]),
  errorCode: RunErrorCodeSchema.optional()
});

export type BrowserActionEvent = z.infer<typeof BrowserActionEventSchema>;
