import React, { FC } from "react";
import { formatDate } from "@/utils/formatDate";
import { CreditsProps, MovieData } from "../../types";

interface SideBarProps {
  credits: CreditsProps;
  movie: MovieData;
}
const SideBar: FC<SideBarProps> = ({ data }) => {
  return (
    <div className="col-md-4 col-xs-12 col-sm-12">
      <div className="sb-it">
        <h6>FullName: </h6>
        <p>{data.name}</p>
      </div>

      <div className="sb-it">
        <h6>Date of Birth: </h6>
        <p>{formatDate(data.birthday)}</p>
      </div>
      <div className="sb-it">
        <h6>Country: </h6>
        <p>{data.place_of_birth}</p>
      </div>
    </div>
  );
};

export default SideBar;
