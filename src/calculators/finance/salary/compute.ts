import { z } from "zod";

export const inputSchema = z.object({
  annualSalary: z.number().min(1).max(10_000_000),
  filingStatus: z.enum(["single", "married", "head"]),
  stateIncomeTaxRate: z.number().min(0).max(15),
  preTaxDeductions: z.number().min(0),
});

export type SalaryInputs = z.infer<typeof inputSchema>;

export interface SalaryResult extends Record<string, unknown> {
  readonly grossAnnual: number;
  readonly federalIncomeTax: number;
  readonly socialSecurityTax: number;
  readonly medicareTax: number;
  readonly stateIncomeTax: number;
  readonly totalTax: number;
  readonly netAnnual: number;
  readonly netMonthly: number;
  readonly effectiveTaxRate: number;
}

/**
 * US Take-Home Pay Calculation (2024 tax year):
 *
 * 1. Taxable income = annualSalary - preTaxDeductions
 *
 * 2. Federal Income Tax — progressive brackets (2024):
 *    Single filer brackets (taxable income):
 *      10%  on $0 – $11,600
 *      12%  on $11,601 – $47,150
 *      22%  on $47,151 – $100,525
 *      24%  on $100,526 – $191,950
 *      32%  on $191,951 – $243,725
 *      35%  on $243,726 – $609,350
 *      37%  on $609,351+
 *    Married filing jointly brackets (taxable income):
 *      10%  on $0 – $23,200
 *      12%  on $23,201 – $94,300
 *      22%  on $94,301 – $201,050
 *      24%  on $201,051 – $383,900
 *      32%  on $383,901 – $487,450
 *      35%  on $487,451 – $731,200
 *      37%  on $731,201+
 *    Head of household brackets (taxable income):
 *      10%  on $0 – $16,550
 *      12%  on $16,551 – $63,100
 *      22%  on $63,101 – $100,500
 *      24%  on $100,501 – $191,950
 *      32%  on $191,951 – $243,700
 *      35%  on $243,701 – $609,350
 *      37%  on $609,351+
 *
 * 3. Social Security: 6.2% on wages up to $168,600 (2024 wage base)
 *
 * 4. Medicare: 1.45% on all wages; additional 0.9% on wages above $200,000 (single) or $250,000 (married)
 *
 * 5. State Income Tax: flat rate on taxable income
 *
 * 6. Net Annual = Gross - Federal - Social Security - Medicare - State
 *
 * References:
 * - IRS Publication 15-T (2024): https://www.irs.gov/publications/p15t
 * - SSA Wage Base 2024: https://www.ssa.gov/oact/cola/cbb.html
 */

const BRACKETS_SINGLE: Array<[number, number]> = [
  [11_600, 0.10],
  [47_150, 0.12],
  [100_525, 0.22],
  [191_950, 0.24],
  [243_725, 0.32],
  [609_350, 0.35],
  [Infinity, 0.37],
];

const BRACKETS_MARRIED: Array<[number, number]> = [
  [23_200, 0.10],
  [94_300, 0.12],
  [201_050, 0.22],
  [383_900, 0.24],
  [487_450, 0.32],
  [731_200, 0.35],
  [Infinity, 0.37],
];

const BRACKETS_HEAD: Array<[number, number]> = [
  [16_550, 0.10],
  [63_100, 0.12],
  [100_500, 0.22],
  [191_950, 0.24],
  [243_700, 0.32],
  [609_350, 0.35],
  [Infinity, 0.37],
];

function applyBrackets(taxableIncome: number, brackets: Array<[number, number]>): number {
  let tax = 0;
  let prev = 0;
  for (const [ceiling, rate] of brackets) {
    if (taxableIncome <= 0) break;
    const slice = Math.min(taxableIncome, ceiling - prev);
    tax += slice * rate;
    taxableIncome -= slice;
    prev = ceiling;
    if (taxableIncome <= 0) break;
  }
  return tax;
}

const SS_WAGE_BASE = 168_600;
const SS_RATE = 0.062;
const MEDICARE_RATE = 0.0145;
const MEDICARE_SURTAX_RATE = 0.009;
const MEDICARE_SURTAX_THRESHOLD_SINGLE = 200_000;
const MEDICARE_SURTAX_THRESHOLD_MARRIED = 250_000;

export function compute(inputs: SalaryInputs): SalaryResult {
  const { annualSalary, filingStatus, stateIncomeTaxRate, preTaxDeductions } = inputs;

  const grossAnnual = annualSalary;

  // Taxable income after pre-tax deductions
  const taxableIncome = Math.max(0, grossAnnual - preTaxDeductions);

  // Federal income tax
  let brackets: Array<[number, number]>;
  if (filingStatus === "married") {
    brackets = BRACKETS_MARRIED;
  } else if (filingStatus === "head") {
    brackets = BRACKETS_HEAD;
  } else {
    brackets = BRACKETS_SINGLE;
  }
  const federalIncomeTax = applyBrackets(taxableIncome, brackets);

  // Social Security: 6.2% up to $168,600 on gross wages
  const socialSecurityTax = Math.min(grossAnnual, SS_WAGE_BASE) * SS_RATE;

  // Medicare: 1.45% on all wages + 0.9% surtax above threshold
  const surtaxThreshold =
    filingStatus === "married" ? MEDICARE_SURTAX_THRESHOLD_MARRIED : MEDICARE_SURTAX_THRESHOLD_SINGLE;
  const medicareTax =
    grossAnnual * MEDICARE_RATE +
    Math.max(0, grossAnnual - surtaxThreshold) * MEDICARE_SURTAX_RATE;

  // State income tax (flat rate on taxable income)
  const stateIncomeTax = taxableIncome * (stateIncomeTaxRate / 100);

  const totalTax = federalIncomeTax + socialSecurityTax + medicareTax + stateIncomeTax;
  const netAnnual = Math.max(0, grossAnnual - totalTax);
  const netMonthly = netAnnual / 12;

  // Effective tax rate = totalTax / grossAnnual (as percentage)
  const effectiveTaxRate = grossAnnual > 0 ? (totalTax / grossAnnual) * 100 : 0;

  return {
    grossAnnual: Math.round(grossAnnual * 100) / 100,
    federalIncomeTax: Math.round(federalIncomeTax * 100) / 100,
    socialSecurityTax: Math.round(socialSecurityTax * 100) / 100,
    medicareTax: Math.round(medicareTax * 100) / 100,
    stateIncomeTax: Math.round(stateIncomeTax * 100) / 100,
    totalTax: Math.round(totalTax * 100) / 100,
    netAnnual: Math.round(netAnnual * 100) / 100,
    netMonthly: Math.round(netMonthly * 100) / 100,
    effectiveTaxRate: Math.round(effectiveTaxRate * 100) / 100,
  };
}
