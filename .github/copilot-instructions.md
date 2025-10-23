<!-- Repository-specific Copilot instructions for "My Assignments" -->
# Copilot instructions — My Assignments

This repository is a collection of static HTML/CSS assignment folders (Assignment 1 .. Assignment 11). The goal of these instructions is to help an AI coding agent be immediately productive when making edits, fixes, or small improvements across the assignments.

Key facts
- Each assignment is self-contained in its own top-level folder (for example `Assignment 9/`). Primary files are `index.html` and one or more CSS/SCSS files (`style.css`, `style.scss`, `responsive.css`, etc.).
- There is no build system, package manager, or server-side code present — changes are local edits to static assets.

What to modify
- Make minimally invasive edits: prefer editing CSS/SCSS files and HTML in the same assignment folder unless instructed to refactor across multiple assignments.
- Use SCSS files when present (for example `Assignment 9/style.scss`) — the project appears to include both `.css` and `.scss`; update the `.scss` source and, if requested, compile to `.css` externally. Do not add a build tool without explicit user permission.

Conventions and patterns
- Layout: many pages use custom utility classes defined inside `style.scss`/`styles.css` (examples: `.grid`, `.grid2`, `.grid3`, `.textcenter`, `.w-100`). Mirror existing naming and spacing conventions.
- Font loading: some SCSS files contain `@font-face` rules that reference `fonts/` subfolders. Keep relative paths consistent with the assignment folder.
- Images: pages use both local images and remote CDN images. Prefer preserving remote URLs unless user requests local copies.

When adding or changing files
- Keep changes scoped to the assignment folder. If a change affects multiple assignments, explain why and get confirmation.
- Avoid adding new tooling (node, sass compiler, linters) unless the user asks. If SCSS compilation is required, provide instructions for the user to run a compiler locally (example: `sass style.scss style.css`).

Code style and small refactors
- Preserve existing whitespace, selector ordering and class names where possible; align with the existing simple BEM-like/utility style used across assignments.
- When refactoring repeated patterns (common utilities across many assignments), propose changes first in a short PR description and limit the scope to avoid unintended breakage.

Debugging and verification
- For visual changes, suggest the user open the assignment's `index.html` in a browser. Provide a short checklist describing what to look for (layout, font loading, responsive breakpoints at `992px`).
- When you modify SCSS, include the generated `.css` only if the user asked for it. Otherwise, show the SCSS diff and explain how to compile.

Examples from this repo
- `Assignment 9/index.html` — typical structure: links to `style.css`, uses classes like `.topbar`, `.grid2`, `.grid3` and includes remote images (see `index.html` and `style.scss`).
- `Assignment 9/style.scss` — contains `@font-face`, nested rules under `html` and `body`, and responsive media query at `@media (min-width: 992px)`.

Non-goals / Do not do
- Do not introduce CI, package.json, or build pipelines without an explicit request.
- Do not move images or fonts between assignment folders unless the change is requested.

If something is missing or unclear
- Ask a single clarifying question: which assignment(s) to change, and whether to provide compiled CSS or only SCSS edits.

If you make changes, include
- A one-line summary for the PR describing the intent and the files changed.
- A short verification note for the user: which `index.html` to open and what to check (visual change, console errors, font load).

End of instructions.
