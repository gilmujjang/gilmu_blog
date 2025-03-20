import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const subdomain = hostname?.split('.')[0];

  if (subdomain === 'resume') {
    return NextResponse.redirect(new URL('/resume', request.url));
  } else if (subdomain === 'blog') {
    return NextResponse.redirect(new URL('/blog', request.url));
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: '/:path*',
};
