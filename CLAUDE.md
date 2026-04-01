# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/portfolio website for Vasil Iliev, deployed on GitHub Pages. Static site built with vanilla JavaScript, HTML, and CSS — no frameworks, no build step.

## Development

```bash
npm start            # Start local server on port 8000
node server.js 3000  # Start on custom port
```

No build step, no dependencies to install. Just serve the static files.

Deployed automatically via GitHub Pages on push to `main`. Live at https://vasililievcv.github.io.

## Architecture

**Data-driven rendering**: All CV content lives in `data.js` as the `cvData` object and `config` object. The `CVWebsite` class in `script.js` reads this data and populates the DOM on `DOMContentLoaded`.

Key data flow:
- `data.js` — defines `cvData` (personal info, experience with highlights, projects with tech stacks, skills, education, certifications, languages, social links) and `config` (theme, animation, section visibility toggles)
- `script.js` — `CVWebsite` class with `populate*()` methods that build DOM and inject into `index.html` placeholder containers
- `index.html` — static shell with empty containers (e.g., `#experienceTimeline`, `#projectsGrid`, `#skillsGrid`)
- `styles.css` — all styling including theme variables (`:root` and `[data-theme="dark"]`), experience timeline, print styles, and responsive breakpoints
- `server.js` — zero-dependency Node.js static file server for local dev only

**Section order**: Home > Experience (timeline) > Projects (detailed cards) > Skills > Education & Certifications > Languages > Contact

**Experience vs Projects**: Experience is a timeline with achievement-oriented bullet points. Projects are detailed cards with images, descriptions, and tech stacks. Same companies may appear in both — they serve different purposes.

**To update CV content**: edit `data.js` only. The rendering is automatic.

**To add a new section**: add data to `cvData` in `data.js`, add a container element in `index.html`, create a `populate*()` method in `script.js`, add styles in `styles.css`, and toggle visibility via `config.sections`.

## Key Patterns

- Experience entries have a `type` field ("full-time" or "contract") — contract roles show a badge
- Theme toggle persists to `localStorage` — controlled by `config.theme.default`
- Section visibility controlled by boolean flags in `config.sections`
- Project images are stored as files in the repo root (e.g., `mubadala.png`, `volkswagen.jpg`)
- `_config.yml` is for GitHub Pages/Jekyll SEO — not used by the app itself
- Theme toggle is an accessible `<button>` with `aria-label`
- Skip-to-content link for keyboard/screen reader users
