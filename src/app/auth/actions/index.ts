"use server";

import {
  createSupabaseServerClient,
  createSupabaseAdmin,
} from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
  role: string;
  status: string;
}) {
  const supabaseServer = await createSupabaseServerClient();
  const createResult = await supabaseServer.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        role: data.role,
      },
    },
  });

  // TODO: use createSupabaseServerClient instead of createSupabaseAdmin.
  // supabaseServer.from

  // const supabaseAdmin = await createSupabaseAdmin();
  // const createResult = await supabaseAdmin.auth.admin.createUser({
  //   email: data.email,
  //   password: data.password,
  //   email_confirm: true,
  //   user_metadata: {
  //     role: data.role,
  //   },
  // });

  if (createResult.error?.message) {
    return JSON.stringify(createResult);
  }

  const name = data.email.split("@").at(0);

  const userResult = await supabaseServer
    .from("user")
    .insert({ name, id: createResult.data.user?.id });

  if (userResult.error?.message) {
    return JSON.stringify(userResult);
  }

  const permissionResult = await supabaseServer.from("permission").insert({
    role: data.role,
    status: data.status,
    user_id: createResult.data.user?.id,
    created_by: createResult.data.user?.id,
  });

  return JSON.stringify(permissionResult);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/auth");
}
