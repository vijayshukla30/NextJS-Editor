import { Role } from "./models/user";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.email = user.email;
        token.avatar = user.avatar;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.avatar = token.avatar;
        session.user.name = token.name;
      }

      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const nextUrl = request.nextUrl?.pathname;
      const isOnAdminPage = nextUrl?.startsWith("/admin");
      const isOnBlogPage = nextUrl?.startsWith("/blog");
      const isOnLoginPage = nextUrl?.startsWith("/login");
      const isOnRegisterPage = nextUrl?.startsWith("/register");
      const isAdmin = user?.role === Role.ROLE_ADMIN;

      if (isOnAdminPage && !isAdmin) {
        return false;
      }
      if (isOnBlogPage && !user) {
        return false;
      }

      if ((isOnLoginPage || isOnRegisterPage) && user) {
        if (user.role === Role.ROLE_ADMIN) {
          return Response.redirect(new URL("/admin", request.nextUrl));
        } else {
          return Response.redirect(new URL("/", request.nextUrl));
        }
      }
      return true;
    },
  },
};
