import { createClient } from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: "3glkq9kp",
  dataset: 'production',
  apiVersion: '2025-11-10',
  useCdn: false,
});

const builder = imgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;



