import { sva } from "@/styled-system/css";
import { createStyleContext } from "@/src/lib/create-style-context";

export const tabsStyles = sva({
	slots: ["root", "list", "trigger", "content"],
	base: {
		root: { w: "full" },
		list: { display: "flex" },
		trigger: {
			px: "4",
			py: "2.5",
			fontSize: "sm",
			fontWeight: "medium",
			fontFamily: "sans",
			border: "none",
			bg: "transparent",
			color: "fg.muted",
			cursor: "pointer",
			transition: "color 150ms, border-color 150ms, background-color 150ms",
			_selected: { color: "fg.DEFAULT" },
		},
		content: { py: "4" },
	},
	variants: {
		variant: {
			underline: {
				list: { borderBottom: "1px solid", borderColor: "border.DEFAULT" },
				trigger: {
					borderBottom: "2px solid transparent",
					mb: "-1px",
					_selected: { borderColor: "accent.DEFAULT" },
				},
			},
			enclosed: {
				list: {
					gap: "1",
					bg: "bg.muted",
					p: "1",
					borderRadius: "lg",
				},
				trigger: {
					borderRadius: "md",
					_selected: { bg: "bg.DEFAULT" },
				},
			},
		},
	},
	defaultVariants: { variant: "underline" },
});

export const { withContext } = createStyleContext(tabsStyles);
