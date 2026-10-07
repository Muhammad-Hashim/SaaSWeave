import { defineRelations } from "drizzle-orm";

import * as schema from "#@/schema/index";

export const relations = defineRelations(schema, (r) => {
  return {
    agentBrowserProfile: {
      organization: r.one.organization({
        from: r.agentBrowserProfile.organizationId,
        to: r.organization.id
      }),
      runs: r.many.agentRun()
    },
    agentModelProfile: {
      organization: r.one.organization({
        from: r.agentModelProfile.organizationId,
        to: r.organization.id
      }),
      runs: r.many.agentRun()
    },
    agentRun: {
      actions: r.many.agentRunAction(),
      artifacts: r.many.agentRunArtifact(),
      browserProfile: r.one.agentBrowserProfile({
        from: r.agentRun.browserProfileId,
        to: r.agentBrowserProfile.id
      }),
      modelProfile: r.one.agentModelProfile({
        from: r.agentRun.modelProfileId,
        to: r.agentModelProfile.id
      }),
      organization: r.one.organization({
        from: r.agentRun.organizationId,
        to: r.organization.id
      })
    },
    agentRunAction: {
      run: r.one.agentRun({
        from: r.agentRunAction.runId,
        to: r.agentRun.id
      })
    },
    agentRunArtifact: {
      run: r.one.agentRun({
        from: r.agentRunArtifact.runId,
        to: r.agentRun.id
      })
    },
    batchJob: {
      items: r.many.batchJobItem(),
      organization: r.one.organization({
        from: r.batchJob.organizationId,
        to: r.organization.id
      })
    },
    batchJobItem: {
      batchJob: r.one.batchJob({
        from: r.batchJobItem.batchJobId,
        to: r.batchJob.id
      })
    },
    dataExportRequest: {
      organization: r.one.organization({
        from: r.dataExportRequest.organizationId,
        to: r.organization.id
      })
    },
    usageEvent: {
      organization: r.one.organization({
        from: r.usageEvent.organizationId,
        to: r.organization.id
      })
    },
    webhookDelivery: {
      endpoint: r.one.webhookEndpoint({
        from: r.webhookDelivery.endpointId,
        to: r.webhookEndpoint.id
      })
    },
    webhookEndpoint: {
      deliveries: r.many.webhookDelivery(),
      organization: r.one.organization({
        from: r.webhookEndpoint.organizationId,
        to: r.organization.id
      })
    }
  };
});
