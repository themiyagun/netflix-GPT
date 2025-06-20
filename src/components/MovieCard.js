
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath ) return null; 
  return (
    <div className='w-48'> 
      <img alt='movie card' src={IMG_CDN_URL + posterPath }></img>
    </div>
  )
}

export default MovieCard