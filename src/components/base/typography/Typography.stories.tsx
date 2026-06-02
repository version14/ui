import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Blockquote,
  Caption,
  CodeBlock,
  CodeInline,
  DisplayLg,
  DisplayMd,
  DisplaySm,
  H1,
  H2,
  H3,
  H4,
  Label,
  Large,
  Lead,
  List,
  ListItem,
  Muted,
  OrderedList,
  P,
  ProseTable,
  ProseTableBody,
  ProseTableCell,
  ProseTableHead,
  ProseTableHeader,
  ProseTableRow,
  Small,
} from "./Typography";

const meta: Meta = {
  title: "Base/Typography",
  parameters: { layout: "padded" },
};
export default meta;

// --- Scale overview ---

export const Scale: StoryObj = {
  name: "All / Scale",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 720 }}>
      <DisplayLg>Display LG — 80px</DisplayLg>
      <DisplayMd>Display MD — 56px</DisplayMd>
      <DisplaySm>Display SM — 40px</DisplaySm>
      <H1>Heading 1 — 37px</H1>
      <H2>Heading 2 — 29px</H2>
      <H3>Heading 3 — 23px</H3>
      <H4>Heading 4 — 19px</H4>
      <Lead>Lead — 16px. Introductory text, slightly larger and muted.</Lead>
      <Large>Large — 19px. Larger body text variant.</Large>
      <P>P — 14px. Default paragraph text used across the product.</P>
      <Small>Small — 12.5px. Supporting detail.</Small>
      <Muted>Muted — 14px, muted color. Secondary information.</Muted>
      <Caption>Caption — 11px. Timestamps, metadata, fine print.</Caption>
      <Label>Label — 11px medium. UI labels and tags.</Label>
    </div>
  ),
};

// --- Display ---

export const DisplayStory: StoryObj = {
  name: "Display",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
      <DisplayLg>Ship faster than ever.</DisplayLg>
      <DisplayMd>Ship faster than ever.</DisplayMd>
      <DisplaySm>Ship faster than ever.</DisplaySm>
    </div>
  ),
};

// --- Headings ---

export const HeadingsStory: StoryObj = {
  name: "Headings / H1–H4",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 720 }}>
      <H1>The platform for modern teams</H1>
      <H2>Installation and configuration</H2>
      <H3>Setting up your environment</H3>
      <H4>Environment variables</H4>
    </div>
  ),
};

export const H1Story: StoryObj = {
  name: "Headings / H1",
  render: () => <H1>The platform for modern teams</H1>,
};

export const H2Story: StoryObj = {
  name: "Headings / H2",
  render: () => <H2>Installation and configuration</H2>,
};

export const H3Story: StoryObj = {
  name: "Headings / H3",
  render: () => <H3>Setting up your environment</H3>,
};

export const H4Story: StoryObj = {
  name: "Headings / H4",
  render: () => <H4>Environment variables</H4>,
};

// --- Body text ---

export const LeadStory: StoryObj = {
  name: "Body / Lead",
  render: () => (
    <Lead style={{ maxWidth: 560 }}>
      An open platform for modern teams to build, ship, and scale products — without the operational
      overhead.
    </Lead>
  ),
};

export const LargeStory: StoryObj = {
  name: "Body / Large",
  render: () => (
    <Large style={{ maxWidth: 560 }}>
      Connect your tools, automate your workflows, and track everything in one place.
    </Large>
  ),
};

export const PStory: StoryObj = {
  name: "Body / P",
  render: () => (
    <P style={{ maxWidth: 560 }}>
      This is a standard paragraph. It uses the base font size of 14px with a comfortable line
      height of 1.55, optimised for readability across long-form content and product interfaces.
    </P>
  ),
};

export const SmallStory: StoryObj = {
  name: "Body / Small",
  render: () => <Small>Last updated 2 minutes ago · 3 contributors</Small>,
};

export const MutedStory: StoryObj = {
  name: "Body / Muted",
  render: () => (
    <Muted style={{ maxWidth: 560 }}>
      This section is optional. You can skip it if you've already completed the setup in the
      previous step.
    </Muted>
  ),
};

export const CaptionStory: StoryObj = {
  name: "Body / Caption",
  render: () => <Caption>Figure 1 — Architecture overview of the ingestion pipeline.</Caption>,
};

