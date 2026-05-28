export interface PongState {
  readonly ballX: number;
  readonly ballY: number;
  readonly ballVx: number;
  readonly ballVy: number;
  readonly leftY: number;
  readonly rightY: number;
  readonly leftScore: number;
  readonly rightScore: number;
}

export const FIELD = { width: 600, height: 360 } as const;
export const PADDLE = { width: 8, height: 60 } as const;
export const BALL = { size: 8 } as const;

export function initialState(): PongState {
  return {
    ballX: FIELD.width / 2,
    ballY: FIELD.height / 2,
    ballVx: 4,
    ballVy: 2,
    leftY: (FIELD.height - PADDLE.height) / 2,
    rightY: (FIELD.height - PADDLE.height) / 2,
    leftScore: 0,
    rightScore: 0,
  };
}

/** Advance one tick. Returns the new state. */
export function step(state: PongState, leftDir: -1 | 0 | 1, rightDir: -1 | 0 | 1, paddleSpeed = 6): PongState {
  const clamp = (n: number) => Math.max(0, Math.min(FIELD.height - PADDLE.height, n));
  let { ballX, ballY, ballVx, ballVy, leftY, rightY, leftScore, rightScore } = state;

  leftY = clamp(leftY + leftDir * paddleSpeed);
  rightY = clamp(rightY + rightDir * paddleSpeed);

  ballX += ballVx;
  ballY += ballVy;

  // Top/bottom walls.
  if (ballY < 0) {
    ballY = -ballY;
    ballVy = -ballVy;
  }
  if (ballY > FIELD.height - BALL.size) {
    ballY = 2 * (FIELD.height - BALL.size) - ballY;
    ballVy = -ballVy;
  }

  // Left paddle.
  if (ballX <= PADDLE.width && ballY + BALL.size >= leftY && ballY <= leftY + PADDLE.height && ballVx < 0) {
    ballX = PADDLE.width;
    ballVx = -ballVx;
    const offset = ballY + BALL.size / 2 - (leftY + PADDLE.height / 2);
    ballVy = ballVy + offset * 0.05;
  }
  // Right paddle.
  if (ballX + BALL.size >= FIELD.width - PADDLE.width && ballY + BALL.size >= rightY && ballY <= rightY + PADDLE.height && ballVx > 0) {
    ballX = FIELD.width - PADDLE.width - BALL.size;
    ballVx = -ballVx;
    const offset = ballY + BALL.size / 2 - (rightY + PADDLE.height / 2);
    ballVy = ballVy + offset * 0.05;
  }

  // Score and reset.
  if (ballX < -BALL.size) {
    rightScore += 1;
    return { ...initialState(), leftScore, rightScore, ballVx: 4 };
  }
  if (ballX > FIELD.width) {
    leftScore += 1;
    return { ...initialState(), leftScore, rightScore, ballVx: -4 };
  }

  return { ballX, ballY, ballVx, ballVy, leftY, rightY, leftScore, rightScore };
}

/** Simple AI: move toward the ball's centre. */
export function aiPaddleDir(state: PongState, paddleY: number): -1 | 0 | 1 {
  const target = state.ballY + BALL.size / 2;
  const centre = paddleY + PADDLE.height / 2;
  if (target < centre - 4) return -1;
  if (target > centre + 4) return 1;
  return 0;
}
