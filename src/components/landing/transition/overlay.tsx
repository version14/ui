import gsap from "gsap";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePageTransition } from "./provider";
import { styles } from "./styles";
import type { AnimTimeline, TransitionConfig, TransitionStyle, TransitionVariant } from "./types";
import { variants } from "./variants";

export interface TransitionOverlayProps extends TransitionConfig {
  pathName: string;
}

const DEFAULT_VARIANT: TransitionVariant = "random";
const DEFAULT_STYLE: TransitionStyle = "solid";
const DEFAULT_TILE_SIZE = 40;
const DEFAULT_DURATION = 600;
const DEFAULT_COLOR = "#ffffff";

export default function TransitionOverlay({
  pathName,
  variant = DEFAULT_VARIANT,
  style = DEFAULT_STYLE,
  tileSize = DEFAULT_TILE_SIZE,
  color: colorProp,
  duration = DEFAULT_DURATION,
}: TransitionOverlayProps) {
  const { isNavigating, setIsNavigating, setIsCovered, registerCoverFn } = usePageTransition();

  const tilesRef = useRef<HTMLDivElement[]>([]);
  const uncoverTlRef = useRef<AnimTimeline | null>(null);
  const prevPathRef = useRef(pathName);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  const color = colorProp ?? DEFAULT_COLOR;
  const durationSec = duration / 1000;

  useEffect(() => {
    const update = () => {
      setGrid({
        cols: Math.ceil(window.innerWidth / tileSize),
        rows: Math.ceil(window.innerHeight / tileSize),
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [tileSize]);

  const getLiveTiles = useCallback((): HTMLDivElement[] => {
    return tilesRef.current
      .slice(0, grid.cols * grid.rows)
      .filter((t): t is HTMLDivElement => t !== undefined && t !== null);
  }, [grid.cols, grid.rows]);

  const playCover = useCallback(
    (onComplete: () => void) => {
      const tiles = getLiveTiles();
      if (tiles.length === 0) {
        onComplete();
        return;
      }

      const variantFn = variants[variant];
      const styleFn = styles[style];
      const stagger = variantFn(grid.cols, grid.rows);
      const { cover, uncover } = styleFn({ tiles, stagger, color, durationSec });

      uncoverTlRef.current = uncover;

      cover
        .eventCallback("onComplete", () => {
          setIsCovered(true);
          onComplete();
        })
        .play();
    },
    [getLiveTiles, variant, style, grid.cols, grid.rows, color, durationSec, setIsCovered],
  );

  useLayoutEffect(() => {
    registerCoverFn(playCover);
  }, [registerCoverFn, playCover]);

  useEffect(() => {
    if (pathName === prevPathRef.current) return;
    prevPathRef.current = pathName;
    if (!isNavigating) return;

    setIsCovered(false);

    const uncover = uncoverTlRef.current;
    if (!uncover) {
      setIsNavigating(false);
      return;
    }

    uncover
      .eventCallback("onComplete", () => {
        setIsNavigating(false);
        uncoverTlRef.current = null;
        gsap.set(getLiveTiles(), { clearProps: "opacity,transform,backgroundColor" });
      })
      .play();
  }, [pathName, isNavigating, setIsNavigating, setIsCovered, getLiveTiles]);

  const tileCount = grid.cols * grid.rows;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
      }}
    >
      {Array.from({ length: tileCount }, (_, i) => (
        <div
          key={`pixel-${i}`}
          ref={(el) => {
            if (el) tilesRef.current[i] = el;
          }}
          style={{
            width: tileSize,
            height: tileSize,
            opacity: 0,
            willChange: "opacity, transform",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}
