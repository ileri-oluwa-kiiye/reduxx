import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productApi= createApi({
    reducerPath : "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints : (builder)=>{
        getAllProducts: builder.query({
            query:()=> "products"
        })
    }
})

export const { useGetAllProductsQuery } = productApi