import DetailsCeleb from "@/components/details-celeb/DetailsCeleb";
import { useRouter } from "next/router";
import React from "react";
import { fetchData } from "../api/fetchData";
import { Footer, Header } from "@/components";

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const queryCelebrities = { type: "person", value: id };
  const celebrity = await fetchData(queryCelebrities);

  return {
    props: {
      celebrity,
    },
  };
}

//FIXME: fix any type
const CelebrityDetails = ({ celebrity }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <DetailsCeleb celebrity={celebrity} />
      <Footer />
    </div>
  );
};

export default CelebrityDetails;
