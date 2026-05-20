"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "../copy-button/copy-button";
import { TRAFFIC_LIGHT_COLORS, codeBlockStyles } from "./code-block.styles";

export interface CodeBlockProps {
	code: string;
	language?: string;
	title?: string;
	showLineNumbers?: boolean;
	showCopyButton?: boolean;
	className?: string;
}

export function CodeBlock({
	code,
	language = "bash",
	title,
	showLineNumbers = false,
	showCopyButton = true,
	className,
}: CodeBlockProps) {
	const [highlighted, setHighlighted] = useState<string>("");
	const styles = codeBlockStyles();

	useEffect(() => {
		let cancelled = false;
		async function highlight() {
			try {
				const { codeToHtml } = await import("shiki");
				const html = await codeToHtml(code, {
					lang: language,
					themes: { light: "github-light", dark: "github-dark" },
				});
				if (!cancelled) setHighlighted(html);
			} catch {
				if (!cancelled) setHighlighted("");
			}
		}
		void highlight();
		return () => {
			cancelled = true;
		};
	}, [code, language]);

	const lines = code.split("\n");

	return (
		<div className={`${styles.root}${className ? ` ${className}` : ""}`}>
			<div className={styles.header}>
				<div className={styles.trafficLightWrapper}>
					{TRAFFIC_LIGHT_COLORS.map((color) => (
						<span
							key={color}
							aria-hidden="true"
							className={styles.trafficLight}
							style={{ backgroundColor: color }}
						/>
					))}
				</div>

				{title ? (
					<span className={styles.title}>{title}</span>
				) : (
					<div style={{ flex: 1 }} />
				)}

				{showCopyButton && <CopyButton value={code} />}
			</div>

			<div className={styles.body}>
				{highlighted ? (
					<div
						// biome-ignore lint/security/noDangerouslySetInnerHtml: shiki output is safe — lang and themes are our own controlled values
						dangerouslySetInnerHTML={{ __html: highlighted }}
						style={{ padding: "16px" }}
					/>
				) : (
					<pre className={styles.pre}>
						{showLineNumbers && (
							<div aria-hidden="true" className={styles.lineNumbers}>
								{lines.map((_, i) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: line numbers are stable by index
									<div key={i}>{i + 1}</div>
								))}
							</div>
						)}
						<code className={styles.code}>{code}</code>
					</pre>
				)}
			</div>
		</div>
	);
}
