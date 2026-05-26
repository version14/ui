import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { PageTransitionValue } from "./provider";
import { PageTransitionContext } from "./provider";
import TransitionTrigger from "./trigger";

function makeCtx(overrides: Partial<PageTransitionValue> = {}): PageTransitionValue {
  return {
    navigateTo: vi.fn(),
    isNavigating: false,
    setIsNavigating: vi.fn(),
    isCovered: false,
    setIsCovered: vi.fn(),
    registerCoverFn: vi.fn(),
    ...overrides,
  };
}

function wrap(ui: React.ReactElement, ctx = makeCtx()) {
  return render(<PageTransitionContext.Provider value={ctx}>{ui}</PageTransitionContext.Provider>);
}

test("renders an anchor with the correct href", () => {
  wrap(<TransitionTrigger href="/about">link</TransitionTrigger>);
  expect(screen.getByRole("link", { name: "link" })).toHaveAttribute("href", "/about");
});

test("applies custom className to the anchor", () => {
  wrap(
    <TransitionTrigger href="/about" className="my-link">
      link
    </TransitionTrigger>,
  );
  expect(screen.getByRole("link")).toHaveClass("my-link");
});

test("calls navigateTo and prevents default for internal links", async () => {
  const user = userEvent.setup();
  const navigateTo = vi.fn();
  wrap(<TransitionTrigger href="/about">link</TransitionTrigger>, makeCtx({ navigateTo }));

  await user.click(screen.getByRole("link"));
  expect(navigateTo).toHaveBeenCalledWith("/about");
});

test("does not call navigateTo for http links", async () => {
  const user = userEvent.setup();
  const navigateTo = vi.fn();
  wrap(
    <TransitionTrigger href="https://example.com">link</TransitionTrigger>,
    makeCtx({ navigateTo }),
  );

  await user.click(screen.getByRole("link"));
  expect(navigateTo).not.toHaveBeenCalled();
});

test("does not call navigateTo for mailto links", async () => {
  const user = userEvent.setup();
  const navigateTo = vi.fn();
  wrap(
    <TransitionTrigger href="mailto:hi@example.com">link</TransitionTrigger>,
    makeCtx({ navigateTo }),
  );

  await user.click(screen.getByRole("link"));
  expect(navigateTo).not.toHaveBeenCalled();
});

test("calls custom onClick alongside navigateTo for internal links", async () => {
  const user = userEvent.setup();
  const navigateTo = vi.fn();
  const onClick = vi.fn();
  wrap(
    <TransitionTrigger href="/about" onClick={onClick}>
      link
    </TransitionTrigger>,
    makeCtx({ navigateTo }),
  );

  await user.click(screen.getByRole("link"));
  expect(navigateTo).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalled();
});

test("does not call custom onClick for external links", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  wrap(
    <TransitionTrigger href="https://example.com" onClick={onClick}>
      link
    </TransitionTrigger>,
  );

  await user.click(screen.getByRole("link"));
  expect(onClick).not.toHaveBeenCalled();
});

test("renders children inside the anchor", () => {
  wrap(
    <TransitionTrigger href="/about">
      <span>inner</span>
    </TransitionTrigger>,
  );
  expect(screen.getByText("inner")).toBeInTheDocument();
});
