import { sva } from "@/styled-system/css";

export const cardStyles = sva({
	slots: ["root"],
	base: {
		root: {
			bg: "bg.DEFAULT",
			border: "1px solid",
			borderColor: "border.DEFAULT",
			borderRadius: "lg",
		},
	},
	variants: {
		padding: {
			none: { root: { p: "0" } },
			sm: { root: { p: "3" } },
			md: { root: { p: "5" } },
			lg: { root: { p: "8" } },
		},
	},
	defaultVariants: { padding: "md" },
});