export const LabelStory: StoryObj = {
  name: "Body / Label",
  render: () => <Label>Section label</Label>,
};

// --- Blockquote ---

export const BlockquoteStory: StoryObj = {
  name: "Blockquote",
  render: () => (
    <Blockquote style={{ maxWidth: 560 }}>
      "The best way to predict the future is to invent it." — Alan Kay
    </Blockquote>
  ),
};

// --- Table ---

export const TableStory: StoryObj = {
  name: "Table",
  render: () => (
    <ProseTable style={{ maxWidth: 640 }}>
      <ProseTableHead>
        <ProseTableRow>
          <ProseTableHeader>Component</ProseTableHeader>
          <ProseTableHeader>Tag</ProseTableHeader>
          <ProseTableHeader>Size</ProseTableHeader>
          <ProseTableHeader>Weight</ProseTableHeader>
        </ProseTableRow>
      </ProseTableHead>
      <ProseTableBody>
        <ProseTableRow>
          <ProseTableCell>H1</ProseTableCell>
          <ProseTableCell>h1</ProseTableCell>
          <ProseTableCell>37px</ProseTableCell>
          <ProseTableCell>600</ProseTableCell>
        </ProseTableRow>
        <ProseTableRow>
          <ProseTableCell>H2</ProseTableCell>
          <ProseTableCell>h2</ProseTableCell>
          <ProseTableCell>29px</ProseTableCell>
          <ProseTableCell>600</ProseTableCell>
        </ProseTableRow>
        <ProseTableRow>
          <ProseTableCell>Lead</ProseTableCell>
          <ProseTableCell>p</ProseTableCell>
          <ProseTableCell>16px</ProseTableCell>
          <ProseTableCell>400</ProseTableCell>
        </ProseTableRow>
        <ProseTableRow>
          <ProseTableCell>P</ProseTableCell>
          <ProseTableCell>p</ProseTableCell>
          <ProseTableCell>14px</ProseTableCell>
          <ProseTableCell>400</ProseTableCell>
        </ProseTableRow>
      </ProseTableBody>
    </ProseTable>
  ),
};

// --- Lists ---

export const UnorderedListStory: StoryObj = {
  name: "List / Unordered",
  render: () => (
    <List style={{ maxWidth: 400 }}>
      <ListItem>Connect your repository</ListItem>
      <ListItem>Configure environment variables</ListItem>
      <ListItem>
        Deploy to production
        <List>
          <ListItem>Run preflight checks</ListItem>
          <ListItem>Preview your changes</ListItem>
        </List>
      </ListItem>
      <ListItem>Monitor your deployment</ListItem>
    </List>
  ),
};

export const OrderedListStory: StoryObj = {
  name: "List / Ordered",
  render: () => (
    <OrderedList style={{ maxWidth: 400 }}>
      <ListItem>Install the CLI with your package manager</ListItem>
      <ListItem>Run the init command to scaffold the project</ListItem>
      <ListItem>Configure your environment variables</ListItem>
      <ListItem>Start the development server</ListItem>
    </OrderedList>
  ),
};

// --- Code ---

export const CodeInlineStory: StoryObj = {
  name: "Code / Inline",
  render: () => (
    <P>
      Run <CodeInline>pnpm install</CodeInline> to install dependencies, then{" "}
      <CodeInline>pnpm dev</CodeInline> to start the development server on{" "}
      <CodeInline>localhost:3000</CodeInline>.
    </P>
  ),
};

export const CodeInlinePrimary: StoryObj = {
  name: "Code / Inline primary",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 560 }}>
      <P>
        Default: run <CodeInline>pnpm dev</CodeInline> to start.
      </P>
      <P>
        Primary: the <CodeInline variant="primary">v14Preset</CodeInline> is required in{" "}
        <CodeInline variant="primary">panda.config.ts</CodeInline>.
      </P>
    </div>
  ),
};

export const CodeBlockStory: StoryObj = {
  name: "Code / Block (plain)",
  render: () => (
    <CodeBlock style={{ maxWidth: 560 }}>
      {`import { defineConfig } from "@pandacss/dev"
import { v14Preset } from "@version14/ui/preset"

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [v14Preset],
  outdir: "src/styled-system",
})`}
    </CodeBlock>
  ),
};

