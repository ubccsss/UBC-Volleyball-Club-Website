import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
//import type { Database } from '@/lib/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session }} = await supabase.auth.getSession()
  const paths = ['/login','/register']

  /* WORK AROUND FOR SETTING REFRESH TOKEN COOKIE
  if (session) {
    res.cookies.set('supabase.auth.token', session.access_token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
    res.cookies.set('supabase.auth.refresh_token', session.refresh_token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      secure: process.
        env.NODE_ENV === 'production',
    })
  } else if (req.cookies.get('supabase.auth.token')) {
    const response = await supabase.auth.refreshSession({
      refresh_token: req.cookies.get('supabase.auth.refresh_token')!.value,
    })
  }
  */

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    const url = req.nextUrl.clone()   
    if (!paths.includes(url.pathname)) {
      url.pathname = '/login'
      //return NextResponse.redirect(url)   
    } 
  }

  return res
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}