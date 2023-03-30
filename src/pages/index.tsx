import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import {
  Footer,
  Header,
  MovieItems,
  Slider,
  Trailers,
  MainHead,
} from "@/components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setGenres } from "@/redux/slices/genresSlice";

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
  genre: any;
  map(arg0: (movie: any) => JSX.Element): any;
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

export interface Genres {
  genres: Genre[];
}

export interface Genre {
  color: string;
  id: number;
  name: string;
}

export const getServerSideProps: GetServerSideProps<{
  data: Data;
  genres: Genres;
}> = async (context) => {
  const query = context.query?.value || "now_playing";
  const url = `https://api.themoviedb.org/3/movie/${query}?api_key=b81c20b4ad589c35fcc33ec48b338339&page=1&language=en-US`;
  const res = await fetch(url);
  const data: Data = await res.json();

  const urlGen = `https://api.themoviedb.org/3/genre/movie/list?api_key=b81c20b4ad589c35fcc33ec48b338339&language=en-US`;
  const responseGen = await fetch(urlGen);
  const genres: Genres = await responseGen.json();

  return {
    props: {
      data,
      genres,
    },
  };
};

const Home = ({
  data,
  genres,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const movies = data.results;
  const allGenres = genres.genres;
  // Assign a random color to each genre
  const genresWithColors = allGenres.map((genre) => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return { ...genre, color: randomColor };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGenres(genresWithColors));
  }, [genresWithColors, dispatch]);

  return (
    <>
      <MainHead />
      <main>
        <Header />
        <Slider movies={movies} />
        <MovieItems />
        <Trailers />
        <Footer />
      </main>
    </>
  );
};

export default Home;
