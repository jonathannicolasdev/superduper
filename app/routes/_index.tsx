import { ButtonAnchor, ButtonLink, Layout, RemixLink } from "~/components";
import { configSite } from "~/configs";
import { Artworks, Instagram } from "~/icons";
import { createDocumentLinks, createSitemap, formatDateOnly } from "~/utils";

import { json, type LinksFunction } from "@remix-run/node";
import { prisma } from "~/libs";
import { notFound } from "remix-utils";
import { useLoaderData } from "@remix-run/react";

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/" });
};

export const handle = createSitemap("/", 1);

export async function loader() {
  const exhibition = await prisma.exhibition.findFirst({
    include: {
      artworks: {
        include: {
          images: true,
          artist: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
  });
  if (!exhibition) {
    throw notFound("Exhibition not found");
  }
  return json({ exhibition });
}

export default function IndexRoute() {
  const { exhibition } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <section
        data-id="landing-hero"
        className="mx-auto flex max-w-max flex-wrap items-center justify-center gap-4 py-10 lg:justify-between lg:py-20"
      >
        <div className="space-y-4 text-center">
          <div className="prose-config sm:prose-xl">
            <h1>Super Duper Gallery</h1>
            <p>Super Duper Gallery Offers a Portal Further Beyond</p>
            <p>Contemporary Art Gallery based in 🇵🇭 QC, Philippines</p>
          </div>
          <h2>{exhibition.title}</h2>
          <ul className="flex flex-wrap items-center justify-between gap-4 sm:gap-5">
            {exhibition.artworks.map((artwork) => (
              <li key={artwork.id} className="max-w-sm space-y-2">
                <RemixLink to={`/artworks/${artwork?.slug}`}>
                  {artwork?.images?.length > 0 && (
                    <img src={artwork?.images[0]?.url} alt={artwork.title} />
                  )}
                  <h3>{artwork.title}</h3>
                  {artwork.artist?.name && <h4>{artwork.artist.name}</h4>}
                  <time>{artwork.year}</time>
                </RemixLink>
              </li>
            ))}
          </ul>

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
