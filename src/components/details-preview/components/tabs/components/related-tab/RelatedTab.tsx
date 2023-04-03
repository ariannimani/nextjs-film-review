import { Data, Result } from "@/pages/api/fetchData";
import React, { FC, useState } from "react";
import Pagination from "../../../../../pagination/Pagination";
import TopBarFilter from "../top-bar-filter/TopBarFilter";
import { Related } from "./components";

interface RelatedTabProps {
  related: Data;
}

const RelatedTab: FC<RelatedTabProps> = ({ related }) => {
  const [movieNumber, setMovieNumber] = useState(5);
  const selectedMovies: Result[] = related.results.slice(0, movieNumber);

  return (
    <div id="moviesrelated" className="tab related-movies active">
      <div className="row">
        <TopBarFilter total={related.total_results} title="movies" />
        {selectedMovies.map((movie) => (
          <Related
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

export default RelatedTab;
