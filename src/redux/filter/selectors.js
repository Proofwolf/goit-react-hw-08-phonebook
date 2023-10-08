import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilter = state => state.filter.filter;

//Створимо селектор для отримання відфільтрованих контактів. Так наш код в компоненті contactsList буде чистіший, а селектор створений за допомогою createSelector буде мемоізований, тобто який перераховує contacts, коли змінюється значення state.contacts або state.filter, але не тоді, коли зміни відбуваються в інших (незалежних) частинах дерева.

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
