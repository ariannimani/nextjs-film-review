import React, { FC } from "react";
import { CreditsItem } from "./components";
import { CreditsProps } from "@/components/details-preview/types";

interface CreditsListProps {
  data: CreditsProps;
}
const CreditsList: FC<CreditsListProps> = ({ data }) => {
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
          <h4>Director</h4>
        </div>
        {directors.map((director) => (
          <CreditsItem
            key={director.id}
            id={director.id}
            image={director.profile_path}
            name={director.name}
            description={director.job}
            category="celebrities"
          />
        ))}
        <div className="title-hd-sm">
          <h4>Directors & Credit Writers</h4>
        </div>
        {directorsAndCreditWriters.map((director) => (
          <CreditsItem
            key={director.id}
            id={director.id}
            image={director.profile_path}
            name={director.name}
            description={director.job}
            category="celebrities"
          />
        ))}
        <div className="title-hd-sm">
          <h4>Cast</h4>
        </div>
        {data.cast.map((cast) => (
          <CreditsItem
            key={cast.id}
            id={cast.id}
            image={cast.profile_path}
            name={cast.name}
            description={"Actor"}
            category="celebrities"
          />
        ))}
        <div className="title-hd-sm">
          <h4>Produced by</h4>
        </div>
        {producers.map((producer) => (
          <CreditsItem
            key={producer.id}
            id={producer.id}
            image={producer.profile_path}
            name={producer.name}
            description={producer.job}
            category="celebrities"
          />
        ))}
      </div>
    </div>
  );
};

export default CreditsList;
