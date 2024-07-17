import React from 'react';
import findNearestMarkValue from '../utils/findNearestMarkValue';
import numberWithFractionFormatter from '../utils/numberWithFractionFormatter';
import parseNumberWithFraction from '../utils/parseNumberWithFraction';
// import { Props } from '../NumberInputFractions';

const useNumberInputFractions = (
    props: Props,
    displayValue: string,
    setDisplayValue: (val: string) => void
) => {
    const {
        value,
        onChange,
        min,
        step,
        decimalScale,
    } = props;

    // Formatter: Converts the internal numeric value to a display string (fraction or decimal)
    const formatValue = (val: number): number => {
        return parseFloat(val.toFixed(decimalScale));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        const fractionOrPartialRegex = /^[0-9\s/.]*/;
        const fullFractionRegex =
            /^(1?[0-9]{1,2}|200)(\.\d+)?(?:\s(1?[0-9]|2[0-9]|3[0-2])\/(1?[0-9]|2[0-9]|3[0-2]))?$/i;

        if (inputValue === '') {
            setDisplayValue(''); // Update the display value directly from input

            onChange(min);
            // } else if (inputValue) {
        } else if (fractionOrPartialRegex.test(inputValue)) {
            // Temporarily update the display value to allow for partial inputs
            setDisplayValue(inputValue);

            // Only parse and format the value if it's a complete and valid fraction/decimal
            if (fullFractionRegex.test(inputValue)) {
                const parsedValue = parseNumberWithFraction(inputValue);

                if (!isNaN(parsedValue)) {
                    const formattedValue = formatValue(parsedValue);

                    onChange(formattedValue);
                } else {
                    console.log('isNaN(parsedValue)', parsedValue);
                }
            }
        } else {
            console.log('else', inputValue);

            setDisplayValue(displayValue); // Revert the display value to the previous value
        }
    };

    const handleBlur = () => {
        const nearestValue = findNearestMarkValue(value);

        const formattedValue = numberWithFractionFormatter(
            nearestValue
        ); // Format the actual value as a fraction

        setDisplayValue(formattedValue); // Update the display value to show the fraction
    };

    // Increment the value
    const incrementValue = () => {
        const newValue = Math.min(value + step, Number.MAX_SAFE_INTEGER); // Adjust step and max as needed

        const nearestValue = findNearestMarkValue(newValue);

        onChange(nearestValue);

        const formattedValue = numberWithFractionFormatter(
            nearestValue
        );

        setDisplayValue(formattedValue);
    };

    // Decrement the value
    const decrementValue = () => {
        const newValue = Math.max(value - step, min); // Ensure value doesn't go below min

        const nearestValue = findNearestMarkValue(newValue);

        onChange(nearestValue);

        const formattedValue = numberWithFractionFormatter(
            nearestValue
        );

        setDisplayValue(formattedValue);
    };

    return {
        handleChange,
        handleBlur,
        incrementValue,
        decrementValue,
    };
};

export default useNumberInputFractions;
