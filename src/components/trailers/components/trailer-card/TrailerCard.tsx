import Image from "next/image";
import React, { FC } from "react";

interface TrailerCardProps {
  name: string;
  id: string;
  setSelectedVideo: React.Dispatch<React.SetStateAction<string>>;
}

const TrailerCard: FC<TrailerCardProps> = ({ name, id, setSelectedVideo }) => {
  return (
    <div
      className="item trailer-container cursor-class"
      onClick={() => setSelectedVideo(id)}
    >
      <div className="trailer-img">
        {id && (
          <Image
            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
            alt={name}
            width={4096}
            height={2737}
          />
        )}
      </div>
      <div className="trailer-infor">
        <h4 className="desc">{name}</h4>
      </div>
    </div>
  );
};

export default TrailerCard;
