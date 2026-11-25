import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { articles, type Article } from "./src/data/articles";

/**
 * Social networks and messaging apps do not run JavaScript, so the OG tags
 * injected at runtime by `useArticleSeo` are invisible when a link is shared.
 * This plugin writes a small pre-rendered copy of the app shell for every
 * article, with that article's own cover image in the share tags. Vercel
 * serves real files before the SPA rewrite, so /articles/<slug> receives the
 * correct HTML without changing the client-side router.
 */

const SITE_URL = "https://kcedu.org";
const SITE_NAME = "Knowledge Center";

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const replaceOrInsert = (
  html: string,
  pattern: RegExp,
  replacement: string,
): string =>
  pattern.test(html)
    ? html.replace(pattern, replacement)
    : html.replace("</head>", `    ${replacement}\n  </head>`);

const setMeta = (
  html: string,
  key: string,
  content: string,
  attribute: "property" | "name" = "property",
): string =>
  replaceOrInsert(
    html,
    new RegExp(
      `<meta\\s+(?:name|property)="${key}"\\s+content="[^"]*"\\s*/?>`,
      "i",
    ),
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
  );

const setTitle = (html: string, title: string): string =>
  replaceOrInsert(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

const setCanonical = (html: string, url: string): string =>
  replaceOrInsert(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
  );

type SharePreview = {
  url: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  type: "article" | "website";
  jsonLd?: Record<string, unknown>;
};

const buildShareHtml = (baseHtml: string, preview: SharePreview): string => {
  const mimeType = preview.image.toLowerCase().endsWith(".avif")
    ? "image/avif"
    : preview.image.toLowerCase().endsWith(".png")
      ? "image/png"
      : "image/jpeg";

  let html = setTitle(baseHtml, preview.title);
  html = setCanonical(html, preview.url);
  html = setMeta(html, "description", preview.description, "name");
  html = setMeta(html, "og:type", preview.type);
  html = setMeta(html, "og:url", preview.url);
  html = setMeta(html, "og:title", preview.title);
  html = setMeta(html, "og:description", preview.description);
  html = setMeta(html, "og:image", preview.image);
  html = setMeta(html, "og:image:type", mimeType);
  html = setMeta(html, "og:image:alt", preview.imageAlt);
  html = setMeta(html, "twitter:card", "summary_large_image", "name");
  html = setMeta(html, "twitter:url", preview.url, "name");
  html = setMeta(html, "twitter:title", preview.title, "name");
  html = setMeta(html, "twitter:description", preview.description, "name");
  html = setMeta(html, "twitter:image", preview.image, "name");

  if (preview.jsonLd) {
    const json = JSON.stringify(preview.jsonLd).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      `    <script type="application/ld+json">${json}</script>\n  </head>`,
    );
  }

  return html;
};

const articlePreview = (article: Article): SharePreview => {
  const url = `${SITE_URL}/articles/${article.slug}`;
  const image = article.cover ? `${SITE_URL}${article.cover.src}` : `${SITE_URL}/logo.jpeg`;

  return {
    url,
    title: `${article.title} — KC Articles | ${SITE_NAME}`,
    description: article.summary,
    image,
    imageAlt: article.cover?.alt ?? article.title,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.summary,
      image: [image],
      datePublished: article.publishedAt,
      author: { "@type": "Organization", name: article.author.name },
      publisher: { "@type": "Organization", name: SITE_NAME },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
  };
};

const listingPreview = (): SharePreview => {
  const url = `${SITE_URL}/articles`;
  const image = `${SITE_URL}/articles/covers/a-new-home-for-scholar-voices.jpg`;

  return {
    url,
    title: `Articles — KC Articles | ${SITE_NAME}`,
    description:
      "Research, reflection and stories from the scholars and community of Knowledge Center Cameroon.",
    image,
    imageAlt: "KC scholars holding awards at a Knowledge Center STEM event.",
    type: "website",
  };
};

const previews = new Map<string, SharePreview>();
articles
  .filter((article) => article.published !== false && article.cover)
  .forEach((article) => {
    previews.set(`/articles/${article.slug}`, articlePreview(article));
  });
previews.set("/articles", listingPreview());

const plugin = (): Plugin => ({
  name: "article-share-previews",

  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
      const preview = previews.get(pathname.replace(/\/$/, "") || "/");

      if (!preview) {
        next();
        return;
      }

      try {
        const htmlPath = path.resolve(server.config.root, "index.html");
        const html = await server.transformIndexHtml(
          pathname,
          buildShareHtml(fs.readFileSync(htmlPath, "utf8"), preview),
        );
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(html);
      } catch (error) {
        next(error);
      }
    });
  },

  writeBundle(options) {
    const outDir = options.dir ?? (options.file ? path.dirname(options.file) : "dist");
    const htmlPath = path.join(outDir, "index.html");
    if (!fs.existsSync(htmlPath)) return;

    const baseHtml = fs.readFileSync(htmlPath, "utf8");

    previews.forEach((preview, route) => {
      const target = path.join(outDir, route, "index.html");
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, buildShareHtml(baseHtml, preview), "utf8");
    });
  },
});

export default plugin;
