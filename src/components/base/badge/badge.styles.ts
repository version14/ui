import { sva } from "@/styled-system/css";

export const badgeStyles = sva({
	slots: ["root", "dot"],
	base: {
		root: {
			display: "inline-flex",
			alignItems: "center",
			gap: "1.5",
			borderRadius: "full",
			fontWeight: "medium",
			lineHeight: "1.25",
			fontFamily: "sans",
			whiteSpace: "nowrap",
			border: "1px solid transparent",
		},
		dot: {
			borderRadius: "full",
			flexShrink: "0",
		},
	},
	variants: {
		variant: {
			solid: {
				root: {
					bg: "accent.DEFAULT",
					color: "accent.fg",
				},
			},
			outline: {
				root: {
					bg: "transparent",
					color: "fg.DEFAULT",
					borderColor: "border.DEFAULT",
				},
			},
			subtle: {
				root: {
					bg: "bg.muted",
					color: "fg.DEFAULT",
				},
			},
		},
		size: {
			sm: {
				root: { px: "2", py: "0.5", fontSize: "xs" },
				dot: { w: "1.5", h: "1.5" },
			},
			md: {
				root: { px: "2.5", py: "1", fontSize: "sm" },
				dot: { w: "2", h: "2" },
			},
		},
		color: {
			default: { dot: { bg: "currentColor" } },
			success: { dot: { bg: "#22c55e" } },
			warning: { dot: { bg: "#f59e0b" } },
			danger: { dot: { bg: "#ef4444" } },
			accent: { dot: { bg: "accent.DEFAULT" } },
		},
	},
	defaultVariants: {
		variant: "subtle",
		size: "md",
		color: "default",
	},
});
