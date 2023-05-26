import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { notFound } from "remix-utils";

import { Balancer, Layout, RemixLink } from "~/components";
import { cn, createSitemap, formatYearOnly, invariant } from "~/utils";
import { prisma } from "~/libs";

import type { LoaderArgs } from "@remix-run/node";

export const handle = createSitemap();

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.artistSlug, `artistSlug not found`);

  const slug = params.artistSlug;

  const artist = await prisma.artist.findFirst({
    where: { slug },
    include: {
      image: true,
      artworks: true
    }
  });

  if (!artist) {
    throw notFound("Artist not found");
  }

  return json({ artist });
}

export default function Route() {
  const { artist } = useLoaderData<typeof loader>();
  const imageUrl = artist?.image?.url && `${artist?.image?.url}/-/scale_crop/100x100/center/`

  return (
    <Layout isSpaced>
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <article
            className={cn(
              "mt-10 flex flex-wrap gap-4 whitespace-pre-wrap sm:gap-8",
              "flex-col lg:flex-row"
            )}
          >
            <div className="flex gap-4">
              {imageUrl && <img
                src={imageUrl}
                alt={artist.name}
                className="object-contain rounded-full"
              />}
              <div>
                <h3>
                  {artist.name}
                </h3>
                <p>
                  {artist.bio}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
