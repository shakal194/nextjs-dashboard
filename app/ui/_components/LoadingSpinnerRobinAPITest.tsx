import { Spinner } from '@nextui-org/spinner';

interface LoadingSpinnerRobinAPITest {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const LoadingSpinnerRobinAPITest: React.FC<LoadingSpinnerRobinAPITest> = ({
  size = 'sm',
  color = 'white',
}) => {
  return (
    <div className="ml-4 flex items-center justify-center bg-black bg-opacity-50">
      <Spinner size={size} color={color} />
    </div>
  );
};

export default LoadingSpinnerRobinAPITest;
