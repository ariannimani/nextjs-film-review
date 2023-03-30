import React, { FC } from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

interface MovieProps {
  id: number;
  width: number;
  height: number;
}

const MovieCard: FC<MovieProps> = ({ id, width, height }) => {
  return (
    <div className="movie-item">
      <Image
        loading="lazy"
        src={`/assets/images/uploads/slider${id}.jpg`}
        alt=""
        width={width}
        height={height}
      />
      <div className="title-in">
        <div className="cate">
          <span className="blue">
            <a href="#">Sci-fi</a>
          </span>
        </div>
        <h6>
          <a href="#">Interstellar</a>
        </h6>
        <p>
          <BsStarFill color="#f5b50a" size={"16px"} />
          <span>7.4</span> /10
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
