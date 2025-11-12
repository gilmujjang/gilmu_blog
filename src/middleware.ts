import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = new URL(request.url);

  const subdomain = hostname.split('.')[0];
  const rootDomain = hostname.replace(/^([^.]+\.)/, '');

  if (!hostname.includes('.') || hostname === rootDomain) {
    const newUrl = `${request.nextUrl.protocol === 'https:' ? 'https' : 'http'}://blog.${rootDomain}${url.pathname}${url.search}`;
    return NextResponse.redirect(newUrl);
  }

  if (subdomain === 'resume') {
    return NextResponse.rewrite(new URL(`/resume${url.pathname}`, request.url));
  }

  if (subdomain === 'blog') {
    return NextResponse.rewrite(new URL(`/blog${url.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
