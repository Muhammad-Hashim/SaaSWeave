# Docker Compose example (illustrative, not production-final)

```yaml
services:
  api:
    image: browser-agent/api:1
    env_file: .env
    depends_on: [postgres, redis]

  web:
    image: browser-agent/web:1
    env_file: .env

  worker:
    image: browser-agent/worker:1
    env_file: .env
    shm_size: "1gb"
    depends_on: [postgres, redis]

  postgres:
    image: postgres:17
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7

volumes:
  pgdata:
```

Use pinned/tested versions in the actual repository and apply resource/security options from deployment docs.
