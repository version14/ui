import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { cva, cx } from "@styled-system/css";

const buttonVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    height: "34px",
    paddingInline: "4",
    fontFamily: "sans",
    fontSize: "sm",
    fontWeight: "500",
    letterSpacing: "-0.005em",
    border: "1px solid transparent",
    borderRadius: "sm",
    background: "surface2",
    color: "fg",
    whiteSpace: "nowrap",
    userSelect: "none",
    transition:
      "background var(--durations-2), border-color var(--durations-2), color var(--durations-2), box-shadow var(--durations-2), transform var(--durations-1)",
    _active: { transform: "translateY(0.5px)" },
    _disabled: { opacity: "0.4", pointerEvents: "none" },
    "& svg": { width: "15px", height: "15px" },
  },
  variants: {
    variant: {
      primary: {
        background: "accent",
        color: "accentInk",
        borderBlockColor: "accent",
        borderColor: "accent",
        _hover: {
          background: "accentHover",
          boxShadow: "0 0 0 3px var(--colors-accent-glow)",
        },
        _active: { background: "accentPress" },
      },
      secondary: {
        background: "surface2",
        color: "fg",
        borderBlockColor: "border",
        borderColor: "border",
        _hover: {
          background: "surface3",
          borderBlockColor: "borderStrong",
          borderColor: "borderStrong",
        },
      },
      outline: {
        background: "transparent",
        color: "fg",
        borderBlockColor: "borderStrong",
        borderColor: "borderStrong",
        _hover: { background: "surface", borderColor: "accent", borderBlockColor: "accent" },
      },
      ghost: {
        background: "transparent",
        color: "fgMuted",
        _hover: { background: "surface", color: "fg" },
      },
      danger: {
        background: "danger",
        color: "oklch(0.98 0 0)",
        _hover: {
          boxShadow: "0 0 0 3px oklch(0.66 0.20 26 / 0.25)",
          filter: "brightness(1.08)",
        },
      },
      link: {
        background: "transparent",
        color: "accentText",
        height: "auto",
        paddingInline: "0",
        position: "relative",
        _after: {
          content: '""',
          position: "absolute",
          bottom: "-1px",
          left: "0",
          right: "0",
          height: "1px",
          background: "currentColor",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform var(--durations-2) var(--easings-out)",
        },
        _hover: { _after: { transform: "scaleX(1)" } },
      },
      "link-arrow": {
        background: "transparent",
        color: "accentText",
        height: "auto",
        paddingInline: "0",
        _after: {
          content: '"→"',
          display: "inline-block",
          marginLeft: "1",
          transition: "transform var(--durations-2) var(--easings-out)",
        },
        _hover: { _after: { transform: "translateX(3px)" } },
      },
    },
    size: {
      sm: { height: "28px", paddingInline: "3", fontSize: "xs" },
      md: { height: "34px", paddingInline: "4", fontSize: "sm" },
      lg: { height: "42px", paddingInline: "5", fontSize: "md" },
      icon: { width: "34px", height: "34px", paddingInline: "0" },
      iconSm: { width: "28px", height: "28px", paddingInline: "0" },
      iconLg: { width: "42px", height: "42px", paddingInline: "0" },
    },
  },
  defaultVariants: { variant: "secondary", size: "md" },
});

export interface ButtonProps extends HTMLArkProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "link" | "link-arrow";
  size?: "sm" | "md" | "lg" | "icon" | "iconSm" | "iconLg";
}

export function Button({ variant, size, className, ...props }: ButtonProps): React.JSX.Element {
  return <ark.button className={cx(buttonVariants({ variant, size }), className)} {...props} />;
}

Button.displayName = "Button";
