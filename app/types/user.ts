export interface User {
    userid: string;
    name: string;
    email: string;
    plan: string;
    credits: number;
    [key: string]: any; // This allows for extension of user properties
}

export interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
}