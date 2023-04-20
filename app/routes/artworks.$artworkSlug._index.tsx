import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { notFound } from "remix-utils";

import { Balancer, Layout } from "~/components";
import { cn, createSitemap, formatDateOnly, invariant } from "~/utils";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/libs";

export const handle = createSitemap();

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.artworkSlug, `artworkSlug not found`);

  const slug = params.artworkSlug;

  const artwork = await prisma.artwork.findFirst({
    where: { slug },
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

            <div className="prose-config">
              <h1>
                <Balancer>{artwork.title}</Balancer>
              </h1>
              <time>{formatDateOnly(artwork.date)}</time>
              <p>Medium: {artwork.medium}</p>
              <p>Size: {artwork.size}</p>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
