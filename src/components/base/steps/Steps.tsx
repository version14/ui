import { Steps as ArkSteps } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const stepsRecipe = sva({
  slots: [
    "root",
    "list",
    "item",
    "trigger",
    "indicator",
    "separator",
    "title",
    "description",
    "content",
    "nextTrigger",
    "prevTrigger",
  ],
  base: {
    root: { width: "100%" },
    list: { display: "flex", gap: "0" },
    item: { flex: "1", display: "flex", flexDirection: "column", gap: "2" },
    trigger: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "0",
    },
    indicator: {
      width: "22px",
      height: "22px",
      flexShrink: "0",
      borderRadius: "full",
      border: "1px solid",
      borderColor: "borderStrong",
      borderBlockColor: "borderStrong",
      display: "grid",
      placeItems: "center",
      fontFamily: "mono",
      fontSize: "10px",
      color: "fgSubtle",
      background: "surface2",
      transition: "all var(--durations-2)",
      _current: {
        borderColor: "accent",
        borderBlockColor: "accent",
        color: "accentInk",
        background: "accent",
      },
      _complete: {
        borderColor: "accent",
        borderBlockColor: "accent",
        color: "accentInk",
        background: "accent",
      },
    },
    separator: {
      flex: "1",
      height: "1px",
      background: "border",
      alignSelf: "center",
      marginLeft: "2",
      transition: "background var(--durations-2)",
      _complete: { background: "accent" },
    },
    title: {
      fontSize: "xs",
      color: "fgSubtle",
      _current: { color: "fg" },
      _complete: { color: "fg" },
    },
    description: { fontSize: "xs", color: "fgFaint" },
    content: { paddingBlock: "4", fontSize: "sm", color: "fgMuted" },
    nextTrigger: {},
    prevTrigger: {},
  },
});

const classes = stepsRecipe();

export const StepsRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.Root>) => (
  <ArkSteps.Root className={cx(classes.root, className)} {...props} />
);

export const StepsList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.List>) => (
  <ArkSteps.List className={cx(classes.list, className)} {...props} />
);

export const StepsItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.Item>) => (
  <ArkSteps.Item className={cx(classes.item, className)} {...props} />
);

export const StepsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.Trigger>) => (
  <ArkSteps.Trigger className={cx(classes.trigger, className)} {...props} />
);

export const StepsIndicator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.Indicator>) => (
  <ArkSteps.Indicator className={cx(classes.indicator, className)} {...props} />
);

export const StepsSeparator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.Separator>) => (
  <ArkSteps.Separator className={cx(classes.separator, className)} {...props} />
);

export const StepsTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(classes.title, className)} {...props} />
);

export const StepsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.Content>) => (
  <ArkSteps.Content className={cx(classes.content, className)} {...props} />
);

export const StepsNextTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.NextTrigger>) => (
  <ArkSteps.NextTrigger className={cx(classes.nextTrigger, className)} {...props} />
);

export const StepsPrevTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSteps.PrevTrigger>) => (
  <ArkSteps.PrevTrigger className={cx(classes.prevTrigger, className)} {...props} />
);

StepsRoot.displayName = "StepsRoot";
