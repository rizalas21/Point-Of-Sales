"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();

  async function logout(e: any) {
    e.preventDefault();
    await signOut({ redirect: true, callbackUrl: "/" });
  }

  if (!session || session === undefined) return redirect("/");

  return (
    <main className="dashboard">
      <p>dashboard</p>
      <div className="logout">
        <button onClick={(e) => logout(e)} title="logout">
          logout
        </button>
      </div>
    </main>
  );
}
