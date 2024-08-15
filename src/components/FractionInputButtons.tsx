import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import { twMerge } from 'tailwind-merge';
import keyDownAction from '../utils/keyDownAction';

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
    'p-0.5 text-gray-800 cursor-pointer hover:bg-gray-100 user-select-none focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-opacity-25';

  return (
    // peer-focus is used to style the button when the input in the parent component is focused
    <div className='flex flex-col justify-center items-start h-full cursor-pointer border border-gray-300 border-l-0 peer-focus:border peer-focus:border-gray-400 peer-focus:outline-none peer-focus:border-1 peer-focus:border-l-0 rounded-tr rounded-br'>
      <button
        tabIndex={-1}
        className={twMerge(buttonClass, 'border-b-0 border-l-0 rounded-tr')}
        onClick={(e) => {
          e.preventDefault();

          incrementValue();
        }}
        onKeyDown={(e) =>
          keyDownAction({
            e,
            incrementValue,
            decrementValue,
          })
        }
      >
        <ChevronUp size={16} strokeWidth={1} color='black' />
      </button>

      <button
        tabIndex={-1}
        className={twMerge(
          buttonClass,
          'border-t-0 border-l-0 rounded-br',
          // Style button as disabled if the value is 0
          value === 0 ? 'hover:bg-gray-50 cursor-default bg-gray-50' : '',
        )}
        onClick={(e) => {
          if (value === 0) return;

          e.preventDefault();
          decrementValue();
        }}
        onKeyDown={(e) =>
          keyDownAction({
            e,
            incrementValue,
            decrementValue,
          })
        }
      >
        <ChevronDown
          size={16}
          strokeWidth={1}
          // Style chevron as disabled if the value is 0
          color={value === 0 ? 'gray' : 'black'}
        />
      </button>
    </div>
  );
};

export default FractionInputButtons;
