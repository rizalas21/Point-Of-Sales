"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import "./main.css";
import SideBar from "../component/sidebar/sidebar";
import SearchBar from "../component/searchbar/searchbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  if (status === "loading") return <p>Loading...</p>;

  if (!session || session === undefined) {
    redirect("/signin");
  }

  return (
    <>
      <SideBar />
      <div className="container-content">
        <SearchBar />
        <div className="container-children">{children}</div>
      </div>
    </>
  );
}
