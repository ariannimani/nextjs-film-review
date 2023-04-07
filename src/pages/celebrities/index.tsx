import { FilterBar, Card } from "@/components/movies";
import { Footer, Header } from "@/components";
import { Pagination } from "@/components/movies";
import React, { useState } from "react";
import { fetchData } from "../api/fetchData";
import { InferGetServerSidePropsType } from "next";
import { CelebritiesResult } from "@/types/celebrities/CelebritiesTypes";

export async function getServerSideProps() {
  const queryMovie = { type: "person", value: "popular" };
  const data = await fetchData<CelebritiesResult>(queryMovie);

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
  console.log(celebrities);
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
                  <Card
                    key={celebrity.id}
                    id={celebrity.id}
                    title={celebrity.name}
                    image={celebrity.profile_path}
                    job={"Known for: " + celebrity.known_for_department}
                    category="celebrities"
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
