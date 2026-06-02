const tokens = {
  "fonts.sans": {
    "value": "\"Geist\", ui-sans-serif, system-ui, -apple-system, sans-serif",
    "variable": "var(--fonts-sans)"
  },
  "fonts.mono": {
    "value": "\"Geist Mono\", ui-monospace, \"SF Mono\", Menlo, monospace",
    "variable": "var(--fonts-mono)"
  },
  "fontSizes.xs": {
    "value": "11px",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "12.5px",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.base": {
    "value": "14px",
    "variable": "var(--font-sizes-base)"
  },
  "fontSizes.md": {
    "value": "16px",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "19px",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "23px",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "29px",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "37px",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "52px",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "72px",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.display-sm": {
    "value": "40px",
    "variable": "var(--font-sizes-display-sm)"
  },
  "fontSizes.display-md": {
    "value": "56px",
    "variable": "var(--font-sizes-display-md)"
  },
  "fontSizes.display-lg": {
    "value": "80px",
    "variable": "var(--font-sizes-display-lg)"
  },
  "lineHeights.tight": {
    "value": "1.1",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.snug": {
    "value": "1.3",
    "variable": "var(--line-heights-snug)"
  },
  "lineHeights.base": {
    "value": "1.55",
    "variable": "var(--line-heights-base)"
  },
  "letterSpacings.tight": {
    "value": "-0.02em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.04em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.mono": {
    "value": "0.02em",
    "variable": "var(--letter-spacings-mono)"
  },
  "letterSpacings.caps": {
    "value": "0.12em",
    "variable": "var(--letter-spacings-caps)"
  },
  "spacing.1": {
    "value": "4px",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "8px",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "12px",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "16px",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "20px",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "24px",
    "variable": "var(--spacing-6)"
  },
  "spacing.8": {
    "value": "32px",
    "variable": "var(--spacing-8)"
  },
  "spacing.10": {
    "value": "40px",
    "variable": "var(--spacing-10)"
  },
  "spacing.12": {
    "value": "48px",
    "variable": "var(--spacing-12)"
  },
  "spacing.16": {
    "value": "64px",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "80px",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "96px",
    "variable": "var(--spacing-24)"
  },
  "spacing.32": {
    "value": "128px",
    "variable": "var(--spacing-32)"
  },
  "spacing.px": {
    "value": "1px",
    "variable": "var(--spacing-px)"
  },
  "radii.none": {
    "value": "0px",
    "variable": "var(--radii-none)"
  },
  "radii.sm": {
    "value": "2px",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "4px",
    "variable": "var(--radii-md)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "durations.1": {
    "value": "90ms",
    "variable": "var(--durations-1)"
  },
  "durations.2": {
    "value": "150ms",
    "variable": "var(--durations-2)"
  },
  "durations.3": {
    "value": "240ms",
    "variable": "var(--durations-3)"
  },
  "durations.4": {
    "value": "420ms",
    "variable": "var(--durations-4)"
  },
  "easings.out": {
    "value": "cubic-bezier(0.22, 1, 0.36, 1)",
    "variable": "var(--easings-out)"
  },
  "easings.inOut": {
    "value": "cubic-bezier(0.65, 0, 0.35, 1)",
    "variable": "var(--easings-in-out)"
  },
  "colors.bg": {
    "value": "var(--colors-bg)",
    "variable": "var(--colors-bg)"
  },
  "colors.bgSunken": {
    "value": "var(--colors-bg-sunken)",
    "variable": "var(--colors-bg-sunken)"
  },
  "colors.surface": {
    "value": "var(--colors-surface)",
    "variable": "var(--colors-surface)"
  },
  "colors.surface2": {
    "value": "var(--colors-surface2)",
    "variable": "var(--colors-surface2)"
  },
  "colors.surface3": {
    "value": "var(--colors-surface3)",
    "variable": "var(--colors-surface3)"
  },
  "colors.fg": {
    "value": "var(--colors-fg)",
    "variable": "var(--colors-fg)"
  },
  "colors.fgMuted": {
    "value": "var(--colors-fg-muted)",
    "variable": "var(--colors-fg-muted)"
  },
  "colors.fgSubtle": {
    "value": "var(--colors-fg-subtle)",
    "variable": "var(--colors-fg-subtle)"
  },
  "colors.fgFaint": {
    "value": "var(--colors-fg-faint)",
    "variable": "var(--colors-fg-faint)"
  },
  "colors.border": {
    "value": "var(--colors-border)",
    "variable": "var(--colors-border)"
  },
  "colors.borderStrong": {
    "value": "var(--colors-border-strong)",
    "variable": "var(--colors-border-strong)"
  },
  "colors.borderAccent": {
    "value": "var(--colors-border-accent)",
    "variable": "var(--colors-border-accent)"
  },
  "colors.accent": {
    "value": "oklch(0.86 0.21 128)",
    "variable": "var(--colors-accent)"
  },
  "colors.accentHover": {
    "value": "oklch(0.90 0.21 128)",
    "variable": "var(--colors-accent-hover)"
  },
  "colors.accentPress": {
    "value": "oklch(0.80 0.20 128)",
    "variable": "var(--colors-accent-press)"
  },
  "colors.accentInk": {
    "value": "var(--colors-accent-ink)",
    "variable": "var(--colors-accent-ink)"
  },
  "colors.accentGlow": {
    "value": "oklch(0.86 0.21 128 / 0.28)",
    "variable": "var(--colors-accent-glow)"
  },
  "colors.accentText": {
    "value": "var(--colors-accent-text)",
    "variable": "var(--colors-accent-text)"
  },
  "colors.success": {
    "value": "oklch(0.80 0.17 152)",
    "variable": "var(--colors-success)"
  },
  "colors.warning": {
    "value": "oklch(0.83 0.16 78)",
    "variable": "var(--colors-warning)"
  },
  "colors.danger": {
    "value": "oklch(0.66 0.20 26)",
    "variable": "var(--colors-danger)"
  },
  "colors.info": {
    "value": "oklch(0.76 0.12 232)",
    "variable": "var(--colors-info)"
  },
  "colors.successBg": {
    "value": "var(--colors-success-bg)",
    "variable": "var(--colors-success-bg)"
  },
  "colors.warningBg": {
    "value": "var(--colors-warning-bg)",
    "variable": "var(--colors-warning-bg)"
  },
  "colors.dangerBg": {
    "value": "var(--colors-danger-bg)",
    "variable": "var(--colors-danger-bg)"
  },
  "colors.infoBg": {
    "value": "var(--colors-info-bg)",
    "variable": "var(--colors-info-bg)"
  },
  "colors.selection": {
    "value": "var(--colors-selection)",
    "variable": "var(--colors-selection)"
  },
  "colors.dot": {
    "value": "var(--colors-dot)",
    "variable": "var(--colors-dot)"
  },
  "colors.gridLine": {
    "value": "var(--colors-grid-line)",
    "variable": "var(--colors-grid-line)"
  },
  "shadows.sm": {
    "value": "var(--shadows-sm)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--shadows-md)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--shadows-lg)",
    "variable": "var(--shadows-lg)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-px": {
    "value": "calc(var(--spacing-px) * -1)",
    "variable": "var(--spacing-px)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar