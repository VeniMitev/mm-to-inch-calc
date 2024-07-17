import { ChevronDown, ChevronUp } from 'tabler-icons-react';

type Props = {
  incrementValue: () => void;
  decrementValue: () => void;
};
const FractionInputButtons = ({ incrementValue, decrementValue }: Props) => {
//   const buttonStyle = {
//     cursor: 'pointer',
//     border: 'none',
//     background: 'transparent',
//     padding: '0 0.25em',
//     height: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     fontSize: '1em',
//     width: '100%',
//   };

   const buttonClass = 'border border-gray-300 rounded py-1 px-1 text-gray-800 cursor-pointer';

  return (
    <div
      //   style={{
      //     cursor: 'pointer',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     justifyContent: 'center',
      //     alignItems: 'end',
      //     width: '100%',
      //     borderLeft: '1px solid lightgray',
      //   }}
      className='flex flex-col justify-center items-center w-1/4 h-full border-l border-gray-300 cursor-pointer'
    >
      <div
        // type='button'
        tabIndex={-1}
        // style={buttonStyle}
        className={buttonClass}
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
      <hr
        // style={{
        //   width: '100%',
        //   margin: '0',
        //   border: 'none',
        //   borderTop: '1px solid lightgray',
        // }}
        className='w-full border-t border-gray-300'
      />
      <div
        // type='button'
        tabIndex={-1}
        // style={buttonStyle}
        className={buttonClass}
        onClick={(e) => {
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
        <ChevronDown size={16} strokeWidth={1} color='black' />
      </div>
    </div>
  );
};

export default FractionInputButtons;
