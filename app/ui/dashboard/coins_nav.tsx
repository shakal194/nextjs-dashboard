import Image from 'next/image';
import { fetchBtcBalance } from '@/app/lib/data';
import coins from '@/app/ui/_data/coin_slider-data.json';

export default async function CoinsNav() {
  const { balanceInUsdBinance, balanceInCurrency } = await fetchBtcBalance();

  return (
    <div className="hidden md:block">
      {coins.map((coin) => (
        <div
          key={coin.title}
          className="flex cursor-pointer items-center justify-between hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3"
        >
          <div className="flex items-center">
            <div className="mr-2 flex h-11 w-11 items-center justify-center rounded-3xl">
              <Image
                className="h-11 w-11"
                width="44"
                height="44"
                src={coin.image_dashobard}
                alt={coin.title}
              />
            </div>
            <div>{coin.title}</div>
          </div>
          <div className="flex flex-col">
            <div>{balanceInCurrency}</div>
            <div>
              {typeof balanceInUsdBinance === 'number'
                ? `$${balanceInUsdBinance}`
                : balanceInUsdBinance}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
