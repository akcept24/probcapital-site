import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from '../lib/blog';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      // In production, fetch from API or use SSR
      // For now, hardcoded post data from blog.tsx
      const mockPost: BlogPost = {
        slug,
        title: 'Loading...',
        description: '',
        category: 'Trading Education',
        author: 'ProbCapital Team',
        date: '2026-08-12',
        readTime: '12 min read',
        image: '/blog/default.jpg',
        keywords: [],
        content: '# Loading article...\n\nPlease wait while we fetch the content.',
      };
      setPost(mockPost);

      // Simulate fetching related posts
      setRelatedPosts([]);
    }
  }, [slug]);

  const translations = {
    en: {
      backToBlog: 'Back to Blog',
      shareArticle: 'Share this article',
      copyLink: 'Copy Link',
      linkCopied: 'Link Copied!',
      relatedArticles: 'Related Articles',
      readMore: 'Read Article',
      by: 'By',
      in: 'in',
    },
    ru: {
      backToBlog: 'Назад к блогу',
      shareArticle: 'Поделиться статьей',
      copyLink: 'Копировать ссылку',
      linkCopied: 'Ссылка скопирована!',
      relatedArticles: 'Похожие статьи',
      readMore: 'Читать статью',
      by: 'Автор:',
      in: 'в',
    },
  };

  const t = translations[lang];

  if (!post) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0F1117',
          color: '#E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontSize: '18px', color: '#9CA3AF' }}>Loading article...</p>
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
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            borderRadius: '8px',
            color: '#10b981',
            cursor: 'pointer',
            marginBottom: '32px',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <ArrowLeft size={20} />
          {t.backToBlog}
        </button>

        {/* Category badge */}
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '6px',
            background: 'rgba(16, 185, 129, 0.1)',
            color: '#10b981',
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          <Tag size={14} style={{ display: 'inline', marginRight: '6px' }} />
          {post.category}
        </span>

        {/* Title */}
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2',
            maxWidth: '900px',
          }}
        >
          {post.title}
        </h1>

        {/* Meta info */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '32px',
            fontSize: '15px',
            color: '#9CA3AF',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {t.by} <span style={{ color: '#10b981', fontWeight: '600' }}>{post.author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} />
            {post.readTime}
          </div>
        </div>

        {/* Share buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
            padding: '20px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '48px',
          }}
        >
          <span style={{ fontWeight: '600', color: '#9CA3AF', marginRight: '8px' }}>
            <Share2 size={18} style={{ display: 'inline', marginRight: '8px' }} />
            {t.shareArticle}:
          </span>

          {/* Twitter */}
          <a
            href={shareUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              background: 'rgba(29, 155, 240, 0.1)',
              border: '1px solid rgba(29, 155, 240, 0.3)',
              color: '#1D9BF0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(29, 155, 240, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(29, 155, 240, 0.1)';
            }}
          >
            <Twitter size={18} />
            Twitter
          </a>

          {/* Facebook */}
          <a
            href={shareUrls.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              background: 'rgba(24, 119, 242, 0.1)',
              border: '1px solid rgba(24, 119, 242, 0.3)',
              color: '#1877F2',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(24, 119, 242, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(24, 119, 242, 0.1)';
            }}
          >
            <Facebook size={18} />
            Facebook
          </a>

          {/* LinkedIn */}
          <a
            href={shareUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              background: 'rgba(10, 102, 194, 0.1)',
              border: '1px solid rgba(10, 102, 194, 0.3)',
              color: '#0A66C2',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(10, 102, 194, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 102, 194, 0.1)';
            }}
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              border: copied ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
              color: copied ? '#10b981' : '#E5E7EB',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              if (!copied) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!copied) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }
            }}
          >
            <Link2 size={18} />
            {copied ? t.linkCopied : t.copyLink}
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div style={{ background: 'rgba(255, 255, 255, 0.01)', padding: '60px 20px' }}>
        <MarkdownRenderer content={post.content} />
      </div>

      {/* CTA Section */}
      <div
        style={{
          maxWidth: '800px',
          margin: '60px auto',
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: '16px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
          Ready to Start Your Trading Journey?
        </h3>
        <p style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '24px' }}>
          Get funded up to $400,000 and keep 90% of profits. Pass our challenge in as little as 1 step.
        </p>
        <a
          href="https://app.probcapital.com"
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #10b981, #34d399)',
            color: '#0F1117',
            fontWeight: 'bold',
            fontSize: '16px',
            textDecoration: 'none',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Start Your Challenge →
        </a>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div style={{ maxWidth: '1200px', margin: '80px auto 40px', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            {t.relatedArticles}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.slug}
                onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <div style={{ padding: '20px' }}>
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
                    {relatedPost.category}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
                    {relatedPost.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '16px' }}>
                    {relatedPost.description}
                  </p>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>{relatedPost.readTime}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: `https://www.probcapital.com${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: post.author,
            },
            publisher: {
              '@type': 'Organization',
              name: 'ProbCapital',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.probcapital.com/logo.png',
              },
            },
            keywords: post.keywords.join(', '),
            articleSection: post.category,
            url: currentUrl,
          }),
        }}
      />
    </div>
  );
}
