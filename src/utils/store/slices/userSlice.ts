import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
	user: {
		uid?: string | null;
		name?: string | null;
		email?: string | null;
	} | null;
};

const initialState: UserState = { user: null };

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		addUser: (_state, action) => {
			return { user: action.payload };
		},
		updateUser: (state, action) => {
			const updatedUser = {
				...state.user,
				...action.payload,
			};

			return { user: updatedUser };
		},
		removeUser: () => {
			return { user: null };
		},
	},
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
