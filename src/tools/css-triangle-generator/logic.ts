export type Direction = "up" | "down" | "left" | "right";

/**
 * Build the CSS for a single-element triangle drawn with the classic
 * border trick — width/height are zero and exactly three of the four
 * borders are transparent.
 */
export function buildTriangle(direction: Direction, size: number, color: string): string {
  const s = Math.max(1, Math.round(size));
  switch (direction) {
    case "up":
      return `width: 0;\nheight: 0;\nborder-left: ${s}px solid transparent;\nborder-right: ${s}px solid transparent;\nborder-bottom: ${s}px solid ${color};`;
    case "down":
      return `width: 0;\nheight: 0;\nborder-left: ${s}px solid transparent;\nborder-right: ${s}px solid transparent;\nborder-top: ${s}px solid ${color};`;
    case "left":
      return `width: 0;\nheight: 0;\nborder-top: ${s}px solid transparent;\nborder-bottom: ${s}px solid transparent;\nborder-right: ${s}px solid ${color};`;
    case "right":
      return `width: 0;\nheight: 0;\nborder-top: ${s}px solid transparent;\nborder-bottom: ${s}px solid transparent;\nborder-left: ${s}px solid ${color};`;
  }
}
