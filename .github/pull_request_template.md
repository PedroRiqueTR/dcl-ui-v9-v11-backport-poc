## Summary

## Target line

- [ ] `9.0.0` (React 16 maintenance)
- [ ] `11.0.0` (React 17 line)

## v9 → v11 (required if base is `9.0.0`)

Add **one** label:

- [ ] `backport-to-11.0.0` — shared change; CI will open a cherry-pick PR on merge
- [ ] `skip-backport` — v9-only

If `skip-backport` **and** this changes public API / behaviour vs v11, link an ADR:

- ADR: `docs/adr/NNNN-short-title.md`
