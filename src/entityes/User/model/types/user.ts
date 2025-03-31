export type User = {
    id: number;
    username: string;
};

export interface UserSchema {
    authData?: User,
}
