import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      name: "Dana-Veera-Sura-Karna",
    },
    {
      id: 2,
      name: "Narthana Shala",
    },
  ],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: `${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 8)}`, // genreates a new id like "71896-rfe0h5" random
        name: action.payload,        
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state,action) => {
        state.movies = state.movies.filter((movie)=>  action.payload !== movie.id);
    },
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
