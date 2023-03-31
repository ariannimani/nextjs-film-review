import { formatDate } from "@/utils/formatDate";
import React, { FC } from "react";

interface ReviewProps {
  author: string;
  content: string;
  created_at: string;
}

const Review: FC<ReviewProps> = ({ author, content, created_at }) => {
  return (
    <div className="mv-user-review-item">
      <div className="user-infor">
        <div>
          <p className="time">
            {formatDate(created_at)} by <a href="#"> {author}</a>
          </p>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Review;
