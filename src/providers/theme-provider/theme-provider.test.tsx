import { act, render, renderHook } from "@testing-library/react";
import { type ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeProvider, useTheme } from "./theme-provider";

const STORAGE_KEY = "v14-theme";

function stubMatchMedia(prefersDark = false) {
	const listeners: ((e: MediaQueryListEvent) => void)[] = [];
	const mq = {
		matches: prefersDark,
		addEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) =>
			listeners.push(cb),
		removeEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => {
			const idx = listeners.indexOf(cb);
			if (idx !== -1) listeners.splice(idx, 1);
		},
		dispatchChange: (matches: boolean) => {
			for (const cb of listeners) cb({ matches } as MediaQueryListEvent);
		},
	};
	vi.spyOn(window, "matchMedia").mockReturnValue(
		mq as unknown as MediaQueryList,
	);
	return mq;
}

beforeEach(() => {
	localStorage.clear();
	document.documentElement.classList.remove("dark");
	stubMatchMedia(false);
});

afterEach(() => {
	vi.restoreAllMocks();
});

function wrapper({ children }: { children: ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}

describe("ThemeProvider", () => {
	it("applies .dark when localStorage stores dark", () => {
		localStorage.setItem(STORAGE_KEY, "dark");
		render(<ThemeProvider><div /></ThemeProvider>);
		expect(document.documentElement.classList.contains("dark")).toBe(true);
	});

	it("does not apply .dark when localStorage stores light", () => {
		localStorage.setItem(STORAGE_KEY, "light");
		render(<ThemeProvider><div /></ThemeProvider>);
		expect(document.documentElement.classList.contains("dark")).toBe(false);
	});

	it("applies .dark when system prefers dark and no localStorage preference", () => {
		stubMatchMedia(true);
		render(<ThemeProvider><div /></ThemeProvider>);
		expect(document.documentElement.classList.contains("dark")).toBe(true);
	});

	it("does not apply .dark when system prefers light and no localStorage preference", () => {
		stubMatchMedia(false);
		render(<ThemeProvider><div /></ThemeProvider>);
		expect(document.documentElement.classList.contains("dark")).toBe(false);
	});

	it("setTheme writes to localStorage and updates class", () => {
		const { result } = renderHook(() => useTheme(), { wrapper });
		act(() => result.current.setTheme("dark"));
		expect(localStorage.getItem(STORAGE_KEY)).toBe("dark");
		expect(document.documentElement.classList.contains("dark")).toBe(true);
	});

	it("system preference change updates theme when no manual preference stored", () => {
		const mq = stubMatchMedia(false);
		render(<ThemeProvider><div /></ThemeProvider>);
		act(() => mq.dispatchChange(true));
		expect(document.documentElement.classList.contains("dark")).toBe(true);
	});

	it("system preference change is ignored when manual preference is stored", () => {
		localStorage.setItem(STORAGE_KEY, "light");
		const mq = stubMatchMedia(false);
		render(<ThemeProvider><div /></ThemeProvider>);
		act(() => mq.dispatchChange(true));
		expect(document.documentElement.classList.contains("dark")).toBe(false);
	});

	it("toggleTheme switches theme and persists it", () => {
		const { result } = renderHook(() => useTheme(), { wrapper });
		act(() => result.current.toggleTheme());
		expect(localStorage.getItem(STORAGE_KEY)).toBe("dark");
		act(() => result.current.toggleTheme());
		expect(localStorage.getItem(STORAGE_KEY)).toBe("light");
	});

	it("useTheme throws when used outside ThemeProvider", () => {
		const spy = vi.spyOn(console, "error").mockImplementation(() => {});
		expect(() => renderHook(() => useTheme())).toThrow(
			"useTheme must be used within a ThemeProvider",
		);
		spy.mockRestore();
	});
});
