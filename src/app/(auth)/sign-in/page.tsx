"use client";

import { useSession, signIn, signOut } from "next-auth/react";

// Component to display user authentication status and provide sign-in/sign-out functionality
export default function Component() {
  // Fetching session data
  const { data: session } = useSession();

  // Rendering content based on session status
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="bg-orange-500 px-3 py-1 m-4 rounded"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
