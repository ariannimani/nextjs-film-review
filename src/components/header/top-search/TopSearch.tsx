import React from "react";

const searchOptions = ["TV show", "Movies", "Other"];

const TopSearch = () => {
  return (
    <div className="top-search">
      <select>
        {searchOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search for a movie, TV Show or celebrity that you are looking for"
      />
    </div>
  );
};

export default TopSearch;
