import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';
import { getInspirations } from '@/app/api/hello/actions/inspiration';
import { cookies } from 'next/headers';
import DashboardClient from "./DashboardClient" 

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  
  let user = null;
  if (token) {
    const userId = verifyToken(token);
    if (userId) {
      user = await prisma.user.findUnique({ where: { id: userId } });
    }
  }

  if (!user) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black font-sans min-h-screen">
        <main className="flex flex-col w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-4 text-black dark:text-zinc-50">
            Not Authenticated
          </h1>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6">
            Please sign in to access your dashboard.
          </p>
          <a
            href="/login"
            className="w-full py-2 px-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-center"
          >
            Sign in
          </a>
        </main>
      </div>
    );
  }

  const inspirations = await getInspirations();
  const articles = await prisma.article.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <DashboardClient 
      user={user} 
      initialInspirations={inspirations}
      initialArticles={articles}
    />
  );
}
