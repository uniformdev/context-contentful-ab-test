import { createClient } from "contentful";

export const contentfulClient = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID!,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
});