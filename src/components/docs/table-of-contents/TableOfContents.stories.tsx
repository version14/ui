import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRef } from "react";
import { TableOfContents } from "./TableOfContents";

const items = [
  { id: "variants", label: "Variants", level: 2 as const },
  { id: "sizes", label: "Sizes", level: 2 as const },
  { id: "states", label: "States & icons", level: 2 as const },
  { id: "group", label: "Button group", level: 2 as const },
  { id: "props", label: "Reference", level: 2 as const },
  { id: "usage", label: "Usage", level: 2 as const },
  { id: "a11y", label: "Accessibility", level: 2 as const },
];

const meta: Meta = {
  title: "Docs/TableOfContents",
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div style={{ width: 220 }}>
      <TableOfContents items={items} />
    </div>
  ),
};

export const WithSubItems: Story = {
  render: () => (
    <div style={{ width: 220 }}>
      <TableOfContents
        items={[
          { id: "overview", label: "Overview", level: 2 },
          { id: "tokens", label: "Tokens", level: 2 },
          { id: "colors", label: "Colors", level: 3 },
          { id: "typography", label: "Typography", level: 3 },
          { id: "spacing", label: "Spacing", level: 3 },
          { id: "usage", label: "Usage", level: 2 },
        ]}
      />
    </div>
  ),
};

const scrollItems = [
  { id: "s-intro", label: "Introduction", level: 2 as const },
  { id: "s-install", label: "Installation", level: 2 as const },
  { id: "s-usage", label: "Usage", level: 2 as const },
  { id: "s-api", label: "API reference", level: 2 as const },
  { id: "s-examples", label: "Examples", level: 2 as const },
];

const sectionContent: Record<string, string> = {
  "s-intro":
    "This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.",
  "s-install":
    "Install via your package manager of choice. Run `pnpm add @version14/ui` in your project root. Then import the global CSS in your entry file and wrap your app with Version14UiProvider to enable theming. No extra configuration is required for Vite or Next.js projects.",
  "s-usage":
    "Import any component by name from the package root. Each component accepts standard HTML props plus design-system-specific variants. Compose primitives freely — the design system does not impose any layout or page-level structure. All interactive components are keyboard-accessible out of the box.",
  "s-api":
    "Every component is typed with TypeScript and ships with full IntelliSense support. Variant props use discriminated unions so invalid combinations are caught at compile time. Slot-based components expose individual parts so you can override styles at any granularity without forking the component.",
  "s-examples":
    "See the Storybook for a full catalogue of stories covering every variant, state, and composition pattern. Each story is interactive and shows the component in both dark and light mode. Copy any story as a starting point for your own implementation.",
};

export const Scrollable: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const containerRef = useRef<HTMLDivElement>(null);
    return (
      <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ width: 220, flexShrink: 0 }}>
          <TableOfContents items={scrollItems} offsetTop={0} scrollContainer={containerRef} />
        </div>
        <div
          ref={containerRef}
          style={{
            flex: 1,
            height: 420,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {scrollItems.map((item) => (
            <section
              key={item.id}
              id={item.id}
              style={{
                minHeight: 260,
                padding: "32px 0",
                borderBottom: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: "inherit" }}>
                {item.label}
              </h2>
              <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.6, maxWidth: 480 }}>
                {sectionContent[item.id]}
              </p>
            </section>
          ))}
        </div>
      </div>
    );
  },
};

const scrollItemsNested = [
  { id: "n-overview", label: "Overview", level: 2 as const },
  { id: "n-install", label: "Installation", level: 2 as const },
  { id: "n-npm", label: "npm / pnpm", level: 3 as const },
  { id: "n-cdn", label: "CDN", level: 3 as const },
  { id: "n-theming", label: "Theming", level: 2 as const },
  { id: "n-colors", label: "Color tokens", level: 3 as const },
  { id: "n-typography", label: "Typography", level: 3 as const },
  { id: "n-components", label: "Components", level: 2 as const },
];

