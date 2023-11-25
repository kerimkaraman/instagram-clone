import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isCommentOpened: false,
    isShareOpened: false,
  },
  reducers: {
    toggleCommentModal: (state) => {
      state.isCommentOpened = !state.isCommentOpened;
    },
    toggleShareModal: (state) => {
      state.isShareOpened = !state.isShareOpened;
    },
  },
});

export const { toggleCommentModal, toggleShareModal } = modalSlice.actions;
export default modalSlice.reducer;
