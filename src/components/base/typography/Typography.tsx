import { styled } from "@styled-system/jsx";

// --- Display ---

export const DisplayLg = styled("h1", {
  base: {
    fontSize: "display-lg",
    fontWeight: "700",
    lineHeight: "tight",
    letterSpacing: "tight",
    color: "fg",
    textWrap: "balance",
  },
});

export const DisplayMd = styled("h1", {
  base: {
    fontSize: "display-md",
    fontWeight: "700",
    lineHeight: "tight",
    letterSpacing: "tight",
    color: "fg",
    textWrap: "balance",
  },
});

export const DisplaySm = styled("h2", {
  base: {
    fontSize: "display-sm",
    fontWeight: "700",
    lineHeight: "tight",
    letterSpacing: "tight",
    color: "fg",
    textWrap: "balance",
  },
});

// --- Headings ---

export const H1 = styled("h1", {
  base: {
    fontSize: "3xl",
    fontWeight: "600",
    lineHeight: "snug",
    letterSpacing: "tight",
    color: "fg",
    textWrap: "balance",
  },
});

export const H2 = styled("h2", {
  base: {
    fontSize: "2xl",
    fontWeight: "600",
    lineHeight: "snug",
    letterSpacing: "tight",
    color: "fg",
    textWrap: "balance",
  },
});

export const H3 = styled("h3", {
  base: {
    fontSize: "xl",
    fontWeight: "500",
    lineHeight: "snug",
    letterSpacing: "normal",
    color: "fg",
    textWrap: "balance",
  },
});

export const H4 = styled("h4", {
  base: {
    fontSize: "lg",
    fontWeight: "500",
    lineHeight: "snug",
    letterSpacing: "normal",
    color: "fg",
  },
});

// --- Body text ---

export const Lead = styled("p", {
  base: {
    fontSize: "md",
    fontWeight: "400",
    lineHeight: "base",
    letterSpacing: "normal",
    color: "fgMuted",
  },
});

export const Large = styled("p", {
  base: {
    fontSize: "lg",
    fontWeight: "400",
    lineHeight: "base",
    letterSpacing: "normal",
    color: "fg",
  },
});

export const P = styled("p", {
  base: {
    fontSize: "base",
    fontWeight: "400",
    lineHeight: "base",
    letterSpacing: "normal",
    color: "fg",
  },
});

export const Small = styled("small", {
  base: {
    fontSize: "sm",
    fontWeight: "400",
    lineHeight: "base",
    letterSpacing: "normal",
    color: "fg",
  },
});

export const Muted = styled("p", {
  base: {
    fontSize: "base",
    fontWeight: "400",
    lineHeight: "base",
    letterSpacing: "normal",
    color: "fgMuted",
  },
});

export const Caption = styled("p", {
  base: {
    fontSize: "xs",
    fontWeight: "400",
    lineHeight: "base",
    letterSpacing: "normal",
    color: "fgSubtle",
  },
});

export const Label = styled("span", {
  base: {
    fontSize: "xs",
    fontWeight: "500",
    lineHeight: "base",
    letterSpacing: "normal",
    color: "fgMuted",
  },
});

// --- Block elements ---

export const Blockquote = styled("blockquote", {
  base: {
    borderLeft: "2px solid",
    borderColor: "borderStrong",
    paddingLeft: "4",
    paddingBlock: "1",
    color: "fgMuted",
    fontStyle: "italic",
    fontSize: "base",
    lineHeight: "base",
  },
});

export const ProseTable = styled("table", {
  base: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "sm",
    lineHeight: "base",
  },
});

export const ProseTableHead = styled("thead", {
  base: {},
});

export const ProseTableBody = styled("tbody", {
  base: {},
});

export const ProseTableRow = styled("tr", {
  base: {
    borderBottom: "1px solid",
    borderColor: "border",
    _last: { borderBottom: "none" },
  },
});

export const ProseTableHeader = styled("th", {
  base: {
    textAlign: "left",
    fontFamily: "mono",
    fontSize: "10px",
    letterSpacing: "caps",
    textTransform: "uppercase",
    color: "fgFaint",
    fontWeight: "500",
    paddingBlock: "2",
    paddingInline: "3",
    borderBottom: "1px solid",
    borderColor: "border",
    whiteSpace: "nowrap",
  },
});

export const ProseTableCell = styled("td", {
  base: {
    paddingBlock: "2",
    paddingInline: "3",
    color: "fgMuted",
    verticalAlign: "top",
  },
});

export const List = styled("ul", {
  base: {
    listStyleType: "disc",
    paddingLeft: "5",
    fontSize: "base",
    lineHeight: "base",
    color: "fg",
    display: "flex",
    flexDirection: "column",
    gap: "1",
  },
});

export const OrderedList = styled("ol", {
  base: {
    listStyleType: "decimal",
    paddingLeft: "5",
    fontSize: "base",
    lineHeight: "base",
    color: "fg",
    display: "flex",
    flexDirection: "column",
    gap: "1",
  },
});

export const ListItem = styled("li", {
  base: {
    fontSize: "base",
    lineHeight: "base",
    color: "fg",
    "& > ul, & > ol": { marginTop: "1" },
  },
});

// --- Code ---

export const CodeInline = styled("code", {
  base: {
    fontFamily: "mono",
    fontSize: "sm",
    fontWeight: "400",
    letterSpacing: "mono",
    color: "fgMuted",
    background: "surface2",
    borderRadius: "sm",
    paddingInline: "1",
    paddingBlock: "0.5",
    border: "1px solid",
    borderColor: "border",
  },
  variants: {
    variant: {
      default: {},
      primary: {
        color: "accentte",
      },
    },
  },
  defaultVariants: { variant: "default" },
});

export type { CodeBlockProps } from "./CodeBlock";
export { CodeBlock } from "./CodeBlock";
