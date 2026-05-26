import type { StaggerConfig } from "../types";

export function random(cols: number, rows: number): StaggerConfig {
  return { grid: [rows, cols], from: "random" };
}
