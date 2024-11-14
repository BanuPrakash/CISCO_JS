// RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => `products`,
      }),
      getProductById: builder.query({
        query: (id) => `products/${id}`,
      })
    }),
  })

  export const {useGetProductsQuery, useGetProductByIdQuery} = productApi