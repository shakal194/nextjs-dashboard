import { Spinner } from '@nextui-org/spinner';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'lg',
  color = 'white',
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Spinner size={size} color={color} />
    </div>
  );
};

export default LoadingSpinner;
