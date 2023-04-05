import React, { FC } from "react";
import { Footer, Header } from "@/components";
import { Pagination, Sidebar, BlogCard } from "@/components/blog";
import { db } from "../../../lib/db";
import { Post } from "@prisma/client";

export async function getServerSideProps() {
  const data = await db.post.findMany({
    where: {},
    include: { comments: true },
  });

  const posts: typeof data = JSON.parse(
    JSON.stringify(data, (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    })
  );
  return {
    props: {
      posts,
    },
  };
}

interface BlogProps {
  posts: Post[];
}

const Blog: FC<BlogProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="blog-grid">
                {posts.map((post) => (
                  <BlogCard
                    key={post.id}
                    slug={post.slug}
                    title={post.title}
                    date={post.createdAt}
                    description={post.excerpt}
                    image={post.thumbnail}
                  />
                ))}
              </div>
              <Pagination />
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
