const generateFractionsArray = () => {
  const t0 = performance.now();

  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  function generateSimplifiedFractions(): { value: string; label: string }[] {
    const result: { value: string; label: string }[] = [];
    const seenFractions = new Set<string>();

    // Iterate over denominators that are powers of 2 (32, 16, 8, 4, 2, 1)
    for (let denominator = 32; denominator >= 1; denominator /= 2) {
      for (let numerator = 0; numerator < denominator; numerator++) {
        if (numerator === 0) {
          if (!seenFractions.has('0')) {
            result.push({ value: '0', label: '' });
            seenFractions.add('0');
          }
          continue;
        }

        const divisor = gcd(numerator, denominator);
        const simplifiedNumerator = numerator / divisor;
        const simplifiedDenominator = denominator / divisor;
        const value = (simplifiedNumerator / simplifiedDenominator).toFixed(5);
        const label = `${simplifiedNumerator}/${simplifiedDenominator}`;

        if (!seenFractions.has(value)) {
          result.push({ value, label });
          seenFractions.add(value);
        }
      }
    }

    return result;
  }

  console.log(generateSimplifiedFractions());

  const t1 = performance.now();

  console.log(`Call to generateFractionsArray took ${t1 - t0} milliseconds.`);

  return generateSimplifiedFractions();
};

export default generateFractionsArray;
