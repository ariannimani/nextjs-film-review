import React from "react";
import { TrailerCard, TrailerVideoCard } from "@/components/trailers";

const Trailers = () => {
  return (
    <div className="trailers">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-12">
            <div className="title-hd">
              <h2>in theater</h2>
              <a href="#" className="viewall">
                View all <i className="ion-ios-arrow-right"></i>
              </a>
            </div>
            <div className="videos">
              <div className="slider-for-2 video-ft">
                <TrailerVideoCard />
              </div>
              <div className="slider-nav-2 thumb-ft">
                <TrailerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailers;
