"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component({ children }) {
  const { data: session } = useSession();
  console.log("session", session?.user);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>Sign out</button>
        {children}
      </>
    );
  }
  return (
    <>
      {/* Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button> */}
    </>
  );
}
