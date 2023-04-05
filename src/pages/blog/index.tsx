import React from "react";
import { Footer, Header } from "@/components";
import { Pagination, Sidebar, BlogCard } from "@/components/blog";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="blog-grid">
                <BlogCard />
                <BlogCard />
                <BlogCard />
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
