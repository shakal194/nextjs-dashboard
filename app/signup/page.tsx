import CoinHubLogo from '@/app/ui/coinhub-logo';
import SignupForm from '@/app/ui/signup-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <div className="text-white">
            <CoinHubLogo />
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <SignupForm />
      </div>
    </main>
  );
}
