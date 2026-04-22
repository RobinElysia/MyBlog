# Repository Guidelines

## Project Structure & Module Organization
This repository is a VuePress 2 blog. Keep authoring content in `docs/`:

- `docs/README.md`, `docs/AboutUs.md`, `docs/Link.md`: top-level pages
- `docs/posts/`: blog posts, grouped by topic
- `docs/.vuepress/config.js` and `client.js`: site config, plugins, and layout registration
- `docs/.vuepress/components/`, `layouts/`, `css/`, `ts/`: custom UI and client-side behavior
- `docs/.vuepress/public/`: static assets served as-is
- `docker/caddy/Caddyfile`: Caddy config for containerized static hosting

Avoid editing generated output in `docs/.vuepress/.cache/`, `.temp/`, or `dist/` unless you are intentionally debugging the build.

## Build, Test, and Development Commands
- `pnpm install`: install dependencies
- `pnpm docs:dev`: start the local VuePress dev server
- `pnpm docs:clean-dev`: start dev mode with a clean cache after config/theme changes
- `pnpm docs:build`: build the static site into `docs/.vuepress/dist`
- `pnpm docs:update-package`: refresh VuePress-related package versions
- `docker run ... -v /opt/MyBlog/docs/.vuepress/dist:/srv:ro caddy:2`: serve the built site with Docker Caddy

## Coding Style & Naming Conventions
Use ES modules and the existing 2-space indentation style in `docs/.vuepress/*.js`. Keep Vue component, layout, and utility names in PascalCase for `.vue` files and camelCase for `.ts` helpers. Markdown files should use descriptive names; post filenames may be English or Chinese, but keep names readable and stable for links. Put images under `docs/.vuepress/public/assets/` and reference them with site-root paths such as `/assets/img/OS/dev.png`.

## Testing Guidelines
There is no automated test suite configured yet. Treat `pnpm docs:build` as the required verification step before opening a PR. For changes to layouts, config, or assets, also run `pnpm docs:dev` and check the affected pages manually.

## Commit & Pull Request Guidelines
Recent history uses brief messages like `new post`, but contributors should prefer specific, imperative commits such as `docs: add Docker networking article` or `theme: adjust homepage layout`. Keep each commit focused. PRs should include a short summary, impacted paths, manual verification steps, and screenshots for visual changes. Link related issues when applicable.

## Content & Configuration Tips
When adding a post, include consistent front matter (`title`, `date`, `author`, `category`, `tag`, `excerpt`, `sticky` when needed). Keep secrets and machine-local values out of committed config; deployment-specific changes belong in `docker/caddy/Caddyfile` or server config, not post content.
