# ADR 0001 — v11 uses React 17 peers

- **Status:** accepted (POC)
- **Lines:** v11-only (`skip-backport` if a related change lands on v9)

## Decision

`11.0.0` declares React 17. `9.0.0` stays on React 16.

## Consequences

- Do not cherry-pick React 16 pins onto `11.0.0`.
- Record this in `docs/v11-from-v9.md`.
