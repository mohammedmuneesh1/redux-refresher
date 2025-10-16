import React from 'react'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store/store';
import { addMovie } from '../redux/slice/movieSlice';

 const MovieInput = () => {

    const [newMovie,setNewMovie] = React.useState('');

    const dispatch = useDispatch<AppDispatch>();



    const handleAddMovies = ()=>{
        if(!newMovie || newMovie === "" || !newMovie.trim()) return alert('hello how are you');
        dispatch(addMovie(newMovie));
        setNewMovie('');
    }

  return (
<>
<input
type='text'
onChange={(e)=>setNewMovie(e.target.value)}
/>
<button
onClick={handleAddMovies}
>Add Movies</button>
</>
  )
}

export default MovieInput;
