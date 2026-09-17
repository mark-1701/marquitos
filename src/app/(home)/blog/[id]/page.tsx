import { getPostById } from '@/actions';
import { Stack } from '@/components';
import { BlogPostContent, SocialShareLinks } from '@/features/blog';
import Link from 'next/link';
import { GoArrowLeft } from 'react-icons/go';

type BlogIdPage = {
  params: {
    id: string;
  };
};

// ! elimina este comentario

const BlogPageId = async ({ params }: BlogIdPage) => {
  const { id } = await params;

  const resp = await getPostById(id);

  if (!resp.ok) return <p>No existe ese artículo</p>;

  return (
    <>
      <Link
        className="mb-8 flex items-center gap-1 text-(--foreground-600)
          hover:cursor-pointer hover:underline"
        href="/blog"
      >
        <GoArrowLeft size={15} /> regresar
      </Link>

      
      <div className="flex-1">
        <BlogPostContent post={resp.data} />
      </div>

      <div
        className="mt-12 mb-19 border-t border-b border-dashed
          border-(--border-strong)"
      >
        <Stack>
          <p className="mb-6 text-(--foreground-600) italic">
            Comparte este artículo en:
          </p>
          <SocialShareLinks />
        </Stack>
      </div>
    </>
  );
};

export default BlogPageId;
