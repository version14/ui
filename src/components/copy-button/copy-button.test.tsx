import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CopyButton } from "./copy-button";

vi.mock("../icon/icon", () => ({
	Icon: ({ name }: { name: string }) => <span data-testid={`icon-${name}`} />,
}));

const mockWriteText = vi.fn().mockResolvedValue(undefined);

beforeEach(() => {
	mockWriteText.mockClear();
	Object.defineProperty(navigator, "clipboard", {
		value: { writeText: mockWriteText },
		writable: true,
		configurable: true,
	});
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe("CopyButton", () => {
	it("calls clipboard.writeText with the correct value", async () => {
		render(<CopyButton value="npm install @version14/ui" />);
		await userEvent.click(screen.getByRole("button"));
		expect(mockWriteText).toHaveBeenCalledWith("npm install @version14/ui");
	});

	it("shows check icon after click", async () => {
		render(<CopyButton value="hello" />);
		await userEvent.click(screen.getByRole("button"));
		expect(screen.getByTestId("icon-CheckCircle")).toBeTruthy();
	});

	it("returns to copy icon after the timeout fires", async () => {
		// Spy on setTimeout so it fires the callback immediately — avoids fake timer leaks.
		vi.spyOn(globalThis, "setTimeout").mockImplementation((fn) => {
			if (typeof fn === "function") (fn as () => void)();
			return 0 as unknown as ReturnType<typeof setTimeout>;
		});

		render(<CopyButton value="hello" timeout={2000} />);
		await userEvent.click(screen.getByRole("button"));
		// With setTimeout calling immediately, state transitions idle → copied → idle in one tick.
		expect(screen.getByTestId("icon-Copy")).toBeTruthy();
	});

	it("aria-label updates to reflect copied state", async () => {
		render(<CopyButton value="hello" />);
		const btn = screen.getByRole("button");
		expect(btn.getAttribute("aria-label")).toBe("Copy to clipboard");
		await userEvent.click(btn);
		expect(btn.getAttribute("aria-label")).toBe("Copied!");
	});
});
