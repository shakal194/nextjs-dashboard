'use client';

import { PlusIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { useState, useEffect } from 'react';
import { createMerchant } from '@/app/lib/actions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const MerchantForm = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createMerchant, initialState);

  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length > 0) {
      const errorMessages = Object.values(state.errors).flat().join(', ');
      Notify.init({ distance: '30px' });
      Notify.failure(errorMessages);
    }
  }, [state.errors]);

  return (
    <form
      action={dispatch}
      className="mx-auto my-0 w-full space-y-3 lg:w-[500px]"
    >
      <div className="mb-4">
        <label htmlFor="merchant_name" className="mb-2 block font-bold">
          Enter a merchant name
        </label>
        <div className="relative">
          <input
            type="text"
            id="merchant_name"
            name="merchant_name"
            required
            className="w-full rounded-md border-gray-300 p-2 dark:bg-gray-500 dark:placeholder:text-white"
            placeholder="Merchant name"
          />
        </div>
        {/*<div id="merchant_name-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.merchant_name &&
            state.errors.merchant_name.map((error: string) => (
              <p
                className="mt-2 text-sm text-red-500 dark:text-red-400"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>*/}
      </div>

      <div className="flex justify-end">
        <MerchantButton />
      </div>

      <div
        className="flex h-8 items-center space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <div className="mt-2 flex">
            <ExclamationCircleIcon className="mr-2 h-5 w-5 text-red-500 dark:text-red-400" />
            <p className="text-xs text-red-500 dark:text-red-400 md:text-sm">
              {errorMessage}
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default MerchantForm;

function MerchantButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending} type="submit">
      {pending ? 'Creating' : ' Create merchant'}
      <PlusIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
