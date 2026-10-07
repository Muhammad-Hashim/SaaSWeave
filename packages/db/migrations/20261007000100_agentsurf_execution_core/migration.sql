CREATE TABLE "agent_model_profile" (
  "id" text PRIMARY KEY NOT NULL,
  "organization_id" text NOT NULL,
  "name" text NOT NULL,
  "provider" text NOT NULL,
  "model" text NOT NULL,
  "base_url" text,
  "secret_ref" text,
  "config" jsonb DEFAULT '{}'::jsonb NOT NULL,
  "enabled" boolean DEFAULT true NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL,
  CONSTRAINT "agent_model_profile_organization_id_organization_id_fk"
    FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id")
    ON DELETE cascade ON UPDATE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX "agent_model_profile_org_name_idx"
  ON "agent_model_profile" ("organization_id","name");
--> statement-breakpoint
CREATE INDEX "agent_model_profile_org_enabled_idx"
  ON "agent_model_profile" ("organization_id","enabled");
--> statement-breakpoint

CREATE TABLE "agent_browser_profile" (
  "id" text PRIMARY KEY NOT NULL,
  "organization_id" text NOT NULL,
  "name" text NOT NULL,
  "storage_ref" text NOT NULL,
  "encryption_version" integer DEFAULT 1 NOT NULL,
  "state" text DEFAULT 'active' NOT NULL,
  "lease_owner" text,
  "lease_expires_at" timestamp,
  "last_used_at" timestamp,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL,
  CONSTRAINT "agent_browser_profile_organization_id_organization_id_fk"
    FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id")
    ON DELETE cascade ON UPDATE no action,
  CONSTRAINT "agent_browser_profile_state_check"
    CHECK ("state" IN ('active','revoked','error'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX "agent_browser_profile_org_name_idx"
  ON "agent_browser_profile" ("organization_id","name");
--> statement-breakpoint
CREATE INDEX "agent_browser_profile_org_state_idx"
  ON "agent_browser_profile" ("organization_id","state");
--> statement-breakpoint
CREATE INDEX "agent_browser_profile_lease_idx"
  ON "agent_browser_profile" ("lease_expires_at");
--> statement-breakpoint

CREATE TABLE "agent_run" (
  "id" text PRIMARY KEY NOT NULL,
  "organization_id" text NOT NULL,
  "created_by_user_id" text,
  "goal" text NOT NULL,
  "start_url" text NOT NULL,
  "status" text DEFAULT 'created' NOT NULL,
  "error_code" text,
  "error_message" text,
  "error_details" jsonb,
  "result" jsonb,
  "output_schema" jsonb,
  "model_profile_id" text,
  "browser_profile_id" text,
  "limits" jsonb DEFAULT '{}'::jsonb NOT NULL,
  "side_effect_policy" text DEFAULT 'read_only' NOT NULL,
  "artifact_capture" text DEFAULT 'failures' NOT NULL,
  "metadata" jsonb DEFAULT '{}'::jsonb NOT NULL,
  "cancel_requested_at" timestamp,
  "lease_owner" text,
  "lease_expires_at" timestamp,
  "retry_of_run_id" text,
  "step_count" integer DEFAULT 0 NOT NULL,
  "started_at" timestamp,
  "completed_at" timestamp,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL,
  CONSTRAINT "agent_run_organization_id_organization_id_fk"
    FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id")
    ON DELETE cascade ON UPDATE no action,
  CONSTRAINT "agent_run_created_by_user_id_user_id_fk"
    FOREIGN KEY ("created_by_user_id") REFERENCES "public"."user"("id")
    ON DELETE set null ON UPDATE no action,
  CONSTRAINT "agent_run_model_profile_id_agent_model_profile_id_fk"
    FOREIGN KEY ("model_profile_id") REFERENCES "public"."agent_model_profile"("id")
    ON DELETE set null ON UPDATE no action,
  CONSTRAINT "agent_run_browser_profile_id_agent_browser_profile_id_fk"
    FOREIGN KEY ("browser_profile_id") REFERENCES "public"."agent_browser_profile"("id")
    ON DELETE set null ON UPDATE no action,
  CONSTRAINT "agent_run_retry_of_run_id_agent_run_id_fk"
    FOREIGN KEY ("retry_of_run_id") REFERENCES "public"."agent_run"("id")
    ON DELETE set null ON UPDATE no action,
  CONSTRAINT "agent_run_status_check"
    CHECK ("status" IN ('created','queued','starting','running','cancelling','finalizing','succeeded','failed','cancelled','timed_out','policy_blocked')),
  CONSTRAINT "agent_run_side_effect_policy_check"
    CHECK ("side_effect_policy" IN ('read_only','declared','unrestricted')),
  CONSTRAINT "agent_run_artifact_capture_check"
    CHECK ("artifact_capture" IN ('none','failures','steps','all')),
  CONSTRAINT "agent_run_step_count_check" CHECK ("step_count" >= 0)
);
--> statement-breakpoint
CREATE INDEX "agent_run_org_created_idx" ON "agent_run" ("organization_id","created_at");
--> statement-breakpoint
CREATE INDEX "agent_run_org_status_idx" ON "agent_run" ("organization_id","status");
--> statement-breakpoint
CREATE INDEX "agent_run_status_lease_idx" ON "agent_run" ("status","lease_expires_at");
--> statement-breakpoint
CREATE INDEX "agent_run_retry_of_idx" ON "agent_run" ("retry_of_run_id");
--> statement-breakpoint

CREATE TABLE "agent_run_action" (
  "id" text PRIMARY KEY NOT NULL,
  "run_id" text NOT NULL,
  "step" integer NOT NULL,
  "action" text NOT NULL,
  "input" jsonb,
  "output" jsonb,
  "url_before" text,
  "url_after" text,
  "duration_ms" integer,
  "error_code" text,
  "started_at" timestamp NOT NULL,
  "completed_at" timestamp,
  "created_at" timestamp DEFAULT now() NOT NULL,
  CONSTRAINT "agent_run_action_run_id_agent_run_id_fk"
    FOREIGN KEY ("run_id") REFERENCES "public"."agent_run"("id")
    ON DELETE cascade ON UPDATE no action,
  CONSTRAINT "agent_run_action_step_check" CHECK ("step" >= 0)
);
--> statement-breakpoint
CREATE UNIQUE INDEX "agent_run_action_run_step_idx" ON "agent_run_action" ("run_id","step");
--> statement-breakpoint
CREATE INDEX "agent_run_action_run_created_idx" ON "agent_run_action" ("run_id","created_at");
--> statement-breakpoint

CREATE TABLE "agent_run_artifact" (
  "id" text PRIMARY KEY NOT NULL,
  "run_id" text NOT NULL,
  "kind" text NOT NULL,
  "storage_key" text NOT NULL,
  "size_bytes" integer NOT NULL,
  "sha256" text NOT NULL,
  "mime_type" text,
  "sensitive" boolean DEFAULT false NOT NULL,
  "retention_until" timestamp,
  "created_at" timestamp DEFAULT now() NOT NULL,
  CONSTRAINT "agent_run_artifact_run_id_agent_run_id_fk"
    FOREIGN KEY ("run_id") REFERENCES "public"."agent_run"("id")
    ON DELETE cascade ON UPDATE no action,
  CONSTRAINT "agent_run_artifact_kind_check"
    CHECK ("kind" IN ('screenshot','download','trace','recording','html_snapshot','debug_bundle')),
  CONSTRAINT "agent_run_artifact_size_check" CHECK ("size_bytes" >= 0)
);
--> statement-breakpoint
CREATE INDEX "agent_run_artifact_run_idx" ON "agent_run_artifact" ("run_id");
--> statement-breakpoint
CREATE INDEX "agent_run_artifact_retention_idx" ON "agent_run_artifact" ("retention_until");
--> statement-breakpoint
CREATE UNIQUE INDEX "agent_run_artifact_storage_key_idx" ON "agent_run_artifact" ("storage_key");
