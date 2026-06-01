import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { cva, cx } from "@styled-system/css";

const skeletonVariants = cva({
  base: {
    backgroundImage:
      "linear-gradient(90deg, var(--colors-surface2) 25%, var(--colors-surface3) 37%, var(--colors-surface2) 63%)",
    backgroundSize: "400% 100%",
    borderRadius: "sm",
    animation: "shimmer 1.4s ease infinite",
  },
  variants: {
    shape: {
      rect: {},
      circle: { borderRadius: "full" },
      text: { height: "1em", borderRadius: "sm" },
    },
  },
  defaultVariants: { shape: "rect" },
});

export interface SkeletonProps extends HTMLArkProps<"div"> {
  shape?: "rect" | "circle" | "text";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  shape,
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps): React.JSX.Element {
  return (
    <ark.div
      className={cx(skeletonVariants({ shape }), className)}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...props}
    />
  );
}

Skeleton.displayName = "Skeleton";
