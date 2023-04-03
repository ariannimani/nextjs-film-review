import Image from "next/image";
import React, { FC } from "react";
import { CreditsProps, MovieData, ReviewResult, VideoProps } from "./types";
import { BsPlayFill, BsStarFill, BsTicketPerforated } from "react-icons/bs";
import { Tabs } from "./components";
import { Data } from "@/pages/api/fetchData";
import { getYearFromDate } from "@/utils";

interface DetailsProps {
  movie: MovieData;
  credits: CreditsProps;
  reviews: ReviewResult;
  videos: VideoProps[];
  related: Data;
}

const Details: FC<DetailsProps> = ({
  movie,
  credits,
  reviews,
  videos,
  related,
}) => {
  console.log({ movie });
  return (
    <div className="page-single movie-single movie_single">
      <div className="container">
        <div className="row ipad-width2">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="movie-img sticky-sb">
              {movie.poster_path && (
                <Image
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={400}
                  height={600}
                />
              )}
              <div className="movie-btn">
                <div className="btn-transform transform-vertical red">
                  <div>
                    <a className="item item-1 redbtn">
                      <BsPlayFill /> Watch Trailer
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/embed/o-0hcF97wy0"
                      className="item item-2 redbtn fancybox-media hvr-grow"
                    >
                      <BsPlayFill />
                    </a>
                  </div>
                </div>
                <div className="btn-transform transform-vertical">
                  <div>
                    <a className="item item-1 yellowbtn">
                      <BsTicketPerforated /> Buy ticket
                    </a>
                  </div>
                  <div>
                    <a className="item item-2 yellowbtn">
                      <BsTicketPerforated />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
              <h1 className="bd-hd">
                {movie.original_title}{" "}
                <span>{getYearFromDate(movie.release_date)}</span>
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
              <Tabs
                movie={movie}
                videos={videos}
                credits={credits}
                reviews={reviews}
                related={related}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
