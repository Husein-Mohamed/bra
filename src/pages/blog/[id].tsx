import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Blog = {
  title: string;
  content: string;
  date: string;
  coverImage?: string;
};

interface BlogPageProps {
  blog: Blog & { readingTime: number };
}

export default function BlogPage({ blog }: BlogPageProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{blog.title} | Our Blog</title>
        <meta name="description" content={blog.content.slice(0, 155)} />
      </Head>

      {blog.coverImage && (
        <div className="relative h-60 sm:h-96 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={blog.coverImage} alt="" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="absolute inset-x-0 bottom-8 px-4 text-center text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            {blog.title}
          </h1>
        </div>
      )}

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-[200px_1fr] gap-8">
        <aside className="order-last md:order-first text-sm text-gray-600 flex flex-col gap-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1 text-[#47BDFF] hover:underline"
          >
            ← Back
          </button>
          <div>
            <strong>Published</strong>
            <time className="block">
              {new Date(blog.date).toLocaleDateString()}
            </time>
          </div>
          <div>
            <strong>Reading time</strong>
            <span className="block">{blog.readingTime} min</span>
          </div>
        </aside>

        <div className="prose prose-lg max-w-none">
          {blog.content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <div className="bg-[#f6fafd] py-10">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/news"
            className="inline-block bg-[#47BDFF] text-white font-semibold px-6 py-3 rounded-xl hover:bg-opacity-90 transition"
          >
            ← Read more articles
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({
  params,
}) => {
  const id = params!.id as string;
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const blogs: Blog[] = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : [];

  const blog = blogs[Number(id)];
  if (!blog) return { notFound: true };

  const words = blog.content.trim().split(/\s+/).length;
  return {
    props: { blog: { ...blog, readingTime: Math.ceil(words / 200) } },
  };
};
