import { FilterBar, Footer, Header, MovieItem, SearchForm } from "@/components";
import { Pagination } from "@/components/movie/components/movie-tabs/components";
import React, { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const queryMovie = { type: "person", value: "popular" };
  const data = await fetchMovies(queryMovie);

  return {
    props: {
      data,
    },
  };
}

const Celebrities = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [perPageNumber, setPerPageNumber] = useState(1);
  const celebrities = data.results;
  return (
    <>
      <Header />
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <FilterBar total={data.total_results} title={"celebrities"} />
              <div className="flex-wrap-movielist">
                {celebrities.map((celebrity) => (
                  <MovieItem
                    key={celebrity.id}
                    id={celebrity.id}
                    title={celebrity.name}
                    rating={celebrity.vote_average}
                    image={celebrity.profile_path}
                    job={"Known for: " + celebrity.known_for_department}
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
                {/* <SearchForm
                  title="celebrity"
                  firstInput={genres}
                  secondInput={ratingRange}
                  thirdInput={releaseYears}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Celebrities;
