import DetailsCeleb from "@/components/movies/details-celeb/DetailsCeleb";
import { useRouter } from "next/router";
import React from "react";
import { fetchData } from "../api/fetchData";
import { Footer, Header } from "@/components";

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const queryCelebrities = { type: "person", value: id };
  const celebrity = await fetchData(queryCelebrities);
  const queryVideos = { type: "person", value: `${id}/combined_credits` };
  const films = await fetchData(queryVideos);

  return {
    props: {
      celebrity,
      films,
    },
  };
}

//FIXME: fix any type
const CelebrityDetails = ({ celebrity, films }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <DetailsCeleb {...{ films, celebrity }} />
      <Footer />
    </div>
  );
};

export default CelebrityDetails;
