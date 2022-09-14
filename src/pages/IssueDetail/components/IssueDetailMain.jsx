import React from 'react';

import { useIssuesState } from '../../../context/IssueContext';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

const IssueDetailMain = () => {
  const state = useIssuesState();

  const { data } = state.issueDetail;

  return (
    <article>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');

            return inline ? (
              // 강조 (``)
              <code
                style={{
                  background:
                    'linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )',
                  padding: '2px',
                  borderRadius: '3px',
                }}
                {...props}
              >
                {children}
              </code>
            ) : match ? (
              // 코드 (```)
              <SyntaxHighlighter style={nord} language={match[1]} PreTag="div" {...props}>
                {String(children)
                  .replace(/\n$/, '')
                  .replace(/\n&nbsp;\n/g, '')
                  .replace(/\n&nbsp\n/g, '')}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter style={nord} language="textile" PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
          // 인용문 (>)
          blockquote({ children, ...props }) {
            return (
              <div
                style={{
                  background: '#f0f0f0',
                  padding: '1px 15px',
                  borderRadius: '10px',
                }}
                {...props}
              >
                {children}
              </div>
            );
          },
          img({ ...props }) {
            return (
              <img
                style={{ maxWidth: '60vw' }}
                src={props.src.replace('../../../../public/', '/')}
                alt="MarkdownRenderer__Image"
              />
            );
          },
          em({ children, ...props }) {
            return (
              <span style={{ 'font-style': 'italic' }} {...props}>
                {children}
              </span>
            );
          },
        }}
      >
        {data.body
          .replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n')
          .replace(/\*\*/gi, '@$_%!^')
          .replace(/@\$_%!\^/gi, '**')
          .replace(/<\/?u>/gi, '*')}
      </ReactMarkdown>
    </article>
  );
};

export default IssueDetailMain;
