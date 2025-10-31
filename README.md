# HimuVerse Marketplace — Full Starter

This is the Full Marketplace Starter (Option 2) containing:

- Next.js frontend + serverless API routes (pages directory present at repo root)
- Mock DB (lib/mock-db.js) and Prisma schema (prisma/schema.prisma)
- Product listing, product pages, seller dashboard, admin placeholders
- PayPal checkout stub and UPI provider stubs (Cashfree/Paytm/PayU/GooglePay)
- Play Store purchase verification endpoint stub
- Legal pages (terms/privacy/refund) and Contact page

## How to deploy (quick)
1. Upload all files to GitHub repo root (pages folder must be at root).
2. Import repo on Vercel and set env vars if you want payments/Play verify.
3. Deploy — Vercel will run `npm install` and `npm run build`.

## Env variables (optional for production features)
DATABASE_URL, NEXTAUTH_SECRET, NEXT_PUBLIC_PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PLAY_SERVICE_ACCOUNT_JSON, PLAY_PACKAGE_NAME, CASHFREE_APP_ID, etc.

Remember: This repo uses mock endpoints for payments and topups. Replace with real provider keys for production.
