import { z } from "zod";

export const inputSchema = z
  .object({
    balance: z.number().min(1).max(500_000),
    apr: z.number().min(0).max(100),
    paymentMode: z.enum(["minimum", "fixed"]),
    fixedPayment: z.number().min(0).optional(),
    minimumPaymentPct: z.number().min(0.1).max(100).default(2),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMode === "fixed") {
      if (data.fixedPayment === undefined || data.fixedPayment <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["fixedPayment"],
          message: "Fixed payment must be a positive number when payment mode is 'fixed'.",
        });
      }
    }
  });

export type CreditCardPayoffInputs = z.infer<typeof inputSchema>;

export interface ScheduleEntry {
  readonly month: number;
  readonly payment: number;
  readonly principal: number;
  readonly interest: number;
  readonly balance: number;
}

export interface CreditCardPayoffResult extends Record<string, unknown> {
  readonly monthsToPayoff: number;
  readonly totalPaid: number;
  readonly totalInterest: number;
  readonly interestSavings: number;
  readonly schedule: ScheduleEntry[];
}

const MAX_MONTHS = 1200;
const MIN_PAYMENT_FLOOR = 25;

interface PayoffStats {
  months: number;
  totalPaid: number;
  totalInterest: number;
  schedule: ScheduleEntry[];
}

function simulatePayoff(
  startBalance: number,
  apr: number,
  mode: "minimum" | "fixed",
  fixedPayment: number,
  minPct: number,
): PayoffStats {
  const monthlyRate = apr / 100 / 12;
  let balance = startBalance;
  let months = 0;
  let totalPaid = 0;
  let totalInterest = 0;
  const schedule: ScheduleEntry[] = [];

  while (balance > 0 && months < MAX_MONTHS) {
    const interest = balance * monthlyRate;

    let payment: number;
    if (mode === "minimum") {
      payment = Math.max(MIN_PAYMENT_FLOOR, balance * (minPct / 100));
    } else {
      payment = fixedPayment;
    }

    // If payment doesn't cover interest, clamp to avoid infinite loop
    if (payment <= interest && balance > 0) {
      // Payment is too low — only add first 12 months, mark as unclearable
      if (schedule.length < 12) {
        schedule.push({
          month: months + 1,
          payment: Math.round(payment * 100) / 100,
          principal: 0,
          interest: Math.round(interest * 100) / 100,
          balance: Math.round((balance + interest - payment) * 100) / 100,
        });
      }
      months = MAX_MONTHS;
      totalPaid = payment * MAX_MONTHS;
      totalInterest = totalPaid - startBalance;
      break;
    }

    // Cap payment to remaining balance + interest
    const actualPayment = Math.min(payment, balance + interest);
    const principal = actualPayment - interest;
    balance = balance - principal;
    if (balance < 0.01) balance = 0;

    months++;
    totalPaid += actualPayment;
    totalInterest += interest;

    if (schedule.length < 12) {
      schedule.push({
        month: months,
        payment: Math.round(actualPayment * 100) / 100,
        principal: Math.round(principal * 100) / 100,
        interest: Math.round(interest * 100) / 100,
        balance: Math.round(balance * 100) / 100,
      });
    }
  }

  return {
    months,
    totalPaid: Math.round(totalPaid * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    schedule,
  };
}

export function compute(inputs: CreditCardPayoffInputs): CreditCardPayoffResult {
  const { balance, apr, paymentMode, fixedPayment = 0, minimumPaymentPct } = inputs;

  const primaryStats = simulatePayoff(
    balance,
    apr,
    paymentMode,
    fixedPayment,
    minimumPaymentPct,
  );

  // For interest savings: compute minimum scenario when mode=fixed
  let interestSavings = 0;
  if (paymentMode === "fixed") {
    const minimumStats = simulatePayoff(
      balance,
      apr,
      "minimum",
      0,
      minimumPaymentPct,
    );
    interestSavings = Math.max(
      0,
      Math.round((minimumStats.totalInterest - primaryStats.totalInterest) * 100) / 100,
    );
  }

  return {
    monthsToPayoff: primaryStats.months,
    totalPaid: primaryStats.totalPaid,
    totalInterest: primaryStats.totalInterest,
    interestSavings,
    schedule: primaryStats.schedule,
  };
}
