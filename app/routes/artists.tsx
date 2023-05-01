import { json, LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Layout, PageHeader } from "~/components";
import { prisma } from "~/libs";
import { createDocumentLinks, createMetaData, createSitemap } from "~/utils";

export const meta = createMetaData({
  title: "Artists",
  description: "Some description.",
});

export const handle = createSitemap("/artists", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/artists" });
};

export async function loader() {
  const artists = await prisma.artist.findMany({
    include: {
      artworks: true,
    },
  });
  return json({ artists });
}

export default function ArtistsRoute() {
  const { artists } = useLoaderData<typeof loader>();


  return (
    <Layout
      isSpaced
      pageHeader={
        <PageHeader size="sm" isTextCentered>
          <h2>Artists</h2>
        </PageHeader>
      }
    >
      <pre>{JSON.stringify(artists, null, 2)}</pre>
    </Layout>
  );
}
