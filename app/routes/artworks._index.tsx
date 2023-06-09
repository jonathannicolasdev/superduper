import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import { ButtonLink, Layout, PageHeader, RemixLink } from "~/components";
import { prisma } from "~/libs";
import {
  createDocumentLinks,
  createMetaData,
  createSitemap,
  formatDateOnly,
} from "~/utils";

export const meta = createMetaData({
  title: "Artworks",
  description: "The best artworks by Super Duper Gallery.",
});

export const handle = createSitemap("/artworks", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/artworks" });
};

export async function loader() {
  const artworks = await prisma.artwork.findMany({
    include: {
      artist: true,
      images: true,
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
      <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
        {artworks.map((artwork) => {
          return (
            <li key={artwork.id} className="max-w-[200px] space-y-2">
              <RemixLink to={`/artworks/${artwork?.slug}`}>
                {artwork?.images?.length > 0 && (
                  <img src={artwork?.images[0]?.url} alt={artwork.title} />
                )}
                <h3>{artwork.title}</h3>
                {artwork.artist?.name && <h4>{artwork.artist.name}</h4>}
                <time>{artwork.year}</time>
              </RemixLink>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
