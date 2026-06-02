import { definePreset } from "@pandacss/dev";

export const v14Preset = definePreset({
  name: "version14-ui",

  conditions: {
    extend: {
      light: '[data-theme="light"] &',
    },
  },

  globalCss: {
    "*, *::before, *::after": { boxSizing: "border-box" },
    "*": { margin: 0, padding: 0 },
    html: { WebkitTextSizeAdjust: "100%" },
    body: {
      fontFamily: "sans",
      fontSize: "base",
      lineHeight: "base",
      color: "fg",
      background: "bg",
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility",
    },
    "::selection": { background: "selection" },
    a: { color: "inherit", textDecoration: "none" },
    button: { fontFamily: "inherit", cursor: "pointer" },
    ":focus-visible": {
      outline: "2px solid",
      outlineColor: "accent",
      outlineOffset: "2px",
      borderRadius: "sm",
    },
    svg: { display: "block" },
    "code, kbd, pre": { fontFamily: "mono" },
  },

  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "expand-down": {
          "0%": { height: "0" },
          "100%": { height: "var(--height)" },
        },
        "collapse-up": {
          "0%": { height: "var(--height)" },
          "100%": { height: "0" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.99)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(8px) scale(0.99)" },
        },
        "popover-in": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(4px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "popover-out": {
          "0%": { opacity: "1", transform: "scale(1) translateY(0)" },
          "100%": { opacity: "0", transform: "scale(0.96) translateY(4px)" },
        },
        "tooltip-in": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "tooltip-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.98)" },
        },
      },
      tokens: {
        fonts: {
          sans: {
            value: '"Geist", ui-sans-serif, system-ui, -apple-system, sans-serif',
          },
          mono: {
            value: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
          },
        },
        fontSizes: {
          xs: { value: "11px" },
          sm: { value: "12.5px" },
          base: { value: "14px" },
          md: { value: "16px" },
          lg: { value: "19px" },
          xl: { value: "23px" },
          "2xl": { value: "29px" },
          "3xl": { value: "37px" },
          "4xl": { value: "52px" },
          "5xl": { value: "72px" },
          "display-sm": { value: "40px" },
          "display-md": { value: "56px" },
          "display-lg": { value: "80px" },
        },
        lineHeights: {
          tight: { value: "1.1" },
          snug: { value: "1.3" },
          base: { value: "1.55" },
        },
        letterSpacings: {
          tight: { value: "-0.02em" },
          normal: { value: "0em" },
          wide: { value: "0.04em" },
          mono: { value: "0.02em" },
          caps: { value: "0.12em" },
        },
        spacing: {
          px: { value: "1px" },
          "1": { value: "4px" },
          "2": { value: "8px" },
          "3": { value: "12px" },
          "4": { value: "16px" },
          "5": { value: "20px" },
          "6": { value: "24px" },
          "8": { value: "32px" },
          "10": { value: "40px" },
          "12": { value: "48px" },
          "16": { value: "64px" },
          "20": { value: "80px" },
          "24": { value: "96px" },
          "32": { value: "128px" },
        },
        radii: {
          none: { value: "0px" },
          sm: { value: "2px" },
          md: { value: "4px" },
          full: { value: "9999px" },
        },
        durations: {
          "1": { value: "90ms" },
          "2": { value: "150ms" },
          "3": { value: "240ms" },
          "4": { value: "420ms" },
        },
        easings: {
          out: { value: "cubic-bezier(0.22, 1, 0.36, 1)" },
          inOut: { value: "cubic-bezier(0.65, 0, 0.35, 1)" },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            value: {
              base: "oklch(0.165 0.006 256)",
              _light: "oklch(0.985 0.003 256)",
            },
          },
          bgSunken: {
            value: {
              base: "oklch(0.135 0.006 256)",
              _light: "oklch(0.955 0.004 256)",
            },
          },
          surface: {
            value: {
              base: "oklch(0.205 0.006 256)",
              _light: "oklch(1 0 0)",
            },
          },
          surface2: {
            value: {
              base: "oklch(0.245 0.007 256)",
              _light: "oklch(0.975 0.004 256)",
            },
          },
          surface3: {
            value: {
              base: "oklch(0.285 0.008 256)",
              _light: "oklch(0.955 0.005 256)",
            },
          },
          fg: {
            value: {
              base: "oklch(0.965 0.004 256)",
              _light: "oklch(0.22 0.012 256)",
            },
          },
          fgMuted: {
            value: {
              base: "oklch(0.74 0.007 256)",
              _light: "oklch(0.44 0.011 256)",
            },
          },
          fgSubtle: {
            value: {
              base: "oklch(0.56 0.008 256)",
              _light: "oklch(0.58 0.010 256)",
            },
          },
          fgFaint: {
            value: {
              base: "oklch(0.44 0.008 256)",
              _light: "oklch(0.70 0.008 256)",
            },
          },
          border: {
            value: {
              base: "oklch(1 0 0 / 0.10)",
              _light: "oklch(0.22 0.01 256 / 0.14)",
            },
          },
          borderStrong: {
            value: {
              base: "oklch(1 0 0 / 0.18)",
              _light: "oklch(0.22 0.01 256 / 0.26)",
            },
          },
          borderAccent: {
            value: {
              base: "oklch(0.86 0.21 128 / 0.55)",
              _light: "oklch(0.62 0.18 128 / 0.65)",
            },
          },
          accent: { value: "oklch(0.86 0.21 128)" },
          accentHover: { value: "oklch(0.90 0.21 128)" },
          accentPress: { value: "oklch(0.80 0.20 128)" },
          accentInk: {
            value: {
              base: "oklch(0.22 0.03 128)",
              _light: "oklch(0.24 0.03 128)",
            },
          },
          accentGlow: { value: "oklch(0.86 0.21 128 / 0.28)" },
          accentText: {
            value: {
              base: "oklch(0.86 0.21 128)",
              _light: "oklch(0.52 0.16 128)",
            },
          },
          success: { value: "oklch(0.80 0.17 152)" },
          warning: { value: "oklch(0.83 0.16 78)" },
          danger: { value: "oklch(0.66 0.20 26)" },
          info: { value: "oklch(0.76 0.12 232)" },
          successBg: {
            value: {
              base: "oklch(0.80 0.17 152 / 0.12)",
              _light: "oklch(0.80 0.17 152 / 0.14)",
            },
          },
          warningBg: {
            value: {
              base: "oklch(0.83 0.16 78 / 0.12)",
              _light: "oklch(0.83 0.16 78 / 0.16)",
            },
          },
          dangerBg: {
            value: {
              base: "oklch(0.66 0.20 26 / 0.14)",
              _light: "oklch(0.66 0.20 26 / 0.10)",
            },
          },
          infoBg: {
            value: {
              base: "oklch(0.76 0.12 232 / 0.12)",
              _light: "oklch(0.76 0.12 232 / 0.12)",
            },
          },
          selection: {
            value: {
              base: "oklch(0.86 0.21 128 / 0.25)",
              _light: "oklch(0.86 0.21 128 / 0.35)",
            },
          },
          dot: {
            value: {
              base: "oklch(1 0 0 / 0.045)",
              _light: "oklch(0.22 0.01 256 / 0.10)",
            },
          },
          gridLine: {
            value: {
              base: "oklch(1 0 0 / 0.035)",
              _light: "oklch(0.22 0.01 256 / 0.07)",
            },
          },
        },
        shadows: {
          sm: {
            value: {
              base: "0 1px 2px oklch(0 0 0 / 0.4)",
              _light: "0 1px 2px oklch(0.22 0.02 256 / 0.10)",
            },
          },
          md: {
            value: {
              base: "0 4px 16px oklch(0 0 0 / 0.45)",
              _light: "0 4px 16px oklch(0.22 0.02 256 / 0.10)",
            },
          },
          lg: {
            value: {
              base: "0 16px 48px oklch(0 0 0 / 0.55)",
              _light: "0 16px 48px oklch(0.22 0.02 256 / 0.16)",
            },
          },
        },
      },
    },
  },
});
