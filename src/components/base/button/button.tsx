import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "../../icon/icon";
import { buttonStyles } from "./button.styles";

export type ButtonVariant = "primary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	isIconOnly?: boolean;
	isLoading?: boolean;
	children?: ReactNode;
}

export function Button({
	variant = "primary",
	size = "md",
	isIconOnly = false,
	isLoading = false,
	disabled,
	children,
	className,
	...rest
}: ButtonProps) {
	const isDisabled = disabled || isLoading;
	const styles = buttonStyles({
		variant,
		size,
		isIconOnly,
		disabled: isDisabled,
	});

	return (
		<button
			disabled={isDisabled}
			aria-disabled={isDisabled}
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			{isLoading ? (
				<Icon
					name="Refresh"
					variant="bold"
					size={size === "sm" ? "sm" : "md"}
				/>
			) : (
				children
			)}
		</button>
	);
}
