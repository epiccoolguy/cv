import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { defaultLocale, locales } from "@/i18n.config";

// Glue packages together
type NegotiatorRequest = { headers: { [key: string]: string } };
function getNegotiatorRequest(request: NextRequest): NegotiatorRequest {
  const negotiatorHeaders: NegotiatorRequest = {
    headers: {},
  };

  for (const [key, value] of request.headers.entries()) {
    negotiatorHeaders.headers[key] = value;
  }

  return negotiatorHeaders;
}

// Get the preferred locale
function getLocale(request: NextRequest) {
  const negotiatorReq = getNegotiatorRequest(request);

  let languages = new Negotiator(negotiatorReq).languages();

  return match(languages, locales, defaultLocale); // -> 'en-US'
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /
  // The new URL is now /en/
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|images).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
