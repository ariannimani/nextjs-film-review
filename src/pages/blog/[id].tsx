import { Footer, Header } from "@/components";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { db } from "../../../lib/db";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { Post } from "@prisma/client";
import { Comment, Sidebar } from "@/components/blog";
import CommentForm from "@/components/blog/comment/comment-form/CommentForm";
import { CommentProps } from "../../../lib/types";

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{ post: Post }>> {
  const { id, postId } = context.query;
  //FIXME: fix type for id
  const data = await db.post.findMany({
    where: { id: postId },
    include: { comments: true },
  });

  const post: typeof data = JSON.parse(
    JSON.stringify(data, (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    })
  );
  return {
    props: {
      post: post[0],
    },
  };
}

interface BlogPostProps {
  post: Post & {
    comments: CommentProps[];
    date: string;
  };
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  const numberOfComments = post.comments.length;
  return (
    <>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="blog-detail-ct">
                <h1>{post.title}</h1>
                <span className="time">{post.date}</span>
                <img src="/assets/images/uploads/blog-detail.jpg" alt="" />
                <p>{post.content}</p>
                <div className="comments">
                  <h4>{`${numberOfComments} ${
                    numberOfComments !== 1 ? "Comments" : "Comment"
                  }`}</h4>
                  {post.comments.map((comment) => (
                    <Comment
                      key={comment.id}
                      content={comment.content}
                      date={comment.createdAt}
                      userId={comment.userId}
                    />
                  ))}
                </div>

                {<CommentForm />}
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
