import Image from 'next/image';
import { fetchBtcBalance } from '@/app/lib/data';
import coins from '@/app/ui/_data/coin_slider-data.json';

export default async function CoinsNav() {
  const { balanceInUsd, balanceInCurrency } = await fetchBtcBalance();

  return (
    <div>
      <div className="hidden md:block">
        {coins.map((coin) => (
          <div key={coin.title} className="flex items-center justify-between">
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
              <div>${balanceInUsd}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
