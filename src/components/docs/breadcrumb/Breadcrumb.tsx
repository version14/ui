import type { HTMLArkProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
import { css, cx } from "@styled-system/css";
import type { ReactNode } from "react";

const rootCss = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  fontSize: "sm",
  color: "fgSubtle",
  fontFamily: "mono",
});

const linkCss = css({
  color: "fgMuted",
  transition: "color var(--durations-1)",
  _hover: { color: "accentText" },
});

const separatorCss = css({ color: "fgFaint" });

const currentCss = css({ color: "fg" });

export function BreadcrumbRoot({ className, ...props }: HTMLArkProps<"nav">): React.JSX.Element {
  return <ark.nav aria-label="Breadcrumb" className={cx(rootCss, className)} {...props} />;
}

export function BreadcrumbLink({ className, ...props }: HTMLArkProps<"a">): React.JSX.Element {
  return <ark.a className={cx(linkCss, className)} {...props} />;
}

export function BreadcrumbSeparator({
  className,
  children = "/",
  ...props
}: HTMLArkProps<"span"> & { children?: ReactNode }): React.JSX.Element {
  return (
    <ark.span aria-hidden="true" className={cx(separatorCss, className)} {...props}>
      {children}
    </ark.span>
  );
}

export function BreadcrumbCurrent({
  className,
  ...props
}: HTMLArkProps<"span">): React.JSX.Element {
  return <ark.span aria-current="page" className={cx(currentCss, className)} {...props} />;
}

BreadcrumbRoot.displayName = "BreadcrumbRoot";
BreadcrumbLink.displayName = "BreadcrumbLink";
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
BreadcrumbCurrent.displayName = "BreadcrumbCurrent";
