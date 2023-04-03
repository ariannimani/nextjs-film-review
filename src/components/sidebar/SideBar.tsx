import React from "react";
import useSWR from "swr";
import { SidebarCard } from "@/components/sidebar/components";
import { Data, fetchData } from "@/pages/api/fetchData";
import Link from "next/link";

const SideBar = () => {
  const query = { type: "person", value: "popular", page: 1 };
  const { data, error, isLoading } = useSWR<Data, Error>(query, fetchData);
  const celebrities: any = data?.results;

  if (isLoading || error) return <></>;

  return (
    <div className="col-md-4">
      <div className="sidebar">
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

          <Link href="/celebrities" className="btn">
            See all celebrities<i className="ion-ios-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
