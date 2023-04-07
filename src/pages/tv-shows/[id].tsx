import React from "react";
import { useRouter } from "next/router";
import { DetailsPreview } from "@/components/movies";
import { Footer, Header } from "@/components";
import { fetchData } from "@/pages/api/fetchData";
import { InferGetServerSidePropsType } from "next";
import { TvShowProps, TvShowsResult } from "@/types/movies/TvShowsTypes";
import {
  CreditsResult,
  ReviewsResult,
  VideosResult,
} from "@/types/movies/CommonTypes";

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const queryMovie = { type: "tv", value: id };
  const movie = await fetchData<TvShowProps>(queryMovie);
  const queryCredits = { type: "tv", value: `${id}/credits` };
  const credits = await fetchData<CreditsResult>(queryCredits);
  const queryReviews = { type: "tv", value: `${id}/reviews` };
  const reviews = await fetchData<ReviewsResult>(queryReviews);
  const queryVideos = { type: "tv", value: `${id}/videos` };
  const videos = await fetchData<VideosResult>(queryVideos);
  const queryRelated = { type: "tv", value: `${id}/similar` };
  const related = await fetchData<TvShowsResult>(queryRelated);

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

const TvShows = ({
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

export default TvShows;
