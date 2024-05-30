import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "./lib/db/middlerwareHelper"

export async function middleware(request: NextRequest) {
  const { supabase, response } = await updateSession(request)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && request.nextUrl.pathname.startsWith("/notes")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  if (user && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  return response
}
