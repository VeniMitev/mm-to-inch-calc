import { useState } from 'react';
import numberWithFractionFormatter from '../utils/numberWithFractionFormatter';
import FractionInputButtons from './FractionInputButtons';
import useNumberInputFractions from '../hooks/useNumberInputFractions';
import { twMerge } from 'tailwind-merge';

export type Props = {
  id: string;
  name: string;
  value: number;
  onChange: (val: number) => void;
  className?: string;
  min: number;
  step: number;
  decimalScale?: number;
};

const FractionInput = (props: Props) => {
  const { value, className, step, min, id, name } = props;

  const [displayValue, setDisplayValue] = useState<string>(
    numberWithFractionFormatter(value),
  );

  const { handleChange, handleBlur, incrementValue, decrementValue } =
    useNumberInputFractions(props, displayValue, setDisplayValue);

  return (
    <div
      className={twMerge(
        'flex flex-row items-center justify-center mb-4 w-full',
        className,
      )}
    >
      <input
        className='border border-gray-300 rounded-l py-2 px-3 text-gray-800'
        id={id}
        name={name}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        step={step}
        min={min}
      />

      <FractionInputButtons
        value={value}
        incrementValue={incrementValue}
        decrementValue={decrementValue}
      />
    </div>
  );
};

export default FractionInput;
