import { getInitials } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BsStarFill } from "react-icons/bs";

interface MovieItem {
  id: number;
  title: string;
  image: string;
  rating?: number;
  job?: string;
}

const MovieItem: FC<MovieItem> = ({ id, title, rating, image, job }) => {
  return (
    <Link href={`/movies/${id}`}>
      <div className="movie-item-style-2 movie-item-style-1">
        {image ? (
          <Image
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
            width={200}
            height={200}
          />
        ) : (
          <div className="no-image-initials" style={{ height: "255px" }}>
            <h4>{getInitials(title)}</h4>
          </div>
        )}
        {rating && (
          <div className="hvr-inner">
            <a href="moviesingle.html">Read more</a>
          </div>
        )}
        <div className="mv-item-infor">
          <h6>
            <a href="#">{title}</a>
          </h6>
          {rating && (
            <p className="rate">
              <BsStarFill color="#f5b50a" size={"16px"} /> <span>{rating}</span>{" "}
              /10
            </p>
          )}
          {job && (
            <>
              <span>{job}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
