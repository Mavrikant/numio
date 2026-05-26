// Pure compute function — no side effects, no I/O
// Reference: https://www.investopedia.com/terms/d/discount.asp

export interface DiscountInputs {
  originalPrice: number;
  discountPct: number;
  taxRate: number;
  mode: "discount_pct" | "final_price";
  salePrice?: number | undefined;
}

export interface DiscountResult extends Record<string, unknown> {
  salePrice: number;
  savings: number;
  discountPct: number;
  finalPriceWithTax: number;
  savingsPct: number;
}

export function compute(inputs: DiscountInputs): DiscountResult {
  const { originalPrice, taxRate, mode } = inputs;

  let salePrice: number;
  let discountPct: number;

  if (mode === "discount_pct") {
    // Given originalPrice + discountPct → compute salePrice
    discountPct = inputs.discountPct;
    salePrice = originalPrice * (1 - discountPct / 100);
  } else {
    // "final_price" mode: given originalPrice + salePrice → compute discountPct
    // salePrice defaults to originalPrice if not provided or if > originalPrice
    const sp = inputs.salePrice ?? originalPrice;
    salePrice = Math.min(sp, originalPrice); // clamp: can't be more than original
    discountPct = originalPrice > 0
      ? ((originalPrice - salePrice) / originalPrice) * 100
      : 0;
  }

  const savings = originalPrice - salePrice;
  const savingsPct = originalPrice > 0 ? (savings / originalPrice) * 100 : 0;

  // After-tax price
  const finalPriceWithTax = salePrice * (1 + taxRate / 100);

  return {
    salePrice,
    savings,
    discountPct,
    finalPriceWithTax,
    savingsPct,
  };
}
