import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import movieSlice from "../features/movie/movieSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    movie: movieSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
