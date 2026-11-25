# KC Articles — media & authoring guide

This folder holds the images used by the KC Articles section at
`kcedu.org/articles`. Article text lives in `src/data/articles.ts`.

## Folders

| Folder | Use | Recommended size |
| --- | --- | --- |
| `authors/` | Square portraits of scholars | 600 × 600 px, JPG/PNG/WebP |
| `covers/` | Lead image for each article | 1600 × 1000 px, JPG/WebP |
| `inline/` | Images used inside the article body | 1600 px wide, JPG/WebP |

Use lowercase, hyphenated filenames, for example:

```
authors/ama-ndip.jpg
covers/why-stem-matters-in-cameroon.jpg
inline/why-stem-matters-figure-1.jpg
```

Then reference them as public URLs in `src/data/articles.ts`:

```ts
author: {
  name: "Ama Ndip",
  role: "KC Scholar",
  avatar: "/articles/authors/ama-ndip.jpg",
}
```

If a portrait has not been uploaded yet, leave `avatar` out. The page will
show the author's initials in a circle instead, using the KC blue.

## Publishing an article

1. Add the author portrait to `authors/`.
2. Add the cover image to `covers/` (optional but recommended).
3. Add any in-article images to `inline/`.
4. Add an object to the `articles` array in `src/data/articles.ts`.

A minimal article:

```ts
{
  slug: "my-article-slug",
  title: "My article title",
  summary: "One or two sentences that appear under the title.",
  category: "Research notes",
  tags: ["STEM", "Education"],
  author: {
    name: "Ama Ndip",
    role: "KC Scholar",
    avatar: "/articles/authors/ama-ndip.jpg",
    bio: "A short biography of the author.",
  },
  publishedAt: "2026-11-10T09:00:00.000Z",
  cover: {
    src: "/articles/covers/my-article-slug.jpg",
    alt: "Describe the image for screen readers.",
    caption: "Shown under the cover image.",
    credit: "Knowledge Center",
  },
  content: [
    { type: "paragraph", text: "The opening paragraph." },
    { type: "heading", level: 2, text: "A section heading" },
    { type: "paragraph", text: "More text with a [link](https://example.com)." },
  ],
}
```

## Supported content blocks

```ts
{ type: "paragraph", text: "Text with **bold**, *italic*, `code` and [links](https://example.com)." }
{ type: "heading", level: 2, text: "Section heading" }        // level 2 or 3
{ type: "image", src: "/articles/inline/figure.jpg", alt: "…", caption: "…", credit: "…" }
{ type: "quote", text: "A pull quote.", attribution: "Ama Ndip", role: "KC Scholar" }
{ type: "list", ordered: false, items: ["First point", "Second point"] }
{ type: "callout", title: "Note", text: "A highlighted note." }
{ type: "divider" }
```

References are added as a separate array:

```ts
references: [
  {
    title: "Title of the source",
    authors: "Author names",
    publication: "Journal or publisher",
    year: 2025,
    url: "https://example.com/source",
  },
]
```

## Image checklist

- Use the author's own portrait and make sure you have permission to publish it.
- Crop portraits to a square so the circular frame looks right.
- Compress images before uploading (aim for under 400 KB each).
- Write real `alt` text for every image.
- Keep cover images wide (16:10 works best).
- For QR codes and other compact graphics, add `size: "small"` to the image
  block so it stays centred and scannable instead of stretching full width.

## Editorial posts ("KC stories")

Three shorter, editorial pieces sit alongside the research notes. They are
credited to **The KC editorial team**, using `author.jpeg` as the avatar. Each
has one cover and three in-body image slots:

| Slug in `src/data/articles.ts` | Images used |
| --- | --- |
| `from-stem-olympiad-to-mit` | Cover: `cover.avif` (supplied, credited to Heterodox Academy). Inline: `inline/stem-olympiad-award.jpg`, `stem-scholars-celebration.jpeg`, `future-ready-stem-leaders.jpeg` |
| `the-pygmalion-effect-and-the-power-of-belief` | Cover: `PXL_20250830_172918243.jpg` (supplied). Inline: `2.jpeg`, `inline/kc-scholars-group.jpeg`, `kc-scholars-confidence.jpeg` |
| `is-the-system-holding-them-back` | Cover: `Picture1.png`. Inline: `inline/traditional-classroom.jpg`, `hands-on-electronics.jpeg`, `student-project-exhibition.jpeg` |

The three editorial posts now use `author.jpeg` as the byline avatar instead of
the KC logo.

The MIT cover photo comes from
[Heterodox Academy](https://heterodoxacademy.org/campuses/massachusetts-institute-of-technology/);
the credit appears under the image and in the article's references. All other
images come from the project's existing KC photo library.

Every cover and inline slot is now filled. If you prefer a different photo,
replace the file under the same name or update the `src` value in
`src/data/articles.ts`. If a file is ever missing, the page shows a labelled
placeholder frame instead of a broken image.

The body copy of these three pieces follows the wording of the source PDFs in
`public/article 1.pdf`, `public/article 2.pdf` and `public/article 3.pdf`
verbatim. Headings, lists and pull quotes come from the slides themselves;
`**bold**` markup only adds emphasis and never changes the words.

The MIT story's registration QR is the separately uploaded `public/qrcode.png`.
It sits directly above the "Scan To Register" callout. The "Follow Us On Social
Media" line links to the same official Facebook, X, LinkedIn and YouTube
accounts used in the site footer.

## Link previews

`vite-plugin-article-seo.ts` writes a pre-rendered HTML shell for every
published article at build time. Each shell carries that article's own
`og:image`, `twitter:image`, title, description, canonical URL and
`BlogPosting` JSON-LD, so WhatsApp, Facebook, X and link unfurlers show the
right cover even though they do not run JavaScript. The article index gets its
own preview too. `vercel.json` keeps the existing SPA rewrite: Vercel serves
the generated file before applying the rewrite. In development the plugin
serves the same shell through the Vite middleware.
