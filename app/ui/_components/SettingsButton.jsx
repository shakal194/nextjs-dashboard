'use client';
import Link from 'next/link';
import { Cog8ToothIcon } from '@heroicons/react/24/solid';

const SettingsRedirect = () => {
  return (
    <Link
      href="/dashboard/settings/security"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
    >
      <Cog8ToothIcon className="h-5 w-5" />
    </Link>
  );
};

export default SettingsRedirect;
