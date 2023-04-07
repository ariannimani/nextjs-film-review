import React, { FC } from "react";
import { BsStarFill } from "react-icons/bs";
import { Poster, Tabs } from "@/components/movies";
import { getYearFromDate } from "@/utils";
import { OverviewTab, RelatedTab, ReviewsTab } from "./components/tabs";
import { CreditList, Media } from "@/components/movies";
import { MovieProps, MoviesResult } from "@/types/movies/MoviesTypes";
import { TvShowProps, TvShowsResult } from "@/types/movies/TvShowsTypes";
import {
  CreditsResult,
  ReviewsResult,
  VideoProps,
} from "@/types/movies/CommonTypes";

interface DetailsProps {
  movie: MovieProps | TvShowProps;
  credits: CreditsResult;
  reviews: ReviewsResult;
  videos: VideoProps[];
  related: MoviesResult | TvShowsResult;
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

  const isMovieProps = (obj: any): obj is MovieProps => {
    return obj.original_title !== undefined;
  };

  return (
    <div className="page-single movie-single movie_single">
      <div className="container">
        <div className="row ipad-width2">
          <Poster
            image={movie.poster_path}
            title={isMovieProps(movie) ? movie.title : movie.name}
            videoId={""}
          />
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
              <h1 className="bd-hd">
                {isMovieProps(movie) ? movie.original_title : movie.name}{" "}
                <span>
                  {getYearFromDate(
                    isMovieProps(movie)
                      ? movie.release_date
                      : movie.first_air_date
                  )}
                </span>
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
