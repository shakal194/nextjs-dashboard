import Link from 'next/link';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import HeaderSession from '@/app/ui/_components/HeaderSession';

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinsFishLogo />
        </Link>
        <div className="flex items-end items-center justify-center gap-2 p-6 text-white">
          <Link href="/about-us" className="hover:underline focus:underline">
            About Us
          </Link>
          <Link href="/contacts" className="hover:underline focus:underline">
            Contacts
          </Link>
          <Link href="/pricing" className="hover:underline focus:underline">
            Pricing
          </Link>
          <HeaderSession />
          <ThemeButton />
        </div>
      </div>
    </>
  );
};

export default Header;
