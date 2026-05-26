import { useEffect, useRef, useState } from "react";
import { loaderVariants } from "./loader-variants";
import { usePageTransition } from "./provider";
import type { AnimTimeline, TransitionConfig } from "./types";

export interface TransitionLoaderProps
  extends Pick<TransitionConfig, "loaderVariant" | "tileSize" | "color" | "duration"> {}

const DEFAULT_LOADER_VARIANT = "pulse" as const;
const DEFAULT_TILE_SIZE = 40;
const DEFAULT_DURATION = 600;
const DEFAULT_COLOR = "#ffffff";
const GRID_SIZE = 7;
const LOADER_DELAY_MS = 300;

export default function TransitionLoader({
  loaderVariant = DEFAULT_LOADER_VARIANT,
  tileSize = DEFAULT_TILE_SIZE,
  color: colorProp,
  duration = DEFAULT_DURATION,
}: TransitionLoaderProps) {
  const { isCovered } = usePageTransition();

  const tilesRef = useRef<HTMLDivElement[]>([]);
  const animRef = useRef<AnimTimeline | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  const color = colorProp ?? DEFAULT_COLOR;
  const durationSec = duration / 1000;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (isCovered) {
      timerRef.current = setTimeout(() => {
        setVisible(true);
      }, LOADER_DELAY_MS);
    } else {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setVisible(false);
    }

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isCovered]);

  useEffect(() => {
    if (!visible) {
      animRef.current?.kill();
      animRef.current = null;
      return;
    }

    const tiles = tilesRef.current
      .slice(0, GRID_SIZE * GRID_SIZE)
      .filter((t): t is HTMLDivElement => t !== undefined && t !== null);

    if (tiles.length === 0) return;

    const buildFn = loaderVariants[loaderVariant];
    const tl = buildFn({
      tiles,
      cols: GRID_SIZE,
      rows: GRID_SIZE,
      color,
      durationSec,
    });

    animRef.current = tl;
    tl.play();

    return () => {
      tl.kill();
      animRef.current = null;
    };
  }, [visible, loaderVariant, color, durationSec]);

  if (!ready) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: tileSize * GRID_SIZE,
        height: tileSize * GRID_SIZE,
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        flexWrap: "wrap",
        mixBlendMode: "difference",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.1s steps(1)",
      }}
    >
      {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) tilesRef.current[i] = el;
          }}
          style={{
            width: tileSize,
            height: tileSize,
            opacity: 0,
            flexShrink: 0,
            willChange: "opacity",
          }}
        />
      ))}
    </div>
  );
}
