import { DefaultUser, Session } from "next-auth";

declare module 'next-auth' {
    interface User extends DefaultUser {
        id: string;
        role: 'admin' | 'user';
    }

    interface Session {
        user: {
            id: string;
            role: 'admin' | 'user';
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        role: 'admin' | 'user';
    }
}