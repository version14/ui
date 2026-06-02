"use client";

import { css, cx } from "@styled-system/css";
import { useEffect, useState } from "react";
import { v14DarkTheme, v14LightTheme } from "./v14-shiki-theme";

type ThemedToken = {
  content: string;
  color?: string;
};

type HighlightedLine = ThemedToken[];

let _highlighterPromise: Promise<import("shiki").Highlighter> | null = null;

function getHighlighter() {
  if (!_highlighterPromise) {
    _highlighterPromise = import("shiki").then(({ createHighlighter }) =>
      createHighlighter({
        themes: [v14DarkTheme, v14LightTheme],
        langs: [
          "typescript",
          "javascript",
          "tsx",
          "jsx",
          "bash",
          "shell",
          "json",
          "css",
          "html",
          "markdown",
          "python",
          "rust",
          "go",
          "yaml",
          "diff",
          "sql",
        ],
      }),
    );
  }
  return _highlighterPromise;
}

function getActiveTheme(): "v14-dark" | "v14-light" {
  if (typeof document === "undefined") return "v14-dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "v14-light" : "v14-dark";
}

const preStyle = css({
  fontFamily: "mono",
  fontSize: "sm",
  letterSpacing: "mono",
  lineHeight: "base",
  borderRadius: "md",
  border: "1px solid",
  borderColor: "border",
  borderBlockColor: "border",
  overflowX: "auto",
  whiteSpace: "pre",
  background: "bgSunken",
  color: "fg",
});

const headerStyle = css({
  display: "flex",
  alignItems: "center",
  paddingInline: "4",
  paddingBlock: "2",
  borderBottom: "1px solid",
  borderColor: "border",
  borderBlockColor: "border",
  fontFamily: "mono",
  fontSize: "xs",
  color: "fgSubtle",
  letterSpacing: "mono",
  background: "surface",
  borderTopLeftRadius: "md",
  borderTopRightRadius: "md",
});

const contentStyle = css({
  padding: "4",
  overflowX: "auto",
});

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string;
  title?: string;
  children: string;
}

export function CodeBlock({
  language,
  title,
  children,
  className,
  ...props
}: CodeBlockProps): React.JSX.Element {
  const [lines, setLines] = useState<HighlightedLine[] | null>(null);

  useEffect(() => {
    if (!language) return;

    const code = children?.trim() ?? "";

    function highlight() {
      const theme = getActiveTheme();
      getHighlighter()
        .then((hl) => {
          const result = hl.codeToTokens(code, {
            lang: language as import("shiki").BundledLanguage,
            theme,
          });
          setLines(result.tokens as HighlightedLine[]);
        })
        .catch(() => {
          // unknown lang or shiki unavailable — render plain
        });
    }

    highlight();

    // Re-highlight when data-theme changes
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-theme") {
          highlight();
          break;
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, [children, language]);

  const showHeader = title ?? language;

  return (
    <pre className={cx(preStyle, className)} {...props}>
      {showHeader && (
        <div className={headerStyle}>
          <span>{title ?? language}</span>
        </div>
      )}
      <div className={contentStyle}>
        {lines ? (
          <code>
            {lines.map((line, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: line index is stable for a given code string
              <span key={i} style={{ display: "block" }}>
                {line.length === 0
                  ? "\n"
                  : line.map((token, j) => (
                      <span
                        // biome-ignore lint/suspicious/noArrayIndexKey: token index is stable for a given code string
                        key={j}
                        style={token.color ? { color: token.color } : undefined}
                      >
                        {token.content}
                      </span>
                    ))}
              </span>
            ))}
          </code>
        ) : (
          <code>{children?.trim()}</code>
        )}
      </div>
    </pre>
  );
}

CodeBlock.displayName = "CodeBlock";
