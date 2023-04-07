import { CreditsItem } from "@/components/movies/credit-lists/components";
import Pagination from "@/components/movies/pagination/Pagination";
import TopBarFilter from "@/components/movies/top-bar-filter/TopBarFilter";
import React, { useState, FC } from "react";

interface FilmographyProps {
  data: any;
}
const Filmography: FC<FilmographyProps> = ({ data }) => {
  const cast = data && (data.cast ? data.cast : data.crew && data.crew);
  const [castNumber, setCastNumber] = useState(5);
  const selectedCasts: any = cast.slice(0, castNumber);

  return (
    <div>
      <TopBarFilter total={data && data.cast.length} title="Films/Tv-Shows" />
      {selectedCasts &&
        selectedCasts.map((cast: any) => (
          <CreditsItem
            key={cast.id}
            id={cast.id}
            image={cast.poster_path}
            name={cast.title}
            description={cast.character}
            category={"movies"}
          />
        ))}
      <Pagination
        page={1}
        title={"Movies/TvShows"}
        total_pages={Math.ceil(cast.length / castNumber)}
        perPageNumber={castNumber}
        setPerPageNumber={setCastNumber}
      />
    </div>
  );
};

export default Filmography;
