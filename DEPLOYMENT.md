# 🚀 Deployment Guide for ProbCapital Site

## ✅ Current Status

- ✅ All code committed and pushed to GitHub
- ✅ Latest commits:
  - `feat(blog): Add complete blog system with beautiful UI`
  - `feat(blog): Add 4 SEO-optimized blog articles`
  - `feat(seo): Add comprehensive SEO optimization`

## 🔧 Option 1: Automatic Deployment (Recommended)

### If Vercel is already connected to GitHub:

**The site will auto-deploy automatically!** 🎉

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Check deployment status for `probcapital-site`
3. It should show "Building..." or "Ready"

### If NOT connected yet:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select `akcept24/probcapital-site`
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave empty)
   - **Build Command**: `bun run build` (already in vercel.json)
   - **Output Directory**: `packages/web/dist` (already in vercel.json)
5. Click "Deploy"

**Environment Variables (if needed):**
- None required for marketing site
- Blog works without backend

---

## 🔧 Option 2: Manual Deployment via CLI

### Install Vercel CLI:
```bash
npm install -g vercel
```

### Login:
```bash
vercel login
```

### Deploy:
```bash
cd /workspace/probcapital-site
vercel --prod
```

---

## 🔧 Option 3: Build Locally (Test)

### Install dependencies:
```bash
cd /workspace/probcapital-site
bun install

# Install blog markdown dependencies
cd packages/web
bun add gray-matter react-markdown remark-gfm rehype-raw rehype-sanitize
```

### Build:
```bash
cd /workspace/probcapital-site
bun run build
```

### Preview:
```bash
cd packages/web/dist
python3 -m http.server 8000
# Open http://localhost:8000
```

---

## 📊 What Will Be Deployed

### New Features:
- ✅ **Blog system** (`/blog`, `/blog/:slug`)
- ✅ **4 SEO articles** (40KB+ content)
- ✅ **robots.txt** (AI crawler support)
- ✅ **sitemap.xml** (all pages indexed)
- ✅ **ai.txt** (metadata for AI systems)
- ✅ **Enhanced meta tags** (OG, Twitter, Schema.org)
- ✅ **Navigation** (Blog link added)

### Pages:
- `/` - Homepage
- `/about` - About page
- `/pricing` - Pricing page
- `/blog` - Blog listing (NEW)
- `/blog/best-prop-trading-firms-2026` (NEW)
- `/blog/how-to-pass-prop-firm-challenge` (NEW)
- `/blog/prop-trading-vs-traditional-trading` (NEW)
- `/blog/trading-psychology-mental-mistakes` (NEW)
- All legal pages (terms, privacy, risk, etc.)

---

## 🌐 Domain Configuration

### Primary Domain:
- **www.probcapital.com** (should already be configured)

### Verify DNS:
If domain is not working:
1. Go to Vercel Dashboard → Settings → Domains
2. Add `www.probcapital.com`
3. Configure DNS records:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

---

## 🔍 Post-Deployment Checklist

### 1. Test URLs:
- [ ] `https://www.probcapital.com/` - Homepage
- [ ] `https://www.probcapital.com/blog` - Blog listing
- [ ] `https://www.probcapital.com/blog/best-prop-trading-firms-2026` - Article
- [ ] `https://www.probcapital.com/robots.txt` - SEO file
- [ ] `https://www.probcapital.com/sitemap.xml` - Sitemap
- [ ] `https://www.probcapital.com/ai.txt` - AI metadata

### 2. Verify SEO:
- [ ] Check `<title>` tag: "ProbCapital — Get Funded Up to $400k | 90% Profit Split"
- [ ] Check `<meta description>`
- [ ] Check Open Graph tags (share on social media)
- [ ] Check Schema.org structured data

### 3. Test Blog:
- [ ] Click on article → should load markdown content
- [ ] Test share buttons (Twitter, Facebook, LinkedIn, Copy Link)
- [ ] Test category filters
- [ ] Test mobile navigation

### 4. Submit to Search Engines:
- [ ] Google Search Console: Submit sitemap `https://www.probcapital.com/sitemap.xml`
- [ ] Bing Webmaster Tools: Submit sitemap

---

## ⚠️ Known Issues & Solutions

### Issue: Markdown not rendering
**Solution:** Install dependencies in Vercel dashboard:
```bash
gray-matter react-markdown remark-gfm rehype-raw rehype-sanitize
```
Or add to `packages/web/package.json` and push.

### Issue: 404 on blog routes
**Solution:** Vercel should auto-detect SPA and use rewrites from `vercel.json`.
If not, add:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Issue: Build fails
**Solution:** Check Vercel build logs for errors. Common issues:
- Missing dependencies
- TypeScript errors
- Import path issues

---

## 📈 Expected Performance

### Build time:
- ~2-3 minutes

### Deploy time:
- ~30 seconds after build

### Page load:
- Homepage: <2s
- Blog listing: <2s
- Article page: <2.5s

### Lighthouse Score (expected):
- Performance: 90+
- SEO: 95+
- Accessibility: 90+
- Best Practices: 95+

---

## 🎯 Next Steps After Deployment

### 1. SEO Setup:
- [ ] Register Google Search Console
- [ ] Submit sitemap
- [ ] Monitor indexing status

### 2. Analytics:
- [ ] Add Google Analytics 4
- [ ] Track blog page views
- [ ] Monitor conversions

### 3. Content:
- [ ] Write 6-10 more articles (target: 15 total)
- [ ] Share on social media (Twitter, Reddit, LinkedIn)
- [ ] Create email newsletter

### 4. Monitoring:
- [ ] Check Vercel deployment logs weekly
- [ ] Monitor site speed (PageSpeed Insights)
- [ ] Track search rankings

---

## 🆘 Troubleshooting

### Deployment stuck?
```bash
# Check Vercel logs
vercel logs
```

### Need to rollback?
1. Go to Vercel Dashboard → Deployments
2. Find previous deployment
3. Click "..." → Promote to Production

### Clear cache?
```bash
vercel --prod --force
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub: ✅ DONE
- [ ] Vercel connected to repo: ⏳ CHECK DASHBOARD
- [ ] Build successful: ⏳ WILL VERIFY
- [ ] Domain configured: ⏳ VERIFY www.probcapital.com
- [ ] SSL certificate active: ⏳ AUTO (Vercel)
- [ ] Blog works: ⏳ TEST AFTER DEPLOY
- [ ] SEO files accessible: ⏳ TEST robots.txt, sitemap.xml, ai.txt

---

**Ready to deploy!** 🚀

If Vercel is already connected to GitHub, the deployment should start automatically within 1-2 minutes.
