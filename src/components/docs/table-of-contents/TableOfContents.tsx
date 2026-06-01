import { css, cx } from "@styled-system/css";
import { useEffect, useRef, useState } from "react";

const rootCss = css({ position: "relative" });

const labelCss = css({
  fontFamily: "mono",
  fontSize: "10px",
  letterSpacing: "caps",
  textTransform: "uppercase",
  color: "fgFaint",
  marginBottom: "3",
});

const listCss = css({ listStyle: "none", position: "relative" });

const linkCss = css({
  display: "block",
  paddingBlock: "3px",
  paddingLeft: "3",
  fontSize: "sm",
  color: "fgSubtle",
  transition: "color var(--durations-1)",
  textDecoration: "none",
  _hover: { color: "fg" },
  "&[data-active]": { color: "accentText" },
  "&[data-level='3']": { paddingLeft: "6" },
});

const X2 = 0.5;
const X3 = 12.5;
const DIAG = 5;

export interface TocItem {
  id: string;
  label: string;
  level?: 2 | 3;
}

export interface TableOfContentsProps {
  items: TocItem[];
  label?: string;
  className?: string;
  offsetTop?: number;
  /** Pass a ref to a scrollable div to track scroll inside a container instead of the viewport. */
  scrollContainer?: React.RefObject<HTMLElement | null>;
}

export function TableOfContents({
  items,
  label = "On this page",
  className,
  offsetTop = 80,
  scrollContainer,
}: TableOfContentsProps): React.JSX.Element {
  const [activeId, setActiveId] = useState<string>("");
  const listRef = useRef<HTMLUListElement>(null);
  const fillPathRef = useRef<SVGPathElement>(null);
  const [railPath, setRailPath] = useState("");
  const [listHeight, setListHeight] = useState(0);

  // IntersectionObserver — drives link highlight color only
  useEffect(() => {
    const root = scrollContainer?.current ?? null;
    const headings = items
      .map((i) => {
        const container = root ?? document;
        return container instanceof Document
          ? document.getElementById(i.id)
          : container.querySelector<HTMLElement>(`#${i.id}`);
      })
      .filter(Boolean) as HTMLElement[];
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { root, rootMargin: `-${offsetTop}px 0px -60% 0px`, threshold: 0 },
    );
    for (const h of headings) observer.observe(h);
    return () => observer.disconnect();
  }, [items, offsetTop, scrollContainer]);

  // Build the SVG rail path
  useEffect(() => {
    if (!listRef.current) return;

    const buildPath = () => {
      const list = listRef.current;
      if (!list) return;
      const listRect = list.getBoundingClientRect();
      setListHeight(listRect.height);

      const points = items
        .map((item) => {
          const el = list.querySelector<HTMLElement>(`[data-id="${item.id}"]`);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            level: item.level ?? 2,
            top: rect.top - listRect.top,
            bottom: rect.bottom - listRect.top,
          };
        })
        .filter((p): p is NonNullable<typeof p> => p !== null);

      if (points.length === 0) {
        setRailPath("");
        return;
      }

      // biome-ignore lint/style/noNonNullAssertion: guarded by length check above
      const firstPt = points[0]!;
      let currentX = firstPt.level === 3 ? X3 : X2;
      let d = `M ${currentX} ${firstPt.top}`;

      for (let i = 0; i < points.length; i++) {
        // biome-ignore lint/style/noNonNullAssertion: i is bounded by points.length
        const pt = points[i]!;
        const nextPt = points[i + 1] ?? null;
        const nextX = nextPt ? (nextPt.level === 3 ? X3 : X2) : currentX;

        if (nextPt && nextX !== currentX) {
          const boundary = pt.bottom;
          d += ` L ${currentX} ${boundary - DIAG}`;
          d += ` L ${nextX} ${boundary + DIAG}`;
          currentX = nextX;
        } else {
          d += ` L ${currentX} ${pt.bottom}`;
        }
      }

      setRailPath(d);
    };

    buildPath();
    const ro = new ResizeObserver(buildPath);
    ro.observe(listRef.current);
    return () => ro.disconnect();
  }, [items]);

  // Initialize stroke-dasharray when path changes
  useEffect(() => {
    const fillPath = fillPathRef.current;
    if (!fillPath || !railPath) return;
    const len = fillPath.getTotalLength();
    fillPath.style.strokeDasharray = String(len);
    fillPath.style.strokeDashoffset = String(len);
  }, [railPath]);

  // Scroll-driven fill — updates strokeDashoffset directly via ref, no React state
  useEffect(() => {
    const container = scrollContainer?.current ?? null;
    const scrollTarget = container ?? window;

    let raf = 0;

    const getSectionTop = (el: HTMLElement): number => {
      if (container) {
        const elRect = el.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        return elRect.top - cRect.top + container.scrollTop;
      }
      return el.getBoundingClientRect().top + window.scrollY;
    };

    const update = () => {
      const fillPath = fillPathRef.current;
      if (!fillPath) return;

      const pathLength = fillPath.getTotalLength();
      if (!pathLength) return;

      const scrollTop = container ? container.scrollTop : window.scrollY;

      const positions = items
        .map((item) => {
          const el = container
            ? container.querySelector<HTMLElement>(`#${item.id}`)
            : document.getElementById(item.id);
          if (!el) return null;
          return { top: getSectionTop(el), height: el.offsetHeight };
        })
        .filter((p): p is NonNullable<typeof p> => p !== null);

      if (positions.length === 0) return;

      const N = positions.length;
      let progress = 0;

      for (let i = 0; i < N; i++) {
        // biome-ignore lint/style/noNonNullAssertion: i is bounded by positions.length
        const pos = positions[i]!;
        if (scrollTop >= pos.top) {
          const frac = Math.min(1, (scrollTop - pos.top) / Math.max(1, pos.height));
          progress = (i + frac) / N;
        }
      }

      progress = Math.max(0, Math.min(1, progress));
      fillPath.style.strokeDashoffset = String(pathLength * (1 - progress));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items, scrollContainer]);

  return (
    <nav className={cx(rootCss, className)} aria-label="Table of contents">
      <div className={labelCss}>{label}</div>
      <ul ref={listRef} className={listCss}>
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "14px",
            height: listHeight,
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          {/* Rail — always visible, dim */}
          <path
            d={railPath}
            fill="none"
            style={{ stroke: "var(--colors-border)", strokeWidth: 1 }}
          />
          {/* Fill — accent, grows with scroll via strokeDashoffset */}
          <path
            ref={fillPathRef}
            d={railPath}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              stroke: "var(--colors-accent)",
              strokeWidth: 1.5,
            }}
          />
        </svg>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={linkCss}
              data-id={item.id}
              data-active={activeId === item.id ? "" : undefined}
              data-level={item.level ?? 2}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

TableOfContents.displayName = "TableOfContents";
