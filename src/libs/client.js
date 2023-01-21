import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "6llnus4vyw",
  apiKey: process.env.API_KEY,
})
