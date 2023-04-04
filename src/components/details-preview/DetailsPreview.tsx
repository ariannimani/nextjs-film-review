import React, { FC } from "react";
import { CreditsProps, MovieData, ReviewResult, VideoProps } from "./types";
import { BsStarFill } from "react-icons/bs";
import { Poster, Tabs } from "@/components";
import { Data } from "@/pages/api/fetchData";
import { getYearFromDate } from "@/utils";
import { OverviewTab, RelatedTab, ReviewsTab } from "./components/tabs";
import { CreditList, Media } from "@/components";

interface DetailsProps {
  movie: MovieData;
  credits: CreditsProps;
  reviews: ReviewResult;
  videos: VideoProps[];
  related: Data;
}

const Details: FC<DetailsProps> = ({
  movie,
  credits,
  reviews,
  videos,
  related,
}) => {
  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "reviews", label: "Reviews" },
    { value: "cast-crew", label: "CastCrew" },
    { value: "media", label: "Media" },
    { value: "related", label: "Related" },
  ];

  const tabContents = [
    {
      tabValue: "overview",
      component: OverviewTab,
      data: { movie, reviews, credits, videos },
    },
    {
      tabValue: "reviews",
      component: ReviewsTab,
      data: reviews,
    },
    {
      tabValue: "cast-crew",
      component: CreditList,
      data: credits,
    },
    {
      tabValue: "media",
      component: Media,
      data: videos,
    },
    {
      tabValue: "related",
      component: RelatedTab,
      data: related,
    },
  ];

  return (
    <div className="page-single movie-single movie_single">
      <div className="container">
        <div className="row ipad-width2">
          <Poster image={movie.poster_path} title={movie.title} videoId={""} />
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
              <h1 className="bd-hd">
                {movie.original_title}{" "}
                <span>{getYearFromDate(movie.release_date)}</span>
              </h1>
              <div className="movie-rate">
                <div className="rate">
                  <i className="ion-android-star"></i>
                  <p>
                    <span>{movie.vote_average}</span> /10
                    <br />
                    <span className="rv">{movie.vote_count} Reviews</span>
                  </p>
                </div>
                <div className="rate-star">
                  <p>Rate This Movie: </p>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <BsStarFill color="#f5b50a" size={"22px"} key={star} />
                  ))}
                </div>
              </div>
              <Tabs tabs={tabs} tabContents={tabContents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
