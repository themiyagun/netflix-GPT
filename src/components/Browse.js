import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpCommingMovies from "../hooks/useUpCommingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();

  const gpt = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {gpt ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SeconderyContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
