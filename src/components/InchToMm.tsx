import { useState } from 'react';
import inchesWithFractionsToMillimeters from '../utils/inchesWithFractionsToMillimeters';
import FractionInput from './FractionInput';
import copyToClipboard from '../utils/copyToClipboard';
import { toast, Slide } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

const InchToMm = () => {
  const [valueInch, setValueInch] = useState(0);

  const valueInMm = inchesWithFractionsToMillimeters(valueInch);

  const result = valueInMm.toFixed(3);

  const notify = () =>
    toast.success(`Copied ${result}mm to clipboard!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });

  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8'>
      <div className='flex flex-col items-center justify-center gap-1 w-full'>
        <label
          className='text-lg font-bold text-gray-800 select-none'
          htmlFor='inch-to-mm'
        >
          Enter inches to convert to mm
        </label>

        <FractionInput
          id='inch-to-mm'
          name='inch-to-mm'
          value={valueInch}
          onChange={(val: number) => setValueInch(val)}
          min={0}
          step={0.03125}
          decimalScale={4}
          className='py-2 px-3 text-gray-800'
        />
      </div>

      <p className='text-lg font-bold text-gray-800 mb-4 select-none'>
        Result: <span id='result'>{result}</span> mm
      </p>

      {/* TODO: Implement copy to clipboard function */}
      <button
        onClick={() => {
          copyToClipboard(result);
          notify();
        }}
        disabled={result === '0.000'}
        className={twMerge(
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full select-none',
          result === '0.000' &&
            'cursor-not-allowed bg-blue-200 hover:bg-blue-200',
        )}
      >
        Copy to clipboard
      </button>
    </div>
  );
};

export default InchToMm;
