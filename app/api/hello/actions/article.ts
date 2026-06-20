'use server';

import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

// Basic server-side sanitization (DOMPurify doesn't work in server actions)
function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

async function getCurrentUserId() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  
  if (!token) {
    return null;
  }
  
  const userId = verifyToken(token);
  return userId;
}

export async function addArticle(formData: FormData) {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const inspirationIds = formData.get('inspirationIds') as string;

  if (!title) {
    throw new Error('Title is required');
  }

  if (title.length > 200) {
    throw new Error('Title must be less than 200 characters');
  }

  const sanitizedTitle = sanitize(title);
  const sanitizedContent = content ? sanitize(content) : '';

  if (sanitizedTitle.length === 0) {
    throw new Error('Title cannot be empty');
  }

  const article = await prisma.article.create({
    data: {
      title: sanitizedTitle,
      content: sanitizedContent,
      userId,
    },
  });

  // Link inspirations if provided
  if (inspirationIds) {
    const ids = inspirationIds.split(',').filter(id => id.trim());
    for (const inspirationId of ids) {
      await prisma.articleInspiration.create({
        data: {
          articleId: article.id,
          inspirationId: inspirationId.trim(),
        },
      });
    }
  }

  return article;
}

export async function deleteArticle(formData: FormData) {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const articleId = formData.get('id') as string;
  if (!articleId) {
    throw new Error('Article ID is required');
  }

  const article = await prisma.article.findUnique({
    where: { id: articleId },
  });

  if (!article) {
    throw new Error('Article not found');
  }

  if (article.userId !== userId) {
    throw new Error('Not authorized');
  }

  await prisma.article.delete({
    where: { id: articleId },
  });
}

export async function editArticle(formData: FormData) {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const articleId = formData.get('id') as string;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const inspirationIds = formData.get('inspirationIds') as string;

  if (!articleId || !title) {
    throw new Error('Article ID and title are required');
  }

  if (title.length > 200) {
    throw new Error('Title must be less than 200 characters');
  }

  const article = await prisma.article.findUnique({
    where: { id: articleId },
  });

  if (!article) {
    throw new Error('Article not found');
  }

  if (article.userId !== userId) {
    throw new Error('Not authorized');
  }

  const sanitizedTitle = sanitize(title);
  const sanitizedContent = content ? sanitize(content) : '';

  if (sanitizedTitle.length === 0) {
    throw new Error('Title cannot be empty');
  }

  // Update article
  const updatedArticle = await prisma.article.update({
    where: { id: articleId },
    data: {
      title: sanitizedTitle,
      content: sanitizedContent,
    },
  });

  // Update inspiration links
  // First, delete existing links
  await prisma.articleInspiration.deleteMany({
    where: { articleId },
  });

  // Then, add new links if provided
  if (inspirationIds) {
    const ids = inspirationIds.split(',').filter(id => id.trim());
    for (const inspirationId of ids) {
      await prisma.articleInspiration.create({
        data: {
          articleId,
          inspirationId: inspirationId.trim(),
        },
      });
    }
  }

  return updatedArticle;
}

export async function getArticle(id: string) {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const article = await prisma.article.findUnique({
    where: { id },
    include: {
      inspirations: {
        include: {
          inspiration: true,
        },
      },
    },
  });

  if (!article) {
    throw new Error('Article not found');
  }

  if (article.userId !== userId) {
    throw new Error('Not authorized');
  }

  return article;
}

export async function getArticles() {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const articles = await prisma.article.findMany({
    where: { userId },
    include: {
      inspirations: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return articles;
}