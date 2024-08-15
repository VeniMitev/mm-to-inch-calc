import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
  incrementValue: () => void;
  decrementValue: () => void;
};
const FractionInputButtons = ({
  incrementValue,
  decrementValue,
  value,
}: Props) => {
  const buttonClass =
    'p-0.5 text-gray-800 cursor-pointer hover:bg-gray-100';

  return (
    <div className='flex flex-col justify-center items-start h-full cursor-pointer border border-gray-300 border-l-0 peer-focus:border peer-focus:border-gray-400 peer-focus:outline-none peer-focus:border-1 peer-focus:border-l-0 rounded-tr-md rounded-br-md'>
      <div
        role='button'
        tabIndex={-1}
        className={twMerge(buttonClass, 'border-b-0 border-l-0 rounded-tr')}
        onClick={(e) => {
          e.preventDefault();

          incrementValue();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            incrementValue();
          }

          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
      >
        <ChevronUp size={16} strokeWidth={1} color='black' />
      </div>

      <div
        role='button'
        tabIndex={-1}
        className={twMerge(buttonClass, 'border-t-0 border-l-0 rounded-br')}
        onClick={(e) => {
          if (value === 0) return;

          e.preventDefault();
          decrementValue();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            decrementValue();
          }

          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}
      >
        <ChevronDown
          size={16}
          strokeWidth={1}
          color={value === 0 ? 'gray' : 'black'}
        />
      </div>
    </div>
  );
};

export default FractionInputButtons;
