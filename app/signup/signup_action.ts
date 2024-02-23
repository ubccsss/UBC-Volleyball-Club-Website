"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/src/utils/supabase/server_action_client"

import { LoginData } from "@/src/types/login"

export async function signup(loginData: LoginData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // type-casting here for convenience
  const data = {
    email: loginData["email"] as string,
    password: loginData["password"] as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  //TODO: switch the redirect once tryouts page is completed
  // redirect("/tryouts") 
  redirect("/")
}
