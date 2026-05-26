import { act, render, waitFor } from "@testing-library/react";
import TransitionLoader from "./loader";
import type { PageTransitionValue } from "./provider";
import { PageTransitionContext } from "./provider";

vi.mock("gsap", () => {
  const makeTimeline = () => {
    const tl = {
      set: vi.fn(() => tl),
      to: vi.fn(() => tl),
      kill: vi.fn(() => tl),
      eventCallback: vi.fn(() => tl),
      play: vi.fn(() => tl),
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

test("renders a centered fixed container", async () => {
  const { container } = wrap(<TransitionLoader tileSize={40} />);

  await waitFor(() => {
    const loader = container.firstChild as HTMLElement;
    expect(loader).toBeInTheDocument();
    expect(loader.style.position).toBe("fixed");
    expect(loader.style.top).toBe("50%");
    expect(loader.style.left).toBe("50%");
  });
});

test("renders a 7×7 grid of tiles", async () => {
  const { container } = wrap(<TransitionLoader tileSize={40} />);

  await waitFor(() => {
    expect((container.firstChild as HTMLElement).children.length).toBe(49);
  });
});

test("pulse and cycle both use a 7×7 grid", async () => {
  const { container: pulseContainer } = wrap(
    <TransitionLoader loaderVariant="pulse" tileSize={40} />,
  );
  const { container: cycleContainer } = wrap(
    <TransitionLoader loaderVariant="cycle" tileSize={40} />,
  );

  await waitFor(() => {
    expect((pulseContainer.firstChild as HTMLElement).children.length).toBe(49);
    expect((cycleContainer.firstChild as HTMLElement).children.length).toBe(49);
  });
});

test("is hidden when isCovered is false", async () => {
  const { container } = wrap(<TransitionLoader tileSize={40} />);

  await waitFor(() => {
    expect((container.firstChild as HTMLElement).style.opacity).toBe("0");
  });
});

test("becomes visible after 300ms delay when isCovered is true", async () => {
  vi.useFakeTimers();

  const { container } = wrap(<TransitionLoader tileSize={40} />, makeCtx({ isCovered: true }));

  // Flush initial effects (setReady, start timer) — still hidden
  await act(async () => {});
  expect((container.firstChild as HTMLElement).style.opacity).toBe("0");

  // Fire the 300ms delay
  await act(async () => {
    vi.advanceTimersByTime(300);
  });

  expect((container.firstChild as HTMLElement).style.opacity).toBe("1");

  vi.useRealTimers();
});
