import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";
import SignOut from "./components/sign-out";

export default async function AdminPage() {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect("/auth");
  }

  if (data.session.user.user_metadata?.role !== "admin") {
    return redirect("/unauthorized");
  }

  return (
    <div>
      <div> Welcome to admin page, {data.session.user.email}</div>
      <SignOut />
    </div>
  );
}
