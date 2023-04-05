import React, { FC, useState } from "react";
import "node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ videoId }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="vd-it">
      <Image
        className="vd-img"
        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
        alt=""
        width={100}
        height={100}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />

      <a className="fancybox-media hvr-grow" onClick={() => setOpen(true)}>
        <Image
          src="/assets/images/uploads/play-vd.png"
          alt=""
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default VideoPlayer;
