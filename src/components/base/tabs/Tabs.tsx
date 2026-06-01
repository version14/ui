import { Tabs as ArkTabs } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const tabsRecipe = sva({
  slots: ["root", "list", "trigger", "content", "indicator"],
  base: {
    root: { width: "100%" },
    list: {
      position: "relative",
      display: "flex",
      gap: "1",
      borderBottom: "1px solid",
      borderColor: "border",
      borderBlockColor: "border",
    },
    trigger: {
      position: "relative",
      paddingY: "2",
      paddingX: "4",
      fontSize: "base",
      color: "fgMuted",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "color var(--durations-2)",
      _hover: { color: "fg" },
      _selected: { color: "fg" },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "accent",
        outlineOffset: "-2px",
        borderRadius: "sm",
      },
    },
    indicator: {
      position: "absolute",
      bottom: "-1px",
      height: "2px",
      width: "var(--width)",
      background: "accent",
      borderRadius: "full",
      "--transition-duration": "var(--durations-3)",
      "--transition-timing-function": "var(--easings-out)",
    },
    content: {
      paddingBlock: "4",
      fontSize: "sm",
      color: "fgMuted",
      outline: "none",
      _focusVisible: { outline: "none" },
    },
  },
});

const classes = tabsRecipe();

export const TabsRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTabs.Root>) => (
  <ArkTabs.Root className={cx(classes.root, className)} {...props} />
);

export const TabsList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTabs.List>) => (
  <ArkTabs.List className={cx(classes.list, className)} {...props} />
);

export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTabs.Trigger>) => (
  <ArkTabs.Trigger className={cx(classes.trigger, className)} {...props} />
);

export const TabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTabs.Content>) => (
  <ArkTabs.Content className={cx(classes.content, className)} {...props} />
);

export const TabsIndicator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTabs.Indicator>) => (
  <ArkTabs.Indicator className={cx(classes.indicator, className)} {...props} />
);

TabsRoot.displayName = "TabsRoot";
TabsList.displayName = "TabsList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";
TabsIndicator.displayName = "TabsIndicator";
