import React, { FC, useState } from "react";
import { Data, fetchData, Result } from "@/pages/api/fetchData";
import useSWR from "swr";
import "react-multi-carousel/lib/styles.css";
import { Tab } from "@/components/movies/tab-links/components";
import { TabProps } from "./tabMenu";

interface TabsProps {
  type: string;
  tabs: TabProps[];
  category: string;
}
const Tabs: FC<TabsProps> = ({ type, tabs, category }) => {
  const [tab, setTab] = useState("popular");
  const query = { type: type, value: tab, page: 1 };
  const { data, error, isLoading } = useSWR<Data, Error>(query, fetchData);
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
      {movies && <Tab movies={movies} category={category} />}
    </div>
  );
};

export default Tabs;
