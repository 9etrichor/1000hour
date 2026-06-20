import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import EditorForm from '@/components/EditorForm';
import { getInspirations } from '@/app/api/hello/actions/inspiration';

export default async function NewArticlePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  
  if (!token) {
    redirect('/login');
  }

  const userId = verifyToken(token);
  if (!userId) {
    redirect('/login');
  }

  const inspirations = await getInspirations();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black font-sans min-h-screen">
      <main className="flex flex-col w-full max-w-4xl p-8">
        <div className="mb-6">
          <a
            href="/dashboard"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            ← Back to Dashboard
          </a>
        </div>
        
        <h1 className="text-3xl font-semibold mb-6 text-black dark:text-zinc-50">
          Create New Article
        </h1>

        <EditorForm inspirations={inspirations} />
      </main>
    </div>
  );
}
