import { json, LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Layout, PageHeader, RemixLink } from "~/components";
import { prisma } from "~/libs";
import { createDocumentLinks, createMetaData, createSitemap } from "~/utils";

export const meta = createMetaData({
  title: "Artists",
  description: "Selected artists in Super Duper Gallery.",
});

export const handle = createSitemap("/artists", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/artists" });
};

export async function loader() {
  const artists = await prisma.artist.findMany({
    include: {
      image: true,
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
          <h2>All Artists</h2>
        </PageHeader>
      }
    >
      <ul>
        {artists.map((artist) => {
          const imageUrl = artist?.image?.url && `${artist?.image?.url}/-/scale_crop/400x200/center/`

          return <li key={artist.id}>
            <RemixLink to={`/artists/${artist.slug}`}>
              {imageUrl && <img alt={artist.name} src={imageUrl} />}
              <h3>{artist.name}</h3>
            </RemixLink>
          </li>
        })}
      </ul>
    </Layout>
  );
}
