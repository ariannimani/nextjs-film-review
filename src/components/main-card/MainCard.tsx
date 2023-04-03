import React, { FC } from "react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { useAppSelector } from "@/redux/hooks";
import { selectGenres } from "@/redux/slices/genresSlice";
import Link from "next/link";
interface MainCardProps {
  id: number;
  width: number;
  height: number;
  image: string;
  title: string;
  rating: number;
  genre: number[];
  tab?: boolean;
}

const MainCard: FC<MainCardProps> = ({
  id,
  image,
  title,
  rating,
  genre,
  width,
  height,
  tab,
}) => {
  const genres = useAppSelector(selectGenres);
  return (
    <Link href={`/movies/${id}`}>
      <div className="movie-item">
        <div className="mv-img">
          {image && (
            <Image
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${image}`}
              alt={title}
              width={width}
              height={height}
            />
          )}
        </div>
        {tab && (
          <div className="hvr-inner">
            <a href="moviesingle.html">Read more</a>
          </div>
        )}
        <div className="title-in">
          {!tab && (
            <div className="cate">
              {genre &&
                genre.slice(0, 3).map((gen: any) => {
                  const currentGenre = genres.filter((item) => item.id === gen);
                  return (
                    <span
                      style={{ background: currentGenre[0].color }}
                      key={currentGenre[0].id}
                    >
                      <a>{currentGenre[0].name}</a>
                    </span>
                  );
                })}
            </div>
          )}
          <h6>
            <a>{title}</a>
          </h6>
          <p>
            <BsStarFill color="#f5b50a" size={"16px"} />
            <span>{rating}</span> /10
          </p>
        </div>
        {/* </div> */}
      </div>
    </Link>
  );
};

export default MainCard;
