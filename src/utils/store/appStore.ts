import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import searchReducer from "./slices/searchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
