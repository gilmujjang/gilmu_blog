import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const subdomain = hostname?.match(/^([^.]+)\./)?.[1];

  if (subdomain === 'resume') {
    return NextResponse.rewrite(new URL('/resume', request.url));
  } else if (subdomain === 'blog') {
    return NextResponse.rewrite(new URL('/blog', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: '/:path*',
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
