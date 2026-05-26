import type { TransitionStyle } from "../types";
import { buildSolid } from "./solid";

export type { StyleBuildParams, StyleTimelines } from "./solid";

export type StyleBuildFn = typeof buildSolid;

// Add new styles here: create a file in this directory and register it below.
export const styles: Record<TransitionStyle, StyleBuildFn> = {
  solid: buildSolid,
};
