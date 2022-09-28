// import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
// export const selectIsLoading = state => state.contacts.isLoading;

// export const selectFilterContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     console.log('here');
//     const filterNormalize = filter.toLowerCase();

//     return contacts.filter(user =>
//       user.name.toLowerCase().includes(filterNormalize)
//     );
//   }
// );
