import {
	type ComponentPropsWithoutRef,
	type ComponentType,
	type ElementType,
	createContext,
	useContext,
} from "react";

type SlotStyles = Record<string, string>;
type RecipeFn = (variants?: Record<string, unknown>) => SlotStyles;

const StyleContext = createContext<SlotStyles | null>(null);

export function createStyleContext<R extends RecipeFn>(recipe: R) {
	function withRootProvider<Props extends { className?: string }>(
		Component: ComponentType<Props>,
	) {
		return function RootProvider({
			className,
			...props
		}: Props & Parameters<R>[0]) {
			const variantKeys = Object.keys(props).filter(
				(k) =>
					k in
					((recipe as unknown as { variantMap: Record<string, unknown> })
						.variantMap ?? {}),
			);
			const variantProps = Object.fromEntries(
				variantKeys.map((k) => [k, (props as Record<string, unknown>)[k]]),
			);
			const styles = recipe(variantProps);
			return (
				<StyleContext.Provider value={styles}>
					<Component
						className={`${styles.root ?? ""} ${className ?? ""}`.trim()}
						{...(props as unknown as Props)}
					/>
				</StyleContext.Provider>
			);
		};
	}

	function withContext<T extends ElementType>(
		Component: T,
		slot: string,
	): ComponentType<ComponentPropsWithoutRef<T>> {
		return function SlotComponent({
			className,
			...props
		}: ComponentPropsWithoutRef<T>) {
			const styles = useContext(StyleContext);
			const slotClass = styles?.[slot] ?? "";
			return (
				<Component
					className={`${slotClass} ${className ?? ""}`.trim()}
					{...(props as ComponentPropsWithoutRef<T>)}
				/>
			);
		};
	}

	return { withRootProvider, withContext };
}
