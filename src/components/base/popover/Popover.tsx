import { Popover as ArkPopover } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const popoverRecipe = sva({
  slots: ["positioner", "content", "title", "description", "closeTrigger", "arrow", "arrowTip"],
  base: {
    positioner: { zIndex: "50" },
    content: {
      width: "280px",
      background: "surface",
      border: "1px solid",
      borderColor: "borderStrong",
      borderBlockColor: "borderStrong",
      borderRadius: "md",
      boxShadow: "md",
      padding: "4",
      outline: "none",
      _open: { animation: "popover-in var(--durations-3) var(--easings-out)" },
      _closed: { animation: "popover-out var(--durations-2) var(--easings-out)" },
    },
    title: { fontSize: "sm", fontWeight: "600", color: "fg", marginBottom: "1" },
    description: { fontSize: "sm", color: "fgMuted", lineHeight: "base" },
    closeTrigger: { position: "absolute", top: "2", right: "2" },
    arrow: { "--arrow-size": "8px", "--arrow-background": "var(--colors-surface)" },
    arrowTip: { borderTopColor: "borderStrong", borderLeftColor: "borderStrong" },
  },
});

const classes = popoverRecipe();

export const PopoverRoot = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.Root>) => <ArkPopover.Root {...props} />;

export const PopoverTrigger = ArkPopover.Trigger;

export const PopoverPositioner = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.Positioner>) => (
  <ArkPopover.Positioner className={cx(classes.positioner, className)} {...props} />
);

export const PopoverContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.Content>) => (
  <ArkPopover.Content className={cx(classes.content, className)} {...props} />
);

export const PopoverTitle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.Title>) => (
  <ArkPopover.Title className={cx(classes.title, className)} {...props} />
);

export const PopoverDescription = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.Description>) => (
  <ArkPopover.Description className={cx(classes.description, className)} {...props} />
);

export const PopoverCloseTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.CloseTrigger>) => (
  <ArkPopover.CloseTrigger className={cx(classes.closeTrigger, className)} {...props} />
);

export const PopoverArrow = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.Arrow>) => (
  <ArkPopover.Arrow className={cx(classes.arrow, className)} {...props} />
);

export const PopoverArrowTip = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPopover.ArrowTip>) => (
  <ArkPopover.ArrowTip className={cx(classes.arrowTip, className)} {...props} />
);

PopoverRoot.displayName = "PopoverRoot";
PopoverContent.displayName = "PopoverContent";
