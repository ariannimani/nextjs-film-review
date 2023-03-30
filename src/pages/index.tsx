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

export interface Genres {
  genres: Genre[];
}

export interface Genre {
  color: string;
  id: number;
  name: string;
}

type Colors = {
  [key: string]: string;
};
const colors: Colors = {
  Action: "#FF0000",
  Adventure: "#FFA500",
  Animation: "#ADD8E6",
  Comedy: "#FFD700",
  Crime: "#808080",
  Documentary: "#808080",
  Drama: "#1E90FF",
  Family: "#87CEEB",
  Fantasy: "#006400",
  History: "#FFD700",
  Horror: "#8B0000",
  Music: "#BA55D3",
  Mystery: "#800000",
  Romance: "#FF69B4",
  "Science Fiction": "#800080",
  "TV Movie": "#808080",
  Thriller: "#000000",
  War: "#808000",
  Western: "#A52A2A",
};

export const getServerSideProps: GetServerSideProps<{
  genres: Genres;
}> = async (context) => {
  const urlGen = `https://api.themoviedb.org/3/genre/movie/list?api_key=b81c20b4ad589c35fcc33ec48b338339&language=en-US`;
  const responseGen = await fetch(urlGen);
  const genres: Genres = await responseGen.json();

  return {
    props: {
      genres,
    },
  };
};

const Home = ({
  genres,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const allGenres = genres.genres;
  // Assign a random color to each genre
  const genresWithColors = allGenres.map((genre) => {
    return {
      ...genre,
      color: colors[genre.name],
    };
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
        <Slider />
        <MovieItems />
        <Trailers />
        <Footer />
      </main>
    </>
  );
};

export default Home;
