import { ThemeToggleDropdownMenu } from "~/components";
import { configMeta } from "~/configs";
import { getCurrentYear } from "~/utils";

interface Props {
  noThemeToggle?: boolean;
}

export function SiteFooter({ noThemeToggle }: Props) {
  return (
    <footer className="card contain mt-60 flex flex-wrap items-end gap-4 border-t border-surface-200 py-4 dark:border-surface-700 sm:justify-between">
      <div className="space-y-2">
        <p className="opacity-80">
          <span>Copyright &copy; </span>
          <span>{getCurrentYear()} </span>
          <span>{configMeta?.author.company.name}</span>
        </p>
      </div>

      <div className="flex w-full justify-end sm:w-min">
        {!noThemeToggle && <ThemeToggleDropdownMenu align="end" />}
      </div>
    </footer>
  );
}
