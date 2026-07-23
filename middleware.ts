import { NextResponse, type NextRequest } from "next/server";

const pathFromCodes = (codes: number[]) => String.fromCharCode(...codes);

const removedPublicPaths = new Set(
  [
    [47, 109, 45, 114, 101, 115, 117, 109, 101, 46, 112, 100, 102],
    [47, 109, 117, 104, 97, 109, 109, 97, 100, 45, 102, 97, 121, 97, 122, 45, 114, 101, 115, 117, 109, 101, 46, 112, 100, 102],
    [47, 114, 101, 99, 111, 109, 109, 101, 110, 100, 97, 115, 46, 112, 110, 103],
    [47, 99, 104, 114, 111, 110, 111, 99, 97, 46, 112, 110, 103],
    [47, 97, 99, 99, 111, 109, 112, 108, 105, 113, 46, 112, 110, 103],
  ].map(pathFromCodes),
);

export function middleware(request: NextRequest) {
  if (!removedPublicPaths.has(request.nextUrl.pathname.toLowerCase())) {
    return NextResponse.next();
  }

  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "X-Robots-Tag": "noindex, noarchive, nosnippet",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

export const config = {
  matcher: ["/:path*"],
};
