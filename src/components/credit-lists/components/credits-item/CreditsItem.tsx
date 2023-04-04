import { getInitials } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface CreditsItemProps {
  id: number;
  image?: string;
  name: string;
  description: string;
  category: string;
}
const CreditsItem: FC<CreditsItemProps> = ({
  id,
  image,
  name,
  description,
  category,
}) => {
  return (
    <div className="mvcast-item">
      <div className="cast-it">
        <div className="cast-left">
          {image ? (
            <Image
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${image}`}
              alt={name}
              width={40}
              height={40}
            />
          ) : (
            <h4>{getInitials(name)}</h4>
          )}

          <Link href={`/${category}/${id}`}>{name}</Link>
        </div>
        <p>... {description}</p>
      </div>
    </div>
  );
};

export default CreditsItem;
