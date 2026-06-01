import { css, cx } from "@styled-system/css";
import type { ReactNode } from "react";

const rootCss = css({
  display: "flex",
  flexDirection: "column",
  gap: "6",
  overflowY: "auto",
});

const groupCss = css({ display: "flex", flexDirection: "column", gap: "0" });

const groupLabelCss = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  fontFamily: "mono",
  fontSize: "10px",
  letterSpacing: "caps",
  textTransform: "uppercase",
  color: "fgFaint",
  paddingInline: "2",
  marginBottom: "2",
  "&::after": {
    content: '""',
    flex: "1",
    height: "1px",
    background: "border",
  },
});

const navListCss = css({ listStyle: "none" });

const navLinkCss = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  paddingBlock: "5px",
  paddingInline: "2",
  borderRadius: "sm",
  fontSize: "sm",
  color: "fgMuted",
  borderLeft: "2px solid transparent",
  marginLeft: "-2px",
  textDecoration: "none",
  transition: "color var(--durations-1), background var(--durations-1)",
  _hover: { color: "fg", background: "surface" },
  "&[data-active]": {
    color: "fg",
    background: "surface",
    borderLeftColor: "accent",
  },
});

const tagCss = css({
  marginLeft: "auto",
  fontFamily: "mono",
  fontSize: "9px",
  color: "fgFaint",
  letterSpacing: "wide",
});

export interface SidebarNavItem {
  label: string;
  href: string;
  active?: boolean;
  tag?: string;
}

export interface SidebarNavGroup {
  label: string;
  items: SidebarNavItem[];
}

export interface DocsSidebarProps {
  groups: SidebarNavGroup[];
  className?: string;
  children?: ReactNode;
}

export function DocsSidebar({ groups, className, children }: DocsSidebarProps): React.JSX.Element {
  return (
    <nav className={cx(rootCss, className)} aria-label="Sidebar navigation">
      {groups.map((group) => (
        <div key={group.label} className={groupCss}>
          <div className={groupLabelCss}>{group.label}</div>
          <ul className={navListCss}>
            {group.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={navLinkCss}
                  data-active={item.active ? "" : undefined}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.label}
                  {item.tag && <span className={tagCss}>{item.tag}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {children}
    </nav>
  );
}

DocsSidebar.displayName = "DocsSidebar";
