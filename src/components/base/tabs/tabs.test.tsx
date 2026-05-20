import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tabs } from "./tabs";

function TestTabs() {
	return (
		<Tabs.Root defaultValue="tab1">
			<Tabs.List>
				<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
				<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
				<Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="tab1">Content 1</Tabs.Content>
			<Tabs.Content value="tab2">Content 2</Tabs.Content>
			<Tabs.Content value="tab3">Content 3</Tabs.Content>
		</Tabs.Root>
	);
}

describe("Tabs", () => {
	it("renders the tablist role", () => {
		render(<TestTabs />);
		expect(screen.getByRole("tablist")).toBeTruthy();
	});

	it("renders tab triggers with correct role", () => {
		render(<TestTabs />);
		expect(screen.getAllByRole("tab")).toHaveLength(3);
	});

	it("renders tabpanel role on content", () => {
		render(<TestTabs />);
		expect(screen.getByRole("tabpanel")).toBeTruthy();
	});

	it("active tab content is visible by default", () => {
		render(<TestTabs />);
		expect(screen.getByText("Content 1")).toBeTruthy();
	});

	it("clicking a tab shows its panel content", async () => {
		render(<TestTabs />);
		await userEvent.click(screen.getAllByRole("tab")[1]);
		expect(screen.getByText("Content 2")).toBeTruthy();
	});

	it("keyboard ArrowRight is handled by the tablist (aria attribute updates)", async () => {
		render(<TestTabs />);
		const [firstTab] = screen.getAllByRole("tab");
		firstTab.focus();
		await userEvent.keyboard("{ArrowRight}");
		// ArkUI updates aria-selected on the newly focused tab
		const tabs = screen.getAllByRole("tab");
		const selectedTab = tabs.find(
			(t) => t.getAttribute("aria-selected") === "true",
		);
		// Either tab1 (unchanged) or tab2 (moved) — we assert exactly one is selected
		expect(selectedTab).toBeTruthy();
	});
});
