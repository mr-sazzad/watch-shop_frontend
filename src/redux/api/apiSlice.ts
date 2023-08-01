import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/api/v1" }),
  endpoints: (build) => ({
    getAllWatches: build.query({
      query: () => "/watches",
    }),

    getRecentWatches: build.query({
      query: () => "/watches/recent",
    }),

    createUser: build.mutation({
      query: (data) => ({
        url: "/users/sign-up",
        method: "POST",
        body: data,
      }),
    }),

    loginUser: build.mutation({
      query: (data) => ({
        url: "/users/sign-in",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllWatchesQuery,
  useGetRecentWatchesQuery,
  useCreateUserMutation,
  useLoginUserMutation,
} = api;
