import React from "react";
import { Tabs, SideBar } from "@/components";
import { tabsMovies, tabsTVShows } from "../tabs/tabMenu";

const MovieItems = () => {
  return (
    <div className="movie-items">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8">
            <div className="title-hd">
              <h2>Movies</h2>
              <a href="#" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </a>
            </div>
            <Tabs type="movie" tabs={tabsMovies} />
            <div className="title-hd">
              <h2>TV Shows</h2>
              <a href="#" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </a>
            </div>
            <Tabs type="tv" tabs={tabsTVShows} />
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default MovieItems;
