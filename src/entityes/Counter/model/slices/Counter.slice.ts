import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
    counter: 0,
};

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
    },
});

export const { increment, decrement } = CounterSlice.actions;
export const CounterReducer = CounterSlice.reducer;
