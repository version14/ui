import { Toggle as ArkToggle, ToggleGroup as ArkToggleGroup } from "@ark-ui/react";
import { cva, cx } from "@styled-system/css";

const toggleVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    height: "32px",
    minWidth: "32px",
    paddingInline: "3",
    fontSize: "sm",
    color: "fgMuted",
    background: "transparent",
    border: "1px solid",
    borderColor: "border",
    borderBlockColor: "border",
    borderRadius: "sm",
    cursor: "pointer",
    transition: "all var(--durations-2)",
    "& svg": { width: "15px", height: "15px" },
    _hover: { color: "fg", background: "surface" },
    _pressed: {
      background: "accent",
      color: "accentInk",
      borderColor: "accent",
      borderBlockColor: "accent",
    },
  },
});

const toggleGroupVariants = cva({
  base: {
    display: "inline-flex",
    gap: "1",
    padding: "3px",
    background: "bgSunken",
    border: "1px solid",
    borderColor: "border",
    borderBlockColor: "border",
    borderRadius: "md",
  },
});

export function Toggle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkToggle.Root>): React.JSX.Element {
  return <ArkToggle.Root className={cx(toggleVariants(), className)} {...props} />;
}

Toggle.displayName = "Toggle";

export function ToggleGroupRoot({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkToggleGroup.Root>): React.JSX.Element {
  return <ArkToggleGroup.Root className={cx(toggleGroupVariants(), className)} {...props} />;
}

ToggleGroupRoot.displayName = "ToggleGroupRoot";

const toggleGroupItemVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    height: "26px",
    minWidth: "26px",
    paddingInline: "2",
    fontSize: "sm",
    color: "fgMuted",
    background: "transparent",
    border: "none",
    borderRadius: "sm",
    cursor: "pointer",
    transition: "all var(--durations-2)",
    "& svg": { width: "14px", height: "14px" },
    _hover: { color: "fg", background: "surface2" },
    _pressed: {
      background: "accent",
      color: "accentInk",
    },
  },
});

export function ToggleGroupItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkToggleGroup.Item>): React.JSX.Element {
  return <ArkToggleGroup.Item className={cx(toggleGroupItemVariants(), className)} {...props} />;
}

ToggleGroupItem.displayName = "ToggleGroupItem";
