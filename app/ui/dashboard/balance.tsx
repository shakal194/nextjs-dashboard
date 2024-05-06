import { BanknotesIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchBtcBalance, fetchMerchants } from '@/app/lib/data';
//import Link from 'next/link';

const iconMap = {
  balance: BanknotesIcon,
};

export default async function BalanceWrapper() {
  /*const merchants = await fetchMerchants();

  const merchant = merchants.map((merchant: any) => {
    return (
      <Link
        key={merchant.merchant_name}
        href={`merchants/${merchant.merchant_id}`}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        {merchant.merchant_name}
        <p>{merchant.merchant_id}</p>
      </Link>
    );
  });*/

  //const { balanceInUsdBinance, balanceInUsdMinerstat } =
  const { balanceInUsdBinance } = await fetchBtcBalance();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      {/*merchant*/}
      <Balance
        title="Balance"
        //value={balanceInUsdBinance || balanceInUsdMinerstat}
        value={balanceInUsdBinance}
        type="balance"
      />
    </>
  );
}

export function Balance({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'balance';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-sky-100">
      <div className="flex">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">Available {title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl py-8 text-2xl`}
      >
        {typeof value === 'number' ? `$${value}` : value}
      </p>
    </div>
  );
}
