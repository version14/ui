import { Select as ArkSelect, createListCollection } from "@ark-ui/react";
import { css, cx, sva } from "@styled-system/css";

const selectRecipe = sva({
  slots: [
    "root",
    "label",
    "control",
    "trigger",
    "valueText",
    "indicator",
    "positioner",
    "content",
    "itemGroup",
    "itemGroupLabel",
    "item",
    "itemText",
    "itemIndicator",
  ],
  base: {
    root: { display: "flex", flexDirection: "column", gap: "6px", width: "100%" },
    label: {
      fontSize: "sm",
      fontWeight: "500",
      color: "fg",
    },
    control: { position: "relative", width: "100%" },
    trigger: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "34px",
      paddingInline: "3",
      paddingRight: "8",
      fontFamily: "sans",
      fontSize: "base",
      color: "fg",
      background: "bgSunken",
      border: "1px solid",
      borderColor: "border",
      borderBlockColor: "border",
      borderRadius: "sm",
      outline: "none",
      cursor: "pointer",
      transition: "border-color var(--durations-2), box-shadow var(--durations-2)",
      _hover: { borderColor: "borderStrong", borderBlockColor: "borderStrong" },
      _focusVisible: {
        borderColor: "accent",
        borderBlockColor: "accent",
        boxShadow: "0 0 0 3px var(--colors-accent-glow)",
      },
      _disabled: { opacity: "0.5", pointerEvents: "none" },
    },
    valueText: { flex: "1", textAlign: "left" },
    indicator: {
      position: "absolute",
      right: "3",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "fgSubtle",
      "& svg": { width: "14px", height: "14px" },
    },
    positioner: { zIndex: "50" },
    content: {
      minWidth: "200px",
      background: "surface",
      border: "1px solid",
      borderColor: "borderStrong",
      borderBlockColor: "borderStrong",
      borderRadius: "md",
      boxShadow: "md",
      padding: "1",
      outline: "none",
      _open: { animation: "popover-in var(--durations-3) var(--easings-out)" },
      _closed: { animation: "popover-out var(--durations-2) var(--easings-out)" },
    },
    itemGroupLabel: {
      fontFamily: "mono",
      fontSize: "10px",
      letterSpacing: "caps",
      textTransform: "uppercase",
      color: "fgFaint",
      paddingInline: "2",
      paddingBlock: "2",
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
      position: "relative",
      transition: "background var(--durations-1), color var(--durations-1)",
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
      _selected: { color: "accentText" },
    },
    itemText: { flex: "1" },
    itemIndicator: { color: "accent", "& svg": { width: "14px", height: "14px" } },
  },
});

const classes = selectRecipe();

export const SelectRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Root>) => (
  <ArkSelect.Root className={cx(classes.root, className)} {...props} />
);

export const SelectLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Label>) => (
  <ArkSelect.Label className={cx(classes.label, className)} {...props} />
);

export const SelectControl = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Control>) => (
  <ArkSelect.Control className={cx(classes.control, className)} {...props} />
);

export const SelectTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Trigger>) => (
  <ArkSelect.Trigger className={cx(classes.trigger, className)} {...props} />
);

export const SelectValueText = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.ValueText>) => (
  <ArkSelect.ValueText className={cx(classes.valueText, className)} {...props} />
);

export const SelectIndicator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Indicator>) => (
  <ArkSelect.Indicator className={cx(classes.indicator, className)} {...props} />
);

export const SelectPositioner = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Positioner>) => (
  <ArkSelect.Positioner className={cx(classes.positioner, className)} {...props} />
);

export const SelectContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Content>) => (
  <ArkSelect.Content className={cx(classes.content, className)} {...props} />
);

export const SelectItemGroup = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.ItemGroup>) => (
  <ArkSelect.ItemGroup className={cx(classes.itemGroup, className)} {...props} />
);

export const SelectItemGroupLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.ItemGroupLabel>) => (
  <ArkSelect.ItemGroupLabel className={cx(classes.itemGroupLabel, className)} {...props} />
);

export const SelectItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.Item>) => (
  <ArkSelect.Item className={cx(classes.item, className)} {...props} />
);

export const SelectItemText = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.ItemText>) => (
  <ArkSelect.ItemText className={cx(classes.itemText, className)} {...props} />
);

export const SelectItemIndicator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSelect.ItemIndicator>) => (
  <ArkSelect.ItemIndicator className={cx(classes.itemIndicator, className)} {...props} />
);

export { createListCollection };

const selectTagsWrapCss = css({
  display: "flex",
  alignItems: "center",
  gap: "1",
  flex: "1",
  minWidth: "0",
  overflow: "hidden",
});

const selectTagCss = css({
  display: "inline-flex",
  alignItems: "center",
  height: "20px",
  paddingInline: "6px",
  fontSize: "11px",
  fontFamily: "mono",
  borderRadius: "sm",
  background: "surface3",
  color: "fg",
  flexShrink: "0",
  whiteSpace: "nowrap",
});

const selectPlaceholderCss = css({ color: "fgSubtle" });

export interface SelectTagsDisplayProps {
  placeholder?: string;
  maxVisible?: number;
  className?: string;
}

export function SelectTagsDisplay({
  placeholder = "Select…",
  maxVisible = 2,
  className,
}: SelectTagsDisplayProps): React.JSX.Element {
  return (
    <ArkSelect.Context>
      {(select) => {
        const selected = select.selectedItems as Array<{ label: string; value: string }>;
        if (selected.length === 0) {
          return <span className={cx(selectPlaceholderCss, className)}>{placeholder}</span>;
        }
        const visible = selected.slice(0, maxVisible);
        const overflow = selected.length - maxVisible;
        return (
          <div className={cx(selectTagsWrapCss, className)}>
            {visible.map((item) => (
              <span key={item.value} className={selectTagCss}>
                {item.label}
              </span>
            ))}
            {overflow > 0 && <span className={selectTagCss}>+{overflow}</span>}
          </div>
        );
      }}
    </ArkSelect.Context>
  );
}

SelectTagsDisplay.displayName = "SelectTagsDisplay";
