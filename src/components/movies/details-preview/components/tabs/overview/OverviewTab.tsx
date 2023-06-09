import React, { FC } from "react";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import VideoPlayer from "@/components/movies/video-player/VideoPlayer";
import {
  Review,
  Sidebar,
} from "@/components/movies/details-preview/components";
import Link from "next/link";
import { OverviewTabContent } from "./types";

interface OverviewTabProps {
  data: OverviewTabContent;
  setActiveTab: (tab: string) => {};
}

const OverviewTab: FC<OverviewTabProps> = ({ data, setActiveTab }) => {
  return (
    <div id="overview" className="tab active">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <p>{data.movie.overview}</p>
          <div className="title-hd-sm">
            <h4>Videos & Photos</h4>
            {/* {videos.length > 4 && ( */}
            <a
              onClick={() => setActiveTab("media")}
              className="time cursor-class"
            >
              All {data.videos.length} Videos
              <BsArrowRightShort />
            </a>
            {/* )} */}
          </div>
          <div className="mvsingle-item ov-item">
            {data.videos.slice(0, 4).map((video) => (
              <VideoPlayer key={video.id} videoId={video.key} />
            ))}
          </div>
          <div className="title-hd-sm">
            <h4>cast</h4>
            <a
              onClick={() => setActiveTab("cast-crew")}
              className="time cursor-class"
            >
              Full Cast & Crew <BsArrowRightShort />
            </a>
          </div>
          {data.credits &&
            data.credits?.cast.slice(0, 8).map((cast) => (
              <div className="mvcast-item" key={cast.id}>
                <div className="cast-it">
                  <div className="cast-left">
                    {cast.profile_path && (
                      <Image
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        alt={cast.name}
                        width={40}
                        height={40}
                      />
                    )}
                    <Link href={`/celebrities/${cast.id}`}>{cast.name}</Link>
                  </div>
                  <p>... {cast.character}</p>
                </div>
              </div>
            ))}
          <div className="title-hd-sm">
            <h4>User reviews</h4>
            <a
              onClick={() => setActiveTab("reviews")}
              className="time cursor-class"
            >
              See All 56 Reviews <i className="ion-ios-arrow-right"></i>
            </a>
          </div>

          {data.reviews.results.slice(0, 1).map((review) => (
            <Review
              key={review.id}
              author={review.author}
              content={review.content}
              created_at={review.created_at}
            />
          ))}
        </div>
        <Sidebar credits={data.credits} movie={data.movie} />
      </div>
    </div>
  );
};

export default OverviewTab;
