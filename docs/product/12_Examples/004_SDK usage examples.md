# TypeScript SDK example

```ts
import { BrowserAgent } from "@browser-agent/sdk";

const client = new BrowserAgent({
  baseUrl: "http://localhost:8080",
  apiKey: process.env.BROWSER_AGENT_API_KEY!,
});

const run = await client.runs.create({
  startUrl: "https://example.com/pricing",
  goal: "Return all plan names and prices",
  outputSchema: {
    type: "array",
    items: {
      type: "object",
      required: ["name", "price"],
      properties: {
        name: { type: "string" },
        price: { type: "string" },
      },
    },
  },
});

const result = await client.runs.wait(run.id, { timeoutMs: 240_000 });
console.log(result.result);
```
