import { CounterSchema } from 'entityes/Counter';
import { UserSchema } from 'entityes/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
