import Link from 'next/link';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import HeaderSession from '@/app/ui/_components/HeaderSession';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 ">
      <div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinsFishLogo />
        </Link>
        <div className="flex items-end items-center justify-center gap-2 p-6 text-white">
          <Link
            href="/about-us"
            className="transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b"
          >
            About Us
          </Link>
          <Link
            href="/contacts"
            className="transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b"
          >
            Contacts
          </Link>
          <Link
            href="/fees-pricing"
            className="transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b"
          >
            Pricing
          </Link>
          <HeaderSession />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
