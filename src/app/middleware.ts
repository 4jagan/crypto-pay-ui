import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("🚀 ~ middleware ~ pathname:", pathname)
  // ...existing code...
}