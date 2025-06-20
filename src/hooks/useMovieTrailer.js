import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

    const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  const getBackGroundVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // (video) => video.type === "Trailer" && video.name === "Official Trailer"  // correct way to filter videos where type === "Trailer" and name === "Official Trailer":
    const trailer = filterData.length ? filterData[1] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
   !trailerVideo && getBackGroundVideo();
  }, []);
}

export default useMovieTrailer