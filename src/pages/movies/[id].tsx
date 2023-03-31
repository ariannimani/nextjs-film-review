import React from "react";
import { useRouter } from "next/router";
import { Footer, Header } from "@/components";
import Movie from "@/components/movie/Movie";
import { fetchMovies } from "@/pages/api/fetchMovies";

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const queryMovie = { type: "movie", value: id };
  const movie = await fetchMovies(queryMovie);
  const queryCredits = { type: "movie", value: `${id}/credits` };
  const credits = await fetchMovies(queryCredits);
  const queryReviews = { type: "movie", value: `${id}/reviews` };
  const reviews = await fetchMovies(queryReviews);
  const queryVideos = { type: "movie", value: `${id}/videos` };
  const videos = await fetchMovies(queryVideos);
  const queryRelated = { type: "movie", value: `${id}/similar` };
  const related = await fetchMovies(queryRelated);

  return {
    props: {
      movie,
      credits,
      reviews,
      videos,
      related,
    },
  };
}

const MovieSingle = ({ movie, credits, reviews, videos, related }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <Movie
        movie={movie}
        credits={credits}
        reviews={reviews}
        videos={videos.results}
        related={related}
      />
      <Footer />
    </>
  );
};

export default MovieSingle;
