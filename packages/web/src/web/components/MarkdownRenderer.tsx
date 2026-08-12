import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownRendererProps {
  content: string;
}

/**
 * Beautiful markdown renderer with custom styles for blog posts
 * Supports: headings, lists, tables, code blocks, links, images, blockquotes
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1
              style={{
                fontSize: '42px',
                fontWeight: 'bold',
                marginTop: '48px',
                marginBottom: '24px',
                lineHeight: '1.2',
                background: 'linear-gradient(90deg, #10b981, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                marginTop: '40px',
                marginBottom: '20px',
                lineHeight: '1.3',
                color: '#E5E7EB',
                borderBottom: '2px solid rgba(16, 185, 129, 0.2)',
                paddingBottom: '12px',
              }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginTop: '32px',
                marginBottom: '16px',
                color: '#10b981',
              }}
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              style={{
                fontSize: '20px',
                fontWeight: '600',
                marginTop: '24px',
                marginBottom: '12px',
                color: '#E5E7EB',
              }}
            >
              {children}
            </h4>
          ),

          // Paragraphs
          p: ({ children }) => (
            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.8',
                marginBottom: '20px',
                color: '#D1D5DB',
              }}
            >
              {children}
            </p>
          ),

          // Lists
          ul: ({ children }) => (
            <ul
              style={{
                marginLeft: '24px',
                marginBottom: '20px',
                listStyleType: 'none',
              }}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              style={{
                marginLeft: '24px',
                marginBottom: '20px',
                listStyleType: 'decimal',
                color: '#D1D5DB',
              }}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li
              style={{
                fontSize: '17px',
                lineHeight: '1.8',
                marginBottom: '12px',
                paddingLeft: '8px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-20px',
                  color: '#10b981',
                }}
              >
                ✓
              </span>
              {children}
            </li>
          ),

          // Code blocks
          code: ({ inline, children, ...props }: any) => {
            if (inline) {
              return (
                <code
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#34d399',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontFamily: 'monospace',
                  }}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                style={{
                  display: 'block',
                  background: 'rgba(0, 0, 0, 0.4)',
                  color: '#34d399',
                  padding: '20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  marginBottom: '24px',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => <div style={{ marginBottom: '24px' }}>{children}</div>,

          // Tables
          table: ({ children }) => (
            <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
              }}
            >
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th
              style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontWeight: 'bold',
                color: '#10b981',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                color: '#D1D5DB',
              }}
            >
              {children}
            </td>
          ),

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote
              style={{
                borderLeft: '4px solid #10b981',
                paddingLeft: '20px',
                marginLeft: '0',
                marginBottom: '24px',
                fontStyle: 'italic',
                color: '#9CA3AF',
                background: 'rgba(16, 185, 129, 0.05)',
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              {children}
            </blockquote>
          ),

          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#10b981',
                textDecoration: 'underline',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#34d399';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#10b981';
              }}
            >
              {children}
            </a>
          ),

          // Images
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          ),

          // Horizontal rule
          hr: () => (
            <hr
              style={{
                border: 'none',
                borderTop: '2px solid rgba(16, 185, 129, 0.2)',
                margin: '40px 0',
              }}
            />
          ),

          // Strong/Bold
          strong: ({ children }) => (
            <strong
              style={{
                fontWeight: 'bold',
                color: '#E5E7EB',
              }}
            >
              {children}
            </strong>
          ),

          // Emphasis/Italic
          em: ({ children }) => (
            <em
              style={{
                fontStyle: 'italic',
                color: '#D1D5DB',
              }}
            >
              {children}
            </em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>

      {/* Global styles for markdown content */}
      <style>
        {`
          .markdown-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .markdown-content * {
            scroll-margin-top: 100px;
          }
        `}
      </style>
    </div>
  );
}

export default MarkdownRenderer;
