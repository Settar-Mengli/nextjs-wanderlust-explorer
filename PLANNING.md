# Wanderlust Explorer — Planning

## Project Goal
Build a polished, portfolio-ready travel discovery app using Next.js, React, TypeScript, and Tailwind CSS.

The app must satisfy all 4Geeks requirements while also demonstrating professional frontend architecture, clean UI design, reusable components, and strong documentation.

## Development Workflow
1. Plan with ChatGPT before coding.
2. Use Codex for targeted implementation tasks.
3. Review every Codex diff before accepting.
4. Test locally after each stage.
5. Commit after each stable milestone.
6. Push to GitHub regularly.

## Build Stages

### Stage 1 — Setup
- Create Next.js project
- Initialize Git
- Create GitHub repo
- Push initial commit

### Stage 2 — Project Documentation
- Create SPEC.md
- Create PLANNING.md
- Create CONTEXT.md
- Review AGENTS.md
- Improve README.md

### Stage 3 — Data Model
- Create `Experience` TypeScript interface
- Create `src/data/experiences.ts`
- Generate 100 experience objects
- Use local image URLs or stable placeholder images
- No API keys

### Stage 4 — Layout & Navigation
- Create shared layout structure
- Build Navbar
- Add active route styling
- Add responsive navigation

### Stage 5 — Core Pages
- Build Home page `/`
- Build Explorer page `/experiences`
- Build Detail page `/experiences/[id]`
- Build Favorites page `/favorites`
- Build Profile page `/profile`

### Stage 6 — Search & Filters
- Add search by title
- Add category filter
- Add destination filter
- Store active filters in URL query parameters
- Read URL params on page load
- Show empty state when no results match

### Stage 7 — Favorites
- Add favorite toggle button to cards
- Manage favorites with React `useState`
- Pass favorites through props
- Show favorites count in Navbar/Profile
- No localStorage required

### Stage 8 — Polish
- Improve responsive design
- Improve accessibility
- Add loading/empty states where appropriate
- Refactor repeated logic into hooks
- Run lint/build checks

### Stage 9 — README & Submission
- Add screenshots
- Add setup instructions
- Add design references
- Add feature list
- Push final version to GitHub
- Optional: deploy to Vercel

## Quality Rules
- Keep files small and focused
- Prefer reusable components
- Use TypeScript types consistently
- Do not add backend or API keys
- Do not use external state management libraries
- Commit only working milestones