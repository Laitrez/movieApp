import { createSlice } from "@reduxjs/toolkit";

export const searchBarReducer = createSlice({
    name: 'search',
    initialState: {
        value: ''
    },
    reducers: {
        set: (state, { payload }) => {
            state.value = payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { set } = searchBarReducer.actions

export default searchBarReducer.reducer