import React, { FC } from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

interface MovieProps {
  id: number;
  width: number;
  height: number;
  image: string;
  title: string;
  rating: number;
  genre: number[];
}

const MovieCard: FC<MovieProps> = ({
  id,
  image,
  title,
  rating,
  genre,
  width,
  height,
}) => {
  return (
    <div className="movie-item">
      {image && (
        <Image
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
          width={width}
          height={height}
        />
      )}
      <div className="title-in">
        <div className="cate">
          {genre &&
            genre.map((gen) => (
              <span className="blue" key={gen}>
                <a href="#">Sci-fi /{gen}</a>
              </span>
            ))}
        </div>
        <h6>
          <a href="#">{title}</a>
        </h6>
        <p>
          <BsStarFill color="#f5b50a" size={"16px"} />
          <span>{rating}</span> /10
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
