import React, { FC } from "react";
import { VideoProps } from "@/components/details-preview/types";
import { VideoItem } from "./component";

interface MediaTabProps {
  videos: VideoProps[];
}
const MediaTab: FC<MediaTabProps> = ({ videos }) => {
  return (
    <div id="media" className="tab media active">
      <div className="row">
        <div className="rv-hd"></div>
        <div className="title-hd-sm">
          <h4>
            Videos <span>({videos.length})</span>
          </h4>
        </div>
        <div className="mvsingle-item media-item">
          {videos.map((video) => (
            <VideoItem key={video.id} name={video.name} videoId={video.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaTab;
