import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectDB from "./dbConfig";
import { Role, User } from "./models/user";
import { authConfig } from "./auth.config";
const GITHUB_ID = process.env.GITHUB_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;

const login = async (credentials) => {
  try {
    connectDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong Credentials");
    }
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Wrong Credentials");
    }
    return user;
  } catch (error) {
    throw new Error("Failed to login");
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "github") {
        connectDB();
        try {
          const user = await User.findOne({ username: profile.login });
          console.log("user", user);
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              name: profile.name,
              avatar: profile.avatar_url,
              role: Role.ROLE_USER,
              password: "1234567",
            });
            console.log("Saving User Record");
            await newUser.save();
          }
        } catch (error) {
          console.log("error", error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
