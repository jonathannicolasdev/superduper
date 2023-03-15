import type { LinksFunction } from "@remix-run/node";

import { Layout, PageHeader } from "~/components";
import { createDocumentLinks, createMetaData, createSitemap } from "~/utils";

export const meta = createMetaData({
  title: "Artworks",
  description: "Some description.",
});

export const handle = createSitemap("/artworks", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/artworks" });
};

export default function ArtworksRoute() {
  return (
    <Layout
      isSpaced
      pageHeader={
        <PageHeader size="sm" isTextCentered>
          <h2>Artworks</h2>
        </PageHeader>
      }
    >
      <p>Change something here.</p>
    </Layout>
  );
}
