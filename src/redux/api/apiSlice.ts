import { GetCookie } from "@/hooks/getCurrentUser";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api: any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/api/v1",
    prepareHeaders: (headers) => {
      const token = GetCookie();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json"); // Adjust headers as needed
      return headers;
    },
  }),

  endpoints: (build) => ({
    getAllWatches: build.query({
      query: () => "/watches",
    }),

    getRecentWatches: build.query({
      query: () => "/watches/recent",
    }),

    getSingleWatch: build.query({
      query: (id) => ({ url: `/watches/${id}`, method: "GET" }),
    }),

    getWatchComments: build.query({
      query: (id) => `/comment/${id}`,
    }),

    postAComment: build.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
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

    getCurrentUser: build.query({
      query: () => ({
        url: "/users/current-user",
        method: "GET",
      }),
    }),
    fetchCurrentUser: build.query({
      query: () => "/users/current-user",
    }),
  }),
});

export const {
  useGetAllWatchesQuery,
  useGetRecentWatchesQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetSingleWatchQuery,
  usePostACommentMutation,
  useGetWatchCommentsQuery,
  useGetCurrentUserQuery,
  useFetchCurrentUserQuery,
} = api;
