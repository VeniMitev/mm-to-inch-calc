function inchesWithFractionsToMillimeters(
    inchesWithFractions: string | number
): number {
    if (!inchesWithFractions) {
        return 0;
    }

    if (typeof inchesWithFractions === 'string') {
        // Split the input into whole and fractional parts
        const parts = inchesWithFractions.split(' ');

        let wholeInches = 0;
        let fractionalNumerator = 0;
        let fractionalDenominator = 0;

        if (parts.length === 1) {
            // If there's only one part (no space), it might be a whole number of inches or a fraction without a whole number
            const potentialFraction = parts[0].split('/');

            if (potentialFraction.length === 2) {
                // It's a fraction without a whole number
                fractionalNumerator = parseFloat(potentialFraction[0]);
                fractionalDenominator = parseFloat(potentialFraction[1]);
            } else {
                // It's a whole number of inches
                wholeInches = parseFloat(parts[0]);

                return wholeInches * 25.4;
            }
        } else if (parts.length === 2) {
            // If there are two parts, it's a mixed number (e.g., "2 1/4")
            wholeInches = parseFloat(parts[0]);

            // Split the fractional part into numerator and denominator
            const fractionParts = parts[1].split('/');
            if (fractionParts.length === 2) {
                fractionalNumerator = parseFloat(fractionParts[0]);
                fractionalDenominator = parseFloat(fractionParts[1]);
            }
        }

        // Convert to millimeters
        const millimeters =
            wholeInches * 25.4 +
            (fractionalNumerator / fractionalDenominator) * 25.4;

        return isNaN(millimeters) ? 0 : millimeters;
    } else {
        // It's already a number, so just convert to millimeters
        return inchesWithFractions * 25.4;
    }
}

export default inchesWithFractionsToMillimeters;
