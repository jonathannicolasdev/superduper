/* eslint-disable tailwindcss/no-arbitrary-value */
import { Link } from "@remix-run/react";
import { configSite } from "~/configs";

export function SiteHeaderNew() {
  return (
    <header className="p-4">
      <div className="flex flex-wrap justify-between border-4 border-white md:flex-nowrap">
        <div className="border-r-4 border-white p-2">
          <Link to="/" className="flex gap-2">
            <img
              src="/assets/images/logo.jpg"
              alt="Super Duper Gallery"
              className="h-32 w-32"
            />
            <span className="flex flex-col justify-center gap-1 text-2xl font-bold uppercase">
              <span>Super</span>
              <span>Duper</span>
              <span>Gallery</span>
            </span>
          </Link>
        </div>

        <div className="flex w-full max-w-[250px] items-center justify-center p-2">
          <p>Contemporary Art Gallery based in 🇵🇭 QC, Philippines</p>
        </div>

        <nav className="flex w-full items-center justify-center border-t-4 border-white px-10 py-4 sm:border-l-4">
          <ul className="flex flex-wrap gap-4">
            {configSite?.mainNavItems.map((navItem) => {
              return (
                <li key={navItem.to}>
                  <Link
                    to={navItem.to}
                    className="border-b-4 border-b-surface-900 pb-2 text-lg font-bold uppercase hover:border-b-4 hover:border-b-red-600"
                  >
                    {navItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
