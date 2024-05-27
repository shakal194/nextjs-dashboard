//'use client';

import Link from 'next/link';
//import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { fetchMerchants } from '@/app/lib/data';

export async function MerchantsList() {
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
              'h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex md:justify-start md:p-2 md:px-3',
            )}
          >
            <p className="">{merchant.merchant_name}</p>
          </Link>
        );
      })}
    </>
  );
}

/*export async function MerchantsListMobile({ onClose }) {
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
              'h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex md:justify-start md:p-2 md:px-3',
            )}
            onClick={onClose}
          >
            <p className="md:hidden">{merchant.merchant_name}</p>
          </Link>
        );
      })}
    </>
  );
}
*/
