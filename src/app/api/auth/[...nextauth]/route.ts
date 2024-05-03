import NextAuth from "next-auth/next";
import { authOptions } from "./options";

// Creating a NextAuth handler using the provided authentication options
const handler = NextAuth(authOptions);

// Exporting the handler for both GET and POST requests
export { handler as GET, handler as POST };
