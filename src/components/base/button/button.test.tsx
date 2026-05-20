import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

vi.mock("../../icon/icon", () => ({
	Icon: ({ name }: { name: string }) => <span data-testid={`icon-${name}`} />,
}));

describe("Button", () => {
	it("renders children", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText("Click me")).toBeTruthy();
	});

	it("disabled state prevents click", async () => {
		const onClick = vi.fn();
		render(
			<Button disabled onClick={onClick}>
				Click
			</Button>,
		);
		await userEvent.click(screen.getByRole("button"));
		expect(onClick).not.toHaveBeenCalled();
	});

	it("isLoading renders a spinner icon", () => {
		render(<Button isLoading>Submit</Button>);
		expect(screen.getByTestId("icon-Refresh")).toBeTruthy();
	});

	it("isLoading disables interaction", async () => {
		const onClick = vi.fn();
		render(
			<Button isLoading onClick={onClick}>
				Submit
			</Button>,
		);
		await userEvent.click(screen.getByRole("button"));
		expect(onClick).not.toHaveBeenCalled();
	});

	it.each([
		"primary",
		"ghost",
		"outline",
	] as const)("%s variant renders without error", (variant) => {
		render(<Button variant={variant}>{variant}</Button>);
		expect(screen.getByText(variant)).toBeTruthy();
	});

	it.each([
		"sm",
		"md",
		"lg",
	] as const)("%s size renders without error", (size) => {
		render(<Button size={size}>{size}</Button>);
		expect(screen.getByText(size)).toBeTruthy();
	});
});
