import { Menu as ArkMenu } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const dropdownRecipe = sva({
  slots: [
    "trigger",
    "positioner",
    "content",
    "label",
    "item",
    "itemText",
    "itemShortcut",
    "separator",
    "arrow",
    "arrowTip",
  ],
  base: {
    trigger: {},
    positioner: { zIndex: "50" },
    content: {
      minWidth: "200px",
      background: "surface",
      border: "1px solid",
      borderBlockColor: "borderStrong",
      borderColor: "borderStrong",
      borderRadius: "md",
      boxShadow: "md",
      padding: "1",
      outline: "none",
      _open: { animation: "popover-in var(--durations-3) var(--easings-out)" },
      _closed: { animation: "popover-out var(--durations-2) var(--easings-out)" },
    },
    label: {
      fontFamily: "mono",
      fontSize: "10px",
      letterSpacing: "caps",
      textTransform: "uppercase",
      color: "fgFaint",
      paddingInline: "2",
      paddingTop: "2",
      paddingBottom: "1",
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: "3",
      paddingInline: "2",
      paddingBlock: "6px",
      borderRadius: "sm",
      fontSize: "sm",
      color: "fgMuted",
      cursor: "pointer",
      outline: "none",
      position: "relative",
      transition: "background var(--durations-1), color var(--durations-1)",
      "& svg": { width: "14px", height: "14px" },
      _before: {
        content: '""',
        position: "absolute",
        left: "0",
        top: "4px",
        bottom: "4px",
        width: "2px",
        background: "accent",
        borderRadius: "full",
        transform: "scaleY(0)",
        transition: "transform var(--durations-2) var(--easings-out)",
      },
      _highlighted: { background: "surface2", color: "fg" },
      "&[data-highlighted]::before": { transform: "scaleY(1)" },
      "&[data-variant=danger]": { color: "danger" },
      "&[data-variant=danger][data-highlighted]": { background: "dangerBg" },
      "&[data-variant=danger][data-highlighted]::before": { background: "danger" },
    },
    itemText: { flex: "1" },
    itemShortcut: {
      marginLeft: "auto",
      fontFamily: "mono",
      fontSize: "10px",
      color: "fgFaint",
    },
    separator: {
      height: "1px",
      backgroundColor: "border",
      border: "0",
      marginBlock: "1",
    },
    arrow: { "--arrow-size": "8px", "--arrow-background": "var(--colors-surface)" },
    arrowTip: { borderTopColor: "borderStrong", borderLeftColor: "borderStrong" },
  },
});

const classes = dropdownRecipe();

export const DropdownRoot = ({ ...props }: React.ComponentPropsWithoutRef<typeof ArkMenu.Root>) => (
  <ArkMenu.Root {...props} />
);

export const DropdownTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkMenu.Trigger>) => (
  <ArkMenu.Trigger className={cx(classes.trigger, className)} {...props} />
);

export const DropdownPositioner = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkMenu.Positioner>) => (
  <ArkMenu.Positioner className={cx(classes.positioner, className)} {...props} />
);

export const DropdownContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkMenu.Content>) => (
  <ArkMenu.Content className={cx(classes.content, className)} {...props} />
);

export const DropdownLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkMenu.ItemGroupLabel>) => (
  <ArkMenu.ItemGroupLabel className={cx(classes.label, className)} {...props} />
);

export const DropdownItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkMenu.Item>) => (
  <ArkMenu.Item className={cx(classes.item, className)} {...props} />
);

export const DropdownItemText = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) => (
  <span className={cx(classes.itemText, className)} {...props} />
);

export const DropdownItemShortcut = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) => (
  <span className={cx(classes.itemShortcut, className)} {...props} />
);

export const DropdownSeparator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkMenu.Separator>) => (
  <ArkMenu.Separator className={cx(classes.separator, className)} {...props} />
);

export const DropdownItemGroup = ArkMenu.ItemGroup;

DropdownRoot.displayName = "DropdownRoot";
DropdownContent.displayName = "DropdownContent";
