"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/src/utils/supabase/server_action_client"

import { LoginData } from "@/src/types/login"

export async function login(LoginData: LoginData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: LoginData["email"] as string,
    password: LoginData["password"] as string,
  }

  console.log("Initiating Login")

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    // TODO: Add Error Handling with UI to communicate the error
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect("/")
}
