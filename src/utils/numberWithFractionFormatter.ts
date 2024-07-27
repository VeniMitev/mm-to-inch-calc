import data from '../constants/fractions.json';

const numberWithFractionFormatter = (val: number): string => {
  const whole = Math.floor(val);
  const decimalPart = val - whole;

  const closestMark = data.reduce((prev, curr) =>
    Math.abs(decimalPart - parseFloat(curr.value)) <
    Math.abs(decimalPart - parseFloat(prev.value))
      ? curr
      : prev,
  );

  if (!closestMark.label) return `${whole}`;

  if (whole === 0) return `${closestMark.label}`;

  return `${whole} ${closestMark.label}`;
};

export default numberWithFractionFormatter;
