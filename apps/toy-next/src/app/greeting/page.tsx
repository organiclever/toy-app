'use client';

import { useSearchParams } from 'next/navigation';

export default function Greeting() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-black">
        {name ? `Hello ${name}` : 'Hello'}
      </h1>
    </main>
  );
}
