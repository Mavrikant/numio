import { z } from "zod";

export const inputSchema = z
  .object({
    debt1_balance: z.number().min(0).max(10_000_000).default(0),
    debt1_apr: z.number().min(0).max(100).default(0),
    debt1_min: z.number().min(0).max(1_000_000).default(0),
    debt2_balance: z.number().min(0).max(10_000_000).default(0),
    debt2_apr: z.number().min(0).max(100).default(0),
    debt2_min: z.number().min(0).max(1_000_000).default(0),
    debt3_balance: z.number().min(0).max(10_000_000).default(0),
    debt3_apr: z.number().min(0).max(100).default(0),
    debt3_min: z.number().min(0).max(1_000_000).default(0),
    debt4_balance: z.number().min(0).max(10_000_000).default(0),
    debt4_apr: z.number().min(0).max(100).default(0),
    debt4_min: z.number().min(0).max(1_000_000).default(0),
    debt5_balance: z.number().min(0).max(10_000_000).default(0),
    debt5_apr: z.number().min(0).max(100).default(0),
    debt5_min: z.number().min(0).max(1_000_000).default(0),
    strategy: z.enum(["avalanche", "snowball"]).default("avalanche"),
    extraMonthly: z.number().min(0).max(1_000_000).default(0),
  })
  .superRefine((data, ctx) => {
    const debts = collectDebts(data);
    if (debts.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["debt1_balance"],
        message: "At least one debt with a positive balance is required.",
      });
    }
  });

export type DebtPayoffInputs = z.infer<typeof inputSchema>;

export interface DebtDetail {
  readonly index: number;
  readonly startingBalance: number;
  readonly apr: number;
  readonly monthsToPayoff: number;
  readonly totalInterest: number;
  readonly totalPaid: number;
}

export interface DebtPayoffResult extends Record<string, unknown> {
  readonly totalMonths: number;
  readonly payoffYears: number;
  readonly totalInterest: number;
  readonly totalPaid: number;
  readonly totalStartingBalance: number;
  readonly perDebt: DebtDetail[];
}

interface RawDebt {
  originalIndex: number;
  balance: number;
  apr: number;
  minPayment: number;
}

function collectDebts(data: Record<string, unknown>): RawDebt[] {
  const out: RawDebt[] = [];
  for (let i = 1; i <= 5; i++) {
    const balance = Number(data[`debt${i}_balance`] ?? 0);
    const apr = Number(data[`debt${i}_apr`] ?? 0);
    const minPayment = Number(data[`debt${i}_min`] ?? 0);
    if (balance > 0) {
      out.push({ originalIndex: i - 1, balance, apr, minPayment });
    }
  }
  return out;
}

const MAX_MONTHS = 1200; // 100 years — safety cap.

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

interface SimDebt {
  originalIndex: number;
  apr: number;
  minPayment: number;
  startingBalance: number;
  balance: number;
  totalInterest: number;
  totalPaid: number;
  monthsToPayoff: number;
}

export function compute(inputs: DebtPayoffInputs): DebtPayoffResult {
  const rawDebts = collectDebts(inputs as unknown as Record<string, unknown>);
  const { strategy, extraMonthly } = inputs;

  if (rawDebts.length === 0) {
    return {
      totalMonths: 0,
      payoffYears: 0,
      totalInterest: 0,
      totalPaid: 0,
      totalStartingBalance: 0,
      perDebt: [],
    };
  }

  // Simulation state, preserving original input index for stable output ordering.
  const debts: SimDebt[] = rawDebts.map((d) => ({
    originalIndex: d.originalIndex,
    apr: d.apr,
    minPayment: d.minPayment,
    startingBalance: d.balance,
    balance: d.balance,
    totalInterest: 0,
    totalPaid: 0,
    monthsToPayoff: 0,
  }));

  // Strategy comparator: which active debt receives the snowball (extra + freed minimums)?
  const pickTarget = (active: SimDebt[]): SimDebt => {
    if (strategy === "avalanche") {
      // Highest APR first; tiebreak by smaller balance, then original order.
      return active.slice().sort((a, b) => {
        if (b.apr !== a.apr) return b.apr - a.apr;
        if (a.balance !== b.balance) return a.balance - b.balance;
        return a.originalIndex - b.originalIndex;
      })[0];
    }
    // snowball — smallest balance first; tiebreak by higher APR, then original order.
    return active.slice().sort((a, b) => {
      if (a.balance !== b.balance) return a.balance - b.balance;
      if (b.apr !== a.apr) return b.apr - a.apr;
      return a.originalIndex - b.originalIndex;
    })[0];
  };

  let month = 0;
  while (debts.some((d) => d.balance > 0) && month < MAX_MONTHS) {
    month++;

    // Accrue interest on every active debt for this month.
    for (const d of debts) {
      if (d.balance <= 0) continue;
      const interest = d.balance * (d.apr / 100 / 12);
      d.balance += interest;
      d.totalInterest += interest;
    }

    // Snowball pool = extra + minimums freed up by already-paid-off debts.
    const active = debts.filter((d) => d.balance > 0);
    const freedMinimums = debts
      .filter((d) => d.balance <= 0)
      .reduce((s, d) => s + d.minPayment, 0);
    let snowballPool = extraMonthly + freedMinimums;

    // Step 1: every active debt pays its minimum (or whatever clears the balance).
    for (const d of active) {
      const pay = Math.min(d.minPayment, d.balance);
      d.balance -= pay;
      d.totalPaid += pay;
      if (d.balance < 0.005) {
        d.balance = 0;
        d.monthsToPayoff = month;
      }
    }

    // Step 2: throw the snowball at the strategy target until it is cleared,
    // then roll the leftover into the next target. Repeat while funds remain.
    while (snowballPool > 0) {
      const stillActive = debts.filter((d) => d.balance > 0);
      if (stillActive.length === 0) break;
      const target = pickTarget(stillActive);
      const pay = Math.min(snowballPool, target.balance);
      target.balance -= pay;
      target.totalPaid += pay;
      snowballPool -= pay;
      if (target.balance < 0.005) {
        target.balance = 0;
        target.monthsToPayoff = month;
      }
    }
  }

  // Any debt still in the red after MAX_MONTHS — minimums + extra never covered
  // interest. Mark with the sentinel month value.
  for (const d of debts) {
    if (d.balance > 0 && d.monthsToPayoff === 0) {
      d.monthsToPayoff = MAX_MONTHS;
    }
  }

  const totalMonths = debts.reduce((m, d) => Math.max(m, d.monthsToPayoff), 0);
  const totalInterest = debts.reduce((s, d) => s + d.totalInterest, 0);
  const totalPaid = debts.reduce((s, d) => s + d.totalPaid, 0);
  const totalStartingBalance = debts.reduce((s, d) => s + d.startingBalance, 0);

  const perDebt: DebtDetail[] = debts
    .slice()
    .sort((a, b) => a.originalIndex - b.originalIndex)
    .map((d) => ({
      index: d.originalIndex + 1,
      startingBalance: round2(d.startingBalance),
      apr: d.apr,
      monthsToPayoff: d.monthsToPayoff,
      totalInterest: round2(d.totalInterest),
      totalPaid: round2(d.totalPaid),
    }));

  return {
    totalMonths,
    payoffYears: round2(totalMonths / 12),
    totalInterest: round2(totalInterest),
    totalPaid: round2(totalPaid),
    totalStartingBalance: round2(totalStartingBalance),
    perDebt,
  };
}
