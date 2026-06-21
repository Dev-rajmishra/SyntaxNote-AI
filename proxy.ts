import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  // 1. Initialize the baseline response with the incoming request headers
  let supabaseResponse = NextResponse.next({
    request,
  });

  // 2. Initialize the Supabase Client safely inside the request context
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        // setAll ONLY receives cookiesToSet — no second headers argument in @supabase/ssr
        setAll(cookiesToSet) {
          // Sync cookies back to the mutating request object
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          // Regenerate the baseline response mapping the mutated request context
          supabaseResponse = NextResponse.next({
            request,
          });
          // Set cookies on the final outgoing response header package
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // 3. IMPORTANT: Call getUser() to trigger session token refresh.
  // This MUST run on every request — it silently refreshes the auth token
  // stored in cookies so that server-side createClient() calls in API routes
  // can always find a valid session.
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;

  const { pathname } = request.nextUrl;

  // 4. Define Route Rules cleanly using your requested matching groups
  // Change "/login" to "/sign-in" depending on your actual sign-in file route structure
  const isProtected =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/notes") ||
    pathname.startsWith("/text-note") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/settings");
  const isAuthPage =
     pathname === "/signup" || pathname === "/sign-in";

  // Rule A: Protected Route Guard — Kick unauthenticated guests to login
  if (isProtected && !isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  // Rule B: Auth Page Guard — Prevent logged-in users from viewing login forms
  if (isAuthPage && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/text-note";
    return NextResponse.redirect(url);
  }

  // Rule C: Root URL "/" & "/dashboard" Router — Redirect to text-note
  if (pathname === "/" || pathname === "/dashboard") {
    if (isLoggedIn) {
      const url = request.nextUrl.clone();
      url.pathname = "/text-note";
      return NextResponse.redirect(url);
    } else {
      if (pathname === "/dashboard") {
        const url = request.nextUrl.clone();
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
      }
      return NextResponse.rewrite(new URL("/", request.url));
    }
  }

  // 5. Return the cookie-synchronized response state safely
  return supabaseResponse;
}

// 6. Ensure the Edge config matcher captures all relevant routes seamlessly
export const config = {
  matcher: [
    "/",
    "/home",
    "/dashboard/:path*",
    "/notes/:path*",
    "/text-note/:path*",
    "/signup",
    "/sign-in",
    "/service"
  ],
};
