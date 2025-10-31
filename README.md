# HimuVerse Marketplace — Starter

This is a starter Next.js project scaffold for an Amazon-style marketplace with:
- Product listing (free & paid)
- Seller dashboard (add products)
- PayPal checkout stub for web purchases
- Play Store purchase verification stub for in-app topups
- Prisma schema placeholder
- Legal pages (terms/privacy/refund)

## Quick local run
1. Install dependencies: `npm install`
2. Run dev: `npm run dev`

## Env variables
Set in Vercel or .env locally:
- DATABASE_URL
- NEXTAUTH_SECRET
- NEXT_PUBLIC_PAYPAL_CLIENT_ID
- PAYPAL_CLIENT_SECRET
- PLAY_SERVICE_ACCOUNT_JSON (JSON string for service account)
- PLAY_PACKAGE_NAME

## Play integration notes
- Use a Google Cloud service account with `androidpublisher` role.
- For testing Play purchases, use internal test tracks and license testers in Play Console.

This repo is a scaffold; replace mock logic with real DB and payment credentials before going public.


## UPI Payment Gateways (added)

This project includes stubs for integrating Indian UPI/payment providers (Cashfree, Paytm, PayU, Google Pay).

Add the following environment variables in Vercel or your deployment platform to enable them (examples):

```
CASHFREE_APP_ID=
CASHFREE_SECRET=
CASHFREE_ENV=TEST
PAYTM_MID=
PAYTM_KEY=
PAYTM_WEBSITE=
PAYTM_CHANNEL_ID=WEB
PAYU_KEY=
PAYU_SALT=
GOOGLE_PAY_MERCHANT_ID=
GOOGLE_PAY_MERCHANT_NAME=
```

Follow provider docs linked in `docs/payment_gateways.md` to complete integration.
