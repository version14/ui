import { Tooltip as ArkTooltip } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const tooltipRecipe = sva({
  slots: ["trigger", "positioner", "content", "arrow", "arrowTip"],
  base: {
    trigger: { display: "inline-flex" },
    positioner: { zIndex: "50" },
    content: {
      background: "surface3",
      color: "fg",
      border: "1px solid",
      borderColor: "borderStrong",
      borderBlockColor: "borderStrong",
      borderRadius: "sm",
      paddingY: "4px",
      paddingX: "8px",
      fontSize: "xs",
      whiteSpace: "nowrap",
      boxShadow: "md",
      _open: { animation: "tooltip-in var(--durations-2) var(--easings-out)" },
      _closed: { animation: "tooltip-out var(--durations-1) var(--easings-out)" },
    },
    arrow: { "--arrow-size": "6px", "--arrow-background": "var(--colors-surface3)" },
    arrowTip: { borderTopColor: "borderStrong", borderLeftColor: "borderStrong" },
  },
});

const classes = tooltipRecipe();

export const TooltipRoot = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTooltip.Root>) => <ArkTooltip.Root {...props} />;

export const TooltipTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTooltip.Trigger>) => (
  <ArkTooltip.Trigger className={cx(classes.trigger, className)} {...props} />
);

export const TooltipPositioner = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTooltip.Positioner>) => (
  <ArkTooltip.Positioner className={cx(classes.positioner, className)} {...props} />
);

export const TooltipContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTooltip.Content>) => (
  <ArkTooltip.Content className={cx(classes.content, className)} {...props} />
);

export const TooltipArrow = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTooltip.Arrow>) => (
  <ArkTooltip.Arrow className={cx(classes.arrow, className)} {...props} />
);

export const TooltipArrowTip = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkTooltip.ArrowTip>) => (
  <ArkTooltip.ArrowTip className={cx(classes.arrowTip, className)} {...props} />
);

TooltipRoot.displayName = "TooltipRoot";
TooltipTrigger.displayName = "TooltipTrigger";
TooltipPositioner.displayName = "TooltipPositioner";
TooltipContent.displayName = "TooltipContent";
