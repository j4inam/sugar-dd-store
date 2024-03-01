import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL(
        `/api/auth/login?post_login_redirect_url=${request.nextUrl.pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/orders", "/api/orders"],
};
