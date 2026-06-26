'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  content: string | null;
  inspirations: Array<{
    inspiration: {
      id: string;
      content: string;
    };
  }>;
}

interface ArticleViewClientProps {
  article: Article;
}

export default function ArticleViewClient({ article }: ArticleViewClientProps) {
  const [textSize, setTextSize] = useState(16);

  const increaseTextSize = () => {
    setTextSize(prev => Math.min(prev + 2, 32));
  };

  const decreaseTextSize = () => {
    setTextSize(prev => Math.max(prev - 2, 12));
  };

  return (
    <div className="flex flex-col flex-1 items-center bg-gray-50 dark:bg-black font-sans min-h-screen">
      <main className="flex flex-col w-full max-w-4xl p-8">
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-50"
          >
            ← Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-semibold text-black dark:text-gray-50">
              {article.title}
            </h1>
            <Link
              href={`/dashboard/editor/${article.id}`}
              className="py-2 px-4 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors"
            >
              Edit
            </Link>
          </div>

          {article.inspirations.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Linked Inspirations
              </h2>
              <div className="flex flex-wrap gap-2">
                {article.inspirations.map((ai) => (
                  <span
                    key={ai.inspiration.id}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-50"
                  >
                    {ai.inspiration.content}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {/* Text Size Controls */}
            <div className="flex flex-col gap-2">
              <button
                onClick={increaseTextSize}
                disabled={textSize >= 32}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-950 dark:text-gray-50 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
                title="Increase text size"
              >
                +
              </button>
              <button
                onClick={decreaseTextSize}
                disabled={textSize <= 12}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-950 dark:text-gray-50 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
                title="Decrease text size"
              >
                -
              </button>
            </div>

            {/* Article Content */}
            <div className="flex-1">
              {article.content && (
                <div className="prose dark:prose-invert max-w-none">
                  <div 
                    className="whitespace-pre-wrap text-black dark:text-gray-50"
                    style={{ fontSize: `${textSize}px` }}
                  >
                    {article.content}
                  </div>
                </div>
              )}

              {!article.content && (
                <p className="text-gray-600 dark:text-gray-400 italic">
                  No content yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
