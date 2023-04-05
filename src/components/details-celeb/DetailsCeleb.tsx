import React, { FC } from "react";
import { Media, Poster, Tabs } from "@/components";
import { Biography, Filmography } from "./components";
import Overview from "./components/tabs/overview/Overview";

interface DetailsCeleb {
  //FIXME: fix any type
  celebrity: any;
  films: any;
}
const DetailsCeleb: FC<DetailsCeleb> = ({ celebrity, films }) => {
  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "biography", label: "Biography" },
    { value: "filmography", label: "Filmography" },
  ];

  const tabContents = [
    {
      tabValue: "overview",
      component: Overview,
      data: { celebrity, films },
    },
    {
      tabValue: "biography",
      component: Biography,
      data: celebrity.biography,
    },
    {
      tabValue: "filmography",
      component: Filmography,
      data: films,
    },
  ];

  return (
    <div className="page-single movie-single">
      <div className="container">
        <div className="row ipad-width">
          <Poster
            image={celebrity.profile_path}
            title={celebrity.name}
            videoId=""
          />
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct">
              <h1 className="bd-hd">{celebrity.name}</h1>
              <p className="ceb-single">
                Known for: {celebrity.known_for_department}
              </p>
              <Tabs tabs={tabs} tabContents={tabContents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCeleb;