const nestedContent: Record<string, { title: string; body: string; level: 2 | 3 }> = {
  "n-overview": {
    level: 2,
    title: "Overview",
    body: "A lightweight, accessible React component library built on Ark UI and Panda CSS. Ships pre-styled, fully typed, and tree-shakeable. Designed for product teams who want a polished baseline without the constraints of a monolithic UI framework.",
  },
  "n-install": {
    level: 2,
    title: "Installation",
    body: "Add the package to your project and import the global stylesheet once in your app entry point. The library has peer dependencies on React 18+ and does not bundle its own copy of React.",
  },
  "n-npm": {
    level: 3,
    title: "npm / pnpm",
    body: "Run `pnpm add @version14/ui` This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.or `npm install @version14/ui`. Then add `import '@version14/ui/styles'` to your root file. For Next.js, add it inside `app/layout.tsx` or `pages/_app.tsx`.",
  },
  "n-cdn": {
    level: 3,
    title: "CDN",
    body: "A pre-built UMD bundle is This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.available via jsDelivr and unpkg. Include the CSS link tag before the script tag. Note that the CDN build does not support tree-shaking — prefer the npm package for production.",
  },
  "n-theming": {
    level: 2,
    title: "Theming",
    body: "All design decisions live This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.in a single preset file exported as `v14Preset`. Pass it to your Panda CSS config and extend any token to match your brand. The provider component applies the active theme via a `data-theme` attribute.",
  },
  "n-colors": {
    level: 3,
    title: "Color tokens",
    body: "The palette uses OKLCH forThis component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. perceptually uniform color. Semantic tokens like `fg`, `surface`, and `accent` adapt automatically between dark and light mode. Override them by extending `semanticTokens.colors` in your Panda config.",
  },
  "n-typography": {
    level: 3,
    title: "Typography",
    body: "Geist and Geist Mono are lThis component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.oaded from Google Fonts by default. Font sizes follow a modular scale from `xs` (11px) to `5xl` (72px). Set `fontFamily.sans` and `fontFamily.mono` to switch to your own typefaces.",
  },
  "n-components": {
    level: 2,
    title: "Components",
    body: "Every primitive is exported This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes. This component library is built on top of Ark UI and Panda CSS. It provides a set of accessible, composable, and styled primitives ready to drop into any React application. The goal is a lean but complete set of building blocks that feel consistent and polished across light and dark themes.individually so bundlers can tree-shake unused parts. Compound components expose each slot as a named export — import only what you need. Styling hooks are available for headless usage when the built-in styles don't fit.",
  },
};

export const ScrollableWithSubItems: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const containerRef = useRef<HTMLDivElement>(null);
    return (
      <div style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
        <div style={{ width: 220, flexShrink: 0 }}>
          <TableOfContents items={scrollItemsNested} offsetTop={0} scrollContainer={containerRef} />
        </div>
        <div
          ref={containerRef}
          style={{
            flex: 1,
            height: 420,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {scrollItemsNested.map((item) => {
            const c = nestedContent[item.id];
            const isH3 = c.level === 3;
            return (
              <section
                key={item.id}
                id={item.id}
                style={{
                  padding: isH3 ? "20px 0 20px 20px" : "32px 0",
                  borderBottom: "1px solid oklch(1 0 0 / 0.08)",
                  borderLeft: isH3 ? "2px solid oklch(1 0 0 / 0.06)" : "none",
                  marginLeft: isH3 ? 8 : 0,
                }}
              >
                {isH3 ? (
                  <h3
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 10,
                      color: "inherit",
                      opacity: 0.85,
                    }}
                  >
                    {c.title}
                  </h3>
                ) : (
                  <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: "inherit" }}>
                    {c.title}
                  </h2>
                )}
                <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.6, maxWidth: 480 }}>
                  {c.body}
                </p>
              </section>
            );
          })}
        </div>
      </div>
    );
  },
};
