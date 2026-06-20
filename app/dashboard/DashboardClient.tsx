'use client';

import { useState } from 'react';
import Link from 'next/link';
import { logout } from '@/app/api/hello/actions/auth';
import { addInspiration, deleteInspiration, editInspiration } from '@/app/api/hello/actions/inspiration';

interface User {
  id: string;
  email: string;
}

interface Inspiration {
  id: string;
  content: string;
  createdAt: Date;
}

interface Article {
  id: string;
  title: string;
  createdAt: Date;
}

interface DashboardClientProps {
  user: User;
  initialInspirations: Inspiration[];
  initialArticles: Article[];
}

export default function DashboardClient({ user, initialInspirations, initialArticles }: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<'articles' | 'inspirations'>('articles');
  const [inspirations, setInspirations] = useState<Inspiration[]>(initialInspirations);
  const [articles] = useState<Article[]>(initialArticles);
  const [newInspiration, setNewInspiration] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  async function handleAddInspiration(formData: FormData) {
    setError(null);
    setLoading(true);
    
    try {
      const newInspiration = await addInspiration(formData);
      setNewInspiration('');
      setInspirations([newInspiration, ...inspirations]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add inspiration');
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteInspiration(id: string) {
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('id', id);
      await deleteInspiration(formData);
      setInspirations(inspirations.filter(i => i.id !== id));
      setShowDeleteConfirm(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete inspiration');
    }
  }

  async function handleEditInspiration(formData: FormData) {
    setError(null);
    setLoading(true);
    
    try {
      await editInspiration(formData);
      setInspirations(inspirations.map(i => 
        i.id === editingId ? { ...i, content: editContent } : i
      ));
      setEditingId(null);
      setEditContent('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to edit inspiration');
    } finally {
      setLoading(false);
    }
  }

  function startEdit(inspiration: Inspiration) {
    setEditingId(inspiration.id);
    setEditContent(inspiration.content);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditContent('');
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black font-sans min-h-screen">
      <main className="flex flex-col w-full max-w-4xl p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-2">
              Dashboard
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {user.email} • {articles.length} articles
            </p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="py-2 px-4 border border-zinc-300 dark:border-zinc-700 text-zinc-950 dark:text-zinc-50 font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Sign out
            </button>
          </form>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'articles'
                ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950'
                : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 hover:bg-zinc-300 dark:hover:bg-zinc-700'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab('inspirations')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'inspirations'
                ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950'
                : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 hover:bg-zinc-300 dark:hover:bg-zinc-700'
            }`}
          >
            Inspirations
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">Your Articles</h2>
            {articles.length === 0 ? (
              <p className="text-zinc-600 dark:text-zinc-400">No articles yet. Create your first article!</p>
            ) : (
              <div className="space-y-3">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className="flex justify-between items-center p-4 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-black dark:text-zinc-50">{article.title}</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {new Date(article.createdAt).toISOString().split('T')[0]}
                      </p>
                    </div>
                    <Link
                      href={`/dashboard/editor/${article.id}`}
                      className="py-1 px-3 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 text-sm font-medium rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                      Edit
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <Link
              href="/dashboard/editor/new"
              className="mt-4 inline-block w-full py-2 px-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-center"
            >
              Create New Article
            </Link>
          </div>
        )}

        {/* Inspirations Tab */}
        {activeTab === 'inspirations' && (
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">Your Inspirations</h2>
            
            {/* Add Inspiration Form */}
            <form action={handleAddInspiration} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="content"
                  value={newInspiration}
                  onChange={(e) => setNewInspiration(e.target.value)}
                  placeholder="Add a new inspiration..."
                  disabled={loading}
                  className="flex-1 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-400 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !newInspiration.trim()}
                  className="py-2 px-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add
                </button>
              </div>
            </form>

            {/* Inspirations List */}
            {inspirations.length === 0 ? (
              <p className="text-zinc-600 dark:text-zinc-400">No inspirations yet. Add your first inspiration!</p>
            ) : (
              <div className="space-y-3">
                {inspirations.map((inspiration) => (
                  <div
                    key={inspiration.id}
                    className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-md"
                  >
                    {editingId === inspiration.id ? (
                      <form action={handleEditInspiration} className="flex gap-2">
                        <input
                          type="hidden"
                          name="id"
                          value={inspiration.id}
                        />
                        <input
                          type="text"
                          name="content"
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          disabled={loading}
                          className="flex-1 px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-400 disabled:opacity-50"
                        />
                        <button
                          type="submit"
                          disabled={loading || !editContent.trim()}
                          className="py-2 px-3 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          disabled={loading}
                          className="py-2 px-3 border border-zinc-300 dark:border-zinc-700 text-zinc-950 dark:text-zinc-50 font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <div className="flex justify-between items-start gap-4">
                        <p className="text-black dark:text-zinc-50 flex-1">{inspiration.content}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEdit(inspiration)}
                            className="py-1 px-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                          >
                            Edit
                          </button>
                          {showDeleteConfirm === inspiration.id ? (
                            <>
                              <button
                                onClick={() => handleDeleteInspiration(inspiration.id)}
                                className="py-1 px-2 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() => setShowDeleteConfirm(null)}
                                className="py-1 px-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => setShowDeleteConfirm(inspiration.id)}
                              className="py-1 px-2 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
