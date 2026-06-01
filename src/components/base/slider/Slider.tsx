import { Slider as ArkSlider } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

const sliderRecipe = sva({
  slots: ["root", "control", "track", "range", "thumb", "label", "valueText"],
  base: {
    root: { display: "flex", flexDirection: "column", gap: "2", width: "100%" },
    label: { fontSize: "sm", fontWeight: "500", color: "fg" },
    valueText: { fontSize: "sm", fontFamily: "mono", color: "accentText" },
    control: { position: "relative", display: "flex", alignItems: "center", width: "100%" },
    track: {
      position: "relative",
      flex: "1",
      height: "4px",
      background: "surface3",
      borderRadius: "full",
    },
    range: {
      height: "100%",
      background: "accent",
      borderRadius: "full",
    },
    thumb: {
      width: "16px",
      height: "16px",
      borderRadius: "full",
      background: "accent",
      border: "2px solid",
      borderColor: "bg",
      borderBlockColor: "bg",
      boxShadow: "0 0 0 1px var(--colors-border-strong)",
      cursor: "pointer",
      transition: "box-shadow var(--durations-2)",
      outline: "none",
      _hover: { boxShadow: "0 0 0 4px var(--colors-accent-glow)" },
      _focusVisible: { boxShadow: "0 0 0 4px var(--colors-accent-glow)" },
    },
  },
});

const classes = sliderRecipe();

export const SliderRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSlider.Root>) => (
  <ArkSlider.Root className={cx(classes.root, className)} {...props} />
);

export const SliderLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSlider.Label>) => (
  <ArkSlider.Label className={cx(classes.label, className)} {...props} />
);

export const SliderValueText = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSlider.ValueText>) => (
  <ArkSlider.ValueText className={cx(classes.valueText, className)} {...props} />
);

export const SliderControl = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSlider.Control>) => (
  <ArkSlider.Control className={cx(classes.control, className)} {...props} />
);

export const SliderTrack = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSlider.Track>) => (
  <ArkSlider.Track className={cx(classes.track, className)} {...props} />
);

export const SliderRange = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSlider.Range>) => (
  <ArkSlider.Range className={cx(classes.range, className)} {...props} />
);

export const SliderThumb = ({
  className,
  index = 0,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkSlider.Thumb> & { index?: number }) => (
  <ArkSlider.Thumb index={index} className={cx(classes.thumb, className)} {...props} />
);
