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
      const newState = [...action.payload, ...state];
      newState.splice(30, 1);
      return newState;
    },
    addChatMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setLiveChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;
