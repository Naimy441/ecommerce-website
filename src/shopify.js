import { createClient } from '@shopify/storefront-api-graphql';

const client = createClient({
  domain: 'YOUR_STORE_NAME.myshopify.com',
  storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN',
});

export default client;
