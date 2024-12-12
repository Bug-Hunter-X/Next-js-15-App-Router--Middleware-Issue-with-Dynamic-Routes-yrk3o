# Next.js 15 App Router Middleware Bug

This repository demonstrates a bug encountered in Next.js 15's App Router when using middleware with dynamic routes.  Middleware functions unexpectedly, potentially resulting in incorrect behavior or failed authentication checks.

## Bug Description

The middleware is not triggered correctly when navigating to a dynamic route. This leads to unintended consequences, such as bypassing authentication or fetching incorrect data.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to a dynamic route (e.g., `/product/1`).
5. Observe that the middleware does not execute correctly.

## Expected Behavior

The middleware should execute correctly regardless of the route (static or dynamic).

## Actual Behavior

Middleware is skipped or behaves inconsistently on dynamic routes.

## Solution

The solution might involve ensuring correct route matching within the middleware or a potential bug fix from the Next.js team.  See the `bugSolution.js` file for a potential solution (if available).

## Next.js Version

Next.js 15