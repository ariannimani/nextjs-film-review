import React from "react";
import { Tabs, SideBar } from "@/components";
import { tabsMovies, tabsTVShows } from "../tabs/tabMenu";
import Link from "next/link";

const Items = () => {
  return (
    <div className="movie-items">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8">
            <div className="title-hd">
              <h2>Movies</h2>
              <Link href="/movies" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </Link>
            </div>
            <Tabs type="movie" tabs={tabsMovies} category="movies" />
            <div className="title-hd">
              <h2>TV Shows</h2>
              <Link href="/tv-shows" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </Link>
            </div>
            <Tabs type="tv" tabs={tabsTVShows} category="tv-shows" />
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Items;
