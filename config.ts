export const WEB_SITE = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEl_URL}`
  : `http://localhost:3001`;
