import { describe, it, expect } from "vitest";
import { FIELD, PADDLE, aiPaddleDir, initialState, step } from "../logic";

describe("pong-game", () => {
  it("starts with both scores at zero", () => {
    expect(initialState()).toMatchObject({ leftScore: 0, rightScore: 0 });
  });
  it("moves the ball one tick when stepping", () => {
    const a = initialState();
    const b = step(a, 0, 0);
    expect(b.ballX).not.toBe(a.ballX);
  });
  it("clamps the left paddle inside the field", () => {
    let s = initialState();
    for (let i = 0; i < 200; i++) s = step(s, -1, 0);
    expect(s.leftY).toBe(0);
  });
  it("scores when the ball passes the left edge", () => {
    let s = { ...initialState(), ballX: -100, ballY: 10, ballVx: -4 };
    s = step(s, 0, 0);
    expect(s.rightScore).toBe(1);
    expect(s.ballX).toBe(FIELD.width / 2);
  });
  it("ai moves toward the ball's centre", () => {
    const above = { ...initialState(), ballY: 10, rightY: 200 };
    expect(aiPaddleDir(above, above.rightY)).toBe(-1);
    const below = { ...initialState(), ballY: FIELD.height - 10, rightY: 10 };
    expect(aiPaddleDir(below, below.rightY)).toBe(1);
  });
  it("paddle constants are sensible", () => {
    expect(PADDLE.height).toBeGreaterThan(0);
    expect(PADDLE.width).toBeGreaterThan(0);
  });
});
