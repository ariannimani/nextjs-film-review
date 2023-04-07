export const fetchData = async <T>(query: {
  type: string;
  value?: string;
  page?: number;
  query?: string;
}): Promise<T> => {
  const url = `https://api.themoviedb.org/3/${query.type}/${
    query.value
  }?api_key=b81c20b4ad589c35fcc33ec48b338339${
    query.page ? "&page=" + query.page : ""
  }&language=en-US${query.query ? "&query=" + query.query : ""}`;
  const res = await fetch(url);
  const data: T = await res.json();
  return data;
};
