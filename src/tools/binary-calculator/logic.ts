export type BinaryOp = "+" | "-" | "*" | "/" | "%" | "&" | "|" | "^" | "<<" | ">>";

export interface BinaryCalcResult {
  readonly binary: string;
  readonly decimal: string;
  readonly hex: string;
  readonly octal: string;
  readonly error: string | null;
}

function parseBinary(value: string): bigint | null {
  const trimmed = value.replace(/[\s_]/g, "");
  if (!/^-?[01]+$/.test(trimmed)) return null;
  const neg = trimmed.startsWith("-");
  const body = neg ? trimmed.slice(1) : trimmed;
  let n = 0n;
  for (const ch of body) n = n * 2n + BigInt(ch);
  return neg ? -n : n;
}

const OPS: BinaryOp[] = ["+", "-", "*", "/", "%", "&", "|", "^", "<<", ">>"];

/** Perform a binary-input arithmetic or bitwise operation and emit multiple radixes. */
export function binaryCalculate(aBin: string, op: BinaryOp, bBin: string): BinaryCalcResult {
  const empty: BinaryCalcResult = { binary: "", decimal: "", hex: "", octal: "", error: null };
  if (!aBin.trim() && !bBin.trim()) return empty;
  const a = parseBinary(aBin);
  const b = parseBinary(bBin);
  if (a === null || b === null) return { ...empty, error: "Operands must be binary (0 or 1 digits, optional leading -)." };
  if (!OPS.includes(op)) return { ...empty, error: `Unsupported operator ${op}.` };
  if ((op === "/" || op === "%") && b === 0n) return { ...empty, error: "Division by zero." };
  if ((op === "<<" || op === ">>") && b < 0n) return { ...empty, error: "Shift amount must be non-negative." };

  let result: bigint;
  switch (op) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
    case "%": result = a % b; break;
    case "&": result = a & b; break;
    case "|": result = a | b; break;
    case "^": result = a ^ b; break;
    case "<<": result = a << b; break;
    case ">>": result = a >> b; break;
  }

  const sign = result < 0n ? "-" : "";
  const abs = result < 0n ? -result : result;
  return {
    binary: sign + abs.toString(2),
    decimal: result.toString(10),
    hex: sign + abs.toString(16).toUpperCase(),
    octal: sign + abs.toString(8),
    error: null,
  };
}
