import { Data, Result } from "@/pages/api/fetchMovies";
import React, { FC, useState } from "react";
import Pagination from "../pagination/Pagination";
import TopBarFilter from "../top-bar-filter/TopBarFilter";
import { RelatedMovie } from "./components";

interface RelatedMoviesTabProps {
  related: Data;
}

const RelatedMoviesTab: FC<RelatedMoviesTabProps> = ({ related }) => {
  const [movieNumber, setMovieNumber] = useState(5);
  const selectedMovies: Result[] = related.results.slice(0, movieNumber);
  console.log({ related });
  return (
    <div id="moviesrelated" className="tab related-movies active">
      <div className="row">
        <TopBarFilter total={related.total_results} title="movies" />
        {selectedMovies.map((movie) => (
          <RelatedMovie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            date={movie.release_date}
            image={movie.poster_path}
            overview={movie.overview}
            rating={movie.vote_average}
            genres={movie.genre_ids}
          />
        ))}
        <Pagination
          page={related.page}
          title={"Movies"}
          total_pages={related.total_pages}
          perPageNumber={movieNumber}
          setPerPageNumber={setMovieNumber}
        />
      </div>
    </div>
  );
};

export default RelatedMoviesTab;
