# Timeline and milestones

## Planning assumption

One experienced developer using coding agents, focused full-time, with no major procurement/compliance delays.

| Milestone | Range | Deliverable |
|---|---:|---|
| Spikes | 2–4 days | browser/model/policy proofs |
| V1 foundation | 4–6 days | DB/API/queue/dummy worker |
| Browser runtime | 4–6 days | reliable deterministic browser actions |
| Agent runtime | 5–8 days | model loop + schema output |
| Profiles/artifacts | 3–5 days | persistence + storage |
| Dashboard/SDK/webhooks | 3–5 days | usable integration surface |
| Security/reliability/release | 5–8 days | tests, restore, docs, hardening |
| **V1 total** | **~4–6 weeks** | releasable self-host MVP |
| **V2 additional** | **~6–10 weeks** | team/ops product |
| **V3 foundation additional** | **~3–6 months** | distributed/enterprise platform |

## Critical path

Browser/agent reliability → state/retry correctness → security boundary → operator experience. UI polish is not the critical path.
