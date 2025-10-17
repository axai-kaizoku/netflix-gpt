import { createSlice } from "@reduxjs/toolkit";

export type ChatMessage = {
  id: string;
  name: string;
  message: string;
};

const initialState: ChatMessage[] = [];

export const liveChatSlice = createSlice({
  name: "livechat",
  initialState,
  reducers: {
    setLiveChat: (state, action) => {
      const newState = [...state, ...action.payload];
      const randL = Math.floor(Math.random() * 6) + 1000;
      console.log(randL);
      if (newState?.length > randL) {
        newState?.splice(0, newState?.length - randL);
      }
      return newState;
    },
    addChatMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setLiveChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;
