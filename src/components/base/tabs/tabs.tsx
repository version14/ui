import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import { type ReactNode, createContext, useContext } from "react";
import { tabsStyles, withContext } from "./tabs.styles";

export type TabsVariant = "underline" | "enclosed";

const TabsVariantContext = createContext<TabsVariant>("underline");

export interface TabsRootProps {
	variant?: TabsVariant;
	defaultValue?: string;
	value?: string;
	onValueChange?: (details: { value: string }) => void;
	children: ReactNode;
	className?: string;
}

function Root({
	variant = "underline",
	defaultValue,
	value,
	onValueChange,
	children,
	className,
}: TabsRootProps) {
	const styles = tabsStyles({ variant });
	return (
		<TabsVariantContext.Provider value={variant}>
			<ArkTabs.Root
				defaultValue={defaultValue}
				value={value}
				onValueChange={onValueChange}
				className={`${styles.root}${className ? ` ${className}` : ""}`}
			>
				{children}
			</ArkTabs.Root>
		</TabsVariantContext.Provider>
	);
}

export interface TabsListProps {
	children: ReactNode;
	className?: string;
}

function List({ children, className }: TabsListProps) {
	const variant = useContext(TabsVariantContext);
	const styles = tabsStyles({ variant });
	return (
		<ArkTabs.List
			className={`${styles.list}${className ? ` ${className}` : ""}`}
		>
			{children}
		</ArkTabs.List>
	);
}

export interface TabsTriggerProps {
	value: string;
	children: ReactNode;
	className?: string;
	disabled?: boolean;
}

function Trigger({ value, children, className, disabled }: TabsTriggerProps) {
	const variant = useContext(TabsVariantContext);
	const styles = tabsStyles({ variant });
	return (
		<ArkTabs.Trigger
			value={value}
			disabled={disabled}
			className={`${styles.trigger}${className ? ` ${className}` : ""}`}
		>
			{children}
		</ArkTabs.Trigger>
	);
}

export interface TabsContentProps {
	value: string;
	children: ReactNode;
	className?: string;
}

function Content({ value, children, className }: TabsContentProps) {
	const variant = useContext(TabsVariantContext);
	const styles = tabsStyles({ variant });
	return (
		<ArkTabs.Content
			value={value}
			className={`${styles.content}${className ? ` ${className}` : ""}`}
		>
			{children}
		</ArkTabs.Content>
	);
}

export const Tabs = { Root, List, Trigger, Content };

export { withContext };
