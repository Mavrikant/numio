// Pure compute function — no side effects, no I/O
// Reference: https://www.investopedia.com/terms/r/returnoninvestment.asp

export interface RoiInputs {
  initialInvestment: number;
  finalValue: number;
  years: number;
}

export interface RoiResult extends Record<string, unknown> {
  roi: number;
  annualizedRoi: number;
  netProfit: number;
  moic: number;
  ruleOf72Years: number;
}

export function compute(inputs: RoiInputs): RoiResult {
  const { initialInvestment, finalValue, years } = inputs;

  // netProfit can be negative (loss scenario)
  const netProfit = finalValue - initialInvestment;

  // ROI = (netProfit / initialInvestment) × 100
  // Guard: initialInvestment > 0 is enforced by schema (min: 0.01)
  const roi = (netProfit / initialInvestment) * 100;

  // CAGR = (1 + ROI/100)^(1/years) - 1
  // If years is 0 (schema min 0.01 prevents exact 0, but guard anyway)
  // For negative ROI: finalValue/initialInvestment could be < 0 → undefined CAGR
  // We guard: if finalValue <= 0, annualizedRoi = roi (degenerate)
  let annualizedRoi: number;
  if (years <= 0 || finalValue <= 0) {
    // Cannot compute meaningful CAGR for zero/negative final value
    annualizedRoi = roi;
  } else {
    // CAGR = (finalValue / initialInvestment)^(1/years) - 1
    const ratio = finalValue / initialInvestment;
    // ratio > 0 because finalValue > 0 and initialInvestment > 0
    annualizedRoi = (Math.pow(ratio, 1 / years) - 1) * 100;
  }

  // Multiple on Invested Capital (MOIC) = finalValue / initialInvestment
  const moic = finalValue / initialInvestment;

  // Rule of 72: years to double at the annualized rate
  // Meaningful only when annualizedRoi > 0
  const ruleOf72Years =
    annualizedRoi > 0 ? 72 / annualizedRoi : 0;

  return {
    roi,
    annualizedRoi,
    netProfit,
    moic,
    ruleOf72Years,
  };
}
