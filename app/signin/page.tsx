import Header from '../ui/_components/Header';
import SignForm from '@/app/ui/signin-form';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Login Page',
  description: 'Login to CoinsFish Crypto payments Gateway.',
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex justify-center">
          <SignForm />
        </div>
        <div className="mt-2 flex flex-col">
          <div className="flex justify-center">
            <Link href="/recovery">
              <span className="text-center text-black underline transition-all delay-200 duration-300 ease-in-out hover:text-blue-800 focus:text-blue-800 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400">
                Forgot your password?
              </span>
            </Link>
          </div>
          <div className="flex justify-center">
            Not a member?{' '}
            <Link href="/recovery" className="ml-[5px]">
              <span className="underline transition-all delay-200 duration-300 ease-in-out hover:text-blue-800 focus:text-blue-800 dark:text-white dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400">
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
