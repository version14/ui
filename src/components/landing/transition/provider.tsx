import { createContext, type ReactNode, useCallback, useContext, useRef, useState } from "react";

interface Router {
  push: (href: string) => void;
}

export interface PageTransitionValue {
  navigateTo: (href: string) => void;
  isNavigating: boolean;
  setIsNavigating: (v: boolean) => void;
  isCovered: boolean;
  setIsCovered: (v: boolean) => void;
  registerCoverFn: (fn: (onComplete: () => void) => void) => void;
}

export const PageTransitionContext = createContext<PageTransitionValue | null>(null);

export function PageTransitionProvider(props: { children: ReactNode; router: Router }) {
  const { router } = props;
  const coverFnRef = useRef<((onComplete: () => void) => void) | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isCovered, setIsCovered] = useState(false);

  const registerCoverFn = useCallback((fn: (onComplete: () => void) => void) => {
    coverFnRef.current = fn;
  }, []);

  const navigateTo = useCallback(
    (href: string) => {
      if (!coverFnRef.current) {
        router.push(href);
        return;
      }
      setIsNavigating(true);
      coverFnRef.current(() => {
        router.push(href);
      });
    },
    [router],
  );

  return (
    <PageTransitionContext.Provider
      value={{
        navigateTo,
        isNavigating,
        setIsNavigating,
        isCovered,
        setIsCovered,
        registerCoverFn,
      }}
    >
      {props.children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition(): PageTransitionValue {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used within a PageTransitionProvider");
  return ctx;
}
