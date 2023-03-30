import React from "react";
import { Tabs, SideBar } from "@/components";

const MovieItems = () => {
  return (
    <div className="movie-items">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8">
            <div className="title-hd">
              <h2>in theater</h2>
              <a href="#" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </a>
            </div>
            <Tabs />
            <div className="title-hd">
              <h2>on tv</h2>
              <a href="#" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </a>
            </div>
            <Tabs />
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default MovieItems;
