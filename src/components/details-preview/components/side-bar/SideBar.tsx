import React, { FC } from "react";
import { formatDate } from "@/utils/formatDate";
import { CreditsProps, MovieData } from "../../types";
import Link from "next/link";

interface SideBarProps {
  credits: CreditsProps;
  movie: MovieData;
}
const SideBar: FC<SideBarProps> = ({ credits, movie }) => {
  const stars = credits.cast
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);

  const directors = credits.crew.filter(
    (director) => director.job === "Director"
  );

  const writers = credits.crew.filter(
    (director) => director.job === "Characters"
  );

  return (
    <div className="col-md-4 col-xs-12 col-sm-12">
      <div className="sb-it">
        <h6>Director: </h6>
        <p>
          {directors.map((director) => (
            <Link key={director.id} href={`/celebrities/${director.id}`}>
              {director.name}
            </Link>
          ))}
        </p>
      </div>
      <div className="sb-it">
        <h6>Writer: </h6>
        <p>
          {writers.map((writer) => (
            <Link key={writer.id} href={`/celebrities/${writer.id}`}>
              {writer.name}
            </Link>
          ))}
        </p>
      </div>
      <div className="sb-it">
        <h6>Stars: </h6>
        <p>
          {stars.map((star) => (
            <Link key={star.id} href={`/celebrities/${star.id}`}>
              {star.name}
            </Link>
          ))}
        </p>
      </div>
      <div className="sb-it">
        <h6>Genres:</h6>
        <p>
          {movie.genres.map((genre) => (
            <a key={genre.id}>{genre.name} </a>
          ))}
        </p>
      </div>
      <div className="sb-it">
        <h6>Release Date:</h6>
        <p>
          {formatDate(movie.release_date)} (
          {movie.production_countries.map((country) => country.iso_3166_1)}){" "}
        </p>
      </div>
      <div className="sb-it">
        <h6>Run Time:</h6>
        <p>{movie.runtime} min</p>
      </div>
    </div>
  );
};

export default SideBar;
