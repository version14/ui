import { Toast as ArkToast, Toaster as ArkToaster, createToaster } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";
import { Close } from "pixelarticons/react/Close";

export { createToaster };

const toastRecipe = sva({
  slots: ["root", "title", "description", "closeTrigger", "group"],
  base: {
    group: {
      position: "fixed",
      bottom: "6",
      right: "6",
      display: "flex",
      flexDirection: "column",
      gap: "2",
      zIndex: "100",
    },
    root: {
      display: "flex",
      alignItems: "flex-start",
      gap: "3",
      width: "320px",
      paddingY: "3",
      paddingX: "4",
      background: "surface2",
      border: "1px solid",
      borderColor: "borderStrong",
      borderBlockColor: "borderStrong",
      borderLeftWidth: "2px",
      borderLeftColor: "accent",
      borderRadius: "sm",
      boxShadow: "md",
      _open: { animation: "slide-up var(--durations-3) var(--easings-out)" },
      "&[data-type=success]": { borderLeftColor: "success" },
      "&[data-type=warning]": { borderLeftColor: "warning" },
      "&[data-type=error]": { borderLeftColor: "danger" },
    },
    title: { fontSize: "sm", fontWeight: "500", color: "fg" },
    description: { fontSize: "xs", color: "fgMuted", marginTop: "1" },
    closeTrigger: { marginLeft: "auto", color: "fgSubtle", flexShrink: "0" },
  },
});

const classes = toastRecipe();

export function Toaster({
  toaster,
  ...props
}: { toaster: ReturnType<typeof createToaster> } & React.ComponentPropsWithoutRef<
  typeof ArkToaster
>) {
  return (
    <ArkToaster toaster={toaster} {...props}>
      {(toast) => (
        <ArkToast.Root key={toast.id} className={classes.root}>
          <ArkToast.Title className={classes.title} />
          <ArkToast.Description className={classes.description} />
          <ArkToast.CloseTrigger className={classes.closeTrigger}>
            <Close width={14} height={14} />
          </ArkToast.CloseTrigger>
        </ArkToast.Root>
      )}
    </ArkToaster>
  );
}

export const ToastRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkToast.Root>) => (
  <ArkToast.Root className={cx(classes.root, className)} {...props} />
);

export const ToastTitle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkToast.Title>) => (
  <ArkToast.Title className={cx(classes.title, className)} {...props} />
);

export const ToastDescription = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkToast.Description>) => (
  <ArkToast.Description className={cx(classes.description, className)} {...props} />
);

export const ToastCloseTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkToast.CloseTrigger>) => (
  <ArkToast.CloseTrigger className={cx(classes.closeTrigger, className)} {...props} />
);

Toaster.displayName = "Toaster";
