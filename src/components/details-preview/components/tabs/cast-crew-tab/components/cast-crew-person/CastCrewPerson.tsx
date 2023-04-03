import { getInitials } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface CastCrewPersonProps {
  id: number;
  profile_path?: string;
  name: string;
  job: string;
}
const CastCrewPerson: FC<CastCrewPersonProps> = ({
  id,
  profile_path,
  name,
  job,
}) => {
  return (
    <div className="mvcast-item">
      <div className="cast-it">
        <div className="cast-left">
          {profile_path ? (
            <Image
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width={40}
              height={40}
            />
          ) : (
            <h4>{getInitials(name)}</h4>
          )}

          <Link href={`/celebrities/${id}`}>{name}</Link>
        </div>
        <p>... {job}</p>
      </div>
    </div>
  );
};

export default CastCrewPerson;
