import { Dialog as ArkDialog } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const dialogRecipe = sva({
  slots: [
    "root",
    "backdrop",
    "positioner",
    "content",
    "header",
    "headerActions",
    "title",
    "description",
    "body",
    "footer",
    "closeTrigger",
  ],
  base: {
    backdrop: {
      position: "fixed",
      inset: "0",
      background: "oklch(0 0 0 / 0.55)",
      backdropFilter: "blur(3px)",
      zIndex: "40",
      _open: { animation: "fade-in var(--durations-2)" },
    },
    positioner: {
      position: "fixed",
      inset: "0",
      display: "grid",
      placeItems: "start center",
      paddingTop: "14vh",
      zIndex: "50",
      pointerEvents: "none",
    },
    content: {
      position: "relative",
      width: "min(440px, 92vw)",
      background: "surface",
      border: "1px solid",
      borderBlockColor: "borderStrong",
      borderColor: "borderStrong",
      borderRadius: "md",
      boxShadow: "lg",
      pointerEvents: "auto",
      outline: "none",
      _open: { animation: "slide-up var(--durations-3) var(--easings-out)" },
      _closed: { animation: "slide-down var(--durations-3) var(--easings-out)" },
    },
    header: {
      paddingTop: "5",
      paddingBottom: "3",
      paddingX: "5",
      "&:has([data-slot='dialog-header-actions'])": {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        columnGap: "3",
        alignItems: "start",
      },
    },
    headerActions: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      flexShrink: "0",
      gridColumn: "2",
      gridRow: "1 / span 2",
      alignSelf: "start",
      paddingTop: "1px",
    },
    title: {
      fontSize: "lg",
      fontWeight: "600",
      letterSpacing: "-0.01em",
      color: "fg",
    },
    description: {
      fontSize: "sm",
      color: "fgMuted",
      marginTop: "6px",
      lineHeight: "base",
    },
    body: {
      paddingInline: "5",
      paddingBottom: "3",
      fontSize: "sm",
      color: "fgMuted",
    },
    footer: {
      padding: "5",
      display: "flex",
      justifyContent: "flex-end",
      gap: "2",
    },
    closeTrigger: {},
  },
});

const classes = dialogRecipe();

export const DialogRoot = ({ ...props }: React.ComponentPropsWithoutRef<typeof ArkDialog.Root>) => (
  <ArkDialog.Root {...props} />
);

export const DialogBackdrop = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Backdrop>) => (
  <ArkDialog.Backdrop className={cx(classes.backdrop, className)} {...props} />
);

export const DialogPositioner = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Positioner>) => (
  <ArkDialog.Positioner className={cx(classes.positioner, className)} {...props} />
);

export const DialogContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Content>) => (
  <ArkDialog.Content className={cx(classes.content, className)} {...props} />
);

export const DialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);

export const DialogTitle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Title>) => (
  <ArkDialog.Title className={cx(classes.title, className)} {...props} />
);

export const DialogDescription = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Description>) => (
  <ArkDialog.Description className={cx(classes.description, className)} {...props} />
);

export const DialogBody = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(classes.body, className)} {...props} />
);

export const DialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);

export const DialogCloseTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.CloseTrigger>) => (
  <ArkDialog.CloseTrigger className={cx(classes.closeTrigger, className)} {...props} />
);

export const DialogHeaderActions = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    data-slot="dialog-header-actions"
    className={cx(classes.headerActions, className)}
    {...props}
  />
);

export const DialogTrigger = ArkDialog.Trigger;

DialogRoot.displayName = "DialogRoot";
DialogContent.displayName = "DialogContent";
