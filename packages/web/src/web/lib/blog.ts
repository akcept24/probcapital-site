// Utility to parse markdown files with frontmatter
// Dependencies: npm install gray-matter react-markdown remark-gfm rehype-raw rehype-sanitize

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
  content: string;
}

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all blog posts from markdown files
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const files = fs.readdirSync(BLOG_CONTENT_DIR);
    const markdownFiles = files.filter((file) => file.endsWith('.md') && file !== 'README.md');

    const posts = markdownFiles.map((filename) => {
      const filePath = path.join(BLOG_CONTENT_DIR, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || filename.replace('.md', ''),
        title: data.title || '',
        description: data.description || '',
        category: data.category || 'Uncategorized',
        author: data.author || 'ProbCapital Team',
        date: data.date || new Date().toISOString(),
        readTime: data.readTime || '5 min read',
        image: data.image || '/blog/default.jpg',
        keywords: data.keywords || [],
        content,
      };
    });

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug || slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || 'Uncategorized',
      author: data.author || 'ProbCapital Team',
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || '5 min read',
      image: data.image || '/blog/default.jpg',
      keywords: data.keywords || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Get related posts based on category and keywords
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts().filter((post) => post.slug !== currentSlug);

  // Score posts based on similarity
  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // Same category = +10 points
    if (post.category === currentPost.category) {
      score += 10;
    }

    // Shared keywords = +5 points per keyword
    const sharedKeywords = post.keywords.filter((keyword) =>
      currentPost.keywords.includes(keyword)
    );
    score += sharedKeywords.length * 5;

    return { post, score };
  });

  // Sort by score and return top N
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

/**
 * Get unique categories from all posts
 */
export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}
