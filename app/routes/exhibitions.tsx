import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Layout, PageHeader, RemixLink } from "~/components";
import { prisma } from "~/libs";
import { createDocumentLinks, createMetaData, createSitemap } from "~/utils";

export const meta = createMetaData({
  title: "Exhibitions",
  description: "Some description.",
});

export const handle = createSitemap("/exhibitions", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/exhibitions" });
};
export async function loader() {
  const exhibitions = await prisma.exhibition.findMany({
    include: {
      images: true,
    },
  });
  return json({ exhibitions });
}

export default function ExhibitionsRoute() {
  const { exhibitions } = useLoaderData<typeof loader>();
  return (
    <Layout
      isSpaced
      pageHeader={
        <PageHeader size="sm" isTextCentered>
          <h2>Exhibitions</h2>
        </PageHeader>
      }
    >
      <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
        {exhibitions.map((exhibition) => {
          return (
            <li key={exhibition.id} className="max-w-[200px] space-y-2">
              <RemixLink to={`/exhibitions/${exhibition?.slug}`}>
                {exhibition?.images?.length > 0 && (
                  <img src={exhibition?.images[0].url} alt={exhibition.title} />
                )}
                <h3>{exhibition.title}</h3>
                <time>{exhibition.date}</time>
              </RemixLink>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
