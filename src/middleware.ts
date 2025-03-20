import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const subdomain = hostname?.match(/^([^.]+)\./)?.[1];
  const url = new URL(request.url);

  if (subdomain === 'resume') {
    return NextResponse.rewrite(new URL('/resume', request.url));
  } else if (subdomain === 'blog') {
    const path = url.pathname;
    const newUrl = new URL(`/blog${path}`, request.url);
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
