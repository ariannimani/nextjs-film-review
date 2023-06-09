import React, { FC } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { CreditsItem } from "@/components/movies/credit-lists/components";
import { Sidebar } from "../..";
import BiographyCard from "@/components/movies/biography-card/BiographyCard";
import { truncateText } from "@/utils";

interface OverviewProps {
  data: any;
  films: any;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Overview: FC<OverviewProps> = ({ data, setActiveTab }) => {
  return (
    <div id="overview" className="tab active">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <p>{data.name}</p>
          <BiographyCard
            biography={truncateText(data.celebrity.biography)}
            setActiveTab={setActiveTab}
            type="short"
          />
          <div className="title-hd-sm">
            <h4>Filmography</h4>
            <a
              onClick={() => setActiveTab("filmography")}
              className="time cursor-class"
            >
              Full Filmography <BsArrowRightShort />
            </a>
          </div>
          {data.films &&
            data.films?.cast
              .slice(0, 8)
              .map((cast: any) => (
                <CreditsItem
                  key={cast.id}
                  id={cast.id}
                  image={cast.poster_path}
                  name={cast.title}
                  description={cast.character}
                  category={"movies"}
                />
              ))}
        </div>
        <Sidebar data={data.celebrity} />
      </div>
    </div>
  );
};

export default Overview;
