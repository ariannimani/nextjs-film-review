import React, { FC } from "react";
import { VideoProps } from "@/components/details-preview/types";
import { VideoItem } from "./component";

interface MediaProps {
  data: VideoProps[];
}
const Media: FC<MediaProps> = ({ data }) => {
  return (
    <div id="media" className="tab media active">
      <div className="row">
        <div className="rv-hd"></div>
        <div className="title-hd-sm">
          <h4>
            Videos <span>({data.length})</span>
          </h4>
        </div>
        <div className="mvsingle-item media-item">
          {data.map((video) => (
            <VideoItem key={video.id} name={video.name} videoId={video.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
