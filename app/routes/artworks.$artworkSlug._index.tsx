import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { notFound } from "remix-utils";

import { Balancer, Layout, RemixLink } from "~/components";
import { cn, createSitemap, formatYearOnly, invariant } from "~/utils";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/libs";

export const handle = createSitemap();

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.artworkSlug, `artworkSlug not found`);

  const slug = params.artworkSlug;

  const artwork = await prisma.artwork.findFirst({
    where: { slug },
    include: {
      artist: true
    }
  });

  if (!artwork) {
    throw notFound("Artwork not found");
  }

  return json({ artwork });
}

/**
 * Similar with /$username/$noteSlug but simpler
 * And might not for public use
 */
export default function Route() {
  const { artwork } = useLoaderData<typeof loader>();

  return (
    <Layout isSpaced>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <article
            className={cn(
              "mt-10 flex flex-wrap gap-4 whitespace-pre-wrap sm:gap-8",
              "flex-col lg:flex-row"
            )}
          >
            <img
              src="https://picsum.photos/seed/picsum/500/600"
              alt={artwork.title}
              className="object-contain"
            />

            <aside className="space-y-8">
              <div>
                {artwork.artist && <RemixLink to={`/artists/${artwork.artist.slug}`} className="hover:underline">
                  <span className="text-3xl">{artwork.artist.name}</span>
                </RemixLink>}
                <h1 className="text-3xl text-surface-400">
                  <Balancer><i>{artwork.title}</i>,  <time>{formatYearOnly(artwork.date)}</time></Balancer>
                </h1>
              </div>

              <div className="space-y-1">
                <p>{artwork.medium}</p>
                <p>{artwork.size}</p>
              </div>
            </aside>
          </article>
        </div>
      </div>
    </Layout>
  );
}
