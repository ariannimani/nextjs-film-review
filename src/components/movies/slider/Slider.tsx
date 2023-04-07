import React, { useEffect } from "react";
import useSWR from "swr";
import Carousel from "react-multi-carousel";
import { MainCard } from "@/components/movies";
import { fetchData } from "@/pages/api/fetchData";
import { responsive } from "@/utils/carouselConfig";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { setTrailers } from "@/redux/slices/trailersSlice";
import { MoviesResult } from "@/types/movies/MoviesTypes";
import { TvShowsResult } from "@/types/movies/TvShowsTypes";
import { VideosResult } from "@/types/movies/CommonTypes";

type Data = MoviesResult | TvShowsResult;

const Slider = () => {
  const query = { type: "movie", value: "now_playing", page: 1 };
  const { data, error, isLoading } = useSWR<Data, Error>(query, fetchData);
  const movies = data && data.results;
  const dispatch = useDispatch();

  useEffect(() => {
    movies &&
      movies.forEach(async (movie) => {
        const trailers = await fetchData<VideosResult>({
          type: "movie",
          value: `${movie.id}/videos`,
        });
        trailers && dispatch(setTrailers(trailers.results[0]));
      });
  }, [dispatch, movies]);

  if (isLoading || error) return <></>;

  //FIXME: fix original title type
  return (
    <div className="slider movie-items">
      <div className="container">
        <div className="row">
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
                <MainCard
                  key={movie.id}
                  id={movie.id}
                  image={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  genre={movie.genre_ids}
                  width={285}
                  height={437}
                  category="movies"
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
