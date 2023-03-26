import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Layout, PageHeader } from "~/components";
import { prisma } from "~/libs";
import { createDocumentLinks, createMetaData, createSitemap } from "~/utils";

export const meta = createMetaData({
  title: "Artworks",
  description: "Some description.",
});

export const handle = createSitemap("/artworks", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/artworks" });
};

export async function loader() {
  const artworks = await prisma.artwork.findMany();
  return json({ artworks });
}

export default function ArtworksRoute() {
  const { artworks } = useLoaderData<typeof loader>();

  return (
    <Layout
      isSpaced
      pageHeader={
        <PageHeader size="sm" isTextCentered>
          <h2>Artworks</h2>
        </PageHeader>
      }
    >
      <p>Change something here.</p>
      <pre>{JSON.stringify(artworks, null, 2)}</pre>
    </Layout>
  );
}
