import React, { FC, useState } from "react";

interface TopBarFilterProps {
  total: number;
  title: string;
}
const TopBarFilter: FC<TopBarFilterProps> = ({ total, title }) => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="topbar-filter">
      <p>
        Found{" "}
        <span>
          {total} {title}
        </span>{" "}
        in total
      </p>
      <label>Sort by:</label>
      <select
        onChange={(e) => setFilterValue(e.target.value)}
        value={filterValue}
      >
        <option value="popularity">Popularity Descending</option>
        <option value="popularity">Popularity Ascending</option>
        <option value="rating">Rating Descending</option>
        <option value="rating">Rating Ascending</option>
        <option value="date">Release date Descending</option>
        <option value="date">Release date Ascending</option>
      </select>
    </div>
  );
};

export default TopBarFilter;
