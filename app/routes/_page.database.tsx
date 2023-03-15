import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Debug, Layout, PageHeader } from "~/components";
import { adminNote } from "~/models";
import { createMetaData, createSitemap, sleep } from "~/utils";

export const handle = createSitemap();

export const meta = createMetaData({
  title: "Database",
  description: "Data loading example.",
});

export async function loader() {
  await sleep(100);
  const notes = await adminNote.getAllNotes();
  return json({ notes });
}

export default function DatabaseRoute() {
  const { notes } = useLoaderData<typeof loader>();

  return (
    <Layout
      isSpaced
      pageHeader={
        <PageHeader>
          <h2>Database</h2>
          <p>To check database connection.</p>
        </PageHeader>
      }
    >
      <section>
        <Debug name="notes">{notes}</Debug>
      </section>
    </Layout>
  );
}
