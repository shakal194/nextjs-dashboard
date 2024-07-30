'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function HeaderSession() {
  const { data: session, status } = useSession();

  return session ? (
    <Link href="/dashboard" className="hover:underline focus:underline">
      Dashboard
    </Link>
  ) : (
    <Link href="/login" className="hover:underline focus:underline">
      Login
    </Link>
  );
}
