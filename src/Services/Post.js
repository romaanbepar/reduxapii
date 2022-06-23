import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        console.log("id:", id);
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      }
    }),

    getByPostLimit:builder.query({
       query:(num) =>{
        console.log("numbber:", num);
        return {
          url: `posts?_limit=${num}`,
          method: "GET",
        };

       }
    }),

    deletePost:builder.mutation({
        query:(id) =>{
         console.log("idbber:", id);
         return {
           url: `posts/${id}`,
           method: "DELETE",
         };
 
        }
     }),




  }),
});

export const { useGetAllPostQuery, useGetPostByIdQuery ,useGetByPostLimitQuery,useDeletePostMutation} = postApi;
