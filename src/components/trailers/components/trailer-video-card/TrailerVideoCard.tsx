import React, { FC } from "react";
import ReactPlayer from "react-player";

interface TrailerVideoCardP {
  videoId: string | undefined;
}
const TrailerVideoCard: FC<TrailerVideoCardP> = ({ videoId }) => {
  return (
    <div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
    </div>
  );
};

export default TrailerVideoCard;
