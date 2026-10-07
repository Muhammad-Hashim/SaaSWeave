import { describe, expect, it } from "vitest";

import {
  CreateRunInputSchema,
  isTerminalRunStatus,
  RunLimitsSchema
} from "./contracts";

describe("execution contracts", () => {
  it("uses safe defaults for new runs", () => {
    const input = CreateRunInputSchema.parse({
      goal: "Read the public pricing page",
      startUrl: "https://example.com/pricing",
      modelProfileId: "model_default"
    });

    expect(input.sideEffectPolicy).toBe("read_only");
    expect(input.artifactCapture).toBe("failures");
    expect(input.metadata).toEqual({});
  });

  it("provides bounded default limits", () => {
    const limits = RunLimitsSchema.parse({});

    expect(limits.maxSteps).toBe(50);
    expect(limits.maxDurationMs).toBe(300_000);
    expect(limits.maxDownloadBytes).toBe(100_000_000);
  });

  it("recognizes terminal states", () => {
    expect(isTerminalRunStatus("succeeded")).toBe(true);
    expect(isTerminalRunStatus("policy_blocked")).toBe(true);
    expect(isTerminalRunStatus("running")).toBe(false);
  });
});
