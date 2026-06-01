import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { cva, cx } from "@styled-system/css";

const separatorVariants = cva({
  base: {
    flexShrink: "0",
    background: "border",
  },
  variants: {
    orientation: {
      horizontal: { height: "1px", width: "100%", display: "block" },
      vertical: { width: "1px", height: "auto", alignSelf: "stretch", display: "inline-block" },
    },
    accent: {
      true: { background: "borderAccent" },
    },
  },
  defaultVariants: { orientation: "horizontal" },
});

export interface SeparatorProps extends Omit<HTMLArkProps<"div">, "children"> {
  orientation?: "horizontal" | "vertical";
  accent?: boolean;
}

export function Separator({
  orientation,
  accent,
  className,
  ...props
}: SeparatorProps): React.JSX.Element {
  return (
    <ark.div
      role="separator"
      aria-orientation={orientation}
      className={cx(separatorVariants({ orientation, accent }), className)}
      {...props}
    />
  );
}

Separator.displayName = "Separator";
