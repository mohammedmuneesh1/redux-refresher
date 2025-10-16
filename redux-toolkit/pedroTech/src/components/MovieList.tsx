import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store/store';
import { removeMovie } from '../redux/slice/movieSlice';


 const MovieList = () => {
  const movies = useSelector((state:RootState)=>state.movies?.moviesState);
  const  dispatch = useDispatch<AppDispatch>();



  const deleteMovieByIdFn = (id:number)=>{
    dispatch(removeMovie(id));
  }

  return (
    <>
    <h1>Movie List</h1>
    {
      movies?.map((val)=>(
     <div key={val.id}>{val?.name}
     &nbsp;&nbsp;
     <button
     onClick={()=>deleteMovieByIdFn(val.id)}
     >
      delete movie
     </button>
     </div>   
      ))
    }


    </>
  )
}



export default MovieList;