import { Avatar as ArkAvatar } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";
import { createContext, useContext } from "react";

const avatarRecipe = sva({
  slots: ["root", "image", "fallback"],
  base: {
    root: {
      position: "relative",
      width: "36px",
      height: "36px",
      borderRadius: "sm",
      background: "surface3",
      border: "1px solid",
      borderBlockColor: "border",
      borderColor: "border",
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
      flexShrink: "0",
    },
    image: { width: "100%", height: "100%", objectFit: "cover" },
    fallback: {
      fontFamily: "mono",
      fontSize: "12px",
      fontWeight: "600",
      color: "fg",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
  },
  variants: {
    size: {
      sm: { root: { width: "26px", height: "26px" }, fallback: { fontSize: "10px" } },
      md: { root: { width: "36px", height: "36px" }, fallback: { fontSize: "12px" } },
      lg: { root: { width: "48px", height: "48px" }, fallback: { fontSize: "16px" } },
    },
    accent: {
      true: {
        root: { background: "accent", borderColor: "accent" },
        fallback: { color: "accentInk" },
      },
    },
    shape: {
      square: {},
      circle: { root: { borderRadius: "full" } },
    },
  },
  defaultVariants: { size: "md", shape: "square" },
});

type AvatarClasses = ReturnType<typeof avatarRecipe>;

const AvatarContext = createContext<AvatarClasses>(avatarRecipe());

export interface AvatarRootProps extends React.ComponentPropsWithoutRef<typeof ArkAvatar.Root> {
  size?: "sm" | "md" | "lg";
  accent?: boolean;
  shape?: "square" | "circle";
}

export function AvatarRoot({
  size,
  accent,
  shape,
  className,
  ...props
}: AvatarRootProps): React.JSX.Element {
  const classes = avatarRecipe({ size, accent, shape });
  return (
    <AvatarContext.Provider value={classes}>
      <ArkAvatar.Root className={cx(classes.root, className)} {...props} />
    </AvatarContext.Provider>
  );
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkAvatar.Image>): React.JSX.Element {
  const classes = useContext(AvatarContext);
  return <ArkAvatar.Image className={cx(classes.image, className)} {...props} />;
}

export function AvatarFallback({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkAvatar.Fallback>): React.JSX.Element {
  const classes = useContext(AvatarContext);
  return <ArkAvatar.Fallback className={cx(classes.fallback, className)} {...props} />;
}

AvatarRoot.displayName = "AvatarRoot";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";
