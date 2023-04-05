import React from "react";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-item-style-2">
        <a href="blogdetail.html">
          <img src="images/uploads/blogv21.jpg" alt="" />
        </a>
        <div className="blog-it-infor">
          <h3>
            <a href="blogdetail.html">
              Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
            </a>
          </h3>
          <span className="time">27 Mar 2017</span>
          <p>
            Looks like Kong: Skull Island started a tradition with its casting
            of Straight ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
