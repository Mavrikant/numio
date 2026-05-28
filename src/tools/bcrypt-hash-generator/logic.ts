import bcrypt from "bcryptjs";

/** Hash a password with bcrypt at the given cost. Throws on invalid input. */
export async function hashBcrypt(password: string, rounds: number): Promise<string> {
  if (!password) throw new Error("Password is required.");
  if (rounds < 4 || rounds > 15) throw new Error("Rounds must be between 4 and 15.");
  return bcrypt.hash(password, rounds);
}

/** Verify a password against a bcrypt hash. */
export async function verifyBcrypt(password: string, hash: string): Promise<boolean> {
  if (!password || !hash) return false;
  try {
    return await bcrypt.compare(password, hash);
  } catch {
    return false;
  }
}
