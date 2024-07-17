import { useState } from 'react';
import inchesWithFractionsToMillimeters from '../utils/inchesWithFractionsToMillimeters';
import FractionInput from './FractionInput';

const InchToMm = () => {
  const [valueInch, setValueInch] = useState(0);

  const valueInMm = inchesWithFractionsToMillimeters(valueInch);

  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <div className='flex flex-col items-center justify-center mb-4 w-full'>
        <label
          className='mb-2 text-lg font-bold text-gray-800'
          htmlFor='inch-to-mm'
        >
          Enter inches to convert to mm
        </label>
        {/* <input
          className='border border-gray-300 rounded py-2 px-3 text-gray-800'
          id='inch-to-mm'
          name='inch-to-mm'
          value={valueInch}
          onChange={(e) => setValueInch(Number(e.target.value))}
        /> */}

        <FractionInput
          id='inch-to-mm'
          name='inch-to-mm'
          value={valueInch}
          onChange={(val: number) => setValueInch(val)}
          min={1}
          step={0.0625}
          decimalScale={4}
          className='py-2 px-3 text-gray-800'
        />
      </div>

      <p className='text-lg font-bold text-gray-800 mb-4'>
        Result: <span id='result'>{valueInMm.toFixed(3)}</span> mm
      </p>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4'>
        Copy to clipboard
      </button>
    </div>
  );
};

export default InchToMm;
