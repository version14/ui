import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "pixelarticons/react/Check";
import { Button } from "../button/Button";
import {
  StepsContent,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "./Steps";

const steps = [
  { label: "Configure", description: "Set environment variables and build settings." },
  { label: "Build", description: "Run the build pipeline and collect artifacts." },
  { label: "Deploy", description: "Push the artifact to production." },
];

const meta: Meta = {
  title: "Base/Steps",
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ width: 520 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    defaultStep: {
      control: { type: "range", min: 0, max: 2, step: 1 },
      description: "Initial active step (0-indexed)",
    },
  },
  args: { defaultStep: 1 },
};
export default meta;

type Story = StoryObj<{ defaultStep: number }>;

export const Default: Story = {
  render: (args) => (
    <StepsRoot count={steps.length} defaultStep={args.defaultStep}>
      <StepsList>
        {steps.map((step, i) => (
          <StepsItem key={step.label} index={i}>
            <StepsTrigger>
              <StepsIndicator>{i + 1}</StepsIndicator>
              <StepsTitle>{step.label}</StepsTitle>
            </StepsTrigger>
            {i < steps.length - 1 && <StepsSeparator />}
          </StepsItem>
        ))}
      </StepsList>
      {steps.map((step, i) => (
        <StepsContent key={step.label} index={i}>
          {step.description}
        </StepsContent>
      ))}
    </StepsRoot>
  ),
};

export const WithNavigation: Story = {
  render: (args) => (
    <StepsRoot count={steps.length} defaultStep={args.defaultStep}>
      <StepsList>
        {steps.map((step, i) => (
          <StepsItem key={step.label} index={i}>
            <StepsTrigger>
              <StepsIndicator>
                <Check width={12} height={12} />
              </StepsIndicator>
              <StepsTitle>{step.label}</StepsTitle>
            </StepsTrigger>
            {i < steps.length - 1 && <StepsSeparator />}
          </StepsItem>
        ))}
      </StepsList>
      {steps.map((step, i) => (
        <StepsContent key={step.label} index={i}>
          {step.description}
        </StepsContent>
      ))}
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <StepsPrevTrigger asChild>
          <Button variant="ghost" size="sm">
            Back
          </Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button variant="primary" size="sm">
            Next
          </Button>
        </StepsNextTrigger>
      </div>
    </StepsRoot>
  ),
};
