import { Progress as ArkProgress } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const progressRecipe = sva({
  slots: ["root", "track", "range", "label", "valueText"],
  base: {
    root: { display: "flex", flexDirection: "column", gap: "2", width: "100%" },
    label: { fontSize: "sm", fontWeight: "500", color: "fg" },
    valueText: { fontSize: "sm", fontFamily: "mono", color: "fgMuted" },
    track: {
      height: "6px",
      background: "surface3",
      borderRadius: "full",
      overflow: "hidden",
    },
    range: {
      height: "100%",
      background: "accent",
      borderRadius: "full",
      transition: "width var(--durations-4) var(--easings-out)",
    },
  },
  variants: {
    striped: {
      true: {
        range: {
          backgroundImage:
            "linear-gradient(45deg, oklch(1 0 0 / 0.15) 25%, transparent 25%, transparent 50%, oklch(1 0 0 / 0.15) 50%, oklch(1 0 0 / 0.15) 75%, transparent 75%)",
          backgroundSize: "12px 12px",
        },
      },
    },
  },
});

const classes = progressRecipe();

export const ProgressRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkProgress.Root>) => (
  <ArkProgress.Root className={cx(classes.root, className)} {...props} />
);

export const ProgressLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkProgress.Label>) => (
  <ArkProgress.Label className={cx(classes.label, className)} {...props} />
);

export const ProgressValueText = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkProgress.ValueText>) => (
  <ArkProgress.ValueText className={cx(classes.valueText, className)} {...props} />
);

export const ProgressTrack = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkProgress.Track>) => (
  <ArkProgress.Track className={cx(classes.track, className)} {...props} />
);

export const ProgressRange = ({
  className,
  striped,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkProgress.Range> & { striped?: boolean }) => {
  const c = progressRecipe({ striped });
  return <ArkProgress.Range className={cx(c.range, className)} {...props} />;
};

ProgressRoot.displayName = "ProgressRoot";
ProgressRange.displayName = "ProgressRange";
