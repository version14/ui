import type { HTMLAttributes, ReactNode } from "react";
import { badgeStyles } from "./badge.styles";

export type BadgeVariant = "solid" | "outline" | "subtle";
export type BadgeSize = "sm" | "md";
export type BadgeColor =
	| "default"
	| "success"
	| "warning"
	| "danger"
	| "accent";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?: BadgeVariant;
	size?: BadgeSize;
	color?: BadgeColor;
	dot?: boolean;
	children: ReactNode;
}

export function Badge({
	variant = "subtle",
	size = "md",
	color = "default",
	dot = false,
	children,
	className,
	...rest
}: BadgeProps) {
	const styles = badgeStyles({ variant, size, color });
	return (
		<span
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			{dot && <span aria-hidden="true" className={styles.dot} />}
			{children}
		</span>
	);
}
