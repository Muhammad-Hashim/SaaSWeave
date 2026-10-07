# Production topology

## V1 single node

Reverse proxy → API/Web + Worker → PostgreSQL/Redis/MinIO on same host or external services.

## V2 scale-out

Multiple API replicas + multiple worker replicas; shared PostgreSQL/Redis/S3; ingress; optional dedicated sensitive-worker pool; Prometheus/Otel collector.

## V3 distributed

Control plane separate from execution fleet. Worker nodes register capabilities/region/browser versions. Scheduler routes by policy, profile locality, concurrency and region. Tenant/network isolation becomes explicit infrastructure concern.
