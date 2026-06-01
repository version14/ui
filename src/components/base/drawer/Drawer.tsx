import { Dialog as ArkDialog } from "@ark-ui/react";
import { css, cva, cx } from "@styled-system/css";
import { createContext, useContext } from "react";

type DrawerPlacement = "right" | "left" | "top" | "bottom";

const DrawerContext = createContext<{ placement: DrawerPlacement }>({ placement: "right" });

const backdropCss = css({
  position: "fixed",
  inset: "0",
  background: "oklch(0 0 0 / 0.55)",
  backdropFilter: "blur(3px)",
  zIndex: "40",
  _open: { animation: "fade-in var(--durations-2)" },
});

const positionerCss = css({
  position: "fixed",
  inset: "0",
  zIndex: "50",
  pointerEvents: "none",
});

const contentBase = css({
  position: "absolute",
  background: "surface",
  border: "1px solid",
  borderBlockColor: "borderStrong",
  borderColor: "borderStrong",
  boxShadow: "lg",
  outline: "none",
  pointerEvents: "auto",
  display: "flex",
  flexDirection: "column",
});

const placementCva = cva({
  base: {},
  variants: {
    placement: {
      right: {
        right: "0",
        top: "0",
        bottom: "0",
        width: "min(400px, 90vw)",
        borderRadius: "0",
        _open: { animation: "slide-in-right var(--durations-3) var(--easings-out)" },
      },
      left: {
        left: "0",
        top: "0",
        bottom: "0",
        width: "min(400px, 90vw)",
        borderRadius: "0",
        _open: { animation: "slide-in-left var(--durations-3) var(--easings-out)" },
      },
      top: {
        top: "0",
        left: "0",
        right: "0",
        height: "min(320px, 50vh)",
        borderRadius: "0",
        _open: { animation: "slide-in-top var(--durations-3) var(--easings-out)" },
      },
      bottom: {
        bottom: "0",
        left: "0",
        right: "0",
        height: "min(320px, 50vh)",
        borderRadius: "0",
        _open: { animation: "slide-in-bottom var(--durations-3) var(--easings-out)" },
      },
    },
  },
  defaultVariants: { placement: "right" },
});

const headerCss = css({
  paddingTop: "5",
  paddingBottom: "3",
  paddingX: "5",
  borderBottom: "1px solid",
  borderBlockColor: "border",
  borderColor: "border",
  "&:has([data-slot='drawer-header-actions'])": {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    columnGap: "3",
    alignItems: "start",
  },
});

const headerActionsCss = css({
  display: "flex",
  flexDirection: "column",
  gap: "1",
  flexShrink: "0",
  gridColumn: "2",
  gridRow: "1 / span 2",
  alignSelf: "start",
  paddingTop: "1px",
});
const titleCss = css({ fontSize: "lg", fontWeight: "600", color: "fg" });
const descCss = css({ fontSize: "sm", color: "fgMuted", marginTop: "1" });
const bodyCss = css({
  flex: "1",
  overflow: "auto",
  padding: "5",
  fontSize: "sm",
  color: "fgMuted",
});
const footCss = css({
  paddingY: "4",
  paddingX: "5",
  borderTop: "1px solid",
  borderBlockColor: "border",
  borderColor: "border",
  display: "flex",
  gap: "2",
  justifyContent: "flex-end",
});
const closeCss = css({});

export interface DrawerRootProps extends React.ComponentPropsWithoutRef<typeof ArkDialog.Root> {
  placement?: DrawerPlacement;
}

export function DrawerRoot({ placement = "right", ...props }: DrawerRootProps): React.JSX.Element {
  return (
    <DrawerContext.Provider value={{ placement }}>
      <ArkDialog.Root {...props} />
    </DrawerContext.Provider>
  );
}

export const DrawerBackdrop = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Backdrop>) => (
  <ArkDialog.Backdrop className={cx(backdropCss, className)} {...props} />
);

export const DrawerPositioner = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Positioner>) => (
  <ArkDialog.Positioner className={cx(positionerCss, className)} {...props} />
);

export function DrawerContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Content>): React.JSX.Element {
  const { placement } = useContext(DrawerContext);
  return (
    <ArkDialog.Content
      className={cx(contentBase, placementCva({ placement }), className)}
      {...props}
    />
  );
}

export const DrawerHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(headerCss, className)} {...props} />
);

export const DrawerTitle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Title>) => (
  <ArkDialog.Title className={cx(titleCss, className)} {...props} />
);

export const DrawerDescription = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.Description>) => (
  <ArkDialog.Description className={cx(descCss, className)} {...props} />
);

export const DrawerBody = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(bodyCss, className)} {...props} />
);

export const DrawerFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cx(footCss, className)} {...props} />
);

export const DrawerCloseTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkDialog.CloseTrigger>) => (
  <ArkDialog.CloseTrigger className={cx(closeCss, className)} {...props} />
);

export const DrawerHeaderActions = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div data-slot="drawer-header-actions" className={cx(headerActionsCss, className)} {...props} />
);

export const DrawerTrigger = ArkDialog.Trigger;

DrawerRoot.displayName = "DrawerRoot";
DrawerContent.displayName = "DrawerContent";
