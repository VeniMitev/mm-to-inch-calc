import { twMerge } from 'tailwind-merge';
import FractionInputButtons from './FractionInputButtons';

type Props = {
  id: string;
  name: string;
  valueInMm: number;
  setValueInMm: (val: number) => void;
  className?: string;
  step: number;
  min: number;
  incrementValue: () => void;
  decrementValue: () => void;
};

const DecimalInput = ({
  id,
  name,
  valueInMm,
  setValueInMm,
  className,
  step,
  min,
  incrementValue,
  decrementValue,
}: Props) => {
  return (
    <div
      className={twMerge(
        'flex flex-row items-center justify-center mb-4 w-full',
        className,
      )}
    >
      {/* removing the number input arrows, since we have our own buttons */}
      <style>
        {`
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            input[type="number"] {
                -moz-appearance: textfield;
            }
        `}
      </style>

      <input
        className='border border-gray-300 rounded-l py-2 px-3 text-gray-800'
        id={id}
        type='number'
        step={step}
        name={name}
        min={min}
        value={valueInMm}
        onChange={(e) => setValueInMm(Number(e.target.value))}
      />

      <FractionInputButtons
        value={valueInMm}
        incrementValue={incrementValue}
        decrementValue={decrementValue}
      />
    </div>
  );
};

export default DecimalInput;
