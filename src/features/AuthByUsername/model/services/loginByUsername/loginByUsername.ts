import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'entityes/config/i18n/i18n';
import { User } from 'entityes/User';
import { setAuthData } from 'entityes/User/model/slices/User.slice';
import { LOCAL_USER_AUTHDATA } from 'shared/const';

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            localStorage.setItem(LOCAL_USER_AUTHDATA, JSON.stringify(response.data));
            thunkAPI.dispatch(setAuthData(response.data));

            if (!response.data) {
                throw Error();
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
