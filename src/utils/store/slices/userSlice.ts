import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  uid?: string | null;
  name?: string | null;
  email?: string | null;
  photoURL?: string;
} | null;

const initialState: UserState = null;

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (_state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      const updatedUser = {
        ...(state as UserState),
        ...action.payload,
      };

      return updatedUser;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
