
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath:'postsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3001'}),
    tagTypes:['Post'],
    endpoints: (build) => ({
        getPosts : build.query({
            query : () => '/posts',
            providesTags: (results, error, args) => 
                results ? [ ...results.map(({id}) => ({type:'Post',id}) ), {type:'Post',id:'LIST'}] : [{type:'Post',id:'LIST'}]
        }),
        addPost:build.mutation({
            query: (body) =>({
                url:'/posts',
                method:'POST',
                body
            }),
            invalidatesTags:[{type:'Post',id:'LIST'}]
        }),
        getPost:build.query({
           query: (id) => `/posts/${id}`,
           providesTags: (result, error, arg) => [{type:'Post',id:arg}] 
        }),
        updatePost : build.mutation({
            query: ({id,...patch}) => ({
                url:`/posts/${id}`,
                method:'PUT',
                body:patch  
            }),
            invalidatesTags: (result,error,{id}) => [{type:'Post',id}]
        }),
        deletePost : build.mutation({
            query: (id) => ({
                url:`/posts/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: (results, errors, id) => [{type:'Post',id}]
        })
    })
});

export const { 
    useGetPostQuery,
    useGetPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postsApi;