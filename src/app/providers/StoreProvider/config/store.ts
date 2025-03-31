import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer } from 'entityes/Counter';
import { UserReducer } from 'entityes/User';
import { LoginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

// const rootReducer = combineReducers({
//     UserReducer,
//     CounterReducer,
//     LoginReducer,
// });

const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: UserReducer,
    login: LoginReducer,
};

export const store = configureStore({
    reducer: rootReducers,
});

export const setupStore = (initialState: StateSchema) => {
    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState as StateSchema,
    });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
