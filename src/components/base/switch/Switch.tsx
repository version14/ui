import { Switch as ArkSwitch } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const switchRecipe = sva({
  slots: ["root", "control", "thumb", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "3",
      cursor: "pointer",
      userSelect: "none",
    },
    control: {
      position: "relative",
      width: "36px",
      height: "20px",
      flexShrink: "0",
      borderRadius: "full",
      background: "surface3",
      border: "1px solid",
      borderColor: "border",
      borderBlockColor: "border",
      transition: "background var(--durations-2), border-color var(--durations-2)",
      _checked: { background: "accent", borderColor: "accent", borderBlockColor: "accent" },
      _focusVisible: { boxShadow: "0 0 0 3px var(--colors-accent-glow)" },
      _disabled: { opacity: "0.5" },
    },
    thumb: {
      position: "absolute",
      top: "2px",
      left: "2px",
      width: "14px",
      height: "14px",
      borderRadius: "full",
      background: "fgMuted",
      transition: "transform var(--durations-2) var(--easings-out), background var(--durations-2)",
      _checked: { transform: "translateX(16px)", background: "accentInk" },
    },
    label: {
      fontSize: "sm",
      color: "fg",
      _disabled: { opacity: "0.5" },
    },
  },
});

const classes = switchRecipe();

export const SwitchRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSwitch.Root>) => (
  <ArkSwitch.Root className={cx(classes.root, className)} {...props} />
);

export const SwitchControl = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSwitch.Control>) => (
  <ArkSwitch.Control className={cx(classes.control, className)} {...props} />
);

export const SwitchThumb = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSwitch.Thumb>) => (
  <ArkSwitch.Thumb className={cx(classes.thumb, className)} {...props} />
);

export const SwitchLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSwitch.Label>) => (
  <ArkSwitch.Label className={cx(classes.label, className)} {...props} />
);
