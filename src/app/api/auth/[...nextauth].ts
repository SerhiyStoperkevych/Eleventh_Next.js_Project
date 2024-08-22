import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOFLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id;
            return session;
        },
    },
});