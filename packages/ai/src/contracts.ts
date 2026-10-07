export type ModelRole = "system" | "user" | "assistant" | "tool";

export interface ModelMessage {
  role: ModelRole;
  content: string;
  name?: string;
  toolCallId?: string;
}

export interface ModelTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

export interface ModelToolCall {
  id: string;
  name: string;
  arguments: unknown;
}

export interface ModelUsage {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  estimatedCostUsd?: number;
}

export interface AgentModelRequest {
  messages: readonly ModelMessage[];
  tools?: readonly ModelTool[];
  responseSchema?: Record<string, unknown>;
  maxOutputTokens?: number;
  temperature?: number;
  signal?: AbortSignal;
}

export interface AgentModelResponse {
  text?: string;
  toolCalls: readonly ModelToolCall[];
  usage?: ModelUsage;
  providerRequestId?: string;
  rawMetadata?: Record<string, unknown>;
}

export interface ModelProviderHealth {
  ok: boolean;
  message?: string;
}

export interface ModelProvider {
  readonly provider: string;
  readonly model: string;
  complete(request: AgentModelRequest): Promise<AgentModelResponse>;
  healthcheck(): Promise<ModelProviderHealth>;
}
