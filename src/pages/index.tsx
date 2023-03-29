import Head from "next/head";
import { Header, Slider } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />

        {/* <!--Google Font--> */}
        <link
          rel="stylesheet"
          href="http://fonts.googleapis.com/css?family=Dosis:400,700,500|Nunito:300,400,600"
        />
        {/* <!-- Mobile specific meta --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone-no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Slider />
      </main>
    </>
  );
}
