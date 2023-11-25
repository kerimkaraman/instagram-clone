import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpened: false,
  },

  reducers: {
    toggleModal: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
