'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  ShieldCheckIcon,
  UserIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from './button';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { recoveryUser, handleEmailSubmit } from '@/app/lib/actions';
import LoadingSpinner from '@/app/ui/_components/LoadingSpinner';

export default function RecoveryForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [step, setStep] = useState(1); // 1 - Email, 2 - OTP and Password
  const [email, setEmail] = useState('');
  const [showSpinnerStep1, setShowSpinnerStep1] = useState(false);
  const [showSpinnerStep2, setShowSpinnerStep2] = useState(false);

  const initialState = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(recoveryUser, initialState);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrorMessage('');
      const result = await handleEmailSubmit(email);
      if (result?.errors) {
        setErrorMessage(result.errors.email[0]);
      } else {
        setShowSpinnerStep1(true);
        setTimeout(() => {
          setStep(2);
          setShowSpinnerStep1(false);
        }, 500);
      }
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  const handleSubmitStep2 = () => {
    setShowSpinnerStep2(true);
  };

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 p-6 dark:border dark:bg-black">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Reset password.
        </h1>
        {step === 1 && (
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="autofill:bprder-yellow-200 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-slate-800 dark:placeholder:text-slate-50"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50" />
              </div>
              <div id="email-error" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {errorMessage}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="mt-4 w-full"
              onClick={handleSubmitStep1}
            >
              Continue
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            {showSpinnerStep1 && <LoadingSpinner size="lg" color="white" />}
          </div>
        )}
        {step === 2 && (
          <>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="autofill:bprder-yellow-200 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-slate-800 dark:placeholder:text-slate-50"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    readOnly
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900  dark:text-slate-50 dark:peer-focus:text-slate-50" />
                </div>
                <div id="email-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.email &&
                    state.errors.email.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="otpcode"
                >
                  OTP Code
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-slate-800 dark:placeholder:text-slate-50"
                    id="otpcode"
                    type="text"
                    name="otpcode"
                    placeholder="Enter OTP Code"
                    required
                  />
                  <ShieldCheckIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50" />
                </div>
                <div id="otpcode-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.otpcode &&
                    state.errors.otpcode.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="password"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-slate-800 dark:placeholder:text-slate-50"
                    id="password"
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter password"
                    required
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50" />
                  {passwordVisible ? (
                    <EyeIcon
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50"
                    />
                  ) : (
                    <EyeSlashIcon
                      onClick={togglePasswordVisibility}
                      className=" absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-gray-500 peer-focus:text-gray-900 dark:text-slate-50 dark:peer-focus:text-slate-50"
                    />
                  )}
                </div>
                <div id="password-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.password &&
                    state.errors.password.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-white"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:border-slate-50 dark:bg-slate-800 dark:placeholder:text-slate-50"
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                  />
                  <KeyIcon className="peer-focus:text-gray-900cursor-pointer pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-slate-50 dark:peer-focus:text-slate-50" />
                </div>
              </div>
            </div>
            <Button
              className="mt-4 w-full"
              type="submit"
              onClick={handleSubmitStep2}
            >
              Sign Up
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            {!state.errors && showSpinnerStep2 && (
              <LoadingSpinner size="lg" color="white" />
            )}
          </>
        )}
        <div
          className="flex h-8 items-center space-x-1"
          aria-live="polite"
          aria-atomic="true"
        ></div>
      </div>
    </form>
  );
}
