import Link from 'next/link';
import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import HeaderSession from '@/app/ui/_components/HeaderSession';
import MobileMenu from '@/app/ui/_components/MobileMenu';

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinsFishLogo />
        </Link>

        <div className="flex items-end items-center justify-center gap-2 p-6">
          <Link
            href="/about-us"
            className="hidden text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:block"
          >
            About Us
          </Link>
          <Link
            href="/contacts"
            className="hidden text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:block"
          >
            Contacts
          </Link>
          <Link
            href="/fees-pricing"
            className="hidden text-white transition-all delay-200 duration-300 ease-in-out hover:border-b focus:border-b lg:block"
          >
            Pricing
          </Link>
          <HeaderSession />
          <ThemeButton />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
