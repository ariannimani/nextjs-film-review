import { FilterBar, Footer, Header, MovieItem, SearchForm } from "@/components";
import { Pagination } from "@/components/movie/components/movie-tabs/components";
import React, { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import { InferGetServerSidePropsType } from "next";
import { useSelector } from "react-redux";
import { selectGenres } from "@/redux/slices/genresSlice";

export async function getServerSideProps() {
  const queryMovie = { type: "movie", value: "popular" };
  const data = await fetchMovies(queryMovie);

  return {
    props: {
      data,
    },
  };
}

const Movies = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [perPageNumber, setPerPageNumber] = useState(1);
  const movies = data.results;
  const genres = useSelector(selectGenres);
  //FIXME: fix any type
  const ratingRange: any[] = [];
  const releaseYears = ["2011", "2022"];
  console.log(genres);
  return (
    <>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <FilterBar total={data.total_results} title={"movies"} />
              <div className="flex-wrap-movielist">
                {movies.map((movie) => (
                  <MovieItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    rating={movie.vote_average}
                    image={movie.poster_path}
                  />
                ))}
              </div>
              <Pagination
                {...{
                  page: perPageNumber,
                  title: "Movies",
                  total_pages: data.total_pages,
                  perPageNumber,
                  setPerPageNumber,
                }}
              />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <SearchForm
                  title="movie"
                  firstInput={genres}
                  secondInput={ratingRange}
                  thirdInput={releaseYears}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
