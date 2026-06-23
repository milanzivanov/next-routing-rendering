import { NextResponse } from "next/server";

export function proxy(request) {
  // console.log("Proxy request received:", request);

  return NextResponse.next();
}

export const config = {
  matcher: "/news"
};
