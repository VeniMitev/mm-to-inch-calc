import data from '../constants/fractions.json';

const findNearestMarkValue = (
    val: number,
): number => {
    // Separate the whole number part and the fractional part
    const wholePart = Math.floor(val);
    const fractionalPart = val - wholePart;

    // Initialize the nearest mark with the first mark's value and the smallest difference with the first mark's fractional part
    let nearestMarkValue = parseFloat(data[0].value);
    let smallestDiff = Math.abs(nearestMarkValue - fractionalPart);

    // Iterate over the MARKS to find the closest fractional part
    data.forEach((mark) => {
        const markValue = parseFloat(mark.value);
        const diff = Math.abs(markValue - fractionalPart);

        if (diff < smallestDiff) {
            nearestMarkValue = markValue;
            smallestDiff = diff;
        }
    });

    // Combine the whole part and the nearest fractional part
    const nearestValue = wholePart + nearestMarkValue;

    // Format the combined value to a fraction using your existing numberWithFractionFormatter function
    return nearestValue;
};

export default findNearestMarkValue;
