import { Link } from "@remix-run/react";
import { configSite } from "~/configs";

export function SiteHeaderNew() {
  return (
    <header className="p-4">
      <div className="flex border-2 border-white flex-wrap">
        <div className="border-r-4 border-white">
          <Link to="/" className="flex gap-2">
            <img
              src="/assets/images/logo.jpg"
              alt="Super Duper Gallery"
              className="h-32 w-32"
            />
            <span className="flex flex-col gap-1 text-2xl font-bold uppercase">
              <span>Super</span>
              <span>Duper</span>
              <span>Gallery</span>
            </span>
          </Link>
        </div>

        <div>
          <p>Contemporary Art Gallery based in 🇵🇭 QC, Philippines</p>
        </div>

        <nav className="border-l-4 border-white">
          <ul>
            {configSite?.mainNavItems.map((navItem) => {
              return (
                <li key={navItem.to}>
                  <Link to={navItem.to} className="font-bold">
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
