import { describe, it, expect } from "vitest";
import { DEFAULT_SETTINGS, formatMmSs, nextPhase, phaseSeconds } from "../logic";

describe("pomodoro-timer", () => {
  it("formats mm:ss", () => {
    expect(formatMmSs(0)).toBe("00:00");
    expect(formatMmSs(65)).toBe("01:05");
    expect(formatMmSs(25 * 60)).toBe("25:00");
  });
  it("clamps negatives to 00:00", () => {
    expect(formatMmSs(-10)).toBe("00:00");
  });
  it("returns the correct phase length", () => {
    expect(phaseSeconds("focus", DEFAULT_SETTINGS)).toBe(25 * 60);
    expect(phaseSeconds("shortBreak", DEFAULT_SETTINGS)).toBe(5 * 60);
    expect(phaseSeconds("longBreak", DEFAULT_SETTINGS)).toBe(15 * 60);
  });
  it("goes focus → shortBreak → focus for rounds 1–3", () => {
    expect(nextPhase("focus", 1, DEFAULT_SETTINGS)).toBe("shortBreak");
    expect(nextPhase("focus", 2, DEFAULT_SETTINGS)).toBe("shortBreak");
    expect(nextPhase("shortBreak", 2, DEFAULT_SETTINGS)).toBe("focus");
  });
  it("inserts a long break every 4th completed focus round", () => {
    expect(nextPhase("focus", 4, DEFAULT_SETTINGS)).toBe("longBreak");
    expect(nextPhase("longBreak", 4, DEFAULT_SETTINGS)).toBe("focus");
  });
});
