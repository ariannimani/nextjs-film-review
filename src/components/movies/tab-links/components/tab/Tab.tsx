import React, { FC } from "react";
import { MainCard } from "@/components/movies";
import Carousel from "react-multi-carousel";
import { responsive } from "@/utils/carouselConfig";
import { Result } from "@/pages/api/fetchData";

interface Movies {
  movies: Result[];
  category: string;
}

const Tab: FC<Movies> = ({ movies, category }) => {
  return (
    <div className="tab-content">
      <div id="tab1" className="tab active">
        <div className="row">
          {/*<div className="slick-multiItem">*/}
          <Carousel
            ssr={true} // means to render carousel on server-side.
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {movies?.slice(0, 5).map((movie) => (
              <MainCard
                key={movie.id}
                id={movie.id}
                image={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                genre={movie.genre_ids}
                tab={true}
                width={185}
                height={284}
                category={category}
              />
            ))}
          </Carousel>
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Tab;
