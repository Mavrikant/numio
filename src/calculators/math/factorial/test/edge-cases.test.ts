import { describe, it } from "vitest";
import { inputSchema } from "../compute";
describe("edge cases", () => { it("schema valid", () => { const r = inputSchema.safeParse({}); expect(r.success).toBe(false); }); });