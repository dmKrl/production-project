import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/ComponentRender/ComponentRender';
import { Counter } from './Counter';
import { CounterSchema } from '../model/types/CounterSchema';
import { CounterReducer, decrement, increment } from '../model/slices/Counter.slice';

describe('Counter UI Testing', () => {
    test('increment counter', () => {
        ComponentRender(<Counter />);

        const initialState: CounterSchema = { counter: 10 };

        expect(CounterReducer(initialState, increment())).toEqual({ counter: 11 });
    });
    test('decrement counter', () => {
        ComponentRender(<Counter />);

        const initialState: CounterSchema = { counter: 10 };

        expect(CounterReducer(initialState, decrement())).toEqual({ counter: 9 });
    });
    test('increment with undefined state', () => {
        ComponentRender(<Counter />);

        expect(CounterReducer(undefined, increment())).toEqual({ counter: 1 });
    });
    test('decrement with undefined state', () => {
        ComponentRender(<Counter />);

        expect(CounterReducer(undefined, decrement())).toEqual({ counter: -1 });
    });
});
