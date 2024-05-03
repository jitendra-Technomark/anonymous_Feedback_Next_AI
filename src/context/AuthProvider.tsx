"use client";

import { SessionProvider } from "next-auth/react";

// Component to provide session information to its children
export default function App({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
