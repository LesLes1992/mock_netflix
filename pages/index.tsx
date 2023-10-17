import Billboard from "@/components/Billboard";
import Footer from "@/components/Footer";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal onClose={closeModal} visible={isOpen} />
      <NavBar />
      <Billboard />
      <div className='pb-20'>
        <MovieList title='Trending Now' data={movies} />
      </div>
      <Footer />
    </>
  );
}
