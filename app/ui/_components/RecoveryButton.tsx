import { Button } from '@/app/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import LoadingSpinner from './LoadingSpinner'; // Импортируйте компонент спиннера

interface SpinnerStep1Props {
  onSubmit: (e: React.FormEvent) => void;
  email: string;
}

const RecoverySpinnerStep1: React.FC<SpinnerStep1Props> = ({
  onSubmit,
  email,
}) => {
  const [showSpinnerStep1, setShowSpinnerStep1] = useState(false);
  const [errors, setErrors] = useState<{ email?: string[] }>({});

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    const regExp = /^[^\s@,]+@[^,\s@]+(\.[^\s@.,]+)+$/;
    return (
      regExp.test(trimmedEmail.toLowerCase()) && !/\.{2,}/.test(trimmedEmail)
    );
  };

  const handleClick = (e: React.FormEvent) => {
    if (!email || !validateEmail(email)) {
      setErrors({ email: ['Введите корректный email'] });
      return;
    }
    setShowSpinnerStep1(true);
    setErrors({});
    onSubmit(e);
  };

  return (
    <>
      {errors.email &&
        errors.email.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      <Button type="submit" className="mt-4 w-full" onClick={handleClick}>
        Continue
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
      {showSpinnerStep1 && <LoadingSpinner size="lg" color="white" />}
    </>
  );
};

const RecoverySpinnerStep2 = () => {
  {
    const [showSpinnerStep2, setShowSpinnerStep2] = useState(false);
    const { pending } = useFormStatus();

    const handleClick = () => {
      setShowSpinnerStep2(true);
    };
    return (
      <>
        <Button
          className="mt-4 w-full"
          aria-disabled={pending}
          type="submit"
          onClick={handleClick}
        >
          {pending ? 'Recovering' : 'Recovery'}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        {showSpinnerStep2 && <LoadingSpinner size="lg" color="white" />}
      </>
    );
  }
};

export { RecoverySpinnerStep1, RecoverySpinnerStep2 };
