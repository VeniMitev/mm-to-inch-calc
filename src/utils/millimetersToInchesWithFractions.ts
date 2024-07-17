 // Function to simplify a fraction
 function simplifyFraction(numerator: number, denominator: number): string {
    const gcd = greatestCommonDivisor(numerator, denominator);
    const simplifiedNumerator = numerator / gcd;
    const simplifiedDenominator = denominator / gcd;

    return `${simplifiedNumerator}/${simplifiedDenominator}`;
}

// Function to find greatest common divisor (GCD)
function greatestCommonDivisor(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
}

function millimetersToInchesWithFractions(mm: number): string {
    // 1 inch = 25.4 mm
    const inches = mm / 25.4;
    const fractionalInches = Number((inches % 1).toFixed(5)); // Ensure precise comparison

    // Generate the fractions array programmatically
    const numFractions = 32; // You can adjust this number for more or fewer fractions
    const fractions: number[] = [0];

    for (let numerator = 0; numerator <= numFractions; numerator++) {
        for (
            let denominator = numFractions;
            denominator >= 2;
            denominator--
        ) {
            const fraction = numerator / denominator;

            if (fractions.includes(fraction)) {
                continue;
            }

            if (fraction <= 31 / 32) {
                fractions.push(fraction);
            }
        }
    }

    // Find the closest fraction
    let closestFraction = fractions[0];
    let minDifference = Math.abs(fractionalInches - closestFraction);

    for (const fraction of fractions) {
        const difference = Math.abs(fractionalInches - fraction);
        if (difference < minDifference) {
            closestFraction = fraction;
            minDifference = difference;
        }
    }

    // Calculate the whole and fractional parts
    const wholePart = Math.floor(inches);
    const fractionalPart = closestFraction;

    if (fractionalInches.toFixed(2) === minDifference.toFixed(2)) {
        return `${wholePart}`;
    }

    // Format the result with fractions if they exist
    if (fractionalPart > 0) {
        const fractionalNumerator = Math.round(
            fractionalPart * numFractions
        );
        const simplifiedFraction = simplifyFraction(
            fractionalNumerator,
            numFractions
        );

        if (wholePart === 0) {
            return `${simplifiedFraction}`;
        } else {
            return `${wholePart} ${simplifiedFraction}`;
        }
    } else {
        return `${wholePart}`;
    }
}

export default millimetersToInchesWithFractions;