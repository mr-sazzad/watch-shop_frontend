import { GetCookie } from "@/hooks/getCurrentUser";
import { IWatch } from "@/types";
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
  tagTypes: ["users", "products", "comments"],

  endpoints: (build) => ({
    getAllWatches: build.query({
      query: () => "/watches",
      providesTags: ["products"],
    }),

    getRecentWatches: build.query({
      query: () => "/watches/recent",
      providesTags: ["products"],
    }),

    getSingleWatch: build.query({
      query: (id) => ({ url: `/watches/${id}`, method: "GET" }),
      providesTags: ["products"],
    }),

    getWatchComments: build.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),

    postAComment: build.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    createUser: build.mutation({
      query: (data) => ({
        url: "/users/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    loginUser: build.mutation({
      query: (data) => ({
        url: "/users/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    fetchCurrentUser: build.query({
      query: () => "/users/current-user",
      providesTags: ["users"],
    }),

    addToCart: build.mutation<{ id: string; data: IWatch }, any>({
      query: ({ userId, data }) => ({
        url: "/users/cart",
        method: "PATCH",
        body: { id: userId, data },
      }),
    }),

    getCartProducts: build.query({
      query: () => ({
        url: "/users/cart",
        method: "GET",
      }),
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
  useAddToCartMutation,
  useGetCartProductQuery,
} = api;
