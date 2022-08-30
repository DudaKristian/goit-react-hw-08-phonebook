import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

const TAG_CONTACTS = "Contacts";

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/' }),
    tagTypes: [TAG_CONTACTS],
    endpoints: (builder) => ({
        // getContacts: builder.query({
        //     query: () => `/contacts`,
        //     providesTags: [TAG_CONTACTS]
        // }),
        addUser: builder.mutation({
            query: contact => ({
                url: "/users/signup",
                method: "POST",
                body: contact
            }),
            invalidatesTags: [TAG_CONTACTS],
        }),
        logInUser: builder.mutation({
            query: contact => ({
                url: "/users/login",
                method: "POST",
                body: contact
            }),
            invalidatesTags: [TAG_CONTACTS],
        }),
        // deleteContact: builder.mutation({
        //     query: id => ({
        //         url: `/contacts/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: [TAG_CONTACTS],
        // })
    }),
})

export const {
    // useGetContactsQuery,
    useAddUserMutation,
    useLogInUserMutation,
    // useDeleteContactMutation,
    // useFilterContactsByNameQuery
} = contactsApi