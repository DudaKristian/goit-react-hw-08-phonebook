import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

const TAG_CONTACTS = "Contacts";

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fe47e641165d66bfbcab41.mockapi.io/api/v1' }),
    tagTypes: [TAG_CONTACTS],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: [TAG_CONTACTS]
        }),
        // filterContactsByName: builder.query({
        //     query: id => `/contacts/${id}`,
        //     providesTags: [TAG_CONTACTS]
        // }),
        addContact: builder.mutation({
            query: contact => ({
                url: "/contacts",
                method: "POST",
                body: contact
            }),
            invalidatesTags: [TAG_CONTACTS],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [TAG_CONTACTS],
        })
    }),
})

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
    // useFilterContactsByNameQuery
} = contactsApi