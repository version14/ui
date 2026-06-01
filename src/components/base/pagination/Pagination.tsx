import { Pagination as ArkPagination } from "@ark-ui/react";
import { cx, sva } from "@styled-system/css";

export const PaginationContext = ArkPagination.Context;

const paginationRecipe = sva({
  slots: ["root", "item", "ellipsis", "prevTrigger", "nextTrigger"],
  base: {
    root: { display: "inline-flex", gap: "1" },
    item: {
      minWidth: "32px",
      height: "32px",
      paddingInline: "2",
      fontFamily: "mono",
      fontSize: "sm",
      color: "fgMuted",
      background: "transparent",
      border: "1px solid",
      borderColor: "border",
      borderBlockColor: "border",
      borderRadius: "sm",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      transition: "all var(--durations-2)",
      _hover: { color: "fg", borderColor: "borderStrong", borderBlockColor: "borderStrong" },
      _selected: {
        background: "accent",
        color: "accentInk",
        borderColor: "accent",
        borderBlockColor: "accent",
      },
    },
    ellipsis: {
      minWidth: "32px",
      height: "32px",
      paddingInline: "2",
      fontFamily: "mono",
      fontSize: "sm",
      color: "fgFaint",
      display: "grid",
      placeItems: "center",
    },
    prevTrigger: {
      minWidth: "32px",
      height: "32px",
      paddingInline: "2",
      fontFamily: "mono",
      fontSize: "sm",
      color: "fgMuted",
      background: "transparent",
      border: "1px solid",
      borderColor: "border",
      borderBlockColor: "border",
      borderRadius: "sm",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      transition: "all var(--durations-2)",
      _hover: { color: "fg", borderColor: "borderStrong", borderBlockColor: "borderStrong" },
      _disabled: { opacity: "0.35", pointerEvents: "none" },
      "& svg": { width: "14px", height: "14px" },
    },
    nextTrigger: {
      minWidth: "32px",
      height: "32px",
      paddingInline: "2",
      fontFamily: "mono",
      fontSize: "sm",
      color: "fgMuted",
      background: "transparent",
      border: "1px solid",
      borderColor: "border",
      borderBlockColor: "border",
      borderRadius: "sm",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      transition: "all var(--durations-2)",
      _hover: { color: "fg", borderColor: "borderStrong", borderBlockColor: "borderStrong" },
      _disabled: { opacity: "0.35", pointerEvents: "none" },
      "& svg": { width: "14px", height: "14px" },
    },
  },
});

const classes = paginationRecipe();

export const PaginationRoot = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPagination.Root>) => (
  <ArkPagination.Root className={cx(classes.root, className)} {...props} />
);

export const PaginationItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPagination.Item>) => (
  <ArkPagination.Item className={cx(classes.item, className)} {...props} />
);

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPagination.Ellipsis>) => (
  <ArkPagination.Ellipsis className={cx(classes.ellipsis, className)} {...props} />
);

export const PaginationPrevTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPagination.PrevTrigger>) => (
  <ArkPagination.PrevTrigger className={cx(classes.prevTrigger, className)} {...props} />
);

export const PaginationNextTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ArkPagination.NextTrigger>) => (
  <ArkPagination.NextTrigger className={cx(classes.nextTrigger, className)} {...props} />
);

PaginationRoot.displayName = "PaginationRoot";
