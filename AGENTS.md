# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router. Locale-aware routes live under `app/[locale]/` (layout, page, loading, template). Global styles in `app/globals.css`.
- `components/`: UI building blocks. Expect `components/ui/` for reusable widgets, `components/sections/` for page sections, and `components/animations/` for Framer Motion wrappers.
- `lib/`: Shared utilities and schemas (e.g., `lib/utils.ts` for `cn()` and `lib/schemas.ts` for Zod).
- `messages/`: Translation JSON files for each locale. Keep all files in sync.
- `i18n/`: Internationalization config/helpers.
- `public/`: Static assets.

## Build, Test, and Development Commands
- `npm run dev`: Start the local dev server at `http://localhost:3000`.
- `npm run build`: Create the production build.
- `npm run start`: Run the production server (after build).
- `npm run lint`: Run ESLint with Next.js rules.

## Coding Style & Naming Conventions
- TypeScript + React with Tailwind CSS 4. Follow existing formatting; use Prettier (with `prettier-plugin-tailwindcss`) for consistent class ordering.
- ESLint is configured via `eslint.config.mjs` (Next.js core-web-vitals + TypeScript).
- Component names: PascalCase (e.g., `Hero.tsx`). Hooks: `useX`.
- Interactive components must include `'use client'` at the top.
- Use `cn()` from `lib/utils.ts` for class merging.

## Testing Guidelines
- No automated test framework or test scripts are currently configured.
- If adding tests, introduce a script (e.g., `npm run test`) and colocate as `*.test.tsx` near the feature or under a `__tests__/` folder.

## Commit & Pull Request Guidelines
- Recent commits are short, single-line, and descriptive (often lowercase Portuguese, e.g., `nova foto`). Keep messages concise and focused on the change.
- PRs should include: a brief summary, linked issue (if any), and screenshots for UI changes. Note any updates to `messages/*.json`.

## Repo-Specific Notes
- This is a multi-locale landing page (pt, en, es, fr, it, de). When adding or changing copy, update all translation files consistently.
- For additional project conventions, see `CLAUDE.md`.
