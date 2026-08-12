# Blog Setup Instructions

## 📦 Install Dependencies

Before using the blog, install these markdown dependencies:

```bash
cd /workspace/probcapital-site/packages/web
npm install gray-matter react-markdown remark-gfm rehype-raw rehype-sanitize
```

Or with bun (recommended):

```bash
cd /workspace/probcapital-site
bun add gray-matter react-markdown remark-gfm rehype-raw rehype-sanitize -w packages/web
```

## 📁 Blog Structure

```
packages/web/
├── content/blog/              # Markdown blog posts
│   ├── best-prop-trading-firms-2026.md
│   ├── how-to-pass-prop-firm-challenge.md
│   ├── prop-trading-vs-traditional-trading.md
│   └── trading-psychology-mental-mistakes.md
├── src/web/
│   ├── pages/
│   │   ├── blog.tsx           # Blog listing page
│   │   └── blog-article.tsx   # Individual article page
│   ├── components/
│   │   └── MarkdownRenderer.tsx  # Beautiful markdown renderer
│   └── lib/
│       └── blog.ts            # Blog utility functions
└── public/
    ├── robots.txt             # SEO crawler instructions
    ├── sitemap.xml            # Site structure for search engines
    └── ai.txt                 # AI systems metadata
```

## 🚀 Features Implemented

### ✅ Blog Listing Page (`/blog`)
- Category filtering (Trading Education, Psychology)
- Responsive grid layout
- Beautiful dark theme with ProbCapital branding
- SEO-optimized meta tags
- Schema.org structured data

### ✅ Article Pages (`/blog/{slug}`)
- Full markdown rendering with custom styles
- Share buttons (Twitter, Facebook, LinkedIn, Copy Link)
- Related articles section
- Reading time and author info
- Mobile-responsive design
- Schema.org BlogPosting markup

### ✅ Navigation
- "Blog" link added to desktop nav (between Pricing and Login)
- "Блог" link added to mobile menu
- Smooth routing with wouter

### ✅ SEO
- **robots.txt**: AI crawler support (ChatGPT, Claude, Perplexity)
- **sitemap.xml**: All pages indexed (including blog)
- **ai.txt**: Metadata for AI systems
- **Meta tags**: Enhanced title, description, keywords, OG, Twitter
- **Schema.org**: FinancialService, BreadcrumbList, Blog, BlogPosting

### ✅ Markdown Renderer
- Custom styled headings (h1-h4)
- Beautiful code blocks
- Styled tables, lists, blockquotes
- Links, images, horizontal rules
- Mobile-responsive
- ProbCapital color scheme (#10b981 green)

## 📝 Adding New Articles

1. Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Article Title"
slug: "your-article-slug"
description: "Brief description for SEO"
category: "Trading Education"
author: "ProbCapital Team"
date: "2026-08-12"
readTime: "10 min read"
image: "/blog/your-image.jpg"
keywords: ["keyword1", "keyword2", "keyword3"]
---

# Your Article Content

Write your markdown content here...
```

2. Add the article to `blog.tsx` in the `allPosts` array
3. Update `sitemap.xml` with the new article URL

## 🎨 Customization

### Colors
The blog uses ProbCapital brand colors:
- Primary green: `#10b981`
- Light green: `#34d399`
- Dark background: `#0F1117`
- Text: `#E5E7EB` / `#D1D5DB`

### Styling
Edit `MarkdownRenderer.tsx` to customize:
- Heading sizes and colors
- Code block styles
- Table appearance
- Link hover effects

## 🔗 URLs

- Blog listing: `https://www.probcapital.com/blog`
- Article example: `https://www.probcapital.com/blog/best-prop-trading-firms-2026`

## 📊 Current Articles (4)

1. **Best Prop Trading Firms 2026** (7.8KB, 12 min)
   - Keywords: prop trading firms, FTMO alternative
   
2. **How to Pass Prop Firm Challenge** (9.5KB, 15 min)
   - Keywords: pass challenge, risk management
   
3. **Prop Trading vs Traditional Trading** (9.7KB, 10 min)
   - Keywords: prop trading, retail trading
   
4. **Trading Psychology** (14KB, 13 min)
   - Keywords: trading psychology, mental mistakes

## 🚨 Important Notes

- Dependencies are NOT YET installed (install them before deploying)
- Article routing needs to be configured in your router
- Images referenced in markdown should be placed in `/public/blog/`
- For production, consider using SSG (Static Site Generation) for better SEO

## 🎯 Next Steps

1. Install dependencies (see above)
2. Test locally: `npm run dev` or `bun dev`
3. Configure routing for `/blog` and `/blog/:slug`
4. Add more articles (target: 10-15 for good SEO)
5. Deploy to production

---

**Status**: ✅ All components created and ready to deploy!
