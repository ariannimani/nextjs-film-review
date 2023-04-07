import React, { FC, useState } from "react";
import ReplyForm from "./reply-form/ReplyForm";
import { formatDate } from "@/utils";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { User } from "@prisma/client";
import { db } from "../../../../lib/db";
import { useUser } from "@/hooks/useSearch";
import Image from "next/image";

interface CommentProps {
  content: string;
  date: Date | string;
  userId: string;
}

const Comment: FC<CommentProps> = ({ content, date, userId }) => {
  const { data } = useUser(userId);
  const [reply, setReply] = useState(false);

  const fullName = data ? `${data.firstName} ${data.lastName}` : "";
  const handleReplyClick = () => {
    setReply(!reply);
  };

  return (
    <div className="comment-container">
      <div className="cmt-item flex-it3">
        <Image
          src={"/assets/images/uploads/author.png"}
          alt={fullName}
          className="image"
          width={70}
          height={70}
        />
        <div className="author-infor">
          <div className="flex-it2">
            <h6>
              <a href="#">{fullName}</a>
            </h6>{" "}
            <span className="time">{formatDate(date)}</span>
          </div>
          <p>{content}</p>
          <p>
            <a className="rep-btn" onClick={handleReplyClick}>
              + Reply
            </a>
          </p>
        </div>
      </div>
      {reply && <ReplyForm />}
    </div>
  );
};

export default Comment;
