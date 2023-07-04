import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { notFound } from "remix-utils";

import { Layout, RemixLink } from "~/components";
import { cn, createSitemap, formatDateOnly, invariant } from "~/utils";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/libs";
import { Exhibitions } from "~/icons";

export const handle = createSitemap();

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.exhibitionSlug, `exhibitionSlug not found`);

  const slug = params.exhibitionSlug;

  const exhibition = await prisma.exhibition.findFirst({
    where: { slug },
    include: {
      images: true,
      artists: true,
      artworks: {
        include: {
          artist: true,
          images: true,
        },
      },
    },
  });

  if (!exhibition) {
    throw notFound("Exhibition not found");
  }

  return json({ exhibition });
}

export default function Route() {
  const { exhibition } = useLoaderData<typeof loader>();
  console.log(exhibition);
  return (
    <Layout isSpaced>
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <article className="my-10 space-y-20">
            <section className="flex gap-4">
              {exhibition?.images?.length > 0 && (
                <img
                  src={exhibition?.images[0]?.url}
                  alt={exhibition.title}
                  className="max-w-xs rounded object-contain"
                />
              )}
              <div className="space-y-4">
                <h1>{exhibition.title}</h1>
                <p>{exhibition.description}</p>
              </div>
            </section>
            <section>
              <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
                {exhibition.artworks.map((artwork) => {
                  return (
                    <li key={artwork.id} className="max-w-[200px] space-y-2">
                      <RemixLink
                        to={`/artworks/${artwork?.slug}`}
                        className="space-y-4"
                      >
                        {artwork?.images?.length > 0 && (
                          <img
                            src={artwork?.images[0]?.url}
                            alt={artwork.title}
                          />
                        )}
                        <div>
                          <h3>{artwork.title}</h3>
                          {artwork.artist?.name && (
                            <h4>{artwork.artist.name}</h4>
                          )}
                          <time>{artwork.year}</time>
                        </div>
                      </RemixLink>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  );
}
