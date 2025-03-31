import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_USER_AUTHDATA } from 'shared/const';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_USER_AUTHDATA);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_USER_AUTHDATA);
        },
    },
});

export const { setAuthData, initAuthData, logout } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
