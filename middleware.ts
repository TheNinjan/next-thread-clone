import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ 
    // debug: true,
    clockSkewInSeconds:30,
  publicRoutes: ["/","/create-thread","/api/webhook/clerk"],

  ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};