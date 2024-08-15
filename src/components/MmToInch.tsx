import { useState } from 'react';
import millimetersToInchesWithFractions from '../utils/millimetersToInchesWithFractions';
import DecimalInput from './DecimalInput';
import inchesWithFractionsToMillimeters from '../utils/inchesWithFractionsToMillimeters';
import copyToClipboard from '../utils/copyToClipboard';
import { Slide, toast } from 'react-toastify';

const MmToInch = () => {
  const [valueInMm, setValueInMm] = useState(0);
  const step = 1;

  const valueInInches = millimetersToInchesWithFractions(valueInMm);

  const tolerance = inchesWithFractionsToMillimeters(valueInInches);

  const incrementValue = () => {
    const calc = (valueInMm + step).toFixed(2);

    setValueInMm(Number(calc));
  };

  const decrementValue = () => {
    const calc = (valueInMm - step).toFixed(2);

    setValueInMm(Number(calc));
  };

  const notify = () =>
    toast.success(`Copied ${valueInInches} to clipboard!`, {
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
          htmlFor='mm-to-inch'
        >
          Enter mm to convert to inches
        </label>
        <DecimalInput
          id='mm-to-inch'
          name='mm-to-inch'
          valueInMm={valueInMm}
          setValueInMm={(val: number) => setValueInMm(val)}
          step={step}
          min={0}
          incrementValue={incrementValue}
          decrementValue={decrementValue}
          className='py-2 px-3 text-gray-800'
        />
      </div>

      <p className='text-lg font-bold text-gray-800 mb-2 select-none'>
        Result: <span id='result'>{valueInInches}</span> inches
      </p>

      <p className='text-md font-semibold text-gray-700 mb-4 select-none'>
        Tolerance:{' '}
        <span id='tolerance'>{(valueInMm - tolerance).toFixed(3)}</span> mm
      </p>

      <button
        onClick={() => {
          copyToClipboard(valueInInches);
          notify();
        }}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full select-none'
      >
        Copy to clipboard
      </button>
    </div>
  );
};

export default MmToInch;
