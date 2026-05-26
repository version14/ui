import type { LoaderVariant } from "../types";
import { buildCycle } from "./cycle";
import { buildPulse } from "./pulse";

export type { LoaderBuildParams } from "./pulse";

export type LoaderBuildFn = typeof buildPulse;

// Add new loader variants here: create a file in this directory and register it below.
export const loaderVariants: Record<LoaderVariant, LoaderBuildFn> = {
  pulse: buildPulse,
  cycle: buildCycle as LoaderBuildFn,
};
