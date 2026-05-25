import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { sva } from "@styled-system/css";

const buttonRecipe = sva({
  slots: ["root"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      cursor: "pointer",
      fontWeight: "medium",
      borderRadius: "md",
      transition: "all 0.2s",
      _disabled: { opacity: "0.5", cursor: "not-allowed", pointerEvents: "none" },
      _focusVisible: { outline: "2px solid", outlineOffset: "2px" },
    },
  },
  variants: {
    size: {
      sm: { root: { px: "3", h: "8", fontSize: "sm" } },
      md: { root: { px: "4", h: "10", fontSize: "md" } },
      lg: { root: { px: "6", h: "12", fontSize: "lg" } },
    },
    intent: {
      primary: {
        root: { bg: "blue.500", color: "white", _hover: { bg: "blue.600" } },
      },
      secondary: {
        root: { bg: "gray.100", color: "gray.900", _hover: { bg: "gray.200" } },
      },
      ghost: {
        root: { bg: "transparent", color: "gray.700", _hover: { bg: "gray.100" } },
      },
    },
  },
  defaultVariants: { size: "md", intent: "primary" },
});

export interface ButtonProps extends HTMLArkProps<"button"> {
  size?: "sm" | "md" | "lg";
  intent?: "primary" | "secondary" | "ghost";
}

export function Button({ size, intent, className, ...props }: ButtonProps): React.JSX.Element {
  const classes = buttonRecipe({ size, intent });
  return <ark.button className={[classes.root, className].filter(Boolean).join(" ")} {...props} />;
}
Button.displayName = "Button";
