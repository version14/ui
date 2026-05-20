import type { ElementType, HTMLAttributes, ReactNode } from "react";
import {
	codeStyles,
	headingStyles,
	labelStyles,
	textStyles,
} from "./typography.styles";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg";
export type TextSize = "lg" | "md" | "sm";
export type LabelSize = "md" | "sm";

const HEADING_DEFAULT_SIZE: Record<HeadingLevel, HeadingSize> = {
	h1: "5xl",
	h2: "4xl",
	h3: "3xl",
	h4: "2xl",
	h5: "xl",
	h6: "lg",
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as?: HeadingLevel;
	size?: HeadingSize;
	children: ReactNode;
}

export function Heading({
	as: Tag = "h2",
	size,
	children,
	className,
	...rest
}: HeadingProps) {
	const resolvedSize = size ?? HEADING_DEFAULT_SIZE[Tag];
	const styles = headingStyles({ size: resolvedSize });
	return (
		<Tag
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			{children}
		</Tag>
	);
}

export interface TextProps extends HTMLAttributes<HTMLElement> {
	as?: "p" | "span" | "div";
	size?: TextSize;
	muted?: boolean;
	children: ReactNode;
}

export function Text({
	as = "p",
	size = "md",
	muted = false,
	children,
	className,
	...rest
}: TextProps) {
	const Tag = as as ElementType;
	const styles = textStyles({ size, muted });
	return (
		<Tag
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			{children}
		</Tag>
	);
}

export interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
	size?: LabelSize;
	muted?: boolean;
	children: ReactNode;
}

export function Label({
	size = "md",
	muted = false,
	children,
	className,
	...rest
}: LabelProps) {
	const styles = labelStyles({ size, muted });
	return (
		<span
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			{children}
		</span>
	);
}

export interface CodeProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
}

export function Code({ children, className, ...rest }: CodeProps) {
	const styles = codeStyles();
	return (
		<code
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			{children}
		</code>
	);
}
