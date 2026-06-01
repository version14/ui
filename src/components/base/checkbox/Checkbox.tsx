import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const checkboxRecipe = sva({
  slots: ["root", "control", "label", "indicator"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      cursor: "pointer",
      userSelect: "none",
    },
    control: {
      width: "16px",
      height: "16px",
      flexShrink: "0",
      border: "1px solid",
      borderBlockColor: "borderStrong",
      borderColor: "borderStrong",
      borderRadius: "sm",
      background: "bgSunken",
      display: "grid",
      placeItems: "center",
      transition: "all var(--durations-2)",
      _checked: {
        background: "accent",
        borderBlockColor: "accent",
        borderColor: "accent",
      },
      _focusVisible: {
        boxShadow: "0 0 0 3px var(--colors-accent-glow)",
      },
      _disabled: { opacity: "0.5" },
    },
    indicator: {
      color: "accentInk",
      "& svg": {
        width: "11px",
        height: "11px",
        strokeWidth: "3",
        transition: "transform var(--durations-2), opacity var(--durations-2)",
        opacity: "0",
        transform: "scale(0.6)",
      },
      _checked: {
        "& svg": { opacity: "1", transform: "scale(1)" },
      },
    },
    label: {
      fontSize: "sm",
      color: "fg",
      lineHeight: "base",
      _disabled: { opacity: "0.5" },
    },
  },
});

const classes = checkboxRecipe();

export const CheckboxRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkCheckbox.Root>) => (
  <ArkCheckbox.Root className={cx(classes.root, className)} {...props} />
);

export const CheckboxControl = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkCheckbox.Control>) => (
  <ArkCheckbox.Control className={cx(classes.control, className)} {...props} />
);

export const CheckboxLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkCheckbox.Label>) => (
  <ArkCheckbox.Label className={cx(classes.label, className)} {...props} />
);

export const CheckboxIndicator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkCheckbox.Indicator>) => (
  <ArkCheckbox.Indicator className={cx(classes.indicator, className)} {...props} />
);
