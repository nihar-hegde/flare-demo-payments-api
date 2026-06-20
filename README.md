# Flare Demo Payments API

A small customer-style payments backend used to drive realistic incidents into
Flare.

This repo is intentionally separate from the main Flare monorepo so Flare can
connect to it through GitHub and investigate real code context.

The demo vendors the current local `@flare/node-sdk` under
`packages/flare-node-sdk` until the SDK is published.

## Setup

```bash
pnpm install
cp .env.example .env
```

Make sure the Flare API from the main app is running and that the ingest key
matches on both sides:

- Main Flare API: `INGEST_API_KEY=dev-flare-ingest-key`
- This demo app: `FLARE_INGEST_API_KEY=dev-flare-ingest-key`

## Run

```bash
pnpm dev
```

Default URL: `http://127.0.0.1:4000`

## Useful Routes

Success:

```bash
curl http://localhost:4000/api/checkout
```

Intentional failures:

```bash
curl http://localhost:4000/crash/db-pool
curl http://localhost:4000/crash/payment-timeout
curl http://localhost:4000/crash/coupon-null
curl http://localhost:4000/crash/missing-profile
curl http://localhost:4000/crash/stale-inventory
```

Realistic API routes with controlled scenarios:

```bash
curl "http://localhost:4000/api/checkout?scenario=db-pool"
curl "http://localhost:4000/api/checkout?scenario=payment-timeout"
curl "http://localhost:4000/api/customers/cus_founder?scenario=missing-profile"
curl "http://localhost:4000/api/inventory/pro_monthly?scenario=stale-inventory"
```
