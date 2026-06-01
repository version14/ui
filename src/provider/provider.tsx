import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface Version14UiProviderProps {
  children: ReactNode;
  theme?: Theme;
  onThemeChange?: (theme: Theme) => void;
}

export function Version14UiProvider({
  children,
  theme: themeProp,
  onThemeChange,
}: Version14UiProviderProps) {
  const [internalTheme, setInternalTheme] = useState<Theme>(themeProp ?? "dark");
  const isControlled = themeProp !== undefined;
  const theme = isControlled ? themeProp : internalTheme;

  const setTheme = useCallback(
    (next: Theme) => {
      if (!isControlled) setInternalTheme(next);
      onThemeChange?.(next);
    },
    [isControlled, onThemeChange],
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div ref={ref} data-theme={theme} style={{ display: "contents" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within Version14UiProvider");
  return ctx;
}
