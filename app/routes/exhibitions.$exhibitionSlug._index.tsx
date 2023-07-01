import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { notFound } from "remix-utils";

import { Layout } from "~/components";
import { cn, createSitemap, invariant } from "~/utils";

import type { LoaderArgs } from "@remix-run/node";
import { prisma } from "~/libs";

export const handle = createSitemap();

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.exhibitionSlug, `exhibitionSlug not found`);

  const slug = params.exhibitionSlug;

  const exhibition = await prisma.exhibition.findFirst({
    where: { slug },
    include: {
      images: true,
      artists: true,
      artworks: true,
    },
  });

  if (!exhibition) {
    throw notFound("Exhibition not found");
  }

  return json({ exhibition });
}

export default function Route() {
  const { exhibition } = useLoaderData<typeof loader>();

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
            {exhibition?.images?.length > 0 && (
              <img
                src={exhibition?.images[0]?.url}
                alt={exhibition.title}
                className="max-w-2xl object-contain"
              />
            )}
            <h1>{exhibition.title}</h1>
          </article>
        </div>
      </div>
    </Layout>
  );
}
