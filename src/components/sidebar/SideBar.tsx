import Image from "next/image";
import React from "react";
import useSWR from "swr";
import SidebarCard from "./sidebar-card/SidebarCard";
import { Data, fetchMovies, Result } from "@/pages/api/fetchMovies";

const SideBar = () => {
  const query = { type: "person", value: "popular", page: 1 };
  const { data, error, isLoading } = useSWR<Data, Error>(query, fetchMovies);
  const celebrities: any = data?.results;

  console.log({ celebrities });
  if (isLoading || error) return <></>;

  return (
    <div className="col-md-4">
      <div className="sidebar">
        <div className="ads">
          <Image
            src="/assets/images/uploads/ads1.png"
            alt=""
            width={336}
            height={296}
          />
        </div>
        <div className="celebrities">
          <h4 className="sb-title">Spotlight Celebrities</h4>
          {celebrities?.slice(0, 4).map((celebrity: any) => (
            <SidebarCard
              key={celebrity.id}
              id={celebrity.id}
              name={celebrity.name}
              job={celebrity.known_for_department}
              image={celebrity.profile_path}
            />
          ))}

          <a href="#" className="btn">
            See all celebrities<i className="ion-ios-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
