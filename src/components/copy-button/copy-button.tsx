import { type ButtonHTMLAttributes, useCallback, useState } from "react";
import { Icon } from "../icon/icon";
import { copyButtonStyles } from "./copy-button.styles";

type CopyState = "idle" | "copied";

export interface CopyButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
	value: string;
	timeout?: number;
}

export function CopyButton({
	value,
	timeout = 2000,
	className,
	...rest
}: CopyButtonProps) {
	const [state, setState] = useState<CopyState>("idle");
	const styles = copyButtonStyles();

	const handleCopy = useCallback(async () => {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(value);
			} else {
				const ta = document.createElement("textarea");
				ta.value = value;
				ta.style.position = "fixed";
				ta.style.opacity = "0";
				document.body.appendChild(ta);
				ta.select();
				document.execCommand("copy");
				document.body.removeChild(ta);
			}
			setState("copied");
			setTimeout(() => setState("idle"), timeout);
		} catch {
			// Silent — nothing actionable to surface to the user
		}
	}, [value, timeout]);

	return (
		<button
			type="button"
			aria-label={state === "copied" ? "Copied!" : "Copy to clipboard"}
			onClick={handleCopy}
			className={`${styles.root}${className ? ` ${className}` : ""}`}
			{...rest}
		>
			<Icon
				name={state === "copied" ? "CheckCircle" : "Copy"}
				size="sm"
				variant="linear"
			/>
		</button>
	);
}
