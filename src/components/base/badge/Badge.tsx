import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { cva, cx } from "@styled-system/css";

const badgeVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    height: "20px",
    paddingInline: "8px",
    fontFamily: "mono",
    fontSize: "10.5px",
    fontWeight: "500",
    letterSpacing: "wide",
    textTransform: "uppercase",
    borderRadius: "sm",
    border: "1px solid",
    borderBlockColor: "border",
    borderColor: "border",
    color: "fgMuted",
    background: "surface",
  },
  variants: {
    intent: {
      default: {},
      accent: {
        color: "accentText",
        borderBlockColor: "borderAccent",
        borderColor: "borderAccent",
        background: "oklch(0.86 0.21 128 / 0.10)",
      },
      success: {
        color: "success",
        borderBlockColor: "borderSuccess",
        borderColor: "borderSuccess",
        background: "successBg",
      },
      warning: {
        color: "warning",
        borderBlockColor: "borderWarning",
        borderColor: "borderWarning",
        background: "warningBg",
      },
      danger: {
        color: "danger",
        borderBlockColor: "borderDanger",
        borderColor: "borderDanger",
        background: "dangerBg",
      },
      info: {
        color: "info",
        borderBlockColor: "borderInfo",
        borderColor: "borderInfo",
        background: "infoBg",
      },
      solid: {
        background: "accent",
        color: "accentInk",
        borderBlockColor: "accent",
        borderColor: "accent",
      },
    },
  },
  defaultVariants: { intent: "default" },
});

export interface BadgeProps extends HTMLArkProps<"span"> {
  intent?: "default" | "accent" | "success" | "warning" | "danger" | "info" | "solid";
}

export function Badge({ intent, className, ...props }: BadgeProps): React.JSX.Element {
  return <ark.span className={cx(badgeVariants({ intent }), className)} {...props} />;
}

Badge.displayName = "Badge";
