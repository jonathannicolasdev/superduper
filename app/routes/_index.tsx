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
  const currentDate = new Date();
  const latestExhibition = await prisma.exhibition.findFirst({
    include: {
      images: true,
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
    where: {
      date: {
        lt: currentDate,
      },
    },
  });
  if (!latestExhibition) {
    throw notFound("Exhibition not found");
  }
  const upcomingExhibitions = await prisma.exhibition.findMany({
    include: {
      images: true,
    },
    orderBy: {
      date: "desc",
    },
    where: {
      date: {
        gte: currentDate,
      },
    },
  });
  return json({ latestExhibition, upcomingExhibitions });
}

export default function IndexRoute() {
  const { latestExhibition, upcomingExhibitions } =
    useLoaderData<typeof loader>();
  return (
    <Layout>
      <section
        data-id="landing-hero"
        className="mx-auto flex max-w-max flex-wrap items-center justify-center gap-4 space-y-10 py-10 lg:justify-between lg:py-20"
      >
        <div className="w-full space-y-4 text-center">
          <h1>Super Duper Gallery</h1>
          <p>Super Duper Gallery Offers a Portal Further Beyond</p>
          <p>Contemporary Art Gallery based in 🇵🇭 QC, Philippines</p>
        </div>

        <div className="space-y-4 text-center">
          <h2>{latestExhibition.title}</h2>
          {latestExhibition?.date && (
            <time>{formatDateOnly(latestExhibition?.date)}</time>
          )}
          {latestExhibition.artworks.length <= 0 && (
            <img
              src={latestExhibition.images[0].url}
              alt={latestExhibition.title}
              className="w-60"
            />
          )}
          <ul className="flex flex-wrap items-center justify-between gap-4 sm:gap-5">
            {latestExhibition.artworks.map((artwork) => (
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
      <section className="space-y-4">
        <h2>Upcoming Exhibitions</h2>

        {upcomingExhibitions.length <= 0 && (
          <p>Sorry there is no upcoming exhibitions</p>
        )}
        <ul>
          {upcomingExhibitions.map((exhibition) => {
            return (
              <li key={exhibition.id}>
                <h4>{exhibition.title}</h4>
                <img
                  src={exhibition.images[0].url}
                  alt={exhibition.title}
                  className="w-60"
                />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
