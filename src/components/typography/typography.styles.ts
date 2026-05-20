import { sva } from "@/styled-system/css";

export const headingStyles = sva({
	slots: ["root"],
	base: {
		root: {
			margin: "0",
			fontFamily: "sans",
			color: "fg.DEFAULT",
			fontWeight: "bold",
		},
	},
	variants: {
		size: {
			"5xl": { root: { fontSize: "5xl", lineHeight: "tight" } },
			"4xl": { root: { fontSize: "4xl", lineHeight: "tight" } },
			"3xl": { root: { fontSize: "3xl", fontWeight: "semibold", lineHeight: "snug" } },
			"2xl": { root: { fontSize: "2xl", fontWeight: "semibold", lineHeight: "snug" } },
			xl: { root: { fontSize: "xl", fontWeight: "semibold", lineHeight: "snug" } },
			lg: { root: { fontSize: "lg", fontWeight: "semibold", lineHeight: "snug" } },
		},
	},
	defaultVariants: { size: "2xl" },
});

export const textStyles = sva({
	slots: ["root"],
	base: {
		root: {
			margin: "0",
			fontFamily: "sans",
			fontWeight: "normal",
			color: "fg.DEFAULT",
		},
	},
	variants: {
		size: {
			lg: { root: { fontSize: "lg", lineHeight: "relaxed" } },
			md: { root: { fontSize: "md", lineHeight: "normal" } },
			sm: { root: { fontSize: "sm", lineHeight: "normal" } },
		},
		muted: {
			true: { root: { color: "fg.muted" } },
		},
	},
	defaultVariants: { size: "md", muted: false },
});

export const labelStyles = sva({
	slots: ["root"],
	base: {
		root: {
			fontFamily: "sans",
			fontWeight: "medium",
			color: "fg.DEFAULT",
		},
	},
	variants: {
		size: {
			md: { root: { fontSize: "sm", lineHeight: "tight" } },
			sm: { root: { fontSize: "xs", lineHeight: "tight" } },
		},
		muted: {
			true: { root: { color: "fg.muted" } },
		},
	},
	defaultVariants: { size: "md", muted: false },
});

export const codeStyles = sva({
	slots: ["root"],
	base: {
		root: {
			fontFamily: "mono",
			fontSize: "sm",
			lineHeight: "relaxed",
			bg: "bg.muted",
			color: "fg.DEFAULT",
			px: "1.5",
			py: "0.5",
			borderRadius: "sm",
			border: "1px solid",
			borderColor: "border.DEFAULT",
		},
	},
});
