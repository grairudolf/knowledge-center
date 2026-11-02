/**
 * KC Articles — editorial content
 * ---------------------------------------------------------------------------
 * This is the single place where KC Articles are published.
 *
 * To add a scholar article:
 *   1. Put the author portrait in `public/articles/authors/`
 *   2. Put the cover image in `public/articles/covers/`
 *   3. Put any in-article images in `public/articles/inline/`
 *   4. Add an entry to `articles` below.
 *
 * Image paths are public URLs, e.g. "/articles/authors/ama-ndip.jpg".
 * See `public/articles/README.md` for the full authoring guide.
 *
 * Inline text inside paragraphs, list items, quotes and callouts supports:
 *   **bold**   *italic*   `code`   [link label](https://example.com)
 */

export type ArticleAuthorLink = {
  label: string;
  url: string;
};

export type ArticleAuthor = {
  name: string;
  role?: string;
  /** Public URL of a square portrait, e.g. "/articles/authors/ama-ndip.jpg". */
  avatar?: string;
  /** Shown inside the circle when no portrait has been uploaded yet. */
  initials?: string;
  bio?: string;
  links?: ArticleAuthorLink[];
};

export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | ({ type: "image" } & ArticleImage)
  | { type: "quote"; text: string; attribution?: string; role?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | {
      type: "download";
      /** Small label above the title, e.g. "Full research report". */
      label: string;
      title: string;
      description?: string;
      url: string;
      /** Supporting detail, e.g. "PDF report · Google Drive". */
      meta?: string;
    }
  | { type: "divider" };

export type ArticleReference = {
  title: string;
  authors?: string;
  publication?: string;
  year?: string | number;
  url?: string;
};

export type Article = {
  /** URL segment: /articles/<slug> */
  slug: string;
  title: string;
  /** The standfirst shown under the title and on cards. */
  summary: string;
  /** The section of the journal this piece belongs to. */
  category: string;
  tags?: string[];
  author: ArticleAuthor;
  /** Named research supervisor or mentor, shown with the byline. */
  mentor?: string;
  /** ISO date, e.g. "2026-11-02T09:00:00.000Z" */
  publishedAt: string;
  updatedAt?: string;
  /** Optional override. Otherwise estimated from the body copy. */
  readingTime?: number;
  cover?: ArticleImage;
  content: ArticleBlock[];
  references?: ArticleReference[];
  featured?: boolean;
  /** Defaults to true. Set false to keep a piece out of the public journal. */
  published?: boolean;
};

/* -------------------------------------------------------------------------- */
/*  Articles                                                                  */
/* -------------------------------------------------------------------------- */

export const articles: Article[] = [
  {
    slug: "young-people-and-online-scams-limbe",
    title:
      "Young People and Online Scams: Findings from a Community Study in Limbe, Cameroon",
    summary:
      "A survey of 57 young people in Limbe explores impersonation scams, mobile money fraud and account takeovers — and points to practical steps for staying safe online.",
    category: "Research notes",
    tags: ["Cybersecurity", "Mobile money", "Cameroon", "Digital safety"],
    author: {
      name: "Happi Yongwoua Franklyn Benis",
      role: "KC Scholar, Knowledge Center Cameroon",
      avatar: "/articles/authors/happi-franklyn.jpg",
      bio:
        "Happi Yongwoua Franklyn Benis is a high school graduate from Ecole Sonara in Limbe, Cameroon, with a strong interest in cybersecurity and digital forensics. A National Honours Scholar, he graduated from high school with straight As at the GCE A/L and was named valedictorian of his class. He is a curious and methodical learner who enjoys exploring how technology works and understanding the challenges that come with its use. His research on online scams and digital security in Limbe reflects his interest in applying his knowledge to real-world challenges and helping communities become more aware of online risks.",
    },
    mentor: "Sandrine Ojong",
    publishedAt: "2026-11-02T09:00:00.000Z",
    featured: true,
    cover: {
      src: "/articles/covers/limbe.jpg",
      alt: "Aerial view of the Limbe coastline in Cameroon, with the town, the shoreline and fishing boats in the bay.",
      caption:
        "Limbe, Cameroon, seen from above. The study explores the online risks young people in the town encounter in their everyday digital lives.",
      credit: "Knowledge Center",
    },
    content: [
      {
        type: "paragraph",
        text:
          "Imagine receiving a WhatsApp message from a friend: *“I’m stuck. Please send me 10,000 francs through mobile money. I’ll explain later.”*",
      },
      {
        type: "paragraph",
        text:
          "The name and profile picture look familiar, but the message is not from your friend. Someone may have created a fake account using their identity, or gained access to their existing account.",
      },
      {
        type: "paragraph",
        text:
          "This is one of the online risks Happi Franklyn wanted to understand better in Limbe, Cameroon.",
      },
      {
        type: "paragraph",
        text:
          "Mobile money has become an important part of everyday financial life across sub-Saharan Africa. According to the [World Bank’s Global Findex Database 2025](https://hdl.handle.net/10986/43438), 40% of adults in the region had a mobile money account in 2024, compared with 27% in 2021. As more people use digital financial services, protecting their accounts and personal information becomes increasingly important.",
      },
      {
        type: "paragraph",
        text:
          "Cameroon is also facing growing cybersecurity challenges. In December 2025, the Minister of Posts and Telecommunications reported that the country had lost more than CFA 1.027 billion to online scams in 2025. The reported losses were linked mainly to email fraud, phishing attacks and fraudulent online investment platforms.",
      },
      {
        type: "paragraph",
        text:
          "Against this background, Franklyn set out to explore a question closer to home: What online risks are young people in Limbe experiencing, and what can they do to protect themselves?",
      },
      {
        type: "paragraph",
        text:
          "To investigate this, he conducted an exploratory survey involving 57 respondents. The findings provide an initial picture of online security experiences among the people who participated.",
      },
      {
        type: "download",
        label: "Full research report",
        title:
          "Young People and Online Scams: Findings from a Community Study in Limbe, Cameroon",
        description:
          "Read the full research report to explore the methodology, detailed findings, analysis and recommendations.",
        url: "https://drive.google.com/file/d/1iQtw9Ee1lLw-DG-JyDfwmQzJRA70so0Z/view?usp=drive_link",
        meta: "PDF report · Google Drive",
      },
      { type: "heading", level: 2, text: "About the research" },
      {
        type: "paragraph",
        text:
          "Franklyn designed a short, anonymous survey and distributed it through WhatsApp. A total of 57 people responded. Most respondents (93%) were between 15 and 24 years old, making the findings particularly relevant to understanding the experiences of young people.",
      },
      {
        type: "paragraph",
        text:
          "Participation was voluntary, and respondents were not asked to provide their names.",
      },
      {
        type: "paragraph",
        text:
          "Following the survey, Franklyn identified an opportunity to take the research beyond data collection and into community awareness. As one of his next steps, he is preparing a community workshop in Limbe. The planned session will focus on common online scams, account security and practical steps people can take when they suspect their accounts have been compromised.",
      },
      {
        type: "paragraph",
        text:
          "The workshop will also include a demonstration using his own test accounts and devices to illustrate how phishing links can trick people into revealing sensitive information or compromising their accounts.",
      },
      { type: "heading", level: 2, text: "Key findings" },
      {
        type: "paragraph",
        text:
          "The survey revealed several patterns in how respondents experience and respond to online security risks.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Impersonation was a common experience.",
      },
      {
        type: "paragraph",
        text:
          "Twenty-seven of the 57 respondents (47%) reported having received a request for money from someone pretending to be another person. This highlights the importance of verifying a person’s identity before sending money, even when a message appears to come from someone familiar.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Unauthorised transactions and account takeovers were also reported.",
      },
      {
        type: "paragraph",
        text:
          "Sixteen respondents (28%) reported experiencing an unauthorised mobile money withdrawal, while 13 (23%) said their social media accounts had been taken over.",
      },
      {
        type: "paragraph",
        text:
          "These findings show that respondents encountered different types of online threats, affecting both their financial transactions and their social media accounts.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Awareness of two-factor authentication did not always translate into use.",
      },
      {
        type: "paragraph",
        text:
          "Thirty-six respondents (63%) said they had enabled two-factor authentication (2FA) on at least some of their accounts. However, nine (16%) had never heard of it, while 12 (21%) knew about it but had not enabled it.",
      },
      {
        type: "paragraph",
        text:
          "This suggests an opportunity to improve digital security awareness and encourage people to put available security measures into practice.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Password reuse remained common.",
      },
      {
        type: "paragraph",
        text:
          "Only 18 respondents (32%) reported using a different password for every account. The remaining 39 (68%) reused passwords across multiple accounts. Some respondents also mentioned using easily guessed PINs, such as their birth years.",
      },
      {
        type: "paragraph",
        text:
          "Reusing passwords can increase the risk of multiple accounts being compromised if one password is exposed.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. Reporting was not the most frequently selected first response.",
      },
      {
        type: "paragraph",
        text:
          "When asked what they would do first if they were scammed, 24 respondents (42%) said they would inform friends or family, 15 (26%) would contact their mobile network operator or mobile money provider, and eight (14%) would report the incident to the authorities. Other respondents selected different responses.",
      },
      {
        type: "paragraph",
        text:
          "These findings suggest that reporting to the authorities may not be the first action many respondents would consider. Understanding why people choose certain responses, and whether they eventually report incidents, would require further research.",
      },
      { type: "heading", level: 2, text: "Protecting yourself online" },
      {
        type: "paragraph",
        text:
          "The findings highlight the importance of making digital security part of everyday habits. Here are seven practical steps that can help:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Verify requests for money.** If someone asks you to send money through a message, call them using a phone number you already know. Do not rely only on the conversation in the chat.",
          "**Create a family or friends’ verification code.** Agree on a private word or phrase with people close to you. It can help you verify unusual requests, especially when someone claims to be in an emergency.",
          "**Never share your PIN or one-time verification code.** Your mobile money PIN and account verification codes should remain private. If someone calls claiming to represent your network operator, do not share these details. Contact the operator through its official channels instead.",
          "**Enable additional account security.** Turn on two-step verification or two-factor authentication wherever the platform provides it. On WhatsApp, you can find two-step verification under Settings.",
          "**Use strong, different passwords.** Avoid reusing passwords across accounts and do not use easily guessed information, such as your birth year or simple number combinations, as your PIN.",
          "**Think before clicking.** Be careful with unexpected links, even when they come from people you know. If a friend’s message seems unusual, verify it with them through another communication channel.",
          "**Act quickly if your account is compromised.** Contact your mobile network operator or mobile money provider immediately if you notice an unauthorised transaction. Secure your affected accounts, alert your contacts if someone may be impersonating you, and report the incident through the appropriate official channels.",
        ],
      },
      {
        type: "paragraph",
        text:
          "Reporting suspected cybercrime is important because it can help authorities identify patterns, investigate incidents and improve responses to online threats.",
      },
      {
        type: "heading",
        level: 2,
        text: "Limitations and opportunities for further research",
      },
      {
        type: "paragraph",
        text:
          "This research is an initial exploration of online security experiences among a small group of people in Limbe. It has several limitations.",
      },
      {
        type: "paragraph",
        text:
          "First, the survey included only 57 respondents, most of whom were between 15 and 24 years old. Since the questionnaire was distributed through WhatsApp, people who were less active online or had limited internet access may have been less likely to participate. The findings therefore cannot be used to represent all young people in Limbe or the wider population of Cameroon.",
      },
      {
        type: "paragraph",
        text:
          "Second, the survey relied on self-reported experiences. The responses reflect what participants shared and were not independently verified. The study also provides a snapshot of experiences at one point in time, rather than evidence of how online security risks change over time.",
      },
      {
        type: "paragraph",
        text:
          "Finally, the question about reporting measured what respondents said they would do first, rather than their actual reporting behaviour. More research is needed to understand the reasons behind these choices.",
      },
      {
        type: "paragraph",
        text:
          "In future research, Franklyn would like to reach a larger and more diverse group of people, including older adults and individuals with limited internet access. He would also like to investigate why people may hesitate to report online scams, whether because they do not know where to report, lack confidence in the reporting process or believe that reporting will not lead to action.",
      },
      {
        type: "paragraph",
        text:
          "Another area worth exploring is the relationship between digital security awareness and actual behaviour. Does knowing how to identify a scam make someone less likely to become a victim? Answering this question could help develop more effective digital safety education and awareness programmes.",
      },
      {
        type: "paragraph",
        text:
          "This first study highlights the importance of understanding online security at the community level. Protecting people online requires both accessible security tools and the knowledge to use them.",
      },
    ],
    references: [
      {
        title: "The Global Findex Database 2025",
        authors: "World Bank",
        year: 2025,
        url: "https://hdl.handle.net/10986/43438",
      },
      {
        title:
          "Cybercrime: Cameroon lost over CFA 1 billion to online scams in 2025",
        authors: "Lateu, S.",
        publication: "Cameroon News Agency",
        year: 2025,
        url: "https://cameroonnewsagency.com/cybercrime-cameroon-lost-over-cfa-1-billion-to-online-scams-in-2025/",
      },
      {
        title:
          "Cameroon strengthens national cyber defense with deployment of advanced security systems",
        authors:
          "National Agency for Information and Communication Technologies (ANTIC)",
        year: 2026,
        url: "https://antic.cm/index.php/fr/component/k2/item/449-cameroon-strengthens-national-cyber-defense-with-deployment-of-advanced-security-systems.html",
      },
      {
        title:
          "Mobile money phishing cybercrimes: Vulnerabilities, taxonomies, characterization from an investigation in Cameroon",
        authors:
          "Njoya, A. N., Tchakounté, F., Atemkeng, M., Udagepola, K. P., & Bassolé, D.",
        publication:
          "Towards New e-Infrastructure and e-Services for Developing Countries: 14th EAI International Conference, AFRICOMM 2022 (pp. 430–445). Springer",
        year: 2023,
        url: "https://doi.org/10.1007/978-3-031-34896-9_26",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

export const getPublishedArticles = (): Article[] =>
  articles
    .filter((article) => article.published !== false)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

export const getArticleBySlug = (slug: string): Article | undefined =>
  getPublishedArticles().find((article) => article.slug === slug);

export const getArticleCategories = (): string[] => {
  const seen = new Set<string>();
  getPublishedArticles().forEach((article) => seen.add(article.category));
  return Array.from(seen);
};

export const getRelatedArticles = (
  article: Article,
  limit = 3,
): Article[] =>
  getPublishedArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .sort((a, b) => {
      const score = (candidate: Article) => {
        let value = 0;
        if (candidate.category === article.category) value += 2;
        (candidate.tags ?? []).forEach((tag) => {
          if ((article.tags ?? []).includes(tag)) value += 1;
        });
        return value;
      };
      return score(b) - score(a);
    })
    .slice(0, limit);

export const estimateReadingTime = (article: Article): number => {
  if (article.readingTime) return article.readingTime;

  const words = article.content.reduce((total, block) => {
    if (block.type === "paragraph" || block.type === "heading") {
      return total + block.text.trim().split(/\s+/).filter(Boolean).length;
    }
    if (block.type === "list") {
      return (
        total +
        block.items.reduce(
          (sum, item) => sum + item.trim().split(/\s+/).filter(Boolean).length,
          0,
        )
      );
    }
    if (block.type === "quote" || block.type === "callout") {
      return total + block.text.trim().split(/\s+/).filter(Boolean).length;
    }
    return total;
  }, 0);

  return Math.max(1, Math.round(words / 220));
};

export const formatArticleDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const slugifyHeading = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export type ArticleHeading = {
  id: string;
  text: string;
  level: 2 | 3;
  blockIndex: number;
};

/** Builds stable heading anchors and the table of contents in one pass. */
export const collectHeadings = (content: ArticleBlock[]): ArticleHeading[] => {
  const used = new Map<string, number>();
  const headings: ArticleHeading[] = [];

  content.forEach((block, blockIndex) => {
    if (block.type !== "heading") return;
    const base = slugifyHeading(block.text) || `section-${blockIndex + 1}`;
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    headings.push({
      id: count === 0 ? base : `${base}-${count + 1}`,
      text: block.text,
      level: block.level,
      blockIndex,
    });
  });

  return headings;
};
