import React, { FC } from "react";
import { formatDate } from "@/utils/formatDate";
import { CreditsProps, MovieData } from "../../types";
import Link from "next/link";
import DataItem from "@/components/data-item/DataItem";

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
      <DataItem title="Director" data={directors} category="celebrities" />
      <DataItem title="Writer" data={writers} category="celebrities" />
      <DataItem title="Stars" data={stars} category="celebrities" />
      <DataItem title="Genres" data={movie.genres} />

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
