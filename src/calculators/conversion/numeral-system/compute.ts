/**
 * Numeral System Converter
 * Converts between decimal, binary, octal, and hexadecimal representations
 * Supports negative numbers and fractional parts
 */

export interface NumeralSystemResult extends Record<string, unknown> {
  decimal: string;
  binary: string;
  octal: string;
  hexadecimal: string;
}

export function compute(inputs: { value: number; sourceBase: "decimal" | "binary" | "octal" | "hexadecimal" }): NumeralSystemResult {
  const { value, sourceBase } = inputs;

  // Convert source to decimal first
  let decimalValue: number;

  if (sourceBase === "decimal") {
    decimalValue = value;
  } else if (sourceBase === "binary") {
    decimalValue = convertFromBase(value.toString(), 2);
  } else if (sourceBase === "octal") {
    decimalValue = convertFromBase(value.toString(), 8);
  } else {
    // hexadecimal
    decimalValue = convertFromBase(value.toString(), 16);
  }

  // Convert decimal to all bases
  return {
    decimal: formatDecimal(decimalValue),
    binary: convertToBase(decimalValue, 2),
    octal: convertToBase(decimalValue, 8),
    hexadecimal: convertToBase(decimalValue, 16).toUpperCase(),
  };
}

/**
 * Convert from any base (2, 8, 16) to decimal
 * Handles both integer and fractional parts
 */
function convertFromBase(str: string, base: number): number {
  str = str.trim();
  const isNegative = str.startsWith("-");
  if (isNegative) {
    str = str.substring(1);
  }

  const [integerPart, fractionalPart] = str.split(".");

  let result = 0;

  // Process integer part
  for (let i = 0; i < integerPart.length; i++) {
    const char = integerPart[i].toUpperCase();
    const digit = char.charCodeAt(0) - (char >= "A" ? 55 : 48); // A=10, B=11, ... or 0-9
    result = result * base + digit;
  }

  // Process fractional part
  if (fractionalPart) {
    let fractional = 0;
    for (let i = 0; i < fractionalPart.length; i++) {
      const char = fractionalPart[i].toUpperCase();
      const digit = char.charCodeAt(0) - (char >= "A" ? 55 : 48);
      fractional += digit / Math.pow(base, i + 1);
    }
    result += fractional;
  }

  return isNegative ? -result : result;
}

/**
 * Convert from decimal to any base (2, 8, 16)
 * Handles both integer and fractional parts
 * Fractional part is limited to 20 digits for precision
 */
function convertToBase(num: number, base: number): string {
  if (num === 0) return "0";

  // Guard against non-finite inputs (Infinity / NaN). Without this, the
  // integer loop below `while (tempInt > 0)` runs forever when tempInt is
  // Infinity, eating the vitest worker heap and crashing the test pool.
  if (!Number.isFinite(num)) {
    return Number.isNaN(num) ? "NaN" : num > 0 ? "Infinity" : "-Infinity";
  }

  const isNegative = num < 0;
  let value = Math.abs(num);

  // Separate integer and fractional parts
  const integerPart = Math.floor(value);
  const fractionalPart = value - integerPart;

  let integerResult = "";
  let tempInt = integerPart;

  // Convert integer part: repeated division by base
  if (tempInt === 0) {
    integerResult = "0";
  } else {
    while (tempInt > 0) {
      const remainder = tempInt % base;
      const digit = remainder < 10 ? remainder.toString() : String.fromCharCode(55 + remainder); // A=65, so 55+10=65
      integerResult = digit + integerResult;
      tempInt = Math.floor(tempInt / base);
    }
  }

  let fractionalResult = "";

  // Convert fractional part: repeated multiplication by base
  // Limit to 20 digits to avoid infinite loops with repeating decimals
  if (fractionalPart > 0) {
    let tempFrac = fractionalPart;
    let count = 0;
    while (tempFrac > 0 && count < 20) {
      tempFrac *= base;
      const digit = Math.floor(tempFrac);
      const char = digit < 10 ? digit.toString() : String.fromCharCode(55 + digit);
      fractionalResult += char;
      tempFrac -= digit;
      count++;
    }
  }

  const result = fractionalResult ? `${integerResult}.${fractionalResult}` : integerResult;
  return isNegative ? `-${result}` : result;
}

/**
 * Format decimal number with appropriate precision
 */
function formatDecimal(num: number): string {
  if (Number.isInteger(num)) {
    return num.toString();
  }

  // For fractional decimals, round to 20 decimal places to avoid floating point artifacts
  const rounded = Math.round(num * 1e20) / 1e20;
  return rounded.toString();
}
