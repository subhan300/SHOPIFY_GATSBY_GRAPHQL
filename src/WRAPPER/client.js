
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch'

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://hellofresh123.myshopify.com/api/graphql",
        fetch,
        headers: {
            "X-Shopify-Storefront-Access-Token": "265f87bc3c4875e33557d7f6aedecf8a"
        }
    }),
    cache: new InMemoryCache()
})