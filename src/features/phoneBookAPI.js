import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

const TAG_CONTACTS = "Contacts";
const TAG_USER = "User";

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
        const { token = '' } = getState().user;
        headers.set('Authorization', token);
        return headers;
    },
}),
    tagTypes: [TAG_CONTACTS, TAG_USER],
    endpoints: (builder) => ({
        
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
        getCurrentUser: builder.query({
            query: () => "/users/current", 
        }),
        getLogout: builder.mutation({
            query: payload => ({
                url: `/users/logout`,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: [TAG_CONTACTS],
        }),
        createContact: builder.mutation({
            query: newContact => ({
                url: `/contacts`,
                 method: 'POST',
                body: newContact,
              }),
        invalidatesTags: [TAG_CONTACTS],
        }),
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: [TAG_CONTACTS]
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
    useGetContactsQuery,
    useGetCurrentUserQuery,
    useAddUserMutation,
    useLogInUserMutation,
    useGetLogoutMutation,
    useCreateContactMutation,
    // useDeleteContactMutation,
    // useFilterContactsByNameQuery
} = contactsApi