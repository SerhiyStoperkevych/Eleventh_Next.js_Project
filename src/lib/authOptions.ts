import { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import User from "@/models/User";
import dbConnect from "./dbConnect";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials) {
                await dbConnect();
                const user = await User.findOne({ email: credentials?.email });

                if (user && user.password === credentials?.password) {
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id as string;
            session.user.role = token.role as string;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
    },
};