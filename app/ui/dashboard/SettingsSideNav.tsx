import Link from 'next/link';
import SettingsNavLinks from '@/app/ui/dashboard/SettingsNav-links';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';

export default function SettingsSideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="flex items-center text-white">
          <CoinsFishLogo />
        </div>
      </Link>
      <div className="flex grow flex-row items-center space-x-2 md:flex-col md:items-stretch md:space-x-0 md:space-y-2 md:overflow-y-auto">
        <SettingsNavLinks />
      </div>
    </div>
  );
}
