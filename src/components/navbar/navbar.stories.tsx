import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../base/button/button";
import { Navbar } from "./navbar";

const meta: Meta = {
	title: "Components/Navbar",
	parameters: { layout: "fullscreen" },
};

export default meta;

const NavLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<li>
		<a
			href={href}
			style={{
				display: "block",
				padding: "8px 12px",
				borderRadius: "0.375rem",
				textDecoration: "none",
				fontSize: "0.875rem",
				fontWeight: 500,
				color: "var(--colors-fg-muted)",
			}}
		>
			{children}
		</a>
	</li>
);

export const Desktop: StoryObj = {
	parameters: { viewport: { defaultViewport: "desktop" } },
	render: () => (
		<Navbar.Root>
			<Navbar.Brand href="/">
				<strong style={{ color: "var(--colors-fg-DEFAULT)" }}>Version14</strong>
			</Navbar.Brand>
			<Navbar.Links>
				<NavLink href="/docs">Docs</NavLink>
				<NavLink href="/blog">Blog</NavLink>
				<NavLink href="/changelog">Changelog</NavLink>
			</Navbar.Links>
			<Navbar.Actions>
				<Button variant="ghost" size="sm">
					Sign in
				</Button>
				<Button variant="primary" size="sm">
					Get started
				</Button>
			</Navbar.Actions>
		</Navbar.Root>
	),
};

export const Mobile: StoryObj = {
	parameters: { viewport: { defaultViewport: "mobile1" } },
	render: () => (
		<>
			<Navbar.Root>
				<Navbar.Brand href="/">
					<strong style={{ color: "var(--colors-fg-DEFAULT)" }}>
						Version14
					</strong>
				</Navbar.Brand>
				<Navbar.Links>
					<NavLink href="/docs">Docs</NavLink>
					<NavLink href="/blog">Blog</NavLink>
				</Navbar.Links>
				<Navbar.Actions>
					<Button variant="primary" size="sm">
						Get started
					</Button>
				</Navbar.Actions>
			</Navbar.Root>
			<Navbar.MobileMenu>
				<NavLink href="/docs">Docs</NavLink>
				<NavLink href="/blog">Blog</NavLink>
				<Button variant="primary" size="sm" style={{ width: "100%" }}>
					Get started
				</Button>
			</Navbar.MobileMenu>
		</>
	),
};
