import { formatNumbers } from "@/utils";
import React, { FC } from "react";

interface FilterBarProps {
  total: number;
  title: string;
}

const FilterBar: FC<FilterBarProps> = ({ total, title }) => {
  return (
    <div className="topbar-filter">
      <p>
        Found{" "}
        <span>
          {formatNumbers(total)} {title}
        </span>{" "}
        in total
      </p>
      <label>Sort by:</label>
      <select>
        <option value="popularity">Popularity Descending</option>
        <option value="popularity">Popularity Ascending</option>
        <option value="rating">Rating Descending</option>
        <option value="rating">Rating Ascending</option>
        <option value="date">Release date Descending</option>
        <option value="date">Release date Ascending</option>
      </select>
      <a href="movielist.html" className="list">
        <i className="ion-ios-list-outline "></i>
      </a>
      <a href="moviegrid.html" className="grid">
        <i className="ion-grid active"></i>
      </a>
    </div>
  );
};

export default FilterBar;
