import { sva } from "@/styled-system/css";

export const buttonStyles = sva({
	slots: ["root"],
	base: {
		root: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			fontWeight: "medium",
			fontFamily: "sans",
			lineHeight: "1",
			borderRadius: "md",
			cursor: "pointer",
			transition: "opacity 150ms, background-color 150ms",
			outline: "none",
			userSelect: "none",
			flexShrink: "0",
			border: "1px solid transparent",
		},
	},
	variants: {
		variant: {
			primary: {
				root: {
					bg: "accent.DEFAULT",
					color: "accent.fg",
				},
			},
			outline: {
				root: {
					bg: "transparent",
					color: "fg.DEFAULT",
					borderColor: "border.strong",
				},
			},
			ghost: {
				root: {
					bg: "transparent",
					color: "fg.DEFAULT",
				},
			},
		},
		size: {
			sm: {
				root: {
					h: "8",
					px: "3",
					gap: "1.5",
					fontSize: "sm",
				},
			},
			md: {
				root: {
					h: "10",
					px: "4",
					gap: "2",
					fontSize: "md",
				},
			},
			lg: {
				root: {
					h: "12",
					px: "5",
					gap: "2.5",
					fontSize: "lg",
				},
			},
		},
		isIconOnly: {
			true: {
				root: {
					px: "0",
					borderRadius: "full",
					aspectRatio: "1",
				},
			},
		},
		disabled: {
			true: {
				root: {
					opacity: "0.5",
					cursor: "not-allowed",
				},
			},
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
		isIconOnly: false,
		disabled: false,
	},
});
