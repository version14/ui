import { sva } from "@/styled-system/css";

export const codeBlockStyles = sva({
	slots: [
		"root",
		"header",
		"trafficLightWrapper",
		"trafficLight",
		"title",
		"body",
		"pre",
		"lineNumbers",
		"code",
	],
	base: {
		root: {
			borderRadius: "lg",
			border: "1px solid",
			borderColor: "border.DEFAULT",
			overflow: "hidden",
			fontFamily: "mono",
			fontSize: "sm",
			lineHeight: "relaxed",
		},
		header: {
			display: "flex",
			alignItems: "center",
			px: "3.5",
			py: "2.5",
			bg: "bg.muted",
			borderBottom: "1px solid",
			borderColor: "border.DEFAULT",
			gap: "2",
		},
		trafficLightWrapper: {
			display: "flex",
			gap: "1.5",
			flexShrink: "0",
		},
		trafficLight: {
			w: "3",
			h: "3",
			borderRadius: "full",
			display: "block",
		},
		title: {
			flex: "1",
			textAlign: "center",
			fontSize: "xs",
			color: "fg.muted",
			fontFamily: "mono",
		},
		body: {
			bg: "bg.subtle",
			overflowX: "auto",
		},
		pre: {
			margin: "0",
			p: "4",
			display: "flex",
		},
		lineNumbers: {
			color: "fg.subtle",
			userSelect: "none",
			flexShrink: "0",
			textAlign: "right",
			mr: "4",
		},
		code: {
			color: "fg.DEFAULT",
			display: "block",
		},
	},
});

export const TRAFFIC_LIGHT_COLORS = ["#ff5f57", "#ffbd2e", "#28c840"] as const;
