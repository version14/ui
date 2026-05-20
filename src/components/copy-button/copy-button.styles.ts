import { sva } from "@/styled-system/css";

export const copyButtonStyles = sva({
	slots: ["root"],
	base: {
		root: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			w: "8",
			h: "8",
			p: "0",
			borderRadius: "md",
			border: "1px solid",
			borderColor: "border.DEFAULT",
			bg: "transparent",
			color: "fg.muted",
			cursor: "pointer",
			transition: "color 150ms",
			_hover: { color: "fg.DEFAULT" },
		},
	},
});
