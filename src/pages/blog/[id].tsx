import { useRouter } from "next/router";
import React from "react";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>BlogPost</div>;
};

export default BlogPost;
