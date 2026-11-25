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
        url: "https://drive.google.com/file/d/1KPpKuw1vAFlPHkINBF2JFbH0zw2069nH/view?usp=sharing",
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
    {      slug: "period-pain-and-school-life-molyko-buea",      title: "Period Pain and School Life: Findings from a Community Study in Molyko, Buea",      summary:        "An exploratory survey of 32 girls aged 13 to 19 explores how period pain affects school attendance, study time, class participation and academic performance — and what can help.",      category: "Research notes",      tags: ["Menstrual health", "Education", "Cameroon", "Period pain"],      author: {        name: "Precious Afuankeng Lereh",        role: "KC Scholar, Knowledge Center Cameroon",        avatar: "/articles/authors/lereh-precious.jpeg",        bio:          "Precious is a hardworking and academically driven student with a strong interest in microbiology. A graduate of Bilingual Grammar School, Molyko, Buea, she consistently performed among the top students in her class, achieving strong results in her Form Five and Cameroon GCE Advanced Level examinations. She is particularly interested in understanding microorganisms and their role in science and everyday life. Her curiosity, commitment to learning and interest in microbiology continue to shape her academic interests.",      },      mentor: "Sandrine Ojong",      publishedAt: "2026-11-09T09:00:00.000Z",      featured: false,      cover: {        src: "/articles/covers/molyko.jpg",        alt: "Molyko, Buea, a busy student neighbourhood in Cameroon",        caption:          "Molyko, Buea, a busy student neighbourhood where the study was conducted.",        credit: "Knowledge Center",      },      content: [        {          type: "paragraph",          text:            "Imagine a student at the back of the classroom with her hand down, even though she knows the answer. Her stomach is cramping and her head hurts, and she is trying hard to follow the lesson. She has not stayed home. She is at school. But she cannot really take part.",        },        {          type: "paragraph",          text:            "For many girls, this is what period pain can feel like. The most common type is called primary dysmenorrhea (PD): cramping pain in the lower belly before or during a period, sometimes with nausea, headache or tiredness, and with no underlying disease behind it. It usually starts within a year or two of a girl's first period.",        },        {          type: "paragraph",          text:            "Research in Cameroon suggests it is very common. A study of 1,978 young women aged 15 to 24 in Yaoundé found that 71.2% had PD, and that it reduced their quality of life (Mboua Batoum et al., 2023). Studies elsewhere link period pain to missed school and to disruptions in learning (Siahaan et al., 2024).",        },        {          type: "paragraph",          text:            "Yet in many schools, period pain is rarely talked about. Precious Afuankeng wanted to understand what it looks like for girls in Molyko, Buea, a busy student neighbourhood: How do girls who have period pain say it affects their time at school and their studies?",        },        {          type: "paragraph",          text:            "To explore this, Precious ran an exploratory online survey of 32 girls aged 13 to 19. The findings give an early picture of the experiences of the girls who took part.",        },        {          type: "download",          label: "Full research report",          title:            "Period Pain and School Life: Findings from a Community Study in Molyko, Buea",          description:            "Read the full research report to explore the methodology, detailed findings, analysis and recommendations.",          url: "https://drive.google.com/file/d/1lBn0ge3fiSk7WCwjXtTLWkE2Z9T6LwVr/view?usp=drive_link",          meta: "Community study report · Knowledge Center Cameroon",        },        {          type: "heading",          level: 2,          text: "About the research",        },        {          type: "paragraph",          text:            "Precious designed an anonymous online questionnaire about period pain, school attendance, study habits, concentration, class participation and academic performance during periods. It was shared through WhatsApp networks. In all, 45 responses came in, and 32 girls aged 13 to 19 met the study's conditions and were included. Most (18 of 32) were aged 17 or 18, and eight were aged 13 to 16.",        },        {          type: "paragraph",          text:            "Participation was voluntary, and nobody was asked for their name.",        },        {          type: "paragraph",          text:            "Alongside the survey, Precious and the Knowledge Center team ran an awareness campaign for more than 100 girls aged 13 to 19 at churches and community centres. It covered the safe use of pain-relief medicines, including taking them with food and following the dosage instructions of health professionals, and it included a question-and-answer session where girls could raise their concerns.",        },        {          type: "heading",          level: 2,          text: "Key findings",        },        {          type: "paragraph",          text:            "The survey revealed several patterns in how the girls described their school life during their periods.",        },        {          type: "heading",          level: 3,          text: "1. Period pain often affected the ability to go to school.",        },        {          type: "paragraph",          text:            "Of the 32 respondents, 22 (69%) said period pain always (4) or sometimes (18) affected their ability to go to school. Ten (31%) said it never did.",        },        {          type: "heading",          level: 3,          text: "2. Studying time went down.",        },        {          type: "paragraph",          text:            "Most respondents said they studied for fewer hours during their periods, and two of the 32 could not study at all.",        },        {          type: "heading",          level: 3,          text: "3. Being at school is not the same as being able to take part.",        },        {          type: "paragraph",          text:            "The study separates absenteeism (being away) from presenteeism (being present but struggling). A large majority of respondents reported difficulty concentrating and taking part in class during their periods. This suggests that attendance records alone may not show how much period pain affects school life.",        },        {          type: "heading",          level: 3,          text: "4. Reported pain rose through the early teens, then levelled off.",        },        {          type: "paragraph",          text:            "Average reported pain was lowest among the youngest girls, reached about 6 out of 10 by age 15, and stayed at roughly 6 to 7 out of 10 up to age 19. Only eight of the 32 girls were aged 13 to 16, so the pattern for younger girls is tentative and needs larger studies.",        },        {          type: "heading",          level: 3,          text: "5. These are perceptions, not exam results.",        },        {          type: "paragraph",          text:            "Academic performance was reported by the girls themselves and was not checked against marks. The findings show how girls experience their schoolwork. They do not prove that grades fell.",        },        {          type: "heading",          level: 2,          text: "What can help",        },        {          type: "paragraph",          text:            "Period pain is common, and the right support can make school life easier. These are general suggestions, not medical advice.",        },        {          type: "heading",          level: 3,          text: "For girls",        },        {          type: "list",          ordered: false,          items: [            "Keep a simple record. Note when the pain starts, how strong it is and what helps. It makes it easier to explain to a teacher or health worker.",            "Try simple comfort measures. A warm compress on the lower belly, rest, gentle movement and drinking water help some people.",            "Be careful with medicines. If you use pain-relief medicine, follow the label and ask a pharmacist, nurse or doctor first. These medicines are not safe for everyone, and some should be taken with food to protect the stomach, so check the label.",            "Tell someone you trust. A teacher, school nurse or family member can help you plan for difficult days.",            "Know when to see a health professional. Seek advice if the pain is severe, keeps getting worse, comes with very heavy bleeding or fainting, or does not ease with usual measures.",          ],        },        {          type: "heading",          level: 3,          text: "For teachers and schools",        },        {          type: "list",          ordered: false,          items: [            "Allow rest. Let students rest or visit the school nurse when they need to, without embarrassment.",            "Be flexible. Offer ways to catch up on missed lessons and work when pain keeps a student away.",            "Provide basic facilities. Pads, clean water and clean, private toilets make a real difference.",            "Talk about it openly. When teachers and students understand period pain, girls are more likely to ask for help. A good first step is simply asking girls how school feels during their periods.",          ],        },        {          type: "heading",          level: 2,          text: "Limitations and opportunities for further research",        },        {          type: "paragraph",          text:            "This research is an initial exploration of a small group of girls in Molyko. It has several limitations.",        },        {          type: "paragraph",          text:            "First, only 32 girls took part. They were reached through WhatsApp networks and an online form, so they chose to take part themselves, and girls without internet access may have been less likely to participate. The findings cannot represent all girls in Molyko or in Cameroon. The report describes its results as preliminary trends.",        },        {          type: "paragraph",          text:            "Second, there was no comparison group of girls without period pain, and PD was based on what the girls reported, not on a medical examination. The study can describe what these girls report, but it cannot show that period pain causes difficulties at school. Some pain could also have another cause.",        },        {          type: "paragraph",          text:            "Third, academic performance was self-reported rather than measured with marks, and the questionnaire was not tested before it was used. The girls ranged from 13 to 19, and only a few were in the youngest groups, so experiences may differ by age.",        },        {          type: "paragraph",          text:            "In future research, Precious would like to survey more girls across several schools, include a comparison group, and, with permission, look at attendance records and marks. A before-and-after check of the awareness campaign would show whether it helped. Those answers could shape better school support for girls with period pain.",        },        {          type: "paragraph",          text:            "This first study shows why it matters to ask girls directly. Supporting them takes both understanding and practical help in the classroom.",        },      ],      references: [        {          title: "Impact of primary dysmenorrhoea on the quality of life of schooled female youths in Yaoundé, Cameroon",          authors:            "Mboua Batoum, V. S., Ndongo, M. N., Etame, F., Mbang, H. L., Tamba, N. T., Njike, M. J., et al.",          year: 2023,          url: "https://hsd-fmsb.org/index.php/hsd/article/view/4223",        },        {          title: "The impact of dysmenorrhea on the learning process of adolescent girls",          authors: "Siahaan, F. K., Sari, U. S. C., & Damayanti, D. F.",          year: 2024,          url: "https://doi.org/10.53770/electron.v6i1.648",        },      ],    },    {      slug: "short-on-change-molyko-buea-limbe",      title: "Short on Change: Findings from a Community Study in Molyko, Buea and Limbe",      summary:        "A survey of 36 people finds that 92% experienced exact-change problems, cash issues cost time and transactions, and digital payment interest is high — but fees and connectivity remain barriers.",      category: "Research notes",      tags: ["Financial inclusion", "Digital payments", "Cameroon", "Change problems"],      author: {        name: "Ako John Ashu",        role: "KC Scholar, Knowledge Center Cameroon",        avatar: "/articles/authors/ako-john.jpeg",        bio:          "Ako John Ashu is a high school graduate from Ecole Sonara in Limbe, Cameroon, with a strong interest in financial technology (fintech) and the role of digital innovation in emerging markets. A National Honor Roll Scholar, he graduated among the top-performing students in his class. He is particularly interested in understanding how technology can improve access to financial services, support the informal sector, and create economic opportunities in underserved communities. His interest is especially focused on Cameroon's financial ecosystem, where he hopes to explore how fintech solutions can address existing gaps and contribute to more inclusive economic development.",      },      mentor: "Sandrine Ojong",      publishedAt: "2026-11-09T09:00:00.000Z",      featured: false,      cover: {        src: "/articles/covers/buea-market.jpeg",        alt: "Muea Market, Buea, Cameroon",        caption:          "Muea Market, Buea — a busy market where everyday cash transactions take place.",        credit: "Knowledge Center",      },      content: [        {          type: "paragraph",          text:            "Imagine a customer handing over a 500 FCFA note for something that costs 150 FCFA. The seller searches every pocket and the till. There is no 350 FCFA in change. The customer waits. Someone suggests buying something else. Sometimes the sale is simply cancelled.",        },        {          type: "paragraph",          text:            "Almost everyone in Cameroon has lived this moment. It looks small, but it can waste time, spoil a taxi ride, cause arguments and cost a seller a customer.",        },        {          type: "paragraph",          text:            "At the same time, mobile money has grown quickly across the region. About 40% of adults in sub-Saharan Africa had a mobile money account in 2024, up from 27% in 2021, according to the World Bank's Global Findex. In Cameroon, research shows that age, education, living standards and phone ownership shape who adopts it (Douanla Meli et al., 2022). A digital payment can be for the exact amount, so no change is needed.",        },        {          type: "paragraph",          text:            "So why do change problems continue? John Ashu set out to ask: How common are change problems among people in Molyko (Buea) and Limbe, what do they cost, and what would make digital payments work better?",        },        {          type: "paragraph",          text:            "To find out, he surveyed 36 people. The findings give an early picture of the experiences of the people who took part.",        },        {          type: "download",          label: "Full research report",          title:            "Short on Change: Findings from a Community Study in Molyko, Buea and Limbe",          description:            "Read the full research report to explore the methodology, detailed findings, analysis and recommendations.",          url: "https://docs.google.com/document/d/1koFz7_qjBgSTZcGQLokuCP4XKEEkBWYV/edit?usp=drive_link&ouid=118117673804097049834&rtpof=true&sd=true",          meta: "Community study report · Knowledge Center Cameroon",        },        {          type: "heading",          level: 2,          text: "About the research",        },        {          type: "paragraph",          text:            "John designed a questionnaire for people who deal with cash every day. It asked about age and occupation, how often people use cash, whether they had faced change problems and what happened, how they use digital payments, what holds them back, and which features they would want in a payment app. Respondents could also write suggestions in their own words.",        },        {          type: "paragraph",          text:            "In total, 36 people completed it. Most (23) were aged 18 to 25, and 23 were students. The others included 9 motorcycle riders, 2 taxi drivers and 2 civil servants. Twenty-eight respondents were men and 8 were women. Twenty-one lived in Limbe, 13 in Molyko (Buea), and two elsewhere. Participation was voluntary",        },        {          type: "heading",          level: 2,          text: "Key findings",        },        {          type: "paragraph",          text:            "The questionnaire revealed several clear patterns.",        },        {          type: "heading",          level: 3,          text: "1. Change problems were nearly universal.",        },        {          type: "paragraph",          text:            "Thirty-three of the 36 respondents (92%) had experienced an exact-change problem. Among the 32 who said how often, 14 (44%) faced it daily and 8 (25%) weekly. The most common form was simply a lack of change (28 of the 35 who answered, 80%), followed by a merchant with no change (19, 54%) and a taxi or bike rider who refused payment (14, 40%).",        },        {          type: "heading",          level: 3,          text: "2. It cost people time, and sometimes the deal itself.",        },        {          type: "paragraph",          text:            "The most common answer for time lost was 5 to 10 minutes (16 of 36, 44%), and 8 people (22%) lost more than 20 minutes. Thirty-five of 36 said they had, at some point, abandoned or cancelled a transaction because of cash issues. Delayed transport and arguments with customers or drivers were each reported by 17 of the 35 who answered (49%).",        },        {          type: "heading",          level: 3,          text: "3. Most people called it serious, and most reported losing money.",        },        {          type: "paragraph",          text:            "Twenty-four of 36 (67%) rated the problem serious or very serious, and 33 (92%) said they had lost money because of cash problems.",        },        {          type: "heading",          level: 3,          text: "4. People already use mobile money, so awareness is not the main issue.",        },        {          type: "paragraph",          text:            "All 36 had heard of digital payments. Thirty-four (94%) used MTN Mobile Money and 9 (25%) used Orange Money. Twenty-one (58%) paid digitally every day and 11 (31%) every week. Yet 27 (75%) said they use cash always or often. Digital payments exist in these people's lives, but cash problems remain.",        },        {          type: "heading",          level: 3,          text: "5. Fees and connectivity were the main barriers.",        },        {          type: "paragraph",          text:            "Of the 35 who answered, 18 (51%) named transaction charges and 14 (40%) named poor internet. Seven (20%) named network failures. Only 6 (17%) preferred cash, 6 (17%) lacked trust in digital payments, and one lacked a smartphone. Fees are also in the news: Cameroon has taxed mobile money since January 2022, with a 0.2% levy on transfers and withdrawals, according to Business in Cameroon, reporting on an IMF analysis.",        },        {          type: "heading",          level: 3,          text: "6. Interest in a fast, cheap and secure option was high.",        },        {          type: "paragraph",          text:            "Thirty-two respondents (89%) agreed or strongly agreed that digital payments can reduce cash problems. Asked about a secure, low-cost payment app, 20 (56%) said they would definitely use it and 12 (33%) probably. The features they wanted most were fast transactions (29 of 36, 81%), low fees (26, 72%), high security (23, 64%), ease of use (20, 56%) and offline payment (18, 50%).",        },        {          type: "heading",          level: 3,          text: "7. Respondents had ideas of their own.",        },        {          type: "paragraph",          text:            "In open comments, repeated ideas included faster payments, lower charges, more reliable networks, and an app linked to mobile money for small payments and tracking balances. One respondent warned that a good app \"must also have very low charges\", otherwise it \"won't solve the problem of extra charges.\" A few also asked that cash stay available while digital options improve.",        },        {          type: "heading",          level: 2,          text: "What can help",        },        {          type: "paragraph",          text:            "These ideas come from the findings and from what respondents suggested. They are suggestions, not tested solutions.",        },        {          type: "heading",          level: 3,          text: "For everyday customers",        },        {          type: "list",          ordered: false,          items: [            "Carry small notes and coins when you can, especially for transport and small purchases.",            "Check the fee before you pay digitally. Fees were the top concern, so know what a payment will cost.",            "Keep a backup. Having both cash and a mobile money balance means one failure does not stop you.",            "Stay calm. Most change problems are nobody's fault. Agree a fair way to settle the amount.",          ],        },        {          type: "heading",          level: 3,          text: "For small businesses, riders and drivers",        },        {          type: "list",          ordered: false,          items: [            "Start the day with a float of small change.",            "Make your payment options clear. Show your mobile money number or tell customers what you accept, and confirm the payment on your own phone before handing over goods.",          ],        },        {          type: "heading",          level: 3,          text: "For mobile money providers and policymakers",        },        {          type: "list",          ordered: false,          items: [            "Lower charges on small payments. This was the barrier respondents named most.",            "Improve network reliability, so payments work when they are needed.",            "Offer a simple, fast, secure app that can work even when connections are poor.",            "Keep cash available while digital options improve, as some respondents asked.",          ],        },        {          type: "heading",          level: 2,          text: "Limitations and opportunities for further research",        },        {          type: "paragraph",          text:            "This research is an initial exploration of a small group of people in Molyko (Buea) and Limbe. It has several limitations.",        },        {          type: "paragraph",          text:            "First, only 36 people took part, and they were mostly young: 23 were aged 18 to 25, 23 were students, and 28 were men. Two respondents lived outside the study area. The findings cannot represent all residents or all occupations.",        },        {          type: "paragraph",          text:            "Second, the research was about micro-business operators and customers, but few operators answered: 9 motorcycle riders and 2 taxi drivers, and no sellers or shop owners. The results are not yet split by role, so they cannot show how operators' and customers' experiences differ.",        },        {          type: "paragraph",          text:            "Third, all answers were self-reported. Some questions asked whether something had ever happened rather than how often or how much, and the survey did not measure amounts of money lost. Two opinion questions showed only agreeing or neutral answers, which may overstate enthusiasm for digital payments.",        },        {          type: "paragraph",          text:            "In future research, John would like to reach more people, especially sellers, shop owners and drivers, and compare how operators and customers are affected. He would also like to measure how much money and time are lost, and test whether lower fees, better networks or simple payment options really reduce change problems. Other fixes, such as a better supply of small notes and coins, deserves study too.",        },      ],      references: [        {          title: "The Global Findex Database 2025",          authors: "World Bank",          year: 2025,          url: "https://hdl.handle.net/10986/43438",        },        {          title:            "Cameroon mobile money tax sharply raises transaction costs, IMF warns",          authors: "Business in Cameroon",          year: 2025,          url: "https://www.businessincameroon.com/finance/1412-15500-cameroon-mobile-money-tax-sharply-raises-transaction-costs-imf-warns",        },      ],    },
  {
    slug: "from-stem-olympiad-to-mit",
    title: "FROM STEM OLYMPIAD TO MIT, USA.",
    summary:
      "A December competition in Cameroon has become a launchpad for young scientists at MIT, Stanford and beyond. This is what happens when students are given problems worth falling in love with.",
    category: "KC stories",
    tags: ["STEM Olympiad", "Scholar journeys", "Education", "Cameroon"],
    author: {
      name: "The KC editorial team",
      role: "Knowledge Center · Cameroon",
      avatar: "/articles/authors/kc-editorial-team.png",
      bio:
        "The KC editorial team writes about the people, ideas and questions shaping the Knowledge Center community in Cameroon.",
    },
    publishedAt: "2026-11-24T09:00:00.000Z",
    cover: {
      src: "/articles/covers/from-stem-olympiad-to-mit.jpg",
      alt: "Young science students gathered for the KC National STEM Olympiad in Cameroon.",
      caption:
        "Every December, science students from across Cameroon meet for the KC National STEM Olympiad.",
      credit: "Knowledge Center",
    },
    content: [
      {
        type: "paragraph",
        text:
          "Every December, something extraordinary arrives in the lives of secondary and high school science students across Cameroon: the KC National STEM Olympiad, the country's largest youth education project.",
      },
      {
        type: "paragraph",
        text:
          "On the surface, it looks like a competition. Spend a little time with the students who have sat it, and a different picture emerges. For many of them, it is the first time classroom science stops being a set of equations to memorise and becomes a way of reading the world.",
      },
      { type: "heading", level: 2, text: "More than a competition" },
      {
        type: "paragraph",
        text:
          "Unlike a traditional academic test, the Olympiad is built around carefully curated problems that ask students to think, connect and imagine. The questions take the theories learned in class and turn them into a living lens — one through which a young person can begin to interpret the world around them.",
      },
      {
        type: "paragraph",
        text:
          "That distinction matters. A conventional exam measures how much a student already knows on a particular day. The STEM Olympiad is designed to do something harder and more valuable: to spark curiosity and a lasting appetite for learning. Those two things are the engines behind almost every scientific contribution in history.",
      },
      {
        type: "image",
        src: "/articles/inline/from-stem-olympiad-to-mit-1.jpg",
        alt: "Students working through a problem at a KC STEM Olympiad event.",
        caption:
          "The Olympiad asks students to use classroom science in ways they have not tried before.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "A spark that becomes a direction" },
      {
        type: "paragraph",
        text:
          "The real magic of the Olympiad is what happens after the results are announced. It has become a yearly launchpad for career discovery, nudging students towards fields they may never have encountered in a Cameroonian classroom: quantum computing, aeronautical engineering, astrophysics and more.",
      },
      {
        type: "paragraph",
        text:
          "Some of those students now study at universities such as MIT and UPenn. Others are building bold startups here at home and across the African continent. The Olympiad did not hand them a career. It gave them the confidence to go looking for one.",
      },
      {
        type: "quote",
        text:
          "The KC STEM Olympiad was a uniquely inspiring experience that was indispensable in my applications for scholarships which consequently earned me admissions at Stanford and MIT. I would recommend the profound impact of the STEM — both from the computational and conceptual fronts — to anyone who is even remotely interested in science or the broader spectrum of STEM fields.",
        attribution: "Kana Leo Keran",
        role: "STEM 2022 laureate, now studying at MIT",
      },
      { type: "heading", level: 2, text: "Not an anomaly" },
      {
        type: "paragraph",
        text:
          "Leo is not a lucky exception. He is evidence of what the right educational experience can unlock. A KC STEM laureate now at MIT, he describes the Olympiad as “indispensable” in earning admission to both Stanford and MIT.",
      },
      {
        type: "paragraph",
        text:
          "That word is worth sitting with. With deliberate investment in the right kind of stimulating education, we can raise many more young people like Leo — and, in doing so, shape a generation that expands what seems possible for Cameroon and for Africa.",
      },
      {
        type: "image",
        src: "/articles/inline/from-stem-olympiad-to-mit-2.jpg",
        alt: "A KC STEM scholar celebrating an achievement with peers and mentors.",
        caption:
          "Recognition matters, but the lasting value of the Olympiad is the confidence it builds.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "Cameroonians can compete globally" },
      {
        type: "paragraph",
        text:
          "The Olympiad continues to inspire national representation in fields that once felt distant from Cameroonian classrooms — astronomy, astronautical engineering, neuroscience. Today, 27 national STEM scholars are studying at leading international universities including MIT, Harvard and Stanford on full scholarships.",
      },
      {
        type: "paragraph",
        text:
          "Every one of those places began with a student who was given a problem to solve, a community that believed the problem was worth solving, and the chance to find out where that curiosity could lead.",
      },
      { type: "heading", level: 2, text: "The renaissance we are building" },
      {
        type: "paragraph",
        text:
          "We are proud of the work that goes into this project. Year after year, it prompts students to ask one of life's most profound questions: what career path do I want beyond high school, and how can my STEM experience and my KC community help me get there?",
      },
      {
        type: "paragraph",
        text:
          "Our dream is that Cameroon will not simply take part in Africa's STEM future, but lead it. By igniting a generation of relentlessly curious, driven young people who are unbound by old limits, we are raising leaders who will break ceilings, rewrite the African narrative and set a standard the next generation will not just inherit but exceed.",
      },
      {
        type: "image",
        src: "/articles/inline/from-stem-olympiad-to-mit-3.jpg",
        alt: "KC students listening to a speaker at a STEM community event.",
        caption:
          "A community of scholars, mentors and possibility — the story behind every Olympiad result.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "Join the next cohort" },
      {
        type: "paragraph",
        text:
          "If you know a science student in Lower Sixth or Upper Sixth, encourage them to sign up. The cash awards are real, but the transformation is worth far more: students who excel in the classroom and carry that confidence into the rest of their lives.",
      },
      {
        type: "callout",
        title: "STEM 2026",
        text:
          "The next KC National STEM Olympiad takes place on **29 and 30 December 2026**. It is open to science students in Lower Sixth and Upper Sixth, with **1 million XAF** in cash awards. Registration details are available at [kcedu.org](https://kcedu.org).",
      },
    ],
  },
  {
    slug: "the-pygmalion-effect-and-the-power-of-belief",
    title: "THE 1968 EXPERIMENT",
    summary:
      "A 1968 classroom experiment suggested that expectation alone can change a student's trajectory. At KC, that idea is the starting point for how we mentor a generation.",
    category: "KC stories",
    tags: ["Mentorship", "Mindset", "Education", "Pygmalion effect"],
    author: {
      name: "The KC editorial team",
      role: "Knowledge Center · Cameroon",
      avatar: "/articles/authors/kc-editorial-team.png",
      bio:
        "The KC editorial team writes about the people, ideas and questions shaping the Knowledge Center community in Cameroon.",
    },
    publishedAt: "2026-11-20T09:00:00.000Z",
    cover: {
      src: "/articles/covers/the-pygmalion-effect.jpg",
      alt: "A teacher speaking with a student in a classroom.",
      caption:
        "Small acts of belief from a teacher can change the way a student sees their own future.",
      credit: "Knowledge Center",
    },
    content: [
      {
        type: "paragraph",
        text:
          "In 1968, psychologists ran an experiment in a school that appeared to be about a special test. In reality, it was about something far more powerful: the quiet force a teacher's expectation exerts on a learner's future.",
      },
      {
        type: "paragraph",
        text:
          "For the experiment to mean anything, the teachers had to be kept in the dark about its true purpose. What they were told was simple enough.",
      },
      { type: "heading", level: 2, text: "The experiment" },
      {
        type: "paragraph",
        text:
          "The researchers told classroom teachers that, based on the results of a special test, certain students were likely to show extraordinary growth that year. These selected students, they were told, would become “academic bloomers” and would make unparalleled improvements in learning.",
      },
      {
        type: "paragraph",
        text:
          "There was no test. The students had been picked at random. The teachers did not know that.",
      },
      {
        type: "paragraph",
        text:
          "The researchers were investigating one question: could teacher expectations alone transform student performance? What they reported became one of the most discussed findings in educational psychology.",
      },
      {
        type: "image",
        src: "/articles/inline/the-pygmalion-effect-1.jpg",
        alt: "A classroom scene with students working in small groups.",
        caption:
          "The study asked whether a teacher's belief could change a student's results.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "What the researchers reported" },
      {
        type: "paragraph",
        text:
          "The randomly selected students achieved striking gains. In the study's reporting, their measures improved across three areas:",
      },
      {
        type: "list",
        items: [
          "**Creative thinking:** up by seven points.",
          "**Overall IQ:** up by four points.",
          "**Ability to articulate a coherent lifetime ambition:** up by two points.",
        ],
      },
      {
        type: "callout",
        title: "A note on the evidence",
        text:
          "The size and durability of these gains have been debated by later researchers. What has endured is the central insight: expectations shape the way teachers behave, and the way students come to see themselves.",
      },
      { type: "heading", level: 2, text: "The plot twist" },
      {
        type: "paragraph",
        text:
          "The students had not been given a different curriculum or a secret set of lessons. Something quieter was happening. Without realising it, the teachers began to give the selected students something equally capable classmates missed out on.",
      },
      {
        type: "list",
        items: [
          "Extra attention",
          "Consistent encouragement",
          "Close mentorship",
          "More learning opportunities",
        ],
      },
      {
        type: "paragraph",
        text:
          "Belief, in other words, is not just a feeling. It changes behaviour. And behaviour, repeated over months and years, changes what a child believes is possible for them.",
      },
      {
        type: "quote",
        text:
          "A child's success isn't entirely down to their intelligence alone. It is vastly affected by whether their teacher believes in their potential.",
        attribution: "The lesson of the Pygmalion Effect",
      },
      {
        type: "image",
        src: "/articles/inline/the-pygmalion-effect-2.jpg",
        alt: "A mentor speaking closely with a young learner.",
        caption:
          "Attention, encouragement and mentorship are the practical forms that belief takes.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "When expectations are low" },
      {
        type: "paragraph",
        text:
          "The same mechanism works in the other direction. When students cannot feel that their teachers believe in them, low expectations become a self-fulfilling prophecy: they perform below their potential, their self-confidence crumbles and their sense of purpose becomes fuzzy.",
      },
      {
        type: "paragraph",
        text:
          "These are not small consequences. Unconscious perceptions can leave young people with no real sense of self-worth — and, with that, no real ambition to pursue.",
      },
      { type: "heading", level: 2, text: "Building a culture of belief at KC" },
      {
        type: "paragraph",
        text:
          "At Knowledge Center, we are not content with identifying the problem. We are building the conditions that answer it: close and diligent mentorship, mindset training, and a scholarly community rippling with support and shared positivity.",
      },
      {
        type: "paragraph",
        text:
          "The aim is a learner who feels capable of reinventing themselves — confident, resourceful and unstoppable. Every child deserves the chance to discover their own limitless potential, and that chance begins with the people around them refusing to settle for the average they were handed.",
      },
      {
        type: "image",
        src: "/articles/inline/the-pygmalion-effect-3.jpg",
        alt: "Members of the KC community gathered together in conversation.",
        caption:
          "A scholarly community built on encouragement changes what students believe they can become.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "The 2040 dream" },
      {
        type: "paragraph",
        text:
          "By 2040, we dream of having empowered more than 1,000 global icons leading enterprises across the African continent — the new drivers of Africa's renaissance, from technology to space exploration.",
      },
      {
        type: "paragraph",
        text:
          "It is an ambitious vision: an ambitious, gritty and highly motivated nexus of young leaders. It starts in ordinary classrooms, with the extraordinary decision to believe in a child before the evidence arrives.",
      },
      {
        type: "paragraph",
        text:
          "If that is a future you want to help build, connect with us. Together, we can give more students a genuine chance on the global stage.",
      },
    ],
  },
  {
    slug: "is-the-system-holding-them-back",
    title:
      "THE SCHOOL SYSTEM HAS EXPIRED AND OUR BRIGHTEST TALENTS ARE PAYING THE ULTIMATE PRICE -- AND HERE IS PROOF!",
    summary:
      "Kairan Quazi's path from a third-grade classroom to SpaceX asks a harder question: how many young people are being held back by a model built for the 1800s?",
    category: "KC stories",
    tags: ["Future of learning", "AI", "Education", "Mentorship"],
    author: {
      name: "The KC editorial team",
      role: "Knowledge Center · Cameroon",
      avatar: "/articles/authors/kc-editorial-team.png",
      bio:
        "The KC editorial team writes about the people, ideas and questions shaping the Knowledge Center community in Cameroon.",
    },
    publishedAt: "2026-11-18T09:00:00.000Z",
    cover: {
      src: "/articles/covers/is-the-system-holding-them-back.jpg",
      alt: "A student working independently with digital learning tools.",
      caption:
        "Learning tools now allow young people to move at their own pace — if schools let them.",
      credit: "Knowledge Center",
    },
    content: [
      {
        type: "paragraph",
        text:
          "While other 14-year-olds are working through algebra homework, Kairan Quazi was working for Elon Musk. Not because he was lucky, but because his parents rejected a story that the education system has told generations of families.",
      },
      {
        type: "paragraph",
        text:
          "The story is that there is one right pace, one right path and one standard measure of a child's ability. Kairan's parents did not accept it.",
      },
      { type: "heading", level: 2, text: "The child who would not fit the average" },
      {
        type: "paragraph",
        text:
          "Kairan told his third-grade teacher that the lessons were “insulting”. He was already reading at an elite college level. The classroom had nothing left to offer him, and staying there would have meant learning to be bored.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**By age nine**, he had enrolled in college.",
          "**By 13**, he had landed a paid internship in Silicon Valley, building AI tools.",
          "**At 14**, Starlink — Elon Musk's satellite company — hired him, making him the youngest employee in SpaceX history.",
        ],
      },
      {
        type: "paragraph",
        text:
          "No traditional high school. No colourful certificates with straight As. No gold stars. Kairan did not thrive because of school. He thrived because his parents pulled him out and offered him something better.",
      },
      {
        type: "image",
        src: "/articles/inline/is-the-system-holding-them-back-1.jpg",
        alt: "A young person learning independently with books and a laptop.",
        caption:
          "For some learners, the right environment looks nothing like a traditional classroom.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "A system built for averages" },
      {
        type: "paragraph",
        text:
          "His parents understood something many people do not: the school system is a game of averages. The most gifted students are under-stimulated and bored; those who learn more slowly are disillusioned and left behind. The mechanism was designed to process large numbers of students for factory-line employment.",
      },
      {
        type: "paragraph",
        text:
          "The problem is that we are no longer in the 1800s. The economy and the skills needed to thrive in it have changed drastically, while the structure of schooling has remained remarkably close to its industrial-age original.",
      },
      {
        type: "quote",
        text: "We don't do exceptions.",
        attribution: "A line many parents know too well",
      },
      {
        type: "paragraph",
        text:
          "Translated, that line often means: we know your child is different, but we would rather they were average. How many young people are labelled “average” simply because they were never given a real chance to be anything else? Not lazy. Not behind. Just uninspired.",
      },
      { type: "heading", level: 2, text: "The tools have changed" },
      {
        type: "paragraph",
        text:
          "Today, a child with curiosity and a connection can do things that would have been unthinkable a generation ago — and can do them at their own pace, without waiting for the rest of the class.",
      },
      {
        type: "list",
        items: [
          "Get essay feedback with ChatGPT.",
          "Learn calculus with a free tutor such as Khan Academy.",
          "Build a personalised science curriculum with Perplexity.",
        ],
      },
      {
        type: "paragraph",
        text:
          "This is not only for prodigies. Students everywhere are using these tools to reduce homework anxiety, learn faster in fewer hours and regain confidence in subjects they once hated. The tools are here. What has been missing is permission — permission to question the old rules about how teaching and learning are supposed to work.",
      },
      {
        type: "image",
        src: "/articles/inline/is-the-system-holding-them-back-2.jpg",
        alt: "A student using a laptop to explore a topic independently.",
        caption:
          "AI-assisted tools make self-paced, personalised learning available to far more students than before.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "What learning should look like" },
      {
        type: "paragraph",
        text:
          "The future of education is not 50 children sitting in rows memorising facts. It is not asking students to beat Google and ChatGPT in recall-heavy exams — a race no human can win.",
      },
      {
        type: "paragraph",
        text:
          "It is personalised, conceptual and AI-assisted learning, guided by insightful teachers who act as life mentors rather than simply deliverers of content. This is not a distant ideal. It is already being practised at KC.",
      },
      {
        type: "callout",
        title: "Our work at KC",
        text:
          "We are not polishing an outdated model — we are building a new one: **AI-powered learning**, deep conceptual mastery, mentors who widen horizons, and a curriculum designed for the world our students will live in as adults.",
      },
      {
        type: "image",
        src: "/articles/inline/is-the-system-holding-them-back-3.jpg",
        alt: "Students and a mentor working through a concept together.",
        caption:
          "Technology works best when it is paired with mentors who know how to stretch a learner.",
        credit: "Knowledge Center",
      },
      { type: "heading", level: 2, text: "A better question" },
      {
        type: "paragraph",
        text:
          "Yes, Kairan is a one-in-a-million genius. But he is also proof of what becomes possible when children are given better tools, strong mentorship, quality exposure and higher expectations. How many more young people need a system that stretches them instead of forcing them to fit in?",
      },
      {
        type: "paragraph",
        text:
          "If your child is bored, anxious or falling behind, maybe they are not the problem. Maybe the system is. It is time to stop asking whether a child is smart, and start asking whether the system is holding them back.",
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
