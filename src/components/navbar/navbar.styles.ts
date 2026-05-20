import { sva } from "@/styled-system/css";
import { createStyleContext } from "@/src/lib/create-style-context";

export const navbarStyles = sva({
	slots: ["root", "brand", "links", "actions", "mobileToggle", "mobileMenu"],
	base: {
		root: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			px: "6",
			h: "16",
			bg: "bg.DEFAULT",
			borderBottom: "1px solid",
			borderColor: "border.DEFAULT",
			position: "relative",
		},
		brand: {
			display: "flex",
			alignItems: "center",
			textDecoration: "none",
			flexShrink: "0",
		},
		links: {
			display: "flex",
			alignItems: "center",
			gap: "1",
			listStyle: "none",
			margin: "0",
			padding: "0",
		},
		actions: {
			display: "flex",
			alignItems: "center",
			gap: "2",
			flexShrink: "0",
		},
		mobileToggle: {
			display: "none",
			alignItems: "center",
			justifyContent: "center",
			w: "10",
			h: "10",
			borderRadius: "md",
			border: "none",
			bg: "transparent",
			color: "fg.DEFAULT",
			cursor: "pointer",
		},
		mobileMenu: {
			position: "absolute",
			top: "16",
			left: "0",
			right: "0",
			bg: "bg.DEFAULT",
			borderBottom: "1px solid",
			borderColor: "border.DEFAULT",
			px: "6",
			py: "4",
			display: "flex",
			flexDirection: "column",
			gap: "2",
			zIndex: "dropdown",
		},
	},
});

export const { withContext } = createStyleContext(navbarStyles);
