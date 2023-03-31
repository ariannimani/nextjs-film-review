import React, { FC } from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectGenres } from "@/redux/slices/genresSlice";
import { formatDate, getYearFromDate } from "@/utils";
import Link from "next/link";

interface RelatedMovieProps {
  id: number;
  title: string;
  date: string;
  image: string;
  overview: string;
  rating: number;
  genres: number[];
}
const RelatedMovie: FC<RelatedMovieProps> = ({
  id,
  title,
  date,
  image,
  overview,
  rating,
  genres,
}) => {
  const allGenres = useAppSelector(selectGenres);

  return (
    <Link href={`/movies/${id}`}>
      <div className="movie-item-style-2 cursor-class">
        {image ? (
          <Image
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
            width={80}
            height={80}
          />
        ) : (
          <h4 style={{ height: 150, width: 150 }}>Image</h4>
        )}
        <div className="mv-item-infor">
          <h6>
            <a href="#">
              {title} <span>({getYearFromDate(date)})</span>
            </a>
          </h6>
          <p className="rate">
            <i className="ion-android-star"></i>
            <span>{rating}</span> /10
          </p>
          <p className="describe">{overview}...</p>
          <p className="run-time">
            <span>Release: {formatDate(date)}</span>
          </p>
          {allGenres && genres && (
            <p style={{ display: "flex", gap: "15px" }}>
              Genres:{" "}
              <div className="cate">
                {genres.map((gen: any) => {
                  const currentGenre = allGenres.filter(
                    (item) => item.id === gen
                  );
                  console.log({ currentGenre });
                  return (
                    <span
                      style={{ background: currentGenre[0]?.color }}
                      key={currentGenre[0]?.id}
                    >
                      <div>{currentGenre[0]?.name}</div>
                    </span>
                  );
                })}
              </div>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RelatedMovie;
