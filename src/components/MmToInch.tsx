import { useState } from 'react';
import millimetersToInchesWithFractions from '../utils/millimetersToInchesWithFractions';

const MmToInch = () => {
  const [valueInMm, setValueInMm] = useState(0);

  const valueInInches = millimetersToInchesWithFractions(valueInMm);

  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <div className='flex flex-col items-center justify-center mb-4 w-full'>
        <label
          className='mb-2 text-lg font-bold text-gray-800'
          htmlFor='mm-to-inch'
        >
          Enter mm to convert to inches
        </label>
        <input
          className='border border-gray-300 rounded py-2 px-3 text-gray-800'
          id='mm-to-inch'
          name='mm-to-inch'
          value={valueInMm}
            onChange={(e) => setValueInMm(Number(e.target.value))}

        />
      </div>

      <p className='text-lg font-bold text-gray-800 mb-4'>
        Result: <span id='result'>{valueInInches}</span> inches
      </p>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4'>
        Copy to clipboard
      </button>
    </div>
  );
};

export default MmToInch;
