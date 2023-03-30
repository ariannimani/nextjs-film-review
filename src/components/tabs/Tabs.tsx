import React from "react";
import { MovieCard } from "@/components";

const movieItems = [1, 2, 3, 4];

const Tabs = () => {
  return (
    <div className="tabs">
      <ul className="tab-links">
        <li className="active">
          <a href="#tab1">#Popular</a>
        </li>
        <li>
          <a href="#tab2"> #Coming soon</a>
        </li>
        <li>
          <a href="#tab3"> #Top rated </a>
        </li>
        <li>
          <a href="#tab4"> #Most reviewed</a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="tab1" className="tab active">
          <div className="row">
            <div className="slick-multiItem">
              {movieItems.map((movie) => (
                <MovieCard key={movie} id={movie} width={185} height={284} />
              ))}
            </div>
          </div>
        </div>
        <div id="tab2" className="tab">
          <div className="row">
            <div className="slick-multiItem">
              {movieItems.map((movie) => (
                <MovieCard key={movie} id={movie} width={185} height={284} />
              ))}
            </div>
          </div>
        </div>
        <div id="tab3" className="tab">
          <div className="row">
            <div className="slick-multiItem">
              {movieItems.map((movie) => (
                <MovieCard key={movie} id={movie} width={185} height={284} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
