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

export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=b81c20b4ad589c35fcc33ec48b338339&page=1&language=en-US";
  const res = await fetch(url);
  const data: Data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const movies = data.results;
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
