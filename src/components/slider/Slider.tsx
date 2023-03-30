import React, { FC } from "react";
import useSWR from "swr";
import Carousel from "react-multi-carousel";
import { MovieCard } from "@/components";
import { Data, fetchMovies, Result } from "@/pages/api/fetchMovies";
import { responsive } from "@/utils/carouselConfig";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const query = { type: "movie", value: "now_playing", page: 1 };
  const { data, error, isLoading } = useSWR<Data, Error>(query, fetchMovies);
  const movies: Result[] | undefined = data?.results;

  if (isLoading || error) return <></>;

  return (
    <div className="slider movie-items">
      <div className="container">
        <div className="row">
          <div className="social-link">
            <p>Follow us: </p>
            <a href="#">
              <i className="ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="ion-social-googleplus"></i>
            </a>
            <a href="#">
              <i className="ion-social-youtube"></i>
            </a>
          </div>

          <div className="slick-multiItemSlider">
            <Carousel
              ssr={true} // means to render carousel on server-side.
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {movies?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  image={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  genre={movie.genre_ids}
                  width={285}
                  height={437}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
