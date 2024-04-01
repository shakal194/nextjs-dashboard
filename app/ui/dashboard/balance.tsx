import { BanknotesIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchBtcBalance } from '@/app/lib/data';

const iconMap = {
  balance: BanknotesIcon,
};

export default async function BalanceWrapper() {
  const balance = await fetchBtcBalance();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <Balance title="Balance" value={balance} type="balance" />
    </>
  );
}

export function Balance({
  title,
  value,
  type,
}: {
  title: string;
  value: number;
  type: 'balance';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
