import { createSlice } from '@reduxjs/toolkit';

//Початкове значення filter у redux-стейті
const initialState = {
  filter: '',
};

//Створюємо filterSlice
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions; // Експортуємо actions у зовнішній код
export const filterReducer = filterSlice.reducer; // Експортуємо filterReducer у зовнішній код
