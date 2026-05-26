import gsap from "gsap";
import type { AnimTimeline, StaggerConfig } from "../types";
import { assignTileColor } from "./utils";

export interface StyleBuildParams {
  tiles: HTMLElement[];
  stagger: StaggerConfig;
  color: string;
  durationSec: number;
}

export interface StyleTimelines {
  cover: AnimTimeline;
  uncover: AnimTimeline;
}

export function buildSolid({
  tiles,
  stagger,
  color,
  durationSec,
}: StyleBuildParams): StyleTimelines {
  assignTileColor(tiles, color);

  const amount = durationSec * 0.7;

  const cover = gsap.timeline({ paused: true });
  cover.set(tiles, { opacity: 0 }).to(tiles, {
    opacity: 1,
    duration: 0.08,
    stagger: { ...stagger, amount },
    ease: "steps(1)",
  });

  const uncover = gsap.timeline({ paused: true });
  uncover.to(tiles, {
    opacity: 0,
    duration: 0.08,
    stagger: { ...stagger, amount: amount * 0.85 },
    ease: "steps(1)",
  });

  return { cover: cover as unknown as AnimTimeline, uncover: uncover as unknown as AnimTimeline };
}
