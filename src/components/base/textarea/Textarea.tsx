import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { css, cva, cx } from "@styled-system/css";

const textareaVariants = cva({
  base: {
    width: "100%",
    minHeight: "88px",
    paddingInline: "3",
    paddingBlock: "2",
    fontFamily: "sans",
    fontSize: "base",
    lineHeight: "base",
    color: "fg",
    background: "bgSunken",
    border: "1px solid",
    borderColor: "border",
    borderBlockColor: "border",
    borderRadius: "sm",
    outline: "none",
    resize: "vertical",
    transition: "border-color var(--durations-2), box-shadow var(--durations-2)",
    _placeholder: { color: "fgFaint" },
    _hover: { borderColor: "borderStrong", borderBlockColor: "borderStrong" },
    _focus: {
      borderColor: "accent",
      borderBlockColor: "borderStrong",
      boxShadow: "0 0 0 3px var(--colors-accent-glow)",
    },
    _disabled: { opacity: "0.5", pointerEvents: "none" },
  },
  variants: {
    invalid: {
      true: {
        borderColor: "danger",
        borderBlockColor: "danger",
        _focus: { boxShadow: "0 0 0 3px var(--colors-danger-bg)" },
      },
    },
  },
});

export interface TextareaProps extends HTMLArkProps<"textarea"> {
  invalid?: boolean;
}

export function Textarea({ invalid, className, ...props }: TextareaProps): React.JSX.Element {
  return <ark.textarea className={cx(textareaVariants({ invalid }), className)} {...props} />;
}

Textarea.displayName = "Textarea";

const fieldCss = css({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "100%",
});

export function TextareaField({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">): React.JSX.Element {
  return <div className={cx(fieldCss, className)} {...props} />;
}

TextareaField.displayName = "TextareaField";

const labelCss = css({
  fontSize: "sm",
  fontWeight: "500",
  color: "fg",
});

export function TextareaLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"label">): React.JSX.Element {
  // biome-ignore lint/a11y/noLabelWithoutControl: htmlFor is passed via props spread
  return <label className={cx(labelCss, className)} {...props} />;
}

TextareaLabel.displayName = "TextareaLabel";

const hintCss = css({
  fontSize: "sm",
  color: "fgMuted",
});

export function TextareaHint({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">): React.JSX.Element {
  return <p className={cx(hintCss, className)} {...props} />;
}

TextareaHint.displayName = "TextareaHint";

const errorCss = css({
  fontSize: "sm",
  color: "danger",
});

export function TextareaError({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">): React.JSX.Element {
  return <p className={cx(errorCss, className)} {...props} />;
}

TextareaError.displayName = "TextareaError";
