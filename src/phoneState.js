import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
  name: 'phones',
  initialState: {
    phones: [],
    isLoading: false
  },
  reducers: {
    getPhonesFetch: (state) => {
      state.isLoading = true;
    },
    getPhonesSuccess: (state, action) => {
      state.phones = action.payload;
      state.isLoading = false;
    },
    getPhonesFailure: (state) => {
      state.isLoading = false;
    }
  }
});

export const { getPhonesFetch, getPhonesSuccess, getPhonesFailure } =
  phoneSlice.actions;

export default phoneSlice.reducer;
