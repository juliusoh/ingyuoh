import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: process.env.REACT_APP_PROJECT_ID,
    dataset: "production",
    apiVersion: '2021-11-16',
    token: process.env.REACT_APP_SANITY_TOKEN,
    useCdn: false
})