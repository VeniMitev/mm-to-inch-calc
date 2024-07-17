import findNearestMarkValue from './findNearestMarkValue';

const parseNumberWithFraction = (value: string): number => {
    const [whole, fraction] = value.trim().split(/ (.*)/s);
    if (fraction === undefined) {
        return parseFloat(whole);
    }
    const [numerator, denominator] = fraction.split('/');
    const fractionAsDecimal = parseInt(numerator) / parseInt(denominator);

    const nearest = findNearestMarkValue(fractionAsDecimal);

    return parseInt(whole) + nearest;
};

export default parseNumberWithFraction;