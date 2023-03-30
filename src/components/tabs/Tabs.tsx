import React, { FC, useState } from "react";
import { Data, fetchMovies, Result } from "@/pages/api/fetchMovies";
import useSWR from "swr";
import "react-multi-carousel/lib/styles.css";
import MovieTab from "./movie-tab/MovieTab";
import { TabProps } from "./tabMenu";

interface TabsProps {
  type: string;
  tabs: TabProps[];
}
const Tabs: FC<TabsProps> = ({ type, tabs }) => {
  const [tab, setTab] = useState("popular");
  const query = { type: type, value: tab, page: 1 };
  const { data, error, isLoading } = useSWR<Data, Error>(query, fetchMovies);
  const movies: Result[] | undefined = data?.results;

  if (isLoading || error) return <></>;

  return (
    <div className="tabs">
      <ul className="tab-links">
        {tabs.map((tab) => (
          <li className="active" key={tab.id} onClick={() => setTab(tab.name)}>
            <a>#{tab.name.replace(/_/g, " ")}</a>
          </li>
        ))}
      </ul>
      {movies && <MovieTab movies={movies} />}
    </div>
  );
};

export default Tabs;
