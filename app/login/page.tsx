import HeaderSettings from '../ui/_components/Headers/HeaderSettings';
import LoginForm from '@/app/ui/_components/Forms/login-form';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CoinsFish Login Page',
  description: 'Login to CoinsFish Crypto payments Gateway.',
};

export default function LoginPage() {
  return (
    <>
      <HeaderSettings />
      <main className="flex flex-col p-6">
        <div className="flex justify-center">
          <LoginForm />
        </div>
        <div className="mt-2 flex justify-center">
          Not a member?{' '}
          <Link href="/registration" className="ml-[5px]">
            <span className="underline transition-all delay-200 duration-300 ease-in-out hover:text-blue-800 focus:text-blue-800 dark:text-white dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400">
              Sign up
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
