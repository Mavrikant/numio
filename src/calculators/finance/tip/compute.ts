// Pure compute function — no side effects, no I/O
// Reference: Emily Post Institute tip guidelines
// Reference: IRS Publication 531 (Reporting Tip Income)

export interface TipInputs {
  billAmount: number;
  tipPct: number;
  numberOfPeople: number;
  roundUp: boolean;
}

export interface TipResult extends Record<string, unknown> {
  tipAmount: number;
  totalAmount: number;
  perPersonTotal: number;
  perPersonTip: number;
  totalRounded: number;
}

export function compute(inputs: TipInputs): TipResult {
  const { billAmount, tipPct, numberOfPeople, roundUp } = inputs;

  // Basic calculations
  const tipAmount = billAmount * tipPct / 100;
  const totalAmount = billAmount + tipAmount;
  const perPersonTotal = totalAmount / numberOfPeople;
  const perPersonTip = tipAmount / numberOfPeople;

  // Round-up: each person pays rounded-up to next dollar
  // Then recalculate total from rounded individual amounts
  let totalRounded: number;
  if (roundUp) {
    const perPersonRounded = Math.ceil(perPersonTotal);
    totalRounded = perPersonRounded * numberOfPeople;
  } else {
    totalRounded = totalAmount;
  }

  return {
    tipAmount,
    totalAmount,
    perPersonTotal,
    perPersonTip,
    totalRounded,
  };
}
