import { createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState: User = {
    id: 0,
    username: '',
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

// export const { } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
