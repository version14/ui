/* eslint-disable */
export type Token = `fonts.${FontToken}` | `fontSizes.${FontSizeToken}` | `lineHeights.${LineHeightToken}` | `letterSpacings.${LetterSpacingToken}` | `spacing.${SpacingToken}` | `radii.${RadiusToken}` | `durations.${DurationToken}` | `easings.${EasingToken}` | `colors.${ColorToken}` | `shadows.${ShadowToken}`

export type ColorPalette = "bg" | "bgSunken" | "surface" | "surface2" | "surface3" | "fg" | "fgMuted" | "fgSubtle" | "fgFaint" | "border" | "borderStrong" | "borderAccent" | "accent" | "accentHover" | "accentPress" | "accentInk" | "accentGlow" | "accentText" | "success" | "warning" | "danger" | "info" | "successBg" | "warningBg" | "dangerBg" | "infoBg" | "selection" | "dot" | "gridLine"

export type FontToken = "sans" | "mono"

export type FontSizeToken = "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "display-sm" | "display-md" | "display-lg"

export type LineHeightToken = "tight" | "snug" | "base"

export type LetterSpacingToken = "tight" | "normal" | "wide" | "mono" | "caps"

export type SpacingToken = "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "32" | "px" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-8" | "-10" | "-12" | "-16" | "-20" | "-24" | "-32" | "-px"

export type RadiusToken = "none" | "sm" | "md" | "full"

export type DurationToken = "1" | "2" | "3" | "4"

export type EasingToken = "out" | "inOut"

export type ColorToken = "bg" | "bgSunken" | "surface" | "surface2" | "surface3" | "fg" | "fgMuted" | "fgSubtle" | "fgFaint" | "border" | "borderStrong" | "borderAccent" | "accent" | "accentHover" | "accentPress" | "accentInk" | "accentGlow" | "accentText" | "success" | "warning" | "danger" | "info" | "successBg" | "warningBg" | "dangerBg" | "infoBg" | "selection" | "dot" | "gridLine" | "colorPalette"

export type ShadowToken = "sm" | "md" | "lg"

export type Tokens = {
		fonts: FontToken
		fontSizes: FontSizeToken
		lineHeights: LineHeightToken
		letterSpacings: LetterSpacingToken
		spacing: SpacingToken
		radii: RadiusToken
		durations: DurationToken
		easings: EasingToken
		colors: ColorToken
		shadows: ShadowToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"