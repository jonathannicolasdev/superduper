import { cn } from "~/utils";

export function SpanText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn(className)} {...props}>
      {children}
    </span>
  );
}

export { SpanText as Text };

export function TextParagraph({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TextBlockquote({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function TextPre({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className={cn(className)} {...props}>
      {children}
    </pre>
  );
}

export function TextCode({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code className={cn("prose-code-styles", className)} {...props}>
      {children}
    </code>
  );
}

export function TextLead({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xl text-slate-700 dark:text-slate-400", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TextLarge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    >
      {children}
    </small>
  );
}

export function SubtleText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
      {...props}
    >
      {children}
    </p>
  );
}
