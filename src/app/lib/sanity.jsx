import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "chnql1bt",
  dataset: "production",
  apiVersion: "2024-03-25",
  useCdn: true,
});

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
  return builder.image(source);
}
