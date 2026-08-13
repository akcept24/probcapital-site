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

// English blog posts
const blogPostsEn: Record<string, BlogPost> = {
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
    title: 'How to Pass a Prop Firm Challenge: 10 Practical Tips (2026)',
    description: 'Learn how to pass a prop firm challenge with better risk management, drawdown control, position sizing and a disciplined trading plan',
    category: 'Trading Education',
    author: 'ProbCapital Team',
    date: '2026-08-12',
    readTime: '15 min read',
    contentPreview: 'Passing a prop firm challenge isn\'t about taking bigger risks or finding a "perfect" trading strategy. It\'s about proving that you can trade consistently while staying within strict risk and drawdown limits. This comprehensive guide covers 10 practical tips, common mistakes, risk management strategies, and a detailed FAQ section.',
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

// Russian blog posts
const blogPostsRu: Record<string, BlogPost> = {
  'best-prop-trading-firms-2026': {
    slug: 'best-prop-trading-firms-2026',
    title: 'Почему ProbCapital — лучший выбор для финансируемых трейдеров в 2026',
    description: 'Узнайте, почему ProbCapital предлагает самые высокие выплаты, самое быстрое финансирование и самые дружелюбные правила',
    category: 'Обучение трейдингу',
    author: 'Команда ProbCapital',
    date: '2026-08-12',
    readTime: '12 мин чтения',
    contentPreview: 'Полная статья скоро появится. Узнайте, почему ProbCapital выделяется благодаря 90% выплатам, 1-этапному челленджу, отсутствию минимальных торговых дней и финансированию в течение 24 часов.',
  },
  'how-to-pass-prop-firm-challenge': {
    slug: 'how-to-pass-prop-firm-challenge',
    title: 'Как пройти челлендж проп-компании: 10 практических советов (2026)',
    description: 'Узнайте, как пройти челлендж проп-компании с помощью лучшего риск-менеджмента, контроля просадки, расчёта позиций и дисциплинированного торгового плана',
    category: 'Обучение трейдингу',
    author: 'Команда ProbCapital',
    date: '2026-08-12',
    readTime: '15 мин чтения',
    contentPreview: 'Прохождение челленджа проп-компании — это не о больших рисках или поиске "идеальной" стратегии. Это о том, чтобы доказать, что вы можете торговать стабильно, соблюдая строгие лимиты риска и просадки. Это подробное руководство охватывает 10 практических советов, распространённые ошибки, стратегии риск-менеджмента и раздел FAQ.',
  },
  'prop-trading-vs-traditional-trading': {
    slug: 'prop-trading-vs-traditional-trading',
    title: 'Проп-трейдинг с ProbCapital: почему это приносит больше денег в 2026',
    description: 'Полный анализ того, почему проп-трейдинг с ProbCapital предлагает более высокий доход и меньший риск',
    category: 'Обучение трейдингу',
    author: 'Команда ProbCapital',
    date: '2026-08-12',
    readTime: '10 мин чтения',
    contentPreview: 'Полная статья скоро появится. Узнайте, как ProbCapital позволяет торговать до $400,000 всего за небольшую плату за оценку.',
  },
  'trading-psychology-mental-mistakes': {
    slug: 'trading-psychology-mental-mistakes',
    title: 'Психология трейдинга: 9 ментальных ошибок, которые стоят вам денег',
    description: 'Откройте для себя психологические ловушки, из-за которых 80% трейдеров терпят неудачу',
    category: 'Психология',
    author: 'Команда ProbCapital',
    date: '2026-08-12',
    readTime: '13 мин чтения',
    contentPreview: 'Полная статья скоро появится. Научитесь управлять страхом, жадностью и дисциплиной для стабильной прибыли с ProbCapital.',
  },
};

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const { lang, tr } = useLang();
  const [copied, setCopied] = useState(false);

  // Select posts based on current language
  const blogPosts = lang === 'ru' ? blogPostsRu : blogPostsEn;
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
      <article style={{ background: 'rgba(255, 255, 255, 0.01)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#E5E7EB', lineHeight: '1.8', fontSize: '16px' }}>
          
          {/* Intro paragraph */}
          <p style={{ fontSize: '18px', color: '#D1D5DB', marginBottom: '32px', lineHeight: '1.7' }}>
            {lang === 'ru' 
              ? 'Прохождение челленджа проп-компании — это не о том, чтобы рисковать больше или искать "идеальную" торговую стратегию. Это о том, чтобы доказать, что вы можете торговать стабильно, соблюдая строгие лимиты риска и просадки.'
              : 'Passing a prop firm challenge isn\'t about taking bigger risks or finding a "perfect" trading strategy. It\'s about proving that you can trade consistently while staying within strict risk and drawdown limits.'}
          </p>

          <p style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '48px' }}>
            {lang === 'ru'
              ? 'В этом руководстве вы узнаете, как подходить к оценке проп-компании шаг за шагом — от понимания правил и установки риска на сделку до управления просадкой, избежания распространённых ошибок и создания торгового плана.'
              : 'In this guide, you\'ll learn how to approach a prop firm evaluation step by step — from understanding the rules and setting your risk per trade to managing drawdown, avoiding common mistakes, and building a trading plan designed to get you through the challenge.'}
          </p>

          {/* Section 1 */}
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981', marginTop: '48px', marginBottom: '20px' }}>
            {lang === 'ru' ? '1. Изучите все правила перед началом торговли' : '1. Understand Every Rule Before You Start Trading'}
          </h2>
          <p style={{ marginBottom: '16px' }}>
            {lang === 'ru'
              ? 'Один из самых простых способов провалить челлендж проп-компании — сосредоточиться на целевой прибыли, игнорируя правила, которые определяют, сколько риска вы действительно можете взять.'
              : 'One of the easiest ways to fail a prop firm challenge is to focus on the profit target while ignoring the rules that determine how much risk you can actually take.'}
          </p>
          <p style={{ marginBottom: '24px' }}>
            {lang === 'ru' ? 'Перед открытием первой позиции убедитесь, что вы знаете:' : 'Before opening your first position, make sure you know:'}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
            {[
              lang === 'ru' ? 'Вашу целевую прибыль' : 'Your profit target',
              lang === 'ru' ? 'Дневной лимит просадки' : 'Daily drawdown limit',
              lang === 'ru' ? 'Максимальный лимит просадки' : 'Maximum drawdown limit',
              lang === 'ru' ? 'Статическая или скользящая просадка' : 'Whether drawdown is static or trailing',
              lang === 'ru' ? 'Можно ли держать позиции на ночь' : 'Whether positions can be held overnight',
              lang === 'ru' ? 'Разрешена ли торговля на новостях' : 'Whether news trading is allowed',
            ].map((item, i) => (
              <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#10b981', marginRight: '12px', fontSize: '20px' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Section 2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981', marginTop: '48px', marginBottom: '20px' }}>
            {lang === 'ru' ? '2. Рискуйте меньше на сделку' : '2. Risk Less Per Trade'}
          </h2>
          <p style={{ marginBottom: '24px' }}>
            {lang === 'ru'
              ? 'Распространённая ошибка — рисковать слишком много, потому что трейдер хочет завершить оценку быстро.'
              : 'A common mistake during prop firm challenges is risking too much because the trader wants to complete the evaluation quickly.'}
          </p>
          
          {/* Risk table */}
          <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '24px', marginBottom: '32px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(16, 185, 129, 0.3)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#10b981' }}>{lang === 'ru' ? 'Риск %' : 'Risk %'}</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#10b981' }}>{lang === 'ru' ? 'Счёт' : 'Account'}</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#10b981' }}>{lang === 'ru' ? 'Убыток/сделка' : 'Loss per Trade'}</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#10b981' }}>{lang === 'ru' ? '3 убытка' : '3 Losses'}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['2.0%', '$100k', '$2,000', '$6,000'],
                  ['1.0%', '$100k', '$1,000', '$3,000'],
                  ['0.5%', '$100k', '$500', '$1,500']
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '12px', color: j === 0 ? '#34d399' : '#E5E7EB' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#9CA3AF', marginBottom: '32px' }}>
            {lang === 'ru'
              ? 'Чем меньше ваш риск на сделку, тем больше ошибок и нормальных убыточных сделок может пережить ваш счёт.'
              : 'The smaller your risk per trade, the more mistakes and normal losing trades your account can survive.'}
          </p>

          {/* Section 3 */}
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981', marginTop: '48px', marginBottom: '20px' }}>
            {lang === 'ru' ? '3. Относитесь к лимиту просадки как к реальному размеру счёта' : '3. Treat the Drawdown Limit as Your Real Account Size'}
          </h2>
          <p style={{ marginBottom: '16px' }}>
            {lang === 'ru'
              ? 'Если максимально допустимая просадка составляет $10,000, то эти $10,000 — фактически ваш реальный бюджет риска.'
              : 'If the maximum permitted drawdown is $10,000, that $10,000 is effectively your real risk budget.'}
          </p>
          <div style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', borderRadius: '8px', padding: '16px', marginBottom: '32px' }}>
            <p style={{ margin: 0, fontSize: '15px' }}>
              <strong style={{ color: '#fbbf24' }}>{lang === 'ru' ? '💡 Ключевой вопрос:' : '💡 Key Question:'}</strong><br />
              {lang === 'ru'
                ? 'Вместо "Как быстро достичь цели?" спросите: "Как достичь цели, не исчерпав доступную просадку?"'
                : 'Instead of "How quickly can I make the target?" ask: "How can I reach the target without exhausting my available drawdown?"'}
            </p>
          </div>

          {/* More sections */}
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981', marginTop: '48px', marginBottom: '20px' }}>
            {lang === 'ru' ? '4. Не пытайтесь пройти челлендж одной сделкой' : '4. Don\'t Try to Pass the Challenge in One Trade'}
          </h2>
          <p style={{ marginBottom: '32px' }}>
            {lang === 'ru'
              ? 'Большая прибыльная сделка может приблизить вас к цели. Большая убыточная сделка может закончить челлендж. Стабильность важнее скорости.'
              : 'A large winning trade can move you close to the profit target. A large losing trade can end the challenge. Consistency matters more than speed.'}
          </p>

          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981', marginTop: '48px', marginBottom: '20px' }}>
            {lang === 'ru' ? '5. Установите личный дневной лимит убытков' : '5. Set a Personal Daily Loss Limit'}
          </h2>
          <p style={{ marginBottom: '16px' }}>
            {lang === 'ru'
              ? 'Дневной лимит просадки вашей проп-компании должен быть аварийной границей — а не вашей нормальной точкой остановки.'
              : 'Your prop firm\'s daily drawdown limit should be an emergency boundary — not your normal stopping point.'}
          </p>
          <p style={{ marginBottom: '32px' }}>
            {lang === 'ru'
              ? 'Рассмотрите возможность создания собственного дневного лимита убытков, который значительно ниже. Это поможет предотвратить мстительную торговлю, чрезмерную торговлю и эмоциональные решения.'
              : 'Consider creating your own daily loss limit that is significantly lower. This can help prevent revenge trading, overtrading, and emotional decisions.'}
          </p>

          {/* FAQ Section */}
          <div style={{ background: 'rgba(16, 185, 129, 0.03)', borderRadius: '16px', padding: '40px 32px', marginTop: '64px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginBottom: '32px', textAlign: 'center' }}>
              {lang === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
            </h2>

            {(lang === 'ru' ? [
              { q: 'Сложно ли пройти челлендж проп-компании?', a: 'Да, статистически только 8-15% трейдеров проходят с первой попытки. Однако сложность возникает в основном из-за плохого риск-менеджмента и эмоциональной торговли, а не из-за отсутствия торговых навыков.' },
              { q: 'Сколько времени нужно, чтобы пройти челлендж?', a: 'Время сильно варьируется. Некоторые трейдеры проходят за 7-10 дней, другие тратят 30-60 дней. Обычно нет преимущества в спешке — стабильность важнее скорости.' },
              { q: 'Какой процент трейдеров проходит челленджи?', a: 'Отраслевые оценки предполагают 8-15% прохождения с первой попытки. Основные причины провала — ошибки риск-менеджмента: чрезмерное кредитное плечо, мстительная торговля и нарушение лимитов просадки.' },
            ] : [
              { q: 'Is it hard to pass a prop firm challenge?', a: 'Yes, statistically only 8-15% of traders pass on their first attempt. However, the difficulty comes primarily from poor risk management and emotional trading, not from a lack of trading skill.' },
              { q: 'How long does it take to pass a prop firm challenge?', a: 'The time varies widely. Some traders pass in 7-10 days, others take 30-60 days. There is typically no advantage in rushing — consistency matters more than speed.' },
              { q: 'What percentage of traders pass prop firm challenges?', a: 'Industry estimates suggest 8-15% pass on their first attempt. Main reasons for failure are risk management errors: over-leveraging, revenge trading, and violating drawdown limits.' },
            ]).map((faq, i) => (
              <div key={i} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#34d399', marginBottom: '12px' }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Summary box */}
          <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)', border: '2px solid rgba(16, 185, 129, 0.3)', borderRadius: '16px', padding: '32px', marginTop: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981', marginBottom: '16px' }}>
              {lang === 'ru' ? '🎯 Ключевые выводы' : '🎯 Key Takeaways'}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {(lang === 'ru' ? [
                'Понять правила перед торговлей',
                'Держать размеры позиций управляемыми',
                'Защищать свою просадку',
                'Следовать проверенной стратегии',
                'Прекращать торговлю, когда план говорит остановиться'
              ] : [
                'Understand the rules before trading',
                'Keep position sizes manageable',
                'Protect your drawdown',
                'Follow a tested strategy',
                'Stop trading when your plan tells you to stop'
              ]).map((item, i) => (
                <li key={i} style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#10b981', marginRight: '12px', fontSize: '20px' }}>✓</span>
                  <span style={{ fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </article>

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
