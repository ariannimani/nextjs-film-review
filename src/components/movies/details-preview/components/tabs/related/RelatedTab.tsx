import { Data, Result } from "@/pages/api/fetchData";
import React, { FC, useState } from "react";
import { TopBarFilter, Pagination } from "@/components/movies";
import { Related } from "./components";

interface RelatedTabProps {
  data: Data;
}

const RelatedTab: FC<RelatedTabProps> = ({ data }) => {
  const [movieNumber, setMovieNumber] = useState(5);
  const selectedMovies: Result[] = data.results.slice(0, movieNumber);
  return (
    <div id="moviesrelated" className="tab related-movies active">
      <div className="row">
        <TopBarFilter total={data.total_results} title="movies" />
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
          page={data.page}
          title={"Movies"}
          total_pages={data.total_pages}
          perPageNumber={movieNumber}
          setPerPageNumber={setMovieNumber}
        />
      </div>
    </div>
  );
};

export default RelatedTab;
