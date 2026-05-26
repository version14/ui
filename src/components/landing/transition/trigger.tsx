import { useCallback } from "react";
import { usePageTransition } from "./provider";

export interface TransitionTriggerProps {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export default function TransitionTrigger({
  href,
  onClick,
  children,
  className,
}: TransitionTriggerProps) {
  const { navigateTo } = usePageTransition();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith("mailto:") || href.startsWith("http")) return;
      e.preventDefault();
      navigateTo(href);
      onClick?.(e);
    },
    [href, navigateTo, onClick],
  );

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
