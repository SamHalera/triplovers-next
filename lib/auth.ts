import { Session, User, type NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const body = {
          identifier: credentials.email,
          password: credentials.password,
        };

        const res = await fetch(
          `${process.env.STRAPI_API_URL}/api/auth/local`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              // Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
            },
            body: JSON.stringify({
              identifier: credentials.email,
              password: credentials.password,
            }),
          }
        );
        const userInfoStrapi = await res.json();
        // Check if the user exists

        if (
          userInfoStrapi.error?.message === "Invalid identifier or password"
        ) {
          console.log("not existing");
          return null;
        }

        const user = {
          strapiToken: userInfoStrapi.jwt,
          ...userInfoStrapi.user,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        return {
          ...token,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          strapiToken: user.strapiToken,
          strapiId: user.id,
        };
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      return {
        ...session,
        user: {
          ...session.user,
          strapiId: token.strapiId,
          strapiToken: token.strapiToken,
          username: token.username,
          firstname: token.firstname,
          lastname: token.lastname,
        },
      };
    },
  },
};
