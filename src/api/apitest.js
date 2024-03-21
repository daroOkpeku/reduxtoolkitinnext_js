import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:"https://dabarmedia.com/",
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers;
      },
}),
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