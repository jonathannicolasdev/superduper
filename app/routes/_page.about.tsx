import {
  Layout,
  Image,
  VideoYouTube,
  AspectRatio,
  Balancer,
} from "~/components";
import { createSitemap, createMetaData, createDocumentLinks } from "~/utils";

import type { LinksFunction } from "@remix-run/node";

export const meta = createMetaData({
  title: "About",
  description:
    "Just some quick info about this project and showcase some of the features.",
});

export const handle = createSitemap("/about", 0.9);

export const links: LinksFunction = () => {
  return createDocumentLinks({ canonicalPath: "/about" });
};

export default function AboutRoute() {
  return (
    <Layout className="space-y-20">
      <article data-id="about-content" className="prose-config mx-auto mt-10">
        <h1>
          <Balancer>About Super Duper Gallery</Balancer>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod
          praesentium esse ipsa nam provident blanditiis! Eos nostrum ipsum
          quidem doloremque, sapiente dolores omnis dolore, veritatis sit quasi
          minima facere.
        </p>
        <figure>
          <Image
            src="https://superdupergallery.com/images/cover.jpeg"
            alt="Our Art Gallery"
            width={1440}
            height={600}
            className="rounded"
          />
          <figcaption>Our Art Gallery</figcaption>
        </figure>
        <h2>Heading Two</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          necessitatibus maxime. Tenetur repudiandae et soluta quas nihil ut
          delectus porro rerum tempora, cumque vero, reprehenderit, fugit
          eligendi minus mollitia sint.
        </p>
        <AspectRatio ratio={16 / 9}>
          <VideoYouTube
            title="Super Duper Gallery Tour"
            youtubeEmbedId={"aoFmFdMeyVM"}
          />
        </AspectRatio>
        <h3>Heading Three</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          necessitatibus maxime. Tenetur repudiandae et soluta quas nihil ut
          delectus porro rerum tempora, cumque vero, reprehenderit, fugit
          eligendi minus mollitia sint.
        </p>
        <h4>Heading Four</h4>
        <p>Here are some foods.</p>
        <ol>
          <li>Apple </li>
          <li>Banana</li>
          <ul>
            <li>Coconut</li>
            <li>Dragonfruit</li>
          </ul>
          <li>
            Edamame <span>（枝豆）</span>
          </li>
          <li>Fig-ma</li>
          <ul>
            <li>Grape</li>
            <li>Honeydew</li>
          </ul>
          <li>
            Ichigo <span>（いちご）</span>
          </li>
          <li>Jackfruit</li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          necessitatibus maxime. Tenetur repudiandae et soluta quas nihil ut
          delectus porro rerum tempora, cumque vero, reprehenderit, fugit
          eligendi minus mollitia sint.
        </p>
      </article>
    </Layout>
  );
}
