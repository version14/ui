import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

test("renders with correct text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
});

test("is keyboard focusable", async () => {
  const user = userEvent.setup();
  render(<Button>Click me</Button>);
  await user.tab();
  expect(screen.getByRole("button")).toHaveFocus();
});

test("fires onClick handler", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Click me</Button>);
  await user.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("renders as disabled", () => {
  render(<Button disabled>Click me</Button>);
  expect(screen.getByRole("button")).toBeDisabled();
});

test("does not fire onClick when disabled", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button disabled onClick={onClick}>Click me</Button>);
  await user.click(screen.getByRole("button"));
  expect(onClick).not.toHaveBeenCalled();
});

test("applies custom className", () => {
  render(<Button className="custom-class">Click me</Button>);
  expect(screen.getByRole("button")).toHaveClass("custom-class");
});
