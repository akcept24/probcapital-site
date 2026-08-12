import React, { useState } from 'react';
import { useLang } from '../i18n/LangContext';

// Blog post metadata type
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
}

// All blog posts (in production, this would come from CMS/API)
const allPosts: BlogPost[] = [
  {
    slug: 'best-prop-trading-firms-2026',
    title: 'Best Prop Trading Firms 2026: ProbCapital vs FTMO vs TopstepX',
    description: 'Complete comparison of the top proprietary trading firms in 2026. Compare ProbCapital, FTMO, and TopstepX on pricing, profit splits, and challenge difficulty.',
    category: 'Trading Education',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '12 min read',
    image: '/blog/best-prop-firms-2026.jpg',
    keywords: ['prop trading firms', 'FTMO alternative', 'best prop firm 2026'],
  },
  {
    slug: 'how-to-pass-prop-firm-challenge',
    title: 'How to Pass a Prop Trading Challenge: 7 Proven Strategies (2026)',
    description: 'Learn the exact strategies professional traders use to pass prop trading challenges. Covers risk management, psychology, and common mistakes to avoid.',
    category: 'Trading Education',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '15 min read',
    image: '/blog/pass-prop-challenge.jpg',
    keywords: ['pass prop firm challenge', 'prop trading tips', 'funded trader'],
  },
  {
    slug: 'prop-trading-vs-traditional-trading',
    title: 'Prop Trading vs Traditional Trading: Which Makes More Money in 2026?',
    description: 'Complete comparison of proprietary trading vs traditional retail trading. Learn which path offers better earnings, lower risk, and faster growth in 2026.',
    category: 'Trading Education',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '10 min read',
    image: '/blog/prop-vs-traditional.jpg',
    keywords: ['prop trading', 'proprietary trading', 'retail trading'],
  },
  {
    slug: 'trading-psychology-mental-mistakes',
    title: 'Trading Psychology: 9 Mental Mistakes That Cost You Money',
    description: 'Discover the psychological traps that cause 80% of traders to fail. Learn how to master fear, greed, and discipline for consistent profits.',
    category: 'Trading Psychology',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '13 min read',
    image: '/blog/trading-psychology.jpg',
    keywords: ['trading psychology', 'emotional trading', 'trading discipline'],
  },
];

export default function BlogPage() {
  const { lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const translations = {
    en: {
      title: 'Trading Education Blog',
      subtitle: 'Expert guides, strategies, and insights from funded traders',
      allPosts: 'All Posts',
      categories: {
        'All': 'All Posts',
        'Trading Education': 'Trading Education',
        'Trading Psychology': 'Psychology',
      },
      readMore: 'Read Article',
      author: 'By',
      noImage: '📊',
    },
    ru: {
      title: 'Блог по Трейдингу',
      subtitle: 'Экспертные гайды, стратегии и инсайты от финансируемых трейдеров',
      allPosts: 'Все статьи',
      categories: {
        'All': 'Все статьи',
        'Trading Education': 'Обучение трейдингу',
        'Trading Psychology': 'Психология',
      },
      readMore: 'Читать статью',
      author: 'Автор:',
      noImage: '📊',
    },
  };

  const t = translations[lang];

  // Filter posts by category
  const filteredPosts =
    selectedCategory === 'All'
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allPosts.map((p) => p.category)))];

  return (
    <div style={{ minHeight: '100vh', background: '#0F1117', color: '#E5E7EB', paddingTop: '80px' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0F1117 100%)',
          padding: '60px 20px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px',
            background: 'linear-gradient(90deg, #10b981, #34d399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t.title}
        </h1>
        <p style={{ fontSize: '18px', color: '#9CA3AF', maxWidth: '600px', margin: '0 auto' }}>
          {t.subtitle}
        </p>
      </div>

      {/* Category Filter */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                background:
                  selectedCategory === category
                    ? 'linear-gradient(90deg, #10b981, #34d399)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === category ? '#0F1117' : '#E5E7EB',
                fontWeight: selectedCategory === category ? 'bold' : 'normal',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              {t.categories[category as keyof typeof t.categories] || category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              }}
              onClick={() => {
                window.location.href = `/blog/${post.slug}`;
              }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #0F1117 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '64px',
                }}
              >
                {t.noImage}
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                {/* Category badge */}
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                  }}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    lineHeight: '1.4',
                  }}
                >
                  {post.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    color: '#9CA3AF',
                    marginBottom: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  {post.description}
                </p>

                {/* Meta */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: '#6B7280',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span>{post.readTime}</span>
                  <span>{new Date(post.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US')}</span>
                </div>

                {/* Read More Button */}
                <button
                  style={{
                    marginTop: '16px',
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(90deg, #10b981, #34d399)',
                    color: '#0F1117',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {t.readMore} →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#6B7280',
            }}
          >
            <p style={{ fontSize: '18px' }}>
              {lang === 'ru' ? 'Статьи не найдены' : 'No posts found'}
            </p>
          </div>
        )}
      </div>

      {/* SEO Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'ProbCapital Trading Blog',
            description: 'Expert trading guides, strategies, and prop firm insights',
            url: 'https://www.probcapital.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'ProbCapital',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.probcapital.com/logo.png',
              },
            },
            blogPost: allPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              author: {
                '@type': 'Organization',
                name: post.author,
              },
              url: `https://www.probcapital.com/blog/${post.slug}`,
            })),
          }),
        }}
      />
    </div>
  );
}
