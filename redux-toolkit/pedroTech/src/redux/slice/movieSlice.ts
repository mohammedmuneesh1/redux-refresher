import { createSlice,  } from "@reduxjs/toolkit";




interface initialStateInterface{
    //eslint-disable-next-line
    moviesState:{id:number,name:string}[];
}


const initialState:initialStateInterface ={
    moviesState:[
        {id:1,name:'interstellar'},
        {id:2,name:'harry porter'},
    ],
}

const movieSlice = createSlice({
    name:'movie',
    initialState:initialState,
    reducers:{
        addMovie:(state,action )=>{
            const itemsLength = state.moviesState.length;
            state.moviesState.push({id:itemsLength+1,name:action.payload});
            // state.moviesState.push(action.payload);
        },
            //eslint-disable-next-line
        removeMovie:(state,action)=>{
            state.moviesState = state.moviesState.filter((val)=>val.id !== action.payload);

        },

    }

})


export const {addMovie,removeMovie} = movieSlice.actions;
export default movieSlice.reducer;