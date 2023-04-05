import Image from "next/image";
import Link from "next/link";
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
    <Link href={`/celebrities/${id}`}>
      <div className="celeb-item">
        {image && (
          <Image
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={name}
            width={70}
            height={70}
          />
        )}

        <div className="celeb-author">
          <h6>
            <a>{name}</a>
          </h6>
          <span>{works_as}</span>
        </div>
      </div>
    </Link>
  );
};

export default SidebarCard;
