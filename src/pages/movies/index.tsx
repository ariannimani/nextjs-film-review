import { FilterBar, Card, SearchForm } from "@/components/movies";
import { Footer, Header } from "@/components";
import { Pagination } from "@/components/movies";
import React, { useState } from "react";
import { fetchData } from "../api/fetchData";
import { InferGetServerSidePropsType } from "next";
import { useSelector } from "react-redux";
import { selectGenres } from "@/redux/slices/genresSlice";
import { MoviesResult } from "@/types/movies/MoviesTypes";

export async function getServerSideProps() {
  const queryMovie = { type: "movie", value: "popular" };
  const data = await fetchData<MoviesResult>(queryMovie);

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
  const ratingRange: number[] = [];

  const releaseYears = ["2011", "2022"];

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
                  <Card
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    rating={movie.vote_average}
                    image={movie.poster_path}
                    category="movies"
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
