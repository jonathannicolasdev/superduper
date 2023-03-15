import { ButtonAnchor, ButtonLink, Layout } from "~/components";
import { configSite } from "~/configs";
import { Artworks, Instagram } from "~/icons";
import { createDocumentLinks, createSitemap } from "~/utils";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/" });
};

export const handle = createSitemap("/", 1);

export default function IndexRoute() {
  return (
    <Layout>
      <section
        data-id="landing-hero"
        className="mx-auto flex max-w-max flex-wrap items-center justify-center gap-4 py-10 lg:justify-between lg:py-20"
      >
        <div className="max-w-2xl space-y-4 text-center">
          <div className="prose-config sm:prose-xl">
            <h1>Super Duper Gallery</h1>
            <p>Super Duper Gallery Offers a Portal Further Beyond</p>
            <p>Contemporary Art Gallery based in 🇵🇭 QC, Philippines</p>
          </div>
          <div className="stack justify-center">
            <ButtonLink to="/artworks" size="lg">
              <Artworks />
              <span>Artworks</span>
            </ButtonLink>
            <ButtonAnchor
              href={configSite?.links.instagram}
              size="lg"
              variant="outline"
            >
              <Instagram />
              <span>Instagram</span>
            </ButtonAnchor>
          </div>
        </div>
      </section>
    </Layout>
  );
}
