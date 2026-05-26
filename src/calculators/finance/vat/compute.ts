// Pure compute function — no side effects, no I/O
// Reference: https://www.investopedia.com/terms/v/valueaddedtax.asp

export interface VatInputs {
  amount: number;
  vatRate: number;
  mode: "exclusive" | "inclusive";
}

export interface VatResult extends Record<string, unknown> {
  basePrice: number;
  vatAmount: number;
  totalPrice: number;
  effectiveRate: number;
}

export function compute(inputs: VatInputs): VatResult {
  const { amount, vatRate, mode } = inputs;
  const rate = vatRate / 100;

  let basePrice: number;
  let vatAmount: number;
  let totalPrice: number;

  if (mode === "exclusive") {
    // amount is the pre-tax base price
    basePrice = amount;
    vatAmount = basePrice * rate;
    totalPrice = basePrice + vatAmount;
  } else {
    // "inclusive" mode: amount is the gross (VAT-included) price
    totalPrice = amount;
    basePrice = totalPrice / (1 + rate);
    vatAmount = totalPrice - basePrice;
  }

  // Effective rate: VAT as a percentage of the base price
  const effectiveRate = basePrice > 0 ? (vatAmount / basePrice) * 100 : 0;

  return {
    basePrice,
    vatAmount,
    totalPrice,
    effectiveRate,
  };
}
