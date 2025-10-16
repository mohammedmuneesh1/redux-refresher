import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../slice/movieSlice';

export const store = configureStore({
   //reducer are function specify how the state should change based on action
    reducer:{
        movies:movieReducer,
    },  
});



//redux toolkit helps to create slice 

// ✅ TypeScript types for useDispatch, useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//  const dispatch = useDispatch<AppDispatch>();
