'use client';

import { PlusIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { useState } from 'react';
import { createMerchant } from '@/app/lib/actions';

export default function MerchantForm() {
  const [errorMessage, setErrorMessage] = useState('');

  const initialState = {
    message: null,
    errors: {},
  };
  const [state, dispatch] = useFormState(createMerchant, initialState);

  return (
    //<form onSubmit={handleSubmit} className="space-y-3">
    <form action={dispatch} className="space-y-3">
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
            className="w-full rounded-md border-gray-300 p-2"
            placeholder="Merchant name"
          />
        </div>
        <div id="merchant_name-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.merchant_name &&
            state.errors.merchant_name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
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
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-xs text-red-500 md:text-sm">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}

function MerchantButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending} type="submit">
      {pending ? 'Creating' : ' Create merchant'}
      <PlusIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
