import { sql } from "drizzle-orm";
import {
  type AnyPgColumn,
  boolean,
  check,
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex
} from "drizzle-orm/pg-core";

import type {
  ArtifactCapturePolicy,
  RunErrorCode,
  RunStatus,
  SideEffectPolicy
} from "@agentsurf/execution";

import { organization, user } from "#@/schema/auth.schema";

export const AGENT_BROWSER_PROFILE_STATES = ["active", "revoked", "error"] as const;
export type AgentBrowserProfileState = (typeof AGENT_BROWSER_PROFILE_STATES)[number];

export const AGENT_ARTIFACT_KINDS = [
  "screenshot",
  "download",
  "trace",
  "recording",
  "html_snapshot",
  "debug_bundle"
] as const;
export type AgentArtifactKind = (typeof AGENT_ARTIFACT_KINDS)[number];

export const agentModelProfile = pgTable(
  "agent_model_profile",
  {
    baseUrl: text("base_url"),
    config: jsonb("config").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    enabled: boolean("enabled").notNull().default(true),
    id: text("id").primaryKey(),
    model: text("model").notNull(),
    name: text("name").notNull(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),
    provider: text("provider").notNull(),
    secretRef: text("secret_ref"),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (table) => [
    uniqueIndex("agent_model_profile_org_name_idx").on(table.organizationId, table.name),
    index("agent_model_profile_org_enabled_idx").on(table.organizationId, table.enabled)
  ]
);

export const agentBrowserProfile = pgTable(
  "agent_browser_profile",
  {
    createdAt: timestamp("created_at").defaultNow().notNull(),
    encryptionVersion: integer("encryption_version").notNull().default(1),
    id: text("id").primaryKey(),
    lastUsedAt: timestamp("last_used_at"),
    leaseExpiresAt: timestamp("lease_expires_at"),
    leaseOwner: text("lease_owner"),
    name: text("name").notNull(),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),
    state: text("state").$type<AgentBrowserProfileState>().notNull().default("active"),
    storageRef: text("storage_ref").notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (table) => [
    uniqueIndex("agent_browser_profile_org_name_idx").on(table.organizationId, table.name),
    index("agent_browser_profile_org_state_idx").on(table.organizationId, table.state),
    index("agent_browser_profile_lease_idx").on(table.leaseExpiresAt),
    check(
      "agent_browser_profile_state_check",
      sql`${table.state} IN ('active', 'revoked', 'error')`
    )
  ]
);

export const agentRun = pgTable(
  "agent_run",
  {
    artifactCapture: text("artifact_capture")
      .$type<ArtifactCapturePolicy>()
      .notNull()
      .default("failures"),
    browserProfileId: text("browser_profile_id").references(() => agentBrowserProfile.id, {
      onDelete: "set null"
    }),
    cancelRequestedAt: timestamp("cancel_requested_at"),
    completedAt: timestamp("completed_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    createdByUserId: text("created_by_user_id").references(() => user.id, {
      onDelete: "set null"
    }),
    errorCode: text("error_code").$type<RunErrorCode>(),
    errorDetails: jsonb("error_details").$type<Record<string, unknown>>(),
    errorMessage: text("error_message"),
    goal: text("goal").notNull(),
    id: text("id").primaryKey(),
    leaseExpiresAt: timestamp("lease_expires_at"),
    leaseOwner: text("lease_owner"),
    limits: jsonb("limits").$type<Record<string, unknown>>().notNull().default({}),
    metadata: jsonb("metadata").$type<Record<string, string>>().notNull().default({}),
    modelProfileId: text("model_profile_id").references(() => agentModelProfile.id, {
      onDelete: "set null"
    }),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),
    outputSchema: jsonb("output_schema").$type<Record<string, unknown>>(),
    result: jsonb("result").$type<unknown>(),
    retryOfRunId: text("retry_of_run_id").references((): AnyPgColumn => agentRun.id, {
      onDelete: "set null"
    }),
    sideEffectPolicy: text("side_effect_policy")
      .$type<SideEffectPolicy>()
      .notNull()
      .default("read_only"),
    startedAt: timestamp("started_at"),
    startUrl: text("start_url").notNull(),
    status: text("status").$type<RunStatus>().notNull().default("created"),
    stepCount: integer("step_count").notNull().default(0),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (table) => [
    index("agent_run_org_created_idx").on(table.organizationId, table.createdAt),
    index("agent_run_org_status_idx").on(table.organizationId, table.status),
    index("agent_run_status_lease_idx").on(table.status, table.leaseExpiresAt),
    index("agent_run_retry_of_idx").on(table.retryOfRunId),
    check(
      "agent_run_status_check",
      sql`${table.status} IN ('created','queued','starting','running','cancelling','finalizing','succeeded','failed','cancelled','timed_out','policy_blocked')`
    ),
    check(
      "agent_run_side_effect_policy_check",
      sql`${table.sideEffectPolicy} IN ('read_only','declared','unrestricted')`
    ),
    check(
      "agent_run_artifact_capture_check",
      sql`${table.artifactCapture} IN ('none','failures','steps','all')`
    ),
    check("agent_run_step_count_check", sql`${table.stepCount} >= 0`)
  ]
);

export const agentRunAction = pgTable(
  "agent_run_action",
  {
    action: text("action").notNull(),
    completedAt: timestamp("completed_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    durationMs: integer("duration_ms"),
    errorCode: text("error_code").$type<RunErrorCode>(),
    id: text("id").primaryKey(),
    input: jsonb("input").$type<unknown>(),
    output: jsonb("output").$type<unknown>(),
    runId: text("run_id")
      .notNull()
      .references(() => agentRun.id, { onDelete: "cascade" }),
    startedAt: timestamp("started_at").notNull(),
    step: integer("step").notNull(),
    urlAfter: text("url_after"),
    urlBefore: text("url_before")
  },
  (table) => [
    uniqueIndex("agent_run_action_run_step_idx").on(table.runId, table.step),
    index("agent_run_action_run_created_idx").on(table.runId, table.createdAt),
    check("agent_run_action_step_check", sql`${table.step} >= 0`)
  ]
);

export const agentRunArtifact = pgTable(
  "agent_run_artifact",
  {
    createdAt: timestamp("created_at").defaultNow().notNull(),
    id: text("id").primaryKey(),
    kind: text("kind").$type<AgentArtifactKind>().notNull(),
    mimeType: text("mime_type"),
    retentionUntil: timestamp("retention_until"),
    runId: text("run_id")
      .notNull()
      .references(() => agentRun.id, { onDelete: "cascade" }),
    sensitive: boolean("sensitive").notNull().default(false),
    sha256: text("sha256").notNull(),
    sizeBytes: integer("size_bytes").notNull(),
    storageKey: text("storage_key").notNull()
  },
  (table) => [
    index("agent_run_artifact_run_idx").on(table.runId),
    index("agent_run_artifact_retention_idx").on(table.retentionUntil),
    uniqueIndex("agent_run_artifact_storage_key_idx").on(table.storageKey),
    check(
      "agent_run_artifact_kind_check",
      sql`${table.kind} IN ('screenshot','download','trace','recording','html_snapshot','debug_bundle')`
    ),
    check("agent_run_artifact_size_check", sql`${table.sizeBytes} >= 0`)
  ]
);
