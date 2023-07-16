import { cva } from "class-variance-authority";

import { SiteHeaderNew, SiteFooter } from "~/components";
import { cn } from "~/utils";

import type { VariantProps } from "class-variance-authority";

export const layoutVariants = cva("", {
  variants: {
    // for the whole layout
    isSpaced: {
      true: "space-y-10",
      false: "",
    },
    // for the main content
    variant: {
      full: "",
      default: "contain",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof layoutVariants> {
  pageHeader?: React.ReactNode;
  noThemeToggle?: boolean;
}

export function Layout({
  variant = "default",
  isSpaced,
  className,
  pageHeader,
  noThemeToggle = false,
  children,
}: Props) {
  return (
    <div className={cn("flex min-h-screen flex-col")}>
      <SiteHeaderNew />

      {/* Custom header */}
      {pageHeader}

      <main
        className={cn("grow", layoutVariants({ variant, isSpaced, className }))}
      >
        {children}
      </main>

      <SiteFooter noThemeToggle={noThemeToggle} />
    </div>
  );
}
