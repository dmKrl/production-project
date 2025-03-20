import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entityes/Counter';

const rootReducer = combineReducers({
    CounterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
