export interface Data {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const fetchMovies = async (query: {
  type: string;
  value?: string;
  page?: number;
}) => {
  const url = `https://api.themoviedb.org/3/${query.type}/${
    query.value
  }?api_key=b81c20b4ad589c35fcc33ec48b338339${
    query.page ? "&page=" + query.page : ""
  }&language=en-US`;
  const res = await fetch(url);
  const data: Data = await res.json();
  return data;
};
