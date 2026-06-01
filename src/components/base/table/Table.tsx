import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { css, cx } from "@styled-system/css";

const tableWrapperBase = css({
  width: "100%",
  background: "bg",
  border: "1px solid",
  borderColor: "border",
  borderBlockColor: "border",
  borderRadius: "md",
  overflow: "hidden",
});

const tableBase = css({ width: "100%", borderCollapse: "collapse", fontSize: "sm" });

const theadBase = css({ background: "bgSunken" });

const tbodyBase = css({});

const trBase = css({
  transition: "background var(--durations-1)",
  _hover: { background: "surface" },
  "&:last-child td": { borderBottom: "none" },
});

const thBase = css({
  textAlign: "left",
  fontFamily: "mono",
  fontSize: "10px",
  letterSpacing: "caps",
  textTransform: "uppercase",
  color: "fgFaint",
  fontWeight: "500",
  paddingY: "2",
  paddingX: "3",
  borderBottom: "1px solid",
  borderColor: "border",
  borderBlockColor: "border",
  whiteSpace: "nowrap",
});

const tdBase = css({
  padding: "3",
  borderBottom: "1px solid",
  borderColor: "border",
  borderBlockColor: "border",
  color: "fgMuted",
  verticalAlign: "middle",
  lineHeight: "base",
});

export function TableWrapper({ className, ...props }: HTMLArkProps<"div">): React.JSX.Element {
  return <ark.div className={cx(tableWrapperBase, className)} {...props} />;
}
TableWrapper.displayName = "TableWrapper";

export function Table({ className, ...props }: HTMLArkProps<"table">): React.JSX.Element {
  return <ark.table className={cx(tableBase, className)} {...props} />;
}
Table.displayName = "Table";

export function TableHead({ className, ...props }: HTMLArkProps<"thead">): React.JSX.Element {
  return <ark.thead className={cx(theadBase, className)} {...props} />;
}
TableHead.displayName = "TableHead";

export function TableBody({ className, ...props }: HTMLArkProps<"tbody">): React.JSX.Element {
  return <ark.tbody className={cx(tbodyBase, className)} {...props} />;
}
TableBody.displayName = "TableBody";

export function TableRow({ className, ...props }: HTMLArkProps<"tr">): React.JSX.Element {
  return <ark.tr className={cx(trBase, className)} {...props} />;
}
TableRow.displayName = "TableRow";

export function TableHeader({ className, ...props }: HTMLArkProps<"th">): React.JSX.Element {
  return <ark.th className={cx(thBase, className)} {...props} />;
}
TableHeader.displayName = "TableHeader";

export function TableCell({ className, ...props }: HTMLArkProps<"td">): React.JSX.Element {
  return <ark.td className={cx(tdBase, className)} {...props} />;
}
TableCell.displayName = "TableCell";
