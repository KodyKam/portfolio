# Portfolio — appearance refresh

A cohesive design system applied across the whole site. **No structure or routing changed**,
and all logic (forms, validation, API calls, admin fetch/delete) is identical — this is
visual + organizational only.

## How to apply
1. Back up your current `client/` (or commit first).
2. Extract this archive over your `client/` folder, overwriting when asked.
3. `yarn start`. Fonts load automatically (added to `public/index.html`).

Nothing new to `yarn add` — it uses your existing MUI + React Router.

## The design system (new — the important part)
- **`src/styles/theme.css`** — single source of truth. All colors, fonts, spacing, radii,
  shadows, and shared component styles (`.card`, `.btn`, `.eyebrow`, `.container`, `.tag`,
  `.data-table`) live here as CSS variables. Change a token once → whole site updates.
- **`src/theme/muiTheme.js`** — MUI theme (palette, typography, button/field styles).
  Wrapped around the app in `index.js`, so `<Button>`/`<TextField>` match the system
  and the inline `sx={{ backgroundColor: '#...' }}` hacks are gone.

## Identity
- Type: **Bricolage Grotesque** (headings) + **IBM Plex Sans** (body) + **IBM Plex Mono** (labels).
- Color: ink-navy surfaces, one electric-blue primary (#0284c7), amber accent used sparingly.
- Retired the competing colors: black `#111` buttons, `#3498db`/`#2c80b4`, `#1abc9c`, gold `#FFD700`.

## Per-file notes
- `index.js` — adds ThemeProvider; imports `styles/theme.css`.
- `index.html` — Google Fonts links + navy theme-color.
- `App.js` — wraps routes in an app-shell + `<main>` (sticky footer; full-bleed hero).
- `Navbar` — solid-ink sticky bar, brand keyline, amber active state; data-driven items;
  fixed the duplicate mobile icon (Hire Me now uses a rocket).
- `Footer` — anchored in deep ink with brand/social structure.
- `Home` — new full-bleed hero, mono eyebrows, themed CTAs, CTA band.
- `About` — two-column layout with a framed portrait.
- `Projects` / `Services` / `ClientWork` — one shared `.card`; their CSS files are now
  near-empty because the styling is centralized.
- `Contact` — themed submit/clear buttons; tidy contact panel. Form logic untouched.
- `Resume` — framed PDF viewer + open-as-PDF link.
- `AdminContacts` — tokenized table + themed delete button. Fetch/delete logic untouched.

## Housekeeping done
- Removed orphan files: `src/Menu.jsx` (belonged to a different "AuthSkel" project),
  `src/counter.jsx`, and `auth.zip`. Removed stray `.DS_Store` files.
- `.gitignore` now ignores `.env` and `.env.production` (they were previously committable —
  check they weren't already pushed to a public repo).
