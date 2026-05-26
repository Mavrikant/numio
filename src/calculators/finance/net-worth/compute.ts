export interface NetWorthInput {
  cashAndSavings: number;
  investmentAccounts: number;
  retirementAccounts: number;
  homeValue: number;
  otherRealEstate: number;
  vehicleValue: number;
  otherAssets: number;
  mortgage: number;
  carLoans: number;
  studentLoans: number;
  creditCardDebt: number;
  otherDebts: number;
}

export interface NetWorthOutput {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  debtToAssetRatio: number;
  liquidAssets: number;
  illiquidAssets: number;
}

export function compute(input: NetWorthInput): NetWorthOutput {
  const {
    cashAndSavings,
    investmentAccounts,
    retirementAccounts,
    homeValue,
    otherRealEstate,
    vehicleValue,
    otherAssets,
    mortgage,
    carLoans,
    studentLoans,
    creditCardDebt,
    otherDebts,
  } = input;

  const liquidAssets = cashAndSavings + investmentAccounts;
  const illiquidAssets = retirementAccounts + homeValue + otherRealEstate + vehicleValue + otherAssets;
  const totalAssets = liquidAssets + illiquidAssets;

  const totalLiabilities = mortgage + carLoans + studentLoans + creditCardDebt + otherDebts;
  const netWorth = totalAssets - totalLiabilities;
  const debtToAssetRatio = totalAssets > 0 ? totalLiabilities / totalAssets : 0;

  return {
    totalAssets,
    totalLiabilities,
    netWorth,
    debtToAssetRatio,
    liquidAssets,
    illiquidAssets,
  };
}
