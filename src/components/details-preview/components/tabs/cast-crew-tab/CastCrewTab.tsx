import React, { FC } from "react";
import { CastCrewPerson } from "./components";
import { CreditsProps } from "@/components/details-preview/types";

interface CastCreditTabProps {
  data: CreditsProps;
}
const CastCrewTab: FC<CastCreditTabProps> = ({ data }) => {
  const directors = data.crew.filter((director) => director.job === "Director");

  const directorsAndCreditWriters = data.crew.filter(
    (member) =>
      member.department === "Directing" &&
      !directors.some((director) => member.id === director.id)
  );

  const producers = data.crew.filter(
    (director) => director.known_for_department === "Production"
  );

  return (
    <div id="cast" className="tab cast active">
      <div className="row">
        <div className="title-hd-sm">
          <h4>Directors</h4>
        </div>
        {directors.map((director) => (
          <CastCrewPerson
            key={director.id}
            id={director.id}
            profile_path={director.profile_path}
            name={director.name}
            job={director.job}
          />
        ))}
        <div className="title-hd-sm">
          <h4>Directors & Credit Writers</h4>
        </div>
        {directorsAndCreditWriters.map((director) => (
          <CastCrewPerson
            key={director.id}
            id={director.id}
            profile_path={director.profile_path}
            name={director.name}
            job={director.job}
          />
        ))}
        <div className="title-hd-sm">
          <h4>Cast</h4>
        </div>
        {data.cast.map((cast) => (
          <CastCrewPerson
            key={cast.id}
            id={cast.id}
            profile_path={cast.profile_path}
            name={cast.name}
            job={"Actor"}
          />
        ))}
        <div className="title-hd-sm">
          <h4>Produced by</h4>
        </div>
        {producers.map((producer) => (
          <CastCrewPerson
            key={producer.id}
            id={producer.id}
            profile_path={producer.profile_path}
            name={producer.name}
            job={producer.job}
          />
        ))}
      </div>
    </div>
  );
};

export default CastCrewTab;
