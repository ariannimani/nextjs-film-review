import React, { useEffect, useState } from "react";
import {
  TrailerCard,
  TrailerVideoCard,
} from "@/components/movies/trailers/components";
import { useSelector } from "react-redux";
import { selectTrailers } from "@/redux/slices/trailersSlice";

const Trailers = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const trailers = useSelector(selectTrailers);

  useEffect(() => {
    trailers && setSelectedVideo(trailers[0]?.key);
  }, [trailers]);

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
                <TrailerVideoCard videoId={selectedVideo} />
              </div>
              <div className="slider-nav-2 thumb-ft">
                {trailers &&
                  trailers.map((trailer) => (
                    <TrailerCard
                      key={trailer.id}
                      name={trailer.name}
                      id={trailer.key}
                      setSelectedVideo={setSelectedVideo}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailers;
