import React, { FC } from "react";
import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string | Date;
  image: string;
}
const BlogCard: FC<BlogCardProps> = ({
  slug,
  title,
  description,
  date,
  image,
}) => {
  return (
    <div className="blog-card">
      <div className="blog-item-style-2">
        <a>
          {/* <Image src={image} alt={title} width={100} height={100} /> */}
        </a>
        <div className="blog-it-infor">
          <h3>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          <span className="time">{formatDate(date.toString())}</span>
          <p>{description} ...</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
