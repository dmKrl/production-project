import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/hooks/redux';
import { decrement, increment } from '../model/slices/Counter.slice';

export const Counter = () => {
    const { counter } = useAppSelector((state) => state.CounterReducer);
    const dispatch = useAppDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={handleIncrement}>
                +
            </button>
            <button type="button" onClick={handleDecrement}>
                -
            </button>
        </div>
    );
};
