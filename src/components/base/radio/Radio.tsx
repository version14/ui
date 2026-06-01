import { RadioGroup as ArkRadioGroup } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const radioRecipe = sva({
  slots: ["root", "item", "itemControl", "itemText"],
  base: {
    root: { display: "flex", flexDirection: "column", gap: "2" },
    item: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      cursor: "pointer",
      userSelect: "none",
    },
    itemControl: {
      width: "16px",
      height: "16px",
      flexShrink: "0",
      border: "1px solid",
      borderColor: "borderStrong",
      borderBlockColor: "borderStrong",
      borderRadius: "full",
      background: "bgSunken",
      display: "grid",
      placeItems: "center",
      transition: "all var(--durations-2)",
      _focusVisible: { boxShadow: "0 0 0 3px var(--colors-accent-glow)" },
      _disabled: { opacity: "0.5" },
      "&::after": {
        content: '""',
        width: "6px",
        height: "6px",
        borderRadius: "full",
        background: "accentInk",
        opacity: "0",
        transform: "scale(0.4)",
        transition: "transform var(--durations-2), opacity var(--durations-2)",
      },
      _checked: {
        background: "accent",
        borderColor: "accent",
        borderBlockColor: "accent",
        "&::after": { opacity: "1", transform: "scale(1)" },
      },
    },
    itemText: {
      fontSize: "sm",
      color: "fg",
      _disabled: { opacity: "0.5" },
    },
  },
});

const classes = radioRecipe();

export const RadioGroupRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkRadioGroup.Root>) => (
  <ArkRadioGroup.Root className={cx(classes.root, className)} {...props} />
);

export const RadioGroupItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkRadioGroup.Item>) => (
  <ArkRadioGroup.Item className={cx(classes.item, className)} {...props} />
);

export const RadioGroupItemControl = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkRadioGroup.ItemControl>) => (
  <ArkRadioGroup.ItemControl className={cx(classes.itemControl, className)} {...props} />
);

export const RadioGroupItemText = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkRadioGroup.ItemText>) => (
  <ArkRadioGroup.ItemText className={cx(classes.itemText, className)} {...props} />
);
