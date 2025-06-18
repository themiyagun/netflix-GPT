import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SeconderyContainer = () => {
  const movies = useSelector((store)=>store.movies.nowPlayingMovies)
  const popularMovies = useSelector((store)=>store.movies.popularMovies)
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies)
  const upCommingMovies = useSelector((store)=>store.movies.upCommingMovies)
  

  return (
    <div className='bg-black w-screen'>

    <div className='-mt-60 px-10 relative z-60'>
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top-Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upCommingMovies} />
    </div>
    </div>
  )
}

export default SeconderyContainer