import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransitionOverlay from "./overlay";
import { PageTransitionProvider, usePageTransition } from "./provider";

// GSAP mock: timelines complete synchronously when .play() is called
vi.mock("gsap", () => {
  const makeTimeline = () => {
    let onComplete: (() => void) | null = null;
    const tl = {
      set: vi.fn(() => tl),
      to: vi.fn(() => tl),
      kill: vi.fn(() => tl),
      eventCallback: vi.fn((_event: string, fn: (() => void) | null) => {
        onComplete = fn;
        return tl;
      }),
      play: vi.fn(() => {
        onComplete?.();
        return tl;
      }),
    };
    return tl;
  };

  return {
    default: {
      timeline: vi.fn().mockImplementation(makeTimeline),
      set: vi.fn(),
    },
  };
});

beforeEach(() => {
  Object.defineProperty(window, "innerWidth", { value: 400, configurable: true });
  Object.defineProperty(window, "innerHeight", { value: 200, configurable: true });
});

function NavigateButton({ href }: { href: string }) {
  const { navigateTo } = usePageTransition();
  return (
    <button type="button" onClick={() => navigateTo(href)}>
      navigate
    </button>
  );
}

test("renders a fixed overlay container", async () => {
  const { container } = render(
    <PageTransitionProvider router={{ push: vi.fn() }}>
      <TransitionOverlay pathName="/" />
    </PageTransitionProvider>,
  );

  await waitFor(() => {
    const overlay = container.firstChild as HTMLElement;
    expect(overlay).toBeInTheDocument();
    expect(overlay.style.position).toBe("fixed");
    expect(overlay.style.pointerEvents).toBe("none");
  });
});

test("renders correct tile count based on viewport and tileSize", async () => {
  // 400 / 40 = 10 cols, 200 / 40 = 5 rows → 50 tiles
  const { container } = render(
    <PageTransitionProvider router={{ push: vi.fn() }}>
      <TransitionOverlay pathName="/" tileSize={40} />
    </PageTransitionProvider>,
  );

  await waitFor(() => {
    const overlay = container.firstChild as HTMLElement;
    expect(overlay.children.length).toBe(50);
  });
});

test("recalculates tile count on resize", async () => {
  const { container } = render(
    <PageTransitionProvider router={{ push: vi.fn() }}>
      <TransitionOverlay pathName="/" tileSize={40} />
    </PageTransitionProvider>,
  );

  await waitFor(() => {
    expect((container.firstChild as HTMLElement).children.length).toBe(50);
  });

  act(() => {
    Object.defineProperty(window, "innerWidth", { value: 800, configurable: true });
    window.dispatchEvent(new Event("resize"));
  });

  // 800 / 40 = 20 cols, 200 / 40 = 5 rows → 100 tiles
  await waitFor(() => {
    expect((container.firstChild as HTMLElement).children.length).toBe(100);
  });
});

test("triggers router.push after cover animation completes", async () => {
  const user = userEvent.setup();
  const push = vi.fn();

  render(
    <PageTransitionProvider router={{ push }}>
      <TransitionOverlay pathName="/" tileSize={40} />
      <NavigateButton href="/about" />
    </PageTransitionProvider>,
  );

  await waitFor(() => {
    expect(
      (document.querySelector("[style*='position: fixed']") as HTMLElement).children.length,
    ).toBeGreaterThan(0);
  });

  await user.click(screen.getByRole("button", { name: "navigate" }));
  expect(push).toHaveBeenCalledWith("/about");
});

test("sets isNavigating=false after uncover when pathName changes", async () => {
  const user = userEvent.setup();
  const push = vi.fn();

  function App({ pathName }: { pathName: string }) {
    const { isNavigating } = usePageTransition();
    return (
      <>
        <TransitionOverlay pathName={pathName} tileSize={40} />
        <NavigateButton href="/about" />
        <span data-testid="navigating">{String(isNavigating)}</span>
      </>
    );
  }

  function Root({ pathName }: { pathName: string }) {
    return (
      <PageTransitionProvider router={{ push }}>
        <App pathName={pathName} />
      </PageTransitionProvider>
    );
  }

  const { rerender } = render(<Root pathName="/" />);

  await waitFor(() => {
    expect(screen.getByTestId("navigating")).toHaveTextContent("false");
  });

  await user.click(screen.getByRole("button", { name: "navigate" }));
  expect(screen.getByTestId("navigating")).toHaveTextContent("true");

  // Simulate page load completing (pathName changes)
  rerender(<Root pathName="/about" />);

  await waitFor(() => {
    expect(screen.getByTestId("navigating")).toHaveTextContent("false");
  });
});

test("does not trigger uncover when pathName changes without isNavigating", async () => {
  const push = vi.fn();
  const { container, rerender } = render(
    <PageTransitionProvider router={{ push }}>
      <TransitionOverlay pathName="/" tileSize={40} />
    </PageTransitionProvider>,
  );

  await waitFor(() => {
    expect((container.firstChild as HTMLElement).children.length).toBeGreaterThan(0);
  });

  // Change pathName without navigating (e.g., programmatic route change)
  rerender(
    <PageTransitionProvider router={{ push }}>
      <TransitionOverlay pathName="/other" tileSize={40} />
    </PageTransitionProvider>,
  );

  // Nothing should crash, overlay stays in resting state
  expect(container.firstChild).toBeInTheDocument();
});
