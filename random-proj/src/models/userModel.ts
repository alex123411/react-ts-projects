export interface IUser {
    name: string,
    email: string,
    password: string,
    role: UserRoles
}

export enum UserRoles {
    ADMIN = 'Admin',
    USER = 'User'
}