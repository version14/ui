import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "./Table";

const meta: Meta = {
  title: "Base/Table",
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj;

const builds = [
  { id: "#1428", branch: "main", commit: "a3f91bc", status: "deployed", time: "2m ago" },
  { id: "#1427", branch: "feat/auth", commit: "d72c44e", status: "failed", time: "18m ago" },
  { id: "#1426", branch: "fix/csrf", commit: "91bb203", status: "pending", time: "1h ago" },
  { id: "#1425", branch: "main", commit: "5e1a90f", status: "deployed", time: "3h ago" },
];

const intentMap = { deployed: "success", failed: "danger", pending: "warning" } as const;

export const Default: Story = {
  render: () => (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Build</TableHeader>
            <TableHeader>Branch</TableHeader>
            <TableHeader>Commit</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader />
          </TableRow>
        </TableHead>
        <TableBody>
          {builds.map((b) => (
            <TableRow key={b.id}>
              <TableCell style={{ fontFamily: "var(--fonts-mono)", color: "var(--colors-fg)" }}>
                {b.id}
              </TableCell>
              <TableCell>{b.branch}</TableCell>
              <TableCell style={{ fontFamily: "var(--fonts-mono)" }}>{b.commit}</TableCell>
              <TableCell>
                <Badge intent={intentMap[b.status as keyof typeof intentMap]}>{b.status}</Badge>
              </TableCell>
              <TableCell>{b.time}</TableCell>
              <TableCell style={{ textAlign: "right" }}>
                <Button variant="ghost" size="sm">
                  View logs
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  ),
};

export const Minimal: Story = {
  render: () => (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Build</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Time</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {builds.map((b) => (
            <TableRow key={b.id}>
              <TableCell style={{ fontFamily: "var(--fonts-mono)", color: "var(--colors-fg)" }}>
                {b.id}
              </TableCell>
              <TableCell>
                <Badge intent={intentMap[b.status as keyof typeof intentMap]}>{b.status}</Badge>
              </TableCell>
              <TableCell>{b.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  ),
};
