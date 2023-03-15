import { cva } from "class-variance-authority";

import { configSite } from "~/configs";
import { cn } from "~/utils";

import type { VariantProps } from "class-variance-authority";

export const logoVariants = cva("flex items-center font-semibold font-brand", {
  variants: {
    size: {
      xs: "gap-1 text-xs sm:text-sm",
      sm: "gap-1 text-sm sm:text-base",
      default: "gap-1 sm:gap-2 text-lg sm:text-2xl",
      lg: "gap-2 sm:gap-3 text-xl sm:text-3xl",
    },
    accent: {
      default: "text-black dark:text-white",
      brand: "text-brand-600",
      muted: "grayscale text-surface-600 dark:text-surface-100",
    },
  },
  defaultVariants: {
    size: "default",
    accent: "default",
  },
});

export const logoImageVariants = cva("", {
  variants: {
    size: {
      xs: "size-xs",
      sm: "size-sm",
      default: "size-md",
      lg: "size-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface Props
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof logoVariants> {}

export function Logo({
  size = "default",
  accent = "default",
  className,
  ...props
}: Props) {
  return (
    <div className={cn(logoVariants({ size, accent, className }))} {...props}>
      <span
        data-id="logo-image"
        className={cn(logoVariants({ size, accent, className }))}
      >
        <img
          src="/favicons/apple-touch-icon.png"
          alt="Logo"
          width={20}
          height={20}
          className={cn(logoImageVariants({ size }))}
        />
      </span>
      <span
        data-id="logo-text"
        className={cn(
          "inline-block",
          logoVariants({ size, accent, className })
        )}
      >
        {configSite?.name}
      </span>
    </div>
  );
}
