// Pure compute function — no side effects, no I/O
// Reference: https://www.bls.gov/cpi/
// Reference: https://www.investopedia.com/terms/i/inflation.asp

export interface InflationInputs {
  amount: number;
  inflationRate: number;
  years: number;
  mode: "future_cost" | "present_value";
}

export interface InflationResult extends Record<string, unknown> {
  result: number;
  purchasingPowerLoss: number;
  cumulativeInflation: number;
  realValueToday: number;
}

export function compute(inputs: InflationInputs): InflationResult {
  const { amount, inflationRate, years, mode } = inputs;

  const rate = inflationRate / 100;
  // Compound inflation factor
  const factor = Math.pow(1 + rate, years);

  let result: number;
  let realValueToday: number;

  if (mode === "future_cost") {
    // What $X today costs in Y years at given inflation
    result = amount * factor;
    // The real value (in today's dollars) of that future amount is just "amount"
    realValueToday = amount;
  } else {
    // "present_value" mode: what $X in Y years is worth today
    // Present Value = Future Amount / factor
    result = amount / factor;
    // The real value today of the future "amount" is "result"
    realValueToday = result;
  }

  // Purchasing power loss: how much of the original purchasing power is lost
  // as a percentage. At 3% for 10 years: power = 1/1.03^10 = 0.7441, loss = 25.59%
  // This is always relative to the initial amount vs what it can buy in the future
  const purchasingPowerRemaining = 1 / factor;
  const purchasingPowerLoss = (1 - purchasingPowerRemaining) * 100;

  // Cumulative inflation: total percentage price increase over the period
  const cumulativeInflation = (factor - 1) * 100;

  return {
    result,
    purchasingPowerLoss,
    cumulativeInflation,
    realValueToday,
  };
}
