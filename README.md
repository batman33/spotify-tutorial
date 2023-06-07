# Spotify tutorial

This is the spotify app developed by [tutorial](https://www.youtube.com/watch?v=2aeMRB8LL4o&ab_channel=CodeWithAntonio).

## Used library

- Next 13.4
- React
- Stripe
- Supabase
- PostgreSQL
- Tailwind

## Getting Started

### Configure app:

Rename the file `example.env`to `.env`

```
# Got from https://supabase.com/
NEXT_PUBLIC_SUPABASE_URL={NEXT_PUBLIC_SUPABASE_URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY={NEXT_PUBLIC_SUPABASE_ANON_KEY}
SUPABASE_SERVICE_ROLE_KEY={SUPABASE_SERVICE_ROLE_KEY}

# Got from https://stripe.com/
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about libraries, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn React.js](https://react.dev/learn) - an interactive react.js tutorial.
- [Tailwind Documentation](https://tailwindcss.com/docs/installation) - learn about tailwindcss features and API.
- [Stripe Documentation](https://stripe.com/docs) - learn about Stripe features and API.
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase 
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - learn about PostgreSQL features and API.features and API.