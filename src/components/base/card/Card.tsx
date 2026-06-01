import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { css, cx } from "@styled-system/css";

const cardBase = css({
  background: "surface",
  border: "1px solid",
  borderBlockColor: "border",
  borderColor: "border",
  borderRadius: "md",
  overflow: "hidden",
});

const cardHeadBase = css({
  padding: "4",
  borderBottom: "1px solid",
  borderBlockColor: "border",
  borderColor: "border",
});

const cardTitleBase = css({
  fontSize: "md",
  fontWeight: "600",
  letterSpacing: "-0.01em",
  color: "fg",
});

const cardDescBase = css({
  fontSize: "sm",
  color: "fgMuted",
  marginTop: "1",
});

const cardBodyBase = css({
  padding: "4",
  fontSize: "sm",
  color: "fgMuted",
});

const cardFootBase = css({
  paddingY: "3",
  paddingX: "4",
  borderTop: "1px solid",
  borderBlockColor: "border",
  borderColor: "border",
  background: "bgSunken",
  display: "flex",
  gap: "2",
  alignItems: "center",
});

export function Card({ className, ...props }: HTMLArkProps<"div">): React.JSX.Element {
  return <ark.div className={cx(cardBase, className)} {...props} />;
}
Card.displayName = "Card";

export function CardHead({ className, ...props }: HTMLArkProps<"div">): React.JSX.Element {
  return <ark.div className={cx(cardHeadBase, className)} {...props} />;
}
CardHead.displayName = "CardHead";

export function CardTitle({ className, ...props }: HTMLArkProps<"div">): React.JSX.Element {
  return <ark.div className={cx(cardTitleBase, className)} {...props} />;
}
CardTitle.displayName = "CardTitle";

export function CardDescription({ className, ...props }: HTMLArkProps<"div">): React.JSX.Element {
  return <ark.div className={cx(cardDescBase, className)} {...props} />;
}
CardDescription.displayName = "CardDescription";

export function CardBody({ className, ...props }: HTMLArkProps<"div">): React.JSX.Element {
  return <ark.div className={cx(cardBodyBase, className)} {...props} />;
}
CardBody.displayName = "CardBody";

export function CardFooter({ className, ...props }: HTMLArkProps<"div">): React.JSX.Element {
  return <ark.div className={cx(cardFootBase, className)} {...props} />;
}
CardFooter.displayName = "CardFooter";
