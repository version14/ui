import type { TransitionVariant, VariantFn } from "../types";
import { random } from "./random";

// Add new variants here: create a file in this directory and register it below.
export const variants: Record<TransitionVariant, VariantFn> = {
  random,
};
