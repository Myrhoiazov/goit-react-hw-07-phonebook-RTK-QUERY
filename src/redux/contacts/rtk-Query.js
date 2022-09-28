import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'rtk-contact',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6331b618cff0e7bf70f4d88e.mockapi.io/contacts',
  }),

  tagTypes: ['Contact'],

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({ url: `` }),
      providesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: ``,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useGetAllContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactApi;
