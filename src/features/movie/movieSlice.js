import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newdisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.recommended = action.payload.recommend;
      state.newdisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export default movieSlice;
export const { setMovie } = movieSlice.actions;

export const selectRecommended = (state) => state.movie.recommended;
export const selectNewdisney = (state) => state.movie.newdisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
