import { Data } from "@/pages/api/fetchMovies";
import React, { FC, useState } from "react";
import {
  CreditsProps,
  MovieData,
  ReviewProps,
  ReviewResult,
  VideoProps,
} from "../../types";
import {
  CastCrewTab,
  MediaTab,
  OverviewTab,
  RelatedMoviesTab,
  ReviewsTab,
} from "./components";

interface MovieTabsProps {
  movie: MovieData;
  videos: VideoProps[];
  credits: CreditsProps;
  reviews: ReviewResult;
  related: Data;
}

const MovieTabs: FC<MovieTabsProps> = ({
  movie,
  videos,
  credits,
  reviews,
  related,
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="movie-tabs">
      <div className="tabs">
        <ul className="tab-links tabs-mv">
          <li
            className={`cursor-class ${
              activeTab === "overview" ? "active" : ""
            }`}
          >
            <a onClick={() => handleTabClick("overview")}>Overview</a>
          </li>
          <li
            className={`cursor-class ${
              activeTab === "reviews" ? "active" : ""
            }`}
          >
            <a onClick={() => handleTabClick("reviews")}> Reviews</a>
          </li>
          <li
            className={`cursor-class ${
              activeTab === "cast-crew" ? "active" : ""
            }`}
          >
            <a onClick={() => handleTabClick("cast-crew")}> Cast & Crew </a>
          </li>
          <li
            className={`cursor-class ${activeTab === "media" ? "active" : ""}`}
          >
            <a onClick={() => handleTabClick("media")}> Media</a>
          </li>
          <li
            className={`cursor-class ${
              activeTab === "movies-related" ? "active" : ""
            }`}
          >
            <a onClick={() => handleTabClick("movies-related")}>
              Related Movies
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === "overview" && (
            <OverviewTab
              {...{ videos, reviews, credits, movie, setActiveTab }}
            />
          )}
          {activeTab === "reviews" && <ReviewsTab {...{ reviews }} />}
          {activeTab === "cast-crew" && <CastCrewTab {...{ credits }} />}
          {activeTab === "media" && <MediaTab {...{ videos }} />}
          {activeTab === "movies-related" && (
            <RelatedMoviesTab {...{ related }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieTabs;
