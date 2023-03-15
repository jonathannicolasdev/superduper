import type { LinksFunction } from "@remix-run/node";

import { Layout, PageHeader } from "~/components";
import { createDocumentLinks, createMetaData, createSitemap } from "~/utils";

export const meta = createMetaData({
  title: "Shows",
  description: "Some description.",
});

export const handle = createSitemap("/shows", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/shows" });
};

export default function ShowsRoute() {
  return (
    <Layout
      isSpaced
      pageHeader={
        <PageHeader size="sm" isTextCentered>
          <h2>Shows</h2>
        </PageHeader>
      }
    >
      <p>Change something here.</p>
    </Layout>
  );
}
