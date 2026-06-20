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

export async function addInspiration(formData: FormData) {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const content = formData.get('content') as string;
  if (!content) {
    throw new Error('Content is required');
  }

  const sanitizedContent = sanitize(content);

  if (sanitizedContent.length === 0) {
    throw new Error('Content cannot be empty');
  }

  const inspiration = await prisma.inspiration.create({
    data: {
      content: sanitizedContent,
      userId,
    },
  });

  return inspiration;
}

export async function deleteInspiration(formData: FormData) {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const inspirationId = formData.get('id') as string;
  if (!inspirationId) {
    throw new Error('Inspiration ID is required');
  }

  const inspiration = await prisma.inspiration.findUnique({
    where: { id: inspirationId },
  });

  if (!inspiration) {
    throw new Error('Inspiration not found');
  }

  if (inspiration.userId !== userId) {
    throw new Error('Not authorized');
  }

  await prisma.inspiration.delete({
    where: { id: inspirationId },
  });
}

export async function editInspiration(formData: FormData) {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const inspirationId = formData.get('id') as string;
  const content = formData.get('content') as string;

  if (!inspirationId || !content) {
    throw new Error('Inspiration ID and content are required');
  }

  const inspiration = await prisma.inspiration.findUnique({
    where: { id: inspirationId },
  });

  if (!inspiration) {
    throw new Error('Inspiration not found');
  }

  if (inspiration.userId !== userId) {
    throw new Error('Not authorized');
  }

  const sanitizedContent = sanitize(content);

  if (sanitizedContent.length === 0) {
    throw new Error('Content cannot be empty');
  }

  await prisma.inspiration.update({
    where: { id: inspirationId },
    data: {
      content: sanitizedContent,
    },
  });
}

export async function getInspirations() {
  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('Not authenticated');
  }

  const inspirations = await prisma.inspiration.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return inspirations;
}