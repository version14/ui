import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { css, cva, cx } from "@styled-system/css";

const inputVariants = cva({
  base: {
    width: "100%",
    height: "34px",
    paddingInline: "3",
    fontFamily: "sans",
    fontSize: "base",
    color: "fg",
    background: "bgSunken",
    border: "1px solid",
    borderBlockColor: "border",
    borderColor: "border",
    borderRadius: "sm",
    outline: "none",
    transition: "border-color var(--durations-2), box-shadow var(--durations-2)",
    _placeholder: { color: "fgFaint" },
    _hover: { borderColor: "borderStrong", borderBlockColor: "borderStrong" },
    _focus: {
      borderColor: "accent",
      borderBlockColor: "accent",
      boxShadow: "0 0 0 3px var(--colors-accent-glow)",
    },
    _disabled: { opacity: "0.5", pointerEvents: "none" },
  },
  variants: {
    mono: {
      true: { fontFamily: "mono", letterSpacing: "mono" },
    },
    invalid: {
      true: {
        borderColor: "danger",
        borderBlockColor: "danger",
        _focus: { boxShadow: "0 0 0 3px var(--colors-danger-bg)" },
      },
    },
  },
});

export interface InputProps extends HTMLArkProps<"input"> {
  mono?: boolean;
  invalid?: boolean;
}

export function Input({ mono, invalid, className, ...props }: InputProps): React.JSX.Element {
  return <ark.input className={cx(inputVariants({ mono, invalid }), className)} {...props} />;
}

Input.displayName = "Input";

const fieldCss = css({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "100%",
});

export function InputField({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">): React.JSX.Element {
  return <div className={cx(fieldCss, className)} {...props} />;
}

InputField.displayName = "InputField";

const labelCss = css({
  fontSize: "sm",
  fontWeight: "500",
  color: "fg",
});

export function InputLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"label">): React.JSX.Element {
  // biome-ignore lint/a11y/noLabelWithoutControl: htmlFor is passed via props spread
  return <label className={cx(labelCss, className)} {...props} />;
}

InputLabel.displayName = "InputLabel";

const hintCss = css({
  fontSize: "sm",
  color: "fgMuted",
});

export function InputHint({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">): React.JSX.Element {
  return <p className={cx(hintCss, className)} {...props} />;
}

InputHint.displayName = "InputHint";

const errorCss = css({
  fontSize: "sm",
  color: "danger",
});

export function InputError({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">): React.JSX.Element {
  return <p className={cx(errorCss, className)} {...props} />;
}

InputError.displayName = "InputError";
