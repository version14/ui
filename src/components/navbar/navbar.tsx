import { createContext, type ReactNode, useContext, useState } from "react";
import { Icon } from "../icon/icon";
import { navbarStyles } from "./navbar.styles";

interface NavbarContextValue {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

const NavbarContext = createContext<NavbarContextValue>({
	isOpen: false,
	setIsOpen: () => {},
});

export function useNavbar() {
	return useContext(NavbarContext);
}

export interface NavbarRootProps {
	children: ReactNode;
	className?: string;
}

function Root({ children, className }: NavbarRootProps) {
	const [isOpen, setIsOpen] = useState(false);
	const styles = navbarStyles();

	return (
		<NavbarContext.Provider value={{ isOpen, setIsOpen }}>
			<nav className={`${styles.root}${className ? ` ${className}` : ""}`}>
				{children}
				<button
					type="button"
					aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={isOpen}
					aria-controls="navbar-mobile-menu"
					onClick={() => setIsOpen((prev) => !prev)}
					className={styles.mobileToggle}
				>
					<Icon name={isOpen ? "CloseCircle" : "HamburgerMenu"} size="md" />
				</button>
			</nav>
		</NavbarContext.Provider>
	);
}

export interface NavbarBrandProps {
	children: ReactNode;
	href?: string;
	className?: string;
}

function Brand({ children, href = "/", className }: NavbarBrandProps) {
	const styles = navbarStyles();
	return (
		<a
			href={href}
			className={`${styles.brand}${className ? ` ${className}` : ""}`}
		>
			{children}
		</a>
	);
}

export interface NavbarLinksProps {
	children: ReactNode;
	className?: string;
}

function Links({ children, className }: NavbarLinksProps) {
	const styles = navbarStyles();
	return (
		<ul className={`${styles.links}${className ? ` ${className}` : ""}`}>
			{children}
		</ul>
	);
}

export interface NavbarActionsProps {
	children: ReactNode;
	className?: string;
}

function Actions({ children, className }: NavbarActionsProps) {
	const styles = navbarStyles();
	return (
		<div className={`${styles.actions}${className ? ` ${className}` : ""}`}>
			{children}
		</div>
	);
}

export interface NavbarMobileMenuProps {
	children: ReactNode;
	className?: string;
}

function MobileMenu({ children, className }: NavbarMobileMenuProps) {
	const { isOpen } = useNavbar();
	const styles = navbarStyles();
	if (!isOpen) return null;
	return (
		<div
			id="navbar-mobile-menu"
			className={`${styles.mobileMenu}${className ? ` ${className}` : ""}`}
		>
			{children}
		</div>
	);
}

export const Navbar = { Root, Brand, Links, Actions, MobileMenu };
