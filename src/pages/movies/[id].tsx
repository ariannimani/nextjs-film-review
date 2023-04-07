import React from "react";
import { useRouter } from "next/router";
import { DetailsPreview } from "@/components/movies";
import { Footer, Header } from "@/components";
import { fetchData } from "@/pages/api/fetchData";
import { MovieProps, MoviesResult } from "@/types/movies/MoviesTypes";
import {
  CreditsResult,
  ReviewsResult,
  VideosResult,
} from "@/types/movies/CommonTypes";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const queryMovie = { type: "movie", value: id };
  const movie = await fetchData<MovieProps>(queryMovie);
  const queryCredits = { type: "movie", value: `${id}/credits` };
  const credits = await fetchData<CreditsResult>(queryCredits);
  const queryReviews = { type: "movie", value: `${id}/reviews` };
  const reviews = await fetchData<ReviewsResult>(queryReviews);
  const queryVideos = { type: "movie", value: `${id}/videos` };
  const videos = await fetchData<VideosResult>(queryVideos);
  const queryRelated = { type: "movie", value: `${id}/similar` };
  const related = await fetchData<MoviesResult>(queryRelated);

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

const MovieSingle = ({
  movie,
  credits,
  reviews,
  videos,
  related,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <DetailsPreview
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
