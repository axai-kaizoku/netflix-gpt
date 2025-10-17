import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import searchReducer from "./slices/searchSlice";
import liveChatReducer from "./slices/liveChatSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
    livechat: liveChatReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
