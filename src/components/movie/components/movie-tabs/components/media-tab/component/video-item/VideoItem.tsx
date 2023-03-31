import VideoPlayer from "@/components/video-player/VideoPlayer";
import React, { FC } from "react";

interface VideoItemProps {
  name: string;
  videoId: string;
}

const VideoItem: FC<VideoItemProps> = ({ name, videoId }) => {
  return (
    <div className="vd-item">
      <div className="vd-it">
        <VideoPlayer videoId={videoId} />
      </div>
      <div className="vd-infor">
        <h6>
          <a href="#">Trailer: {name}</a>
        </h6>
        {/* <p className="time"> 1: 31</p> */}
      </div>
    </div>
  );
};

export default VideoItem;
