import {
  Footer,
  Header,
  MovieItems,
  Slider,
  Trailers,
  MainHead,
} from "@/components";

export default function Home() {
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
}
