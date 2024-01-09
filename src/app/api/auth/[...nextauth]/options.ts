import CredentialsProvider from "next-auth/providers/credentials";
import { Auth, GetUser } from "../../../apiClient/Utils/route";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials: any) {
        try {
          const authResult = await Auth(
            credentials.email,
            credentials.password
          );

          if (authResult.token) {
            var jwt = require("jsonwebtoken");
            const token = authResult.token;
            const decodedToken = jwt.decode(token);
            const uid = decodedToken.sub;

            const user = await GetUser(uid, token);

            return user;
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        return {
          ...token,
          name: user.firstName + " " + user.lastName,
          role: user.role,
          status: user.status,
        };
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: token.role,
          status: token.status,
        },
      };
    },
  },
};
