export type TransitionVariant = "random";
export type TransitionStyle = "solid";
export type LoaderVariant = "pulse" | "cycle";

export interface TransitionConfig {
  variant?: TransitionVariant;
  style?: TransitionStyle;
  loaderVariant?: LoaderVariant;
  tileSize?: number;
  color?: string;
  duration?: number;
}

export interface StaggerConfig {
  grid: [number, number]; // [rows, cols]
  from: "start" | "end" | "center" | "edges" | "random";
  axis?: "x" | "y";
}

export type VariantFn = (cols: number, rows: number) => StaggerConfig;

export interface AnimTimeline {
  play(): this;
  kill(): this;
  eventCallback(event: "onComplete", callback: (() => void) | null): this;
}
