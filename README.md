# POC — govern `@dcl/ui` v9 ↔ v11 (backport, not semantic diff)

Sandbox for Frontend Design Authority: **can we stop accidental drift between two long-lived majors using GitHub Actions?**

This is **not** `digital_dcl-ui`. Dummy `src/button.js` only.

## What this proves

| Idea from the ADO | In this repo | Marketplace Action? |
|-------------------|--------------|---------------------|
| Same change must exist on the other line | Label `backport-to-11.0.0` → cherry-pick PR on merge | Yes — [korthout/backport-action](https://github.com/korthout/backport-action) |
| v9-only must be explicit | Label `skip-backport` or CI fails | Small workflow (no third-party Action) |
| Detect “same patch, different SHA” | **Not implemented** — no reliable Action for this | — |
| Consumer change record | `docs/v11-from-v9.md` + ADRs | Docs, not CI |

## Branches

- `9.0.0` — maintenance line (default)
- `11.0.0` — copy of v9 plus **intentional** divergence (`src/react-line.js` = 17)

## Demo A — shared fix (happy path)

1. From `9.0.0`, change `src/button.js` (e.g. label text).
2. Open a PR **into `9.0.0`**.
3. Add label **`backport-to-11.0.0`** (required; CI fails without it or `skip-backport`).
4. Merge the PR.
5. Workflow **Backport v9 → v11** opens a PR into `11.0.0`.
6. Merge that PR. Both lines have the fix; `src/react-line.js` stays `16` vs `17`.

## Demo B — skip backport

Same as A, but label **`skip-backport`**. No cherry-pick PR. Use only for v9-only work; if API diverges, add an ADR.

## Demo C — conflict (optional)

Change the same lines of `src/button.js` on `11.0.0` first, merge, then backport a different v9 edit to those lines. The Action comments on the original PR instead of silently inventing a merge.

## Labels (create once)

```text
backport-to-11.0.0
skip-backport
```
