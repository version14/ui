import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PageTransitionProvider, usePageTransition } from "./provider";

function Navigate({ href }: { href: string }) {
  const { navigateTo } = usePageTransition();
  return (
    <button type="button" onClick={() => navigateTo(href)}>
      go
    </button>
  );
}

function RegisterCover({ onComplete }: { onComplete: () => void }) {
  const { registerCoverFn, navigateTo } = usePageTransition();
  registerCoverFn((cb) => {
    cb(); // immediately call onComplete (no real animation)
    onComplete();
  });
  return (
    <button type="button" onClick={() => navigateTo("/target")}>
      go
    </button>
  );
}

function ReadNavigating() {
  const { isNavigating } = usePageTransition();
  return <span data-testid="navigating">{String(isNavigating)}</span>;
}

test("calls router.push directly when no cover fn is registered", async () => {
  const user = userEvent.setup();
  const push = vi.fn();

  render(
    <PageTransitionProvider router={{ push }}>
      <Navigate href="/about" />
    </PageTransitionProvider>,
  );

  await user.click(screen.getByRole("button", { name: "go" }));
  expect(push).toHaveBeenCalledWith("/about");
});

test("calls cover fn then router.push when cover fn is registered", async () => {
  const user = userEvent.setup();
  const push = vi.fn();
  const coverCalled = vi.fn();

  render(
    <PageTransitionProvider router={{ push }}>
      <RegisterCover onComplete={coverCalled} />
    </PageTransitionProvider>,
  );

  await user.click(screen.getByRole("button", { name: "go" }));
  expect(coverCalled).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith("/target");
});

test("router.push is called after cover fn completes, not before", async () => {
  const user = userEvent.setup();
  const push = vi.fn();
  const order: string[] = [];

  function RegisterDelayedCover() {
    const { registerCoverFn, navigateTo } = usePageTransition();
    registerCoverFn((cb) => {
      order.push("cover");
      cb();
    });
    return (
      <button type="button" onClick={() => navigateTo("/x")}>
        go
      </button>
    );
  }

  const originalPush = push.mockImplementation(() => order.push("push"));

  render(
    <PageTransitionProvider router={{ push: originalPush }}>
      <RegisterDelayedCover />
    </PageTransitionProvider>,
  );

  await user.click(screen.getByRole("button", { name: "go" }));
  expect(order).toEqual(["cover", "push"]);
});

test("isNavigating is true after navigateTo when cover fn is registered", async () => {
  const user = userEvent.setup();
  const pending = { resolve: null as null | (() => void) };

  function RegisterAsyncCover() {
    const { registerCoverFn, navigateTo } = usePageTransition();
    registerCoverFn((cb) => {
      pending.resolve = cb; // hold, don't call yet
    });
    return (
      <button type="button" onClick={() => navigateTo("/x")}>
        go
      </button>
    );
  }

  render(
    <PageTransitionProvider router={{ push: vi.fn() }}>
      <RegisterAsyncCover />
      <ReadNavigating />
    </PageTransitionProvider>,
  );

  expect(screen.getByTestId("navigating")).toHaveTextContent("false");
  await user.click(screen.getByRole("button", { name: "go" }));
  expect(screen.getByTestId("navigating")).toHaveTextContent("true");

  // Clean up by resolving
  pending.resolve?.();
});

test("usePageTransition throws outside provider", () => {
  const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
  expect(() => render(<Navigate href="/" />)).toThrow(
    "usePageTransition must be used within a PageTransitionProvider",
  );
  spy.mockRestore();
});
