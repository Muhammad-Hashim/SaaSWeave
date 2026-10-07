# Load and reliability testing

## Benchmarks

Run 1, 2, 5, 10 and 20 concurrent browsers on documented reference hardware. Capture CPU, RSS, disk I/O, browser startup, page navigation and task throughput.

## Soak

At least 8-hour run with repeated controlled tasks. Watch zombie Chromium processes, leaked temp directories, Redis growth, DB connection leaks and artifact cleanup.

## Queue tests

- burst 1,000 lightweight queued runs with execution concurrency capped;
- ensure API remains responsive;
- verify FIFO/priority semantics as documented;
- worker replacement during backlog.

## Release rule

Publish recommended concurrency from measurement, not intuition.
