import Image from "next/image";
import React, { FC } from "react";

interface SidebarCardProps {
  id: number;
  name: string;
  job: string;
  image: string;
}

const SidebarCard: FC<SidebarCardProps> = ({ id, name, job, image }) => {
  const works_as = job === "Acting" ? "Actor" : "Director";
  return (
    <div className="celeb-item">
      <a href="#">
        {image && (
          <Image
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={name}
            width={70}
            height={70}
          />
        )}
      </a>
      <div className="celeb-author">
        <h6>
          <a href="#">{name}</a>
        </h6>
        <span>{works_as}</span>
      </div>
    </div>
  );
};

export default SidebarCard;
