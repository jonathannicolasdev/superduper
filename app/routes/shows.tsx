import type { LinksFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Layout, PageHeader } from "~/components";
import { prisma } from "~/libs";
import { createDocumentLinks, createMetaData, createSitemap } from "~/utils";

export const meta = createMetaData({
  title: "Exhibitions",
  description: "Some description.",
});

export const handle = createSitemap("/exhibitions", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/exhibitions" });
};

export async function loader() {
  const exhibitions = await prisma.exhibition.findMany({
    include: {
      images: true,
    },
  });
  return json({ exhibitions });
}
sdfihsiudhf
export default function ShowsRoute() {
  const { exhibitions } = useLoaderData<typeof loader>();
  return (
    <Layout
      isSpaced
      pageHeader={
        <PageHeader size="sm" isTextCentered>
          <h2>Exhibitions</h2>
        </PageHeader>
      }
    >
      <p>{JSON.stringify(exhibitions)}</p>
    </Layout>
  );
}
