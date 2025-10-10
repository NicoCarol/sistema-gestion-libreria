## Brief

This repository contains a minimal Vite + React frontend (in `frontend/`) and an empty `backend/` folder. The frontend uses Vite for dev server, build, and preview; ESLint is configured via `frontend/eslint.config.js`.

When contributing code or producing patches, prefer small, focused changes that keep the existing project layout and build scripts intact.

## Project structure (important files)

- `frontend/package.json` — dev scripts: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.
- `frontend/vite.config.js` — Vite configuration; React plugin is enabled.
- `frontend/src/` — React sources: `main.jsx`, `App.jsx`, `index.css`, `App.css`, `assets/`.
- `frontend/eslint.config.js` — ESLint rules; ignores `dist`, enforces recommended JS + react-hooks rules and treats unused vars starting with upper-case or underscore as allowed.
- `frontend/index.html` — app entry HTML (mount point `#root`).

There is no backend code in `backend/`. If you find references to an API, mention that the backend implementation is missing and avoid creating assumptions about endpoints unless the user specifies them.

## What the AI should do first (context-gathering)

1. Open `frontend/package.json` to see available scripts. Use `npm run dev` for local development and `npm run build` for production bundles.
2. Read `frontend/src/main.jsx` to locate the React root and identify global CSS imports.
3. Read `frontend/App.jsx` to see example components and HMR expectations.
4. Check `frontend/eslint.config.js` before changing code style or lint rules. Prefer matching its patterns (ES2020, JSX enabled).

## Coding conventions & patterns to follow

- Files are plain JavaScript/JSX (not TypeScript). Use `.jsx` for React components that contain JSX.
- State and components are simple — follow the established pattern shown in `App.jsx` (functional components, hooks like `useState`).
- Asset imports: SVG from `/vite.svg` or from `src/assets/*` are used directly as modules (Vite behavior).
- Keep changes minimal: prefer editing or adding files under `frontend/src/` unless the user asks to scaffold a backend.

## Build, test, and debug commands (Windows PowerShell)

Use these exact commands in PowerShell in the `frontend` folder:

```
cd frontend; npm install
cd frontend; npm run dev        # start Vite dev server with HMR
cd frontend; npm run build      # create production build in dist/
cd frontend; npm run preview    # locally preview the production build
cd frontend; npm run lint       # run ESLint
```

Notes:
- The project uses Vite's dev server — HMR is expected when editing `src/*` files.
- There are no automated tests present; do not add test frameworks unless requested.

## When editing code

- Respect `eslint.config.js` rules. Run `npm run lint` locally after changes.
- Preserve the mount point in `index.html` (`#root`).
- If you add new npm packages, update `frontend/package.json` and prefer adding to `devDependencies` only if it's a build/dev tool.

## Integration & assumptions

- There is currently no server API in the repository. If you must mock API behavior for the frontend, add a clear `README` entry and place mocks under `frontend/src/mocks/` and wire them conditionally behind a feature flag.
- Do not assume environment variables or secret configs — none are present.

## Examples (copyable snippets)

- Importing an SVG asset used in this repo (see `App.jsx`):

```jsx
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
```

- Minimal dev start (PowerShell):

```
cd frontend; npm install; npm run dev
```

## Helpful files to reference while coding

- `frontend/package.json` — scripts and deps
- `frontend/vite.config.js` — plugin usage
- `frontend/eslint.config.js` — linting rules
- `frontend/src/main.jsx` and `frontend/src/App.jsx` — app entry and example component patterns

## Questions to ask the human maintainer

- Should I scaffold a backend API or mock endpoints locally when implementing new frontend features?
- Are there preferred npm package versions or a lockfile policy to follow (e.g., commit `package-lock.json`)?

---

If anything above is unclear or you want more specific rules (naming conventions, commit message format, CI steps), tell me which area to expand.
