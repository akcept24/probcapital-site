import React, { useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { useLang } from '../i18n/LangContext';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';

// Blog post type
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  contentPreview: string;
}

// Hardcoded blog posts (in production, fetch from API or use markdown)
const blogPosts: Record<string, BlogPost> = {
  'best-prop-trading-firms-2026': {
    slug: 'best-prop-trading-firms-2026',
    title: 'Why ProbCapital is the Best Choice for Funded Traders in 2026',
    description: 'Discover why ProbCapital offers the highest profit splits, fastest funding, and most trader-friendly rules',
    category: 'Trading Education',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '12 min read',
    contentPreview: 'Full article content will be available soon. Learn why ProbCapital stands out with 90% profit splits, 1-step challenges, no minimum trading days, and funding within 24 hours.',
  },
  'how-to-pass-prop-firm-challenge': {
    slug: 'how-to-pass-prop-firm-challenge',
    title: 'How to Pass Your ProbCapital Challenge: 7 Proven Strategies',
    description: 'Learn the exact strategies professional traders use to pass prop trading challenges',
    category: 'Trading Education',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '15 min read',
    contentPreview: 'Full article content will be available soon. This guide covers risk management, psychology, and proven strategies specifically for ProbCapital challenges.',
  },
  'prop-trading-vs-traditional-trading': {
    slug: 'prop-trading-vs-traditional-trading',
    title: 'Prop Trading with ProbCapital: Why It Makes More Money in 2026',
    description: 'Complete analysis of why prop trading with ProbCapital offers better earnings and lower risk',
    category: 'Trading Education',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '10 min read',
    contentPreview: 'Full article content will be available soon. Discover how ProbCapital enables you to trade up to $400,000 with only a small evaluation fee.',
  },
  'trading-psychology-mental-mistakes': {
    slug: 'trading-psychology-mental-mistakes',
    title: 'Trading Psychology: 9 Mental Mistakes That Cost You Money',
    description: 'Discover the psychological traps that cause 80% of traders to fail',
    category: 'Trading Psychology',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '13 min read',
    contentPreview: 'Full article content will be available soon. Master fear, greed, and discipline for consistent profits with ProbCapital.',
  },
};

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const { lang, tr } = useLang();
  const [copied, setCopied] = useState(false);

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', background: '#0F1117', color: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Article not found</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '24px' }}>The article you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            style={{ padding: '12px 24px', borderRadius: '8px', background: 'linear-gradient(90deg, #10b981, #34d399)', color: '#0F1117', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
          >
            {tr.blog_backToBlog}
          </button>
        </div>
      </div>
    );
  }

  const currentUrl = `https://www.probcapital.com/blog/${slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0F1117', color: '#E5E7EB', paddingTop: '80px' }}>
      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Back button */}
        <button
          onClick={() => navigate('/blog')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#10b981', cursor: 'pointer', marginBottom: '32px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
        >
          <ArrowLeft size={20} />
          {tr.blog_backToBlog}
        </button>

        {/* Category badge */}
        <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' }}>
          <Tag size={14} style={{ display: 'inline', marginRight: '6px' }} />
          {post.category}
        </span>

        {/* Title */}
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2', maxWidth: '900px' }}>
          {post.title}
        </h1>

        {/* Meta info */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', marginBottom: '32px', fontSize: '15px', color: '#9CA3AF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {tr.blog_by} <span style={{ color: '#10b981', fontWeight: '600' }}>{post.author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} />
            {post.readTime}
          </div>
        </div>

        {/* Share buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', padding: '20px 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '48px' }}>
          <span style={{ fontWeight: '600', color: '#9CA3AF', marginRight: '8px' }}>
            <Share2 size={18} style={{ display: 'inline', marginRight: '8px' }} />
            {tr.blog_shareArticle}:
          </span>

          <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 16px', borderRadius: '8px', background: 'rgba(29, 155, 240, 0.1)', border: '1px solid rgba(29, 155, 240, 0.3)', color: '#1D9BF0', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'all 0.3s' }}>
            <Twitter size={18} />
            Twitter
          </a>

          <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 16px', borderRadius: '8px', background: 'rgba(24, 119, 242, 0.1)', border: '1px solid rgba(24, 119, 242, 0.3)', color: '#1877F2', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'all 0.3s' }}>
            <Facebook size={18} />
            Facebook
          </a>

          <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 16px', borderRadius: '8px', background: 'rgba(10, 102, 194, 0.1)', border: '1px solid rgba(10, 102, 194, 0.3)', color: '#0A66C2', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'all 0.3s' }}>
            <Linkedin size={18} />
            LinkedIn
          </a>

          <button onClick={handleCopyLink} style={{ padding: '10px 16px', borderRadius: '8px', background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)', border: copied ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)', color: copied ? '#10b981' : '#E5E7EB', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.3s' }}>
            <Link2 size={18} />
            {copied ? tr.blog_linkCopied : tr.blog_copyLink}
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div style={{ background: 'rgba(255, 255, 255, 0.01)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#10b981' }}>
              📝 {tr.blog_comingSoon}
            </h2>
            <p style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '32px' }}>
              {tr.blog_meanwhile}
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280', fontStyle: 'italic' }}>
              {post.contentPreview}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ maxWidth: '800px', margin: '60px auto', padding: '40px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '16px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
          {tr.blog_ctaTitle}
        </h3>
        <p style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '24px' }}>
          {tr.blog_ctaDesc}
        </p>
        <a href="https://app.probcapital.com" style={{ display: 'inline-block', padding: '16px 32px', borderRadius: '8px', background: 'linear-gradient(90deg, #10b981, #34d399)', color: '#0F1117', fontWeight: 'bold', fontSize: '16px', textDecoration: 'none', transition: 'transform 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
          {tr.blog_startChallenge} →
        </a>
      </div>
    </div>
  );
}
