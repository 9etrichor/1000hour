import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import EditorForm from '@/components/EditorForm';
import { getInspirations } from '@/app/api/hello/actions/inspiration';
import { getArticle } from '@/app/api/hello/actions/article';

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  
  if (!token) {
    redirect('/login');
  }

  const userId = verifyToken(token);
  if (!userId) {
    redirect('/login');
  }

  const article = await getArticle(id);
  const inspirations = await getInspirations();

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
        
        <h1 className="text-3xl font-semibold mb-6 text-black dark:text-gray-50">
          Edit Article
        </h1>

        <EditorForm
          articleId={article.id}
          initialTitle={article.title}
          initialContent={article.content}
          initialInspirations={article.inspirations.map((ai) => ai.inspiration)}
          inspirations={inspirations}
        />
      </main>
    </div>
  );
}
