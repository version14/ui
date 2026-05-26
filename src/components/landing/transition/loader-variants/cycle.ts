import gsap from "gsap";
import { assignTileColor } from "../styles/utils";
import type { AnimTimeline } from "../types";

export interface LoaderBuildParams {
  tiles: HTMLElement[];
  cols: number;
  rows: number;
  color: string;
  durationSec: number;
}

// Tiles activate in random order for a dense flickering noise pattern.
export function buildCycle({
  tiles,
  cols,
  rows,
  color,
  durationSec,
}: LoaderBuildParams): AnimTimeline {
  assignTileColor(tiles, color);

  const amount = durationSec * 0.4;

  const tl = gsap.timeline({ repeat: -1 });
  tl.set(tiles, { opacity: 0.08 })
    .to(tiles, {
      opacity: 1,
      duration: 0.05,
      stagger: { grid: [rows, cols], from: "random", amount },
      ease: "steps(1)",
    })
    .to(tiles, {
      opacity: 0.08,
      duration: 0.05,
      stagger: { grid: [rows, cols], from: "random", amount: amount * 0.7 },
      ease: "steps(1)",
    });

  return tl as unknown as AnimTimeline;
}
