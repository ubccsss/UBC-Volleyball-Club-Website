'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/src/utils/supabase/server_action_client'

export async function logout() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  
  console.log("Initiating Logout")

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}