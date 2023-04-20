import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { notFound } from "remix-utils";

import { Balancer, Layout } from "~/components";
import { createSitemap, formatDateOnly, invariant } from "~/utils";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/libs";

export const handle = createSitemap();

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.artworkSlug, `artworkSlug not found`);

  const slug = params.artworkSlug

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
        <div className="max-w-4xl w-full">
          <article className="prose-config mt-10 whitespace-pre-wrap">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt={artwork.title}
            />

            <h1>
              <Balancer>{artwork.title}</Balancer>
            </h1>

            <time>{formatDateOnly(artwork.date)}</time>

            <p>Medium: {artwork.medium}</p>

            <p>Size: {artwork.size}</p>
          </article>
        </div>
      </div>
    </Layout>
  );
}
