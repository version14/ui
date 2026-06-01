import { css, cx } from "@styled-system/css";
import { CornerDownLeftSharp, Search, SortVertical } from "pixelarticons/react";
import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

const backdropCss = css({
  position: "fixed",
  inset: "0",
  background: "oklch(0 0 0 / 0.55)",
  backdropFilter: "blur(3px)",
  zIndex: "100",
  display: "grid",
  placeItems: "start center",
  paddingTop: "12vh",
});

const panelCss = css({
  position: "relative",
  width: "min(540px, 92vw)",
  background: "surface",
  border: "1px solid",
  borderBlockColor: "borderStrong",
  borderColor: "borderStrong",
  borderRadius: "md",
  boxShadow: "lg",
  overflow: "hidden",
  animation: "slide-up var(--durations-3) var(--easings-out)",
});

const inputWrapCss = css({
  display: "flex",
  alignItems: "center",
  gap: "3",
  padding: "4",
  borderBottom: "1px solid",
  borderBlockColor: "border",
  borderColor: "border",
  "& svg": { width: "16px", height: "16px", color: "fgSubtle", flexShrink: "0" },
});

const inputCss = css({
  flex: "1",
  background: "transparent",
  border: "none",
  outline: "none",
  color: "fg",
  fontFamily: "sans",
  fontSize: "md",
  _placeholder: { color: "fgSubtle" },
});

const resultsCss = css({
  maxHeight: "52vh",
  overflowY: "auto",
  padding: "2",
});

const groupLabelCss = css({
  fontFamily: "mono",
  fontSize: "10px",
  letterSpacing: "caps",
  textTransform: "uppercase",
  color: "fgFaint",
  paddingInline: "2",
  paddingTop: "3",
  paddingBottom: "1",
});

const itemCss = css({
  display: "flex",
  alignItems: "center",
  gap: "3",
  paddingY: "2",
  paddingX: "3",
  borderRadius: "sm",
  fontSize: "sm",
  color: "fgMuted",
  cursor: "pointer",
  outline: "none",
  position: "relative",
  transition: "background var(--durations-1), color var(--durations-1)",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "0",
    top: "4px",
    bottom: "4px",
    width: "2px",
    background: "var(--colors-accent)",
    borderRadius: "9999px",
    transform: "scaleY(0)",
    transition: "transform var(--durations-2) var(--easings-out)",
  },
  "&[data-active]": {
    background: "surface2",
    color: "fg",
    "&::before": { transform: "scaleY(1)" },
  },
});

const itemDotCss = css({
  width: "5px",
  height: "5px",
  background: "fgFaint",
  flexShrink: "0",
  "[data-active] &": { background: "accent" },
});

const itemIconCss = css({
  width: "14px",
  height: "14px",
  flexShrink: "0",
  color: "fgFaint",
  "& svg": { width: "14px", height: "14px" },
  "[data-active] &": { color: "fg" },
});

const itemCatCss = css({
  marginLeft: "auto",
  fontFamily: "mono",
  fontSize: "10px",
  color: "fgFaint",
});

const emptyCss = css({
  paddingY: "8",
  paddingX: "4",
  textAlign: "center",
  color: "fgFaint",
  fontSize: "sm",
});

const footCss = css({
  display: "flex",
  gap: "4",
  paddingY: "2",
  paddingX: "4",
  borderTop: "1px solid",
  borderBlockColor: "border",
  borderColor: "border",
  fontSize: "10px",
  color: "fgFaint",
  fontFamily: "mono",
});

const footItemCss = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
});

export interface CommandItem {
  id: string;
  label: string;
  category?: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

export interface CommandGroup {
  label: string;
  items: CommandItem[];
}

export interface CommandRootProps {
  open: boolean;
  onClose: () => void;
  groups: CommandGroup[];
  placeholder?: string;
  className?: string;
}

export function CommandRoot({
  open,
  onClose,
  groups,
  placeholder = "Search…",
  className,
}: CommandRootProps): React.JSX.Element | null {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = groups
    .map((g) => ({
      ...g,
      items: g.items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    }))
    .filter((g) => g.items.length > 0);

  const allItems = filtered.flatMap((g) => g.items);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const handleSelect = useCallback(
    (item: CommandItem) => {
      item.onSelect?.();
      onClose();
    },
    [onClose],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, allItems.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && allItems[activeIndex]) {
        handleSelect(allItems[activeIndex]);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [allItems, activeIndex, handleSelect, onClose],
  );

  if (!open) return null;

  let itemOffset = 0;

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: modal backdrop dismiss on click is a standard pattern
    <div
      className={cx(backdropCss, className)}
      role="presentation"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose?.();
      }}
    >
      <div
        className={panelCss}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
      >
        <div className={inputWrapCss}>
          <Search width={16} height={16} />
          <input
            ref={inputRef}
            className={inputCss}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder={placeholder}
            aria-label="Search"
          />
        </div>
        <div className={resultsCss} role="listbox">
          {filtered.length === 0 ? (
            <div className={emptyCss}>No results for "{query}"</div>
          ) : (
            filtered.map((group) => {
              const groupStart = itemOffset;
              itemOffset += group.items.length;
              return (
                <div key={group.label}>
                  <div className={groupLabelCss}>{group.label}</div>
                  {group.items.map((item, i) => {
                    const idx = groupStart + i;
                    return (
                      <div
                        key={item.id}
                        className={itemCss}
                        data-active={idx === activeIndex ? "" : undefined}
                        role="option"
                        aria-selected={idx === activeIndex}
                        tabIndex={-1}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") handleSelect(item);
                        }}
                      >
                        {item.icon ? (
                          <span className={itemIconCss}>{item.icon}</span>
                        ) : (
                          <span className={itemDotCss} />
                        )}
                        {item.label}
                        {item.category && <span className={itemCatCss}>{item.category}</span>}
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
        <div className={footCss}>
          <span className={footItemCss}>
            <SortVertical width={12} height={12} /> navigate
          </span>
          <span className={footItemCss}>
            <CornerDownLeftSharp width={12} height={12} /> select
          </span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

CommandRoot.displayName = "CommandRoot";

export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return { open, setOpen, close: () => setOpen(false) };
}
