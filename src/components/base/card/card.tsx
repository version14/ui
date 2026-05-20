import type { HTMLAttributes, ReactNode } from "react";
import { cardStyles } from "./card.styles";

export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	padding?: CardPadding;
	children: ReactNode;
}

export function Card({
	padding = "md",
	children,
	className,
	...rest
}: CardProps) {
	const styles = cardStyles({ padding });
	return (
		<div
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			{children}
		</div>
	);
}
