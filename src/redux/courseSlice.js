import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: "course",
    initialState: {
        modalIsOpen : false
    },
    reducers: {
        closeModal: (state) => {
            state.modalIsOpen = false
        },

        openModal: (state) => {
            state.modalIsOpen = true
        }
    }
})

export const {openModal, closeModal} = courseSlice.actions;
export default courseSlice.reducer;