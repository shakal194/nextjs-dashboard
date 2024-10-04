import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { CoinsNav } from '@/app/ui/dashboard/CoinsNav';
import { Merchants } from '@/app/ui/dashboard/merchants/Merchants';
import { MerchantsList } from '@/app/ui/dashboard/merchants/MerchantsList';
import MerchantsMobile from '@/app/ui/dashboard/MerchantsMobile';
/*import { CoinsNavMobile } from '@/app/ui/dashboard/CoinsNav';
import { MobileMerchants } from '@/app/ui/dashboard/merchants/Merchants';
import { MerchantsListMobile } from '@/app/ui/dashboard/merchants/MerchantsList';*/

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex min-h-40 items-end justify-start rounded-md bg-blue-600 p-4"
        href="/"
      >
        <div className="flex items-center text-white">
          <CoinsFishLogo />
        </div>
      </Link>
      <div className="flex grow flex-row items-center justify-between space-x-2 md:flex-col md:items-stretch md:space-x-0 md:space-y-2 md:overflow-y-auto">
        <NavLinks />
        {/*<CoinsNav />
        <Merchants />
  <MerchantsList />*/}
        <MerchantsMobile>
          <CoinsNav />
          <Merchants />
          <MerchantsList />
        </MerchantsMobile>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-100 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 dark:bg-gray-800 dark:hover:bg-gray-400 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
