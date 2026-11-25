# Self-hosted webfonts

All font files are served locally, so the site does not depend on a third-party font CDN.

- `Montserrat` — body, UI and long-form article copy (main site font, variable WOFF2)
- `Poppins` — headings and display type across the site (variable WOFF2)

`Newsreader`, `Source Serif 4` and `Inter` are no longer referenced by the stylesheets; they are left here in case the editorial serif treatment returns.

The `@font-face` rules live in `src/index.css`, and both active fonts are preloaded in `index.html`.
