import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateProductRequest, Product } from "../types/Product";



export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SERVER_URL    // import enviornment variable in Vite
    }),
    tagTypes: ['Products'],     // list of categories for the data in these queries to be stored in the cache
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/',
            providesTags: ['Products']      // adds products retrieved to the Products tag in the cache
        }),
        createProduct: builder.mutation<Product, CreateProductRequest>({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body
            }),
            invalidatesTags: ["Products"]   // tells the cache that the 'Products' tag is now invalidated
        })
    })
});

export const {useGetProductsQuery, useCreateProductMutation} = productApi;