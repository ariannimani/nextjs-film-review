import React, { useState } from "react";
import debounce from "lodash/debounce";
import useSWR from "swr";
import { Data, fetchData } from "@/pages/api/fetchData";
import Link from "next/link";
import Image from "next/image";
import { getInitials } from "@/utils";

interface SearchProps {
  search: string;
  category: string;
}

interface SearchOptionsProps {
  id: number;
  title: string;
  value: string;
}

const searchOptions: SearchOptionsProps[] = [
  { id: 1, title: "Movies", value: "movie" },
  { id: 2, title: "TV show", value: "tv" },
  { id: 3, title: "Celebrities", value: "person" },
];

const TopSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<SearchProps>({
    search: "",
    category: "tv",
  });
  const query = {
    type: "search",
    value: searchTerm.category,
    query: searchTerm.search,
    page: 1,
  };
  const { data, error, isLoading } = useSWR<Data, Error>(query, fetchData);
  const searchResults = data?.results;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm((prev) => ({ ...prev, search: event.target.value }));
  };

  return (
    <>
      <div className="top-search">
        <select
          value={searchTerm.category}
          onChange={(e) =>
            setSearchTerm((prev) => ({
              ...prev,
              category: e.target.value,
            }))
          }
        >
          {searchOptions.map((option) => (
            <option value={option.value} key={option.id}>
              {option.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          value={searchTerm.search}
          onChange={handleInputChange}
        />
      </div>
      {searchResults && searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result) => (
              <Link
                href={`/${
                  searchTerm.category === "movies"
                    ? "movies"
                    : searchTerm.category === "tv"
                    ? "tv"
                    : "celebrities"
                }/${result.id}`}
                key={result.id}
              >
                <div className="search-result-item">
                  {result.backdrop_path ? (
                    <Image
                      loading="lazy"
                      src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                      alt={result.title}
                      width={100}
                      height={100}
                    />
                  ) : (
                    <h4 className="no-image">{getInitials(result.title)}</h4>
                  )}
                  <li>{result.title}</li>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TopSearch;
