export interface StrengthResult {
  readonly score: 0 | 1 | 2 | 3 | 4;
  readonly label: "Very weak" | "Weak" | "Fair" | "Strong" | "Very strong" | "—";
  readonly entropy: number;
  readonly crackTime: string;
  readonly suggestions: string[];
}

const COMMON = new Set([
  "password", "123456", "12345678", "qwerty", "abc123", "monkey", "letmein", "dragon",
  "111111", "baseball", "iloveyou", "trustno1", "1234567", "sunshine", "master",
  "welcome", "shadow", "ashley", "football", "jesus", "michael", "ninja",
  "azerty", "admin", "login", "starwars", "freedom", "passw0rd", "qwerty123",
]);

function poolSize(password: string): number {
  let pool = 0;
  if (/[a-z]/.test(password)) pool += 26;
  if (/[A-Z]/.test(password)) pool += 26;
  if (/[0-9]/.test(password)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(password)) pool += 32;
  return pool || 1;
}

function humanTime(seconds: number): string {
  if (seconds < 1) return "instantly";
  if (seconds < 60) return `${Math.round(seconds)} s`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} min`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000 * 1e3) return `${Math.round(seconds / 31536000)} years`;
  if (seconds < 31536000 * 1e9) return `${(seconds / 31536000 / 1e3).toFixed(1)} thousand years`;
  return "centuries";
}

const LABELS = ["Very weak", "Weak", "Fair", "Strong", "Very strong"] as const;

/**
 * Estimate password strength via character-pool entropy with adjustments for
 * common-word matches, length, repetitions and sequential patterns. Assumes
 * an offline attacker doing 10 billion guesses per second (modern GPU).
 */
export function checkStrength(password: string): StrengthResult {
  if (!password) {
    return { score: 0, label: "—", entropy: 0, crackTime: "—", suggestions: [] };
  }
  const suggestions: string[] = [];
  const lower = password.toLowerCase();

  let entropy = password.length * Math.log2(poolSize(password));

  if (COMMON.has(lower) || password.length <= 4) {
    entropy = Math.min(entropy, 5);
    suggestions.push("This is a very common password.");
  }
  if (password.length < 8) suggestions.push("Use at least 8 characters.");
  if (!/[A-Z]/.test(password)) suggestions.push("Add uppercase letters.");
  if (!/[a-z]/.test(password)) suggestions.push("Add lowercase letters.");
  if (!/[0-9]/.test(password)) suggestions.push("Add digits.");
  if (!/[^a-zA-Z0-9]/.test(password)) suggestions.push("Add symbols.");
  if (/(.)\1{2,}/.test(password)) {
    entropy -= 10;
    suggestions.push("Avoid repeated characters (e.g. \"aaa\").");
  }
  if (/(?:012|123|234|345|456|567|678|789|abc|bcd|cde|def|qwe|wer|ert)/i.test(password)) {
    entropy -= 10;
    suggestions.push("Avoid common sequences (e.g. \"1234\", \"abcd\").");
  }

  entropy = Math.max(0, entropy);
  const guesses = Math.pow(2, entropy) / 2;
  const seconds = guesses / 1e10;

  const score: StrengthResult["score"] =
    entropy < 28 ? 0 : entropy < 36 ? 1 : entropy < 60 ? 2 : entropy < 90 ? 3 : 4;

  return {
    score,
    label: LABELS[score],
    entropy: Math.round(entropy * 10) / 10,
    crackTime: humanTime(seconds),
    suggestions,
  };
}
