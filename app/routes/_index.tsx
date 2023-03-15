import { ButtonAnchor, ButtonLink, LandingImage, Layout } from "~/components";
import { configSite } from "~/configs";
import { Github, Svg3DSelectFace } from "~/icons";
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
        <div className="max-w-2xl space-y-4">
          <div className="prose-config sm:prose-xl">
            <h1>Super Duper Gallery, a Remix Stack </h1>
            <p>👋 Hey, it's just another web app starter kit.</p>
            <p>
              💿 Super Duper Gallery is a Remix Tailwind Stack with Tailwind CSS family of
              libraries, React components, and the JavaScript/TypeScript/Node.js
              ecosystem. Including other tech stack such as React, Headless UI,
              Radix UI, Prisma ORM, PlanetScale, Vercel, and more.
            </p>
          </div>
          <div className="stack-h">
            <ButtonLink to="/examples" size="lg">
              <Svg3DSelectFace />
              <span>Examples</span>
            </ButtonLink>
            <ButtonAnchor
              href={configSite?.links.github}
              size="lg"
              variant="outline"
            >
              <Github />
              <span>GitHub</span>
            </ButtonAnchor>
          </div>
        </div>

        <aside>
          <LandingImage />
        </aside>
      </section>
    </Layout>
  );
}