export const CodeBlockTypeScript: StoryObj = {
  name: "Code / Block TypeScript",
  render: () => (
    <CodeBlock language="typescript" title="utils/greet.ts" style={{ maxWidth: 600 }}>
      {`type Greeting = {
  name: string
  formal?: boolean
}

export function greet({ name, formal = false }: Greeting): string {
  return formal ? \`Good day, \${name}.\` : \`Hey, \${name}!\`
}

const message = greet({ name: "Mathieu", formal: true })
console.log(message)`}
    </CodeBlock>
  ),
};

export const CodeBlockTSX: StoryObj = {
  name: "Code / Block TSX",
  render: () => (
    <CodeBlock language="tsx" title="components/Button.tsx" style={{ maxWidth: 600 }}>
      {`import { type ButtonHTMLAttributes } from "react"
import { cva, cx } from "@styled-system/css"

const button = cva({
  base: { display: "inline-flex", alignItems: "center", gap: "2" },
  variants: {
    variant: {
      primary: { background: "accent", color: "accentInk" },
      ghost:   { background: "transparent", color: "fgMuted" },
    },
  },
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost"
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={cx(button({ variant }), className)} {...props} />
}`}
    </CodeBlock>
  ),
};

export const CodeBlockBash: StoryObj = {
  name: "Code / Block Bash",
  render: () => (
    <CodeBlock language="bash" title="terminal" style={{ maxWidth: 560 }}>
      {`# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Build for production
pnpm build && pnpm start`}
    </CodeBlock>
  ),
};

export const CodeBlockJSON: StoryObj = {
  name: "Code / Block JSON",
  render: () => (
    <CodeBlock language="json" title="package.json" style={{ maxWidth: 480 }}>
      {`{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "@version14/ui": "^0.5.0",
    "@pandacss/dev": "^1.0.0"
  }
}`}
    </CodeBlock>
  ),
};

export const CodeBlockCSS: StoryObj = {
  name: "Code / Block CSS",
  render: () => (
    <CodeBlock language="css" title="globals.css" style={{ maxWidth: 480 }}>
      {`:root {
  --radius: 4px;
  --font-sans: "Geist", system-ui, sans-serif;
}

.card {
  background: var(--colors-surface);
  border: 1px solid var(--colors-border);
  border-radius: var(--radius);
  padding: 1rem;
}`}
    </CodeBlock>
  ),
};

export const CodeBlockPython: StoryObj = {
  name: "Code / Block Python",
  render: () => (
    <CodeBlock language="python" title="main.py" style={{ maxWidth: 480 }}>
      {`from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    name: str
    email: str
    role: Optional[str] = None

def greet(user: User) -> str:
    return f"Hello, {user.name}!"

admin = User(name="Mathieu", email="mathieu@example.com", role="admin")
print(greet(admin))`}
    </CodeBlock>
  ),
};

// --- Docs sample ---

export const DocsSample: StoryObj = {
  name: "All / Docs sample",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 680 }}>
      <H1>Getting started</H1>
      <Lead>
        This library provides accessible, themeable components built on Ark UI and PandaCSS.
      </Lead>
      <H2>Installation</H2>
      <P>
        Install the package using your preferred package manager. Make sure you have{" "}
        <CodeInline>@pandacss/dev</CodeInline> configured in your project first.
      </P>
      <CodeBlock language="bash">{"pnpm add @version14/ui"}</CodeBlock>
      <H3>Configuration</H3>
      <P>
        Import the preset in your <CodeInline>panda.config.ts</CodeInline> and add it to the{" "}
        <CodeInline>presets</CodeInline> array.
      </P>
      <Blockquote>
        The preset is optional — you can use only the components and write your own tokens if
        preferred.
      </Blockquote>
      <H4>Required peer dependencies</H4>
      <List>
        <ListItem>
          <CodeInline>@ark-ui/react</CodeInline> ≥ 5
        </ListItem>
        <ListItem>
          <CodeInline>react</CodeInline> ≥ 19
        </ListItem>
      </List>
      <Caption>Last updated June 2, 2026 · 2 contributors</Caption>
    </div>
  ),
};

// --- Polymorphic `as` ---

export const PolymorphicAs: StoryObj = {
  name: "All / Polymorphic as",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 560 }}>
      <H1 as="h2">Visually H1, semantically h2</H1>
      <H2 as="p">Visually H2, rendered as a paragraph</H2>
      <DisplaySm as="h1">Display SM on an h1 tag</DisplaySm>
    </div>
  ),
};
