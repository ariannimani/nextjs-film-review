import DetailsCeleb from "@/components/movies/details-celeb/DetailsCeleb";
import { useRouter } from "next/router";
import React from "react";
import { fetchData } from "../api/fetchData";
import { Footer, Header } from "@/components";
import { InferGetServerSidePropsType } from "next";
import { CelebrityProps } from "@/types/celebrities/CelebritiesTypes";
import { MovieProps } from "@/types/movies/MoviesTypes";

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  const queryCelebrities = { type: "person", value: id };
  const celebrity = await fetchData<CelebrityProps>(queryCelebrities);
  const queryVideos = { type: "person", value: `${id}/combined_credits` };
  const films = await fetchData<MovieProps>(queryVideos);

  return {
    props: {
      celebrity,
      films,
    },
  };
}

const CelebrityDetails = ({
  celebrity,
  films,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(celebrity, films);
  return (
    <div>
      <Header />
      <DetailsCeleb {...{ films, celebrity }} />
      <Footer />
    </div>
  );
};

export default CelebrityDetails;
