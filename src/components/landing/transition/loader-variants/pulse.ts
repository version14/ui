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

// Concentric rings of pixels expand outward from the center, then contract.
export function buildPulse({
  tiles,
  cols,
  rows,
  color,
  durationSec,
}: LoaderBuildParams): AnimTimeline {
  assignTileColor(tiles, color);

  const expandAmount = durationSec * 0.45;
  const contractAmount = durationSec * 0.35;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
  tl.set(tiles, { opacity: 0.1 })
    .to(tiles, {
      opacity: 1,
      duration: 0.07,
      stagger: { grid: [rows, cols], from: "center", amount: expandAmount },
      ease: "steps(1)",
    })
    .to(tiles, {
      opacity: 0.1,
      duration: 0.07,
      stagger: { grid: [rows, cols], from: "center", amount: contractAmount },
      ease: "steps(1)",
    });

  return tl as unknown as AnimTimeline;
}
