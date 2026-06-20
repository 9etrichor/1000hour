'use client';

import { useState } from 'react';
import { addArticle, editArticle, deleteArticle } from '@/app/api/hello/actions/article';
import { getInspirations } from '@/app/api/hello/actions/inspiration';

interface Inspiration {
  id: string;
  content: string;
}

interface EditorFormProps {
  articleId?: string;
  initialTitle?: string;
  initialContent?: string;
  initialInspirations?: Inspiration[];
  inspirations: Inspiration[];
  onSuccess?: () => void;
}

export default function EditorForm({
  articleId,
  initialTitle = '',
  initialContent = '',
  initialInspirations = [],
  inspirations,
  onSuccess,
}: EditorFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [selectedInspirations, setSelectedInspirations] = useState<string[]>(
    initialInspirations.map(i => i.id)
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setLoading(true);

    try {
      formData.append('inspirationIds', selectedInspirations.join(','));
      
      if (articleId) {
        formData.append('id', articleId);
        await editArticle(formData);
      } else {
        await addArticle(formData);
      }

      if (onSuccess) {
        onSuccess();
      } else {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save article');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('id', articleId!);
      await deleteArticle(formData);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete article');
    } finally {
      setLoading(false);
      setShowDeleteConfirm(false);
    }
  }

  function toggleInspiration(id: string) {
    setSelectedInspirations(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form action={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium text-black dark:text-zinc-50">
            Title *
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={loading}
            maxLength={200}
            className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-400 disabled:opacity-50"
            placeholder="Article title"
          />
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            {title.length}/200 characters
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="text-sm font-medium text-black dark:text-zinc-50">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
            rows={12}
            className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-400 disabled:opacity-50 resize-none"
            placeholder="Write your article content here..."
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-black dark:text-zinc-50">
            Linked Inspirations
          </label>
          <div className="flex flex-wrap gap-2">
            {inspirations.map((inspiration) => (
              <button
                key={inspiration.id}
                type="button"
                onClick={() => toggleInspiration(inspiration.id)}
                disabled={loading}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedInspirations.includes(inspiration.id)
                    ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950'
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 hover:bg-zinc-300 dark:hover:bg-zinc-700'
                } disabled:opacity-50`}
              >
                {inspiration.content}
              </button>
            ))}
            {inspirations.length === 0 && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                No inspirations available. Add some in the dashboard first.
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading || !title.trim()}
            className="flex-1 py-2 px-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : articleId ? 'Update Article' : 'Create Article'}
          </button>
          
          {articleId && (
            <>
              {showDeleteConfirm ? (
                <>
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={loading}
                    className="py-2 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    Confirm Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(false)}
                    disabled={loading}
                    className="py-2 px-4 border border-zinc-300 dark:border-zinc-700 text-zinc-950 dark:text-zinc-50 font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(true)}
                  disabled={loading}
                  className="py-2 px-4 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 font-medium rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                >
                  Delete
                </button>
              )}
            </>
          )}
        </div>
      </form>
    </div>
  );
}
