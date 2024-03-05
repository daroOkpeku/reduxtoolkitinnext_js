import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// import build from "next/dist/build"



export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:"https://dabarmedia.com/",
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers;
      },
}),
    
    // endpoints:(builder)=>({
    //     getData: builder.query({
    //         query:()=>"data"
    //     }),
    //     postData: builder.mutation({
    //         query:(data)=>({
    //             url:'data',
    //             method:"POST",
    //             body:data
    //         })
    //     })
    // })

    endpoints: (builder) => ({
        authenticateUser: builder.mutation({
          query: (userData) => ({
            url: 'api/admin_login',
            method: 'POST',
            body: userData,
          }),
        }),
      }),
})


export const {useAuthenticateUserMutation } = api