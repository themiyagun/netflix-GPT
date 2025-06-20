import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addUpCommingMovies } from '../utils/moviesSlice';

const useUpCommingMovies = () => {
 const dispatch = useDispatch();

   const upCommingMovies = useSelector((store) => store.movies.upCommingMovies);

  const getUpCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpCommingMovies(json.results))
  };

  useEffect(() => {
   !upCommingMovies && getUpCommingMovies();

  }, []);
}

export default useUpCommingMovies
