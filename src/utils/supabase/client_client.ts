import { createBrowserClient } from "@supabase/ssr"

// Client Component client - To access Supabase from Client Components, which run in the browser.
// USE THIS CLIENT FOR CLIENT-SIDE CODE

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
