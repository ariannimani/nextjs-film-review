import {
  FilterBar,
  Card,
  SearchForm,
} from "@/components/movies";
import {Footer,  Header} from '@/components'
import { Pagination } from "@/components/movies";
import React, { useState } from "react";
import { fetchData } from "../api/fetchData";
import { InferGetServerSidePropsType } from "next";
import { useSelector } from "react-redux";
import { selectGenres } from "@/redux/slices/genresSlice";

export async function getServerSideProps() {
  const queryMovie = { type: "tv", value: "popular" };
  const data = await fetchData(queryMovie);

  return {
    props: {
      data,
    },
  };
}

const TvShows = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [perPageNumber, setPerPageNumber] = useState(1);
  const movies = data.results;
  const genres = useSelector(selectGenres);
  //FIXME: fix any type
  const ratingRange: any[] = [];
  const releaseYears = ["2011", "2022"];

  return (
    <>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <FilterBar total={data.total_results} title={"TV Shows"} />
              <div className="flex-wrap-movielist">
                {movies.map((movie) => (
                  <Card
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    rating={movie.vote_average}
                    image={movie.poster_path}
                    category="tv-shows"
                  />
                ))}
              </div>
              <Pagination
                {...{
                  page: perPageNumber,
                  title: "TV Shows",
                  total_pages: data.total_pages,
                  perPageNumber,
                  setPerPageNumber,
                }}
              />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <SearchForm
                  title="tv shows"
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

export default TvShows;
