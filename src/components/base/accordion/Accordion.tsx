import { Accordion as ArkAccordion } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const accordionRecipe = sva({
  slots: ["root", "item", "trigger", "triggerText", "indicator", "content", "contentText"],
  base: {
    root: {
      background: "bg",
      border: "1px solid",
      borderBlockColor: "border",
      borderColor: "border",
      borderRadius: "md",
      overflow: "hidden",
    },
    item: {
      borderBottom: "1px solid",
      borderBlockColor: "border",
      borderColor: "border",
      "&:last-child": { borderBottom: "none" },
    },
    trigger: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "3",
      paddingY: "3",
      paddingX: "4",
      background: "transparent",
      border: "none",
      fontSize: "base",
      fontWeight: "500",
      color: "fg",
      textAlign: "left",
      cursor: "pointer",
      transition: "background var(--durations-1)",
      _hover: { background: "surface" },
      _focusVisible: { outline: "2px solid", outlineColor: "accent", outlineOffset: "-2px" },
    },
    triggerText: { flex: "1" },
    indicator: {
      marginLeft: "auto",
      width: "14px",
      height: "14px",
      color: "fgSubtle",
      flexShrink: "0",
      transition: "transform var(--durations-2), color var(--durations-2)",
      "& svg": { width: "14px", height: "14px" },
      _open: { transform: "rotate(90deg)", color: "accentText" },
    },
    content: {
      overflow: "hidden",
      _open: {
        animation: "expand-down var(--durations-3) var(--easings-out)",
      },
      _closed: {
        animation: "collapse-up var(--durations-3) var(--easings-out)",
      },
    },
    contentText: {
      paddingTop: "0",
      paddingBottom: "4",
      paddingX: "4",
      fontSize: "sm",
      color: "fgMuted",
      lineHeight: "base",
    },
  },
});

const classes = accordionRecipe();

export const AccordionRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkAccordion.Root>) => (
  <ArkAccordion.Root className={cx(classes.root, className)} {...props} />
);

export const AccordionItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkAccordion.Item>) => (
  <ArkAccordion.Item className={cx(classes.item, className)} {...props} />
);

export const AccordionTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkAccordion.ItemTrigger>) => (
  <ArkAccordion.ItemTrigger className={cx(classes.trigger, className)} {...props} />
);

export const AccordionIndicator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkAccordion.ItemIndicator>) => (
  <ArkAccordion.ItemIndicator className={cx(classes.indicator, className)} {...props} />
);

export const AccordionContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkAccordion.ItemContent>) => (
  <ArkAccordion.ItemContent className={cx(classes.content, className)} {...props} />
);

export const AccordionContentText = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(classes.contentText, className)} {...props} />
);

AccordionRoot.displayName = "AccordionRoot";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionIndicator.displayName = "AccordionIndicator";
AccordionContent.displayName = "AccordionContent";
AccordionContentText.displayName = "AccordionContentText";
