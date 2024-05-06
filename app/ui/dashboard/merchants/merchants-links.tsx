//'use client';

import Link from 'next/link';
//import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { fetchMerchants } from '@/app/lib/data';

export default async function MerchantsList() {
  //const pathname = usePathname();
  const merchants = await fetchMerchants();

  return (
    <>
      {merchants.map((merchant: any) => {
        return (
          <Link
            key={merchant.merchant_name}
            href={`/dashboard/merchants/${merchant.merchant_id}`}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3',
            )}
          >
            <p className="hidden md:block">{merchant.merchant_name}</p>
          </Link>
        );
      })}
    </>
  );
}
