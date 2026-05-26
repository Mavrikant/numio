export interface BudgetInput {
  monthlyIncome: number;
  needsPct: number;
  wantsPct: number;
  savingsPct: number;
}

export interface BudgetOutput {
  needsAmount: number;
  wantsAmount: number;
  savingsAmount: number;
  annualIncome: number;
  annualSavings: number;
  savingsRate: number;
  isBalanced: boolean;
  monthlyEmergencyFund: number;
}

export function compute(input: BudgetInput): BudgetOutput {
  const { monthlyIncome, needsPct, wantsPct, savingsPct } = input;

  const needsAmount = (monthlyIncome * needsPct) / 100;
  const wantsAmount = (monthlyIncome * wantsPct) / 100;
  const savingsAmount = (monthlyIncome * savingsPct) / 100;
  const annualIncome = monthlyIncome * 12;
  const annualSavings = savingsAmount * 12;
  const savingsRate = monthlyIncome > 0 ? (savingsAmount / monthlyIncome) * 100 : 0;
  const isBalanced = savingsPct >= 10;
  const monthlyEmergencyFund = needsAmount * 3;

  return {
    needsAmount,
    wantsAmount,
    savingsAmount,
    annualIncome,
    annualSavings,
    savingsRate,
    isBalanced,
    monthlyEmergencyFund,
  };
}
