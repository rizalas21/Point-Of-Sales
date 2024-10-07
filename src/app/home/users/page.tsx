"use client";

import UsersBox from "@/app/component/users/UsersBox";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Users() {
  const { data: session } = useSession();

  if (!session || session === undefined) return redirect("/");

  return <UsersBox />;
}
