import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getArticle } from '@/app/api/hello/actions/article';
import ArticleViewClient from '@/components/ArticleViewClient';

export default async function ArticleViewPage({ params }: { params: Promise<{ id: string }> }) {
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

  return <ArticleViewClient article={article} />;
}
