type Args = {
  e: React.KeyboardEvent;
  incrementValue: () => void;
  decrementValue: () => void;
};

const keyDownAction = ({ e, incrementValue, decrementValue }: Args) => {
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    incrementValue();
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    decrementValue();
  }

  if (e.key === 'Enter') {
    e.preventDefault();
  }
};

export default keyDownAction;
