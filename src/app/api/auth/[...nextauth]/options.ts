import CredentialsProvider from "next-auth/providers/credentials";
import { UserDto, AuthResult, LoginDto } from "@/app/apiClient/Client";
import { Auth, GetUser } from "../../../apiClient/Utils/route";
import User from "../../../../types/next-auth";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username:",
          type: "text",
          placeholder: "your-username",
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
            credentials.username,
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
