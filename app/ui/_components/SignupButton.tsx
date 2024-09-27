import { Button } from '@/app/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import LoadingSpinner from './LoadingSpinner'; // Импортируйте компонент спиннера

interface SpinnerStep1Props {
  onSubmit: (e: React.FormEvent) => void;
}

const RegistrationSpinnerStep1: React.FC<SpinnerStep1Props> = ({
  onSubmit,
}) => {
  const [showSpinnerStep1, setShowSpinnerStep1] = useState(false);

  const handleClick = (e: React.FormEvent) => {
    setShowSpinnerStep1(true);
    onSubmit(e); // Вызовите функцию handleSubmit
  };

  return (
    <>
      <Button type="submit" className="mt-4 w-full" onClick={handleClick}>
        Continue
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
      {showSpinnerStep1 && <LoadingSpinner size="lg" color="white" />}
    </>
  );
};

const RegistrationSpinnerStep2 = () => {
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
          {pending ? 'Registration' : 'Sign Up'}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        {showSpinnerStep2 && <LoadingSpinner size="lg" color="white" />}
      </>
    );
  }
};

export { RegistrationSpinnerStep1, RegistrationSpinnerStep2 };
