import type { ModelProvider } from "@agentsurf/ai";
import type { BrowserAction, BrowserBackend, BrowserObservation } from "@agentsurf/browser";
import type { CreateRunInput } from "@agentsurf/execution";

export type AgentDecision =
  | { type: "action"; action: BrowserAction; reasoningSummary?: string }
  | { type: "finish"; output: unknown; reasoningSummary?: string }
  | { type: "fail"; code: string; message: string; retryable?: boolean };

export interface AgentStepRecord {
  step: number;
  observation: BrowserObservation;
  decision: AgentDecision;
  startedAt: string;
  completedAt?: string;
}

export interface AgentRunContext {
  runId: string;
  input: CreateRunInput;
  browser: BrowserBackend;
  model: ModelProvider;
  signal: AbortSignal;
  onStep?(record: AgentStepRecord): Promise<void>;
}

export interface AgentRunOutcome {
  output: unknown;
  finalUrl?: string;
  steps: number;
}

export interface AgentRuntime {
  run(context: AgentRunContext): Promise<AgentRunOutcome>;
}
