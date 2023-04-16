import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ButtonLink, Layout, PageHeader } from "~/components";
import { prisma } from "~/libs";
import {
  createDocumentLinks,
  createMetaData,
  createSitemap,
  formatDateOnly,
} from "~/utils";

export const meta = createMetaData({
  title: "Artworks",
  description: "Some description.",
});

export const handle = createSitemap("/artworks", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/artworks" });
};

export async function loader() {
  const artworks = await prisma.artwork.findMany({
    include: {
      artist: true,
    },
  });
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
      <ul>
        {artworks.map((artwork) => {
          return (
            <li key={artwork.id} className="space-y-2 max-w-[200px]">
              <h3>{artwork.title}</h3>
              {artwork.artist?.name && <h4>{artwork.artist.name}</h4>}
              <time>{formatDateOnly(artwork.date)}</time>
              <ButtonLink
                to={`/artworks/${artwork.id}`}
                variant="outline"
                className="after:content-['_↗']"
              >
                Details
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
