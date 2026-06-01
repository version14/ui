import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronLeft } from "pixelarticons/react/ChevronLeft";
import { ChevronRight } from "pixelarticons/react/ChevronRight";
import {
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./Pagination";

const meta: Meta = {
  title: "Base/Pagination",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

function PaginationDemo({
  count,
  pageSize,
  defaultPage,
}: {
  count: number;
  pageSize: number;
  defaultPage: number;
}) {
  return (
    <PaginationRoot count={count} pageSize={pageSize} defaultPage={defaultPage}>
      <PaginationPrevTrigger>
        <ChevronLeft width={14} height={14} />
      </PaginationPrevTrigger>
      <PaginationContext>
        {({ pages }) => (
          <>
            {pages.map((page, i) =>
              page.type === "page" ? (
                <PaginationItem key={page.value} value={page.value}>
                  {page.value}
                </PaginationItem>
              ) : (
                // biome-ignore lint/suspicious/noArrayIndexKey: ellipsis items have no stable id
                <PaginationEllipsis key={`ellipsis-${i}`}>…</PaginationEllipsis>
              ),
            )}
          </>
        )}
      </PaginationContext>
      <PaginationNextTrigger>
        <ChevronRight width={14} height={14} />
      </PaginationNextTrigger>
    </PaginationRoot>
  );
}

export const Default: Story = {
  render: () => <PaginationDemo count={50} pageSize={10} defaultPage={3} />,
};

export const FirstPage: Story = {
  render: () => <PaginationDemo count={50} pageSize={10} defaultPage={1} />,
};

export const LastPage: Story = {
  render: () => <PaginationDemo count={50} pageSize={10} defaultPage={5} />,
};

export const FewPages: Story = {
  render: () => <PaginationDemo count={30} pageSize={10} defaultPage={2} />,
};

export const ManyPages: Story = {
  render: () => <PaginationDemo count={200} pageSize={10} defaultPage={8} />,
};
